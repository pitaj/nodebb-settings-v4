var path = require('path');
var db = require.main.require('./src/database');
var plugins = require.main.require('./src/plugins');

var defaults = {
  autosave: false,
};
var dbKey = 'settings_v4:';

plugins.acpScripts.push(path.resolve(__dirname, './client.js'));

/**
 * @typedef {(Settings.types.Input|string)} Templateable
 */

/**
 * Create settings objects
 * @constructor
 * @param {string} name - Plugin name ex: 'mentions'
 * @param {Templateable[]} template - Array of inputs or HTML strings
 * @param {Object} defaultSettings - Default settings object to initialize database with
 * @param {Object} options - Configure how the settings page will work
 * @param {boolean} options.autosave - (`false`) Autosave the settings on change
 */
function Settings(name, template, defaultSettings, options) {
  options = Object.assign({}, defaults, options || {});

  this.defaultSettings = defaultSettings;
  this.template = template;
  this.options = options;
  this.name = name;

  this.arrayInputs = template.filter(function datatypeIsArray(el) {
    return el.datatype === Array;
  }).map(function getName(el) {
    return el.name;
  });

  this.template.forEach(function addId(el) {
    el.id = 'settings_v4-' + el.name;
  });
}

/**
 * Initialise the routes for the plugin ACP page
 * @param router - NodeBB router from `static:init` hook
 * @param middleware - NodeBB middleware from `static:init` hook
 */
Settings.prototype.controllers = function controllers(router, middleware) {
  var self = this;
  router.get('/admin/plugins/' + self.name, middleware.admin.buildHeader, self.render.bind(self));
  router.get('/api/admin/plugins/' + self.name, function returnObject(req, res) {
    res.render('admin/plugins/' + self.name, {});
  });
  router.get('/api/admin/plugins/' + self.name + '/save', function save(req, res, next) {
    var settings = req.query;
    self.setSettings(settings, next);
  });
};


/**
 * @param {function} callback
 * @returns {Object}
 */
Settings.prototype.getSettings = function getSettings(callback) {
  var self = this;
  db.getObject(dbKey + self.name, function cb(err, settings) {
    if (err) {
      callback(err);
      return;
    }
    self.arrayInputs.forEach(function parseArrays(name) {
      settings[name] = JSON.parse(settings[name]);
    });
    settings = Object.assign({}, settings, self.defaultSettings);

    callback(null, settings);
  });
};

/**
 * @param {string} key - Setting to retreive
 * @param {function} callback
 * @returns {Object}
 */
Settings.prototype.getSetting = function getSetting(key, callback) {
  var self = this;
  db.getObjectField(dbKey + self.name, key, function cb(err, value) {
    if (err) {
      callback(err);
      return;
    }
    if (self.arrayInputs.indexOf(key) >= 0) {
      value = JSON.parse(value);
    }
    value = value || self.defaultSettings[key];

    callback(null, value);
  });
};

/**
 * @param {Object} settings - Settings object to save
 * @param {function} callback
 */
Settings.prototype.setSettings = function setSettings(settings, callback) {
  this.arrayInputs.forEach(function parseArrays(name) {
    settings[name] = JSON.stringify(settings[name]);
  });
  db.setObject(dbKey + this.name, settings, callback);
};

/**
 * @param {string} key - Setting to save
 * @param value - Value to save
 * @param {function} callback
 */
Settings.prototype.setSetting = function setSetting(key, value, callback) {
  if (this.arrayInputs.indexOf(key) >= 0) {
    value = JSON.stringify(value);
  }
  db.setObjectField(dbKey + this.name, key, value, callback);
};

/**
 * @param {Object} data - Settings object, data for templates
 */
Settings.prototype.parse = function parse(data) {
  var button = this.options.autosave ? '' :
    '<button id="settings_v4-save" class="floating-button mdl-button mdl-js-button' +
      ' mdl-button--fab mdl-js-ripple-effect mdl-button--colored">' +
      '<i class="material-icons">save</i>' +
    '</button>';

  return '<form id="settings_v4-' + this.name + '" class="settings_v4"' +
    ' data-autosave="' + this.options.autosave + '" name="' + this.name + '"' +
    ' data-names="' + JSON.stringify(this.names) + '"' +
    ' data-arrayInputs="' + JSON.stringify(this.arrayInputs) + '">' +
    this.template.map(function run(el) {
      if (!el.template) {
        return el.toString();
      }
      return el.template(data[el.name]);
    }).join('') +
  '</form>' + button;
};

/**
 * @param req - HTTP request object
 * @param res - HTTP response object
 * @param {function} next - Callback for errors
 */
Settings.prototype.render = function render(req, res, next) {
  var self = this;
  self.getSettings(function cb(err, settings) {
    if (err) {
      next(err);
      return;
    }
    res.send(self.parse(settings));
  });
};

Settings.types = require('./types');

module.exports = Settings;
