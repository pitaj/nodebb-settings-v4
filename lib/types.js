var types = {};

/**
 * @namespace Settings.types
 */

/*  eslint-disable */

/**
 * Generic Type, basis of all settings types
 * @constructor
 * @abstract
 * @memberof Settings.types
 * @param {string} label - Label of the input
 * @param {string} name - Settings field key, `name` HTML attribute
 * @param {string} helpText - Help text to display below the field
 * @param {string} placeholder - Placeholder to display inside the field (if applicable)
 */
function Input(label, name, helpText, placeholder) {
  /** 
   * Label of the input
   * @instance 
   * */
  this.label = label;
  /** 
   * Settings field key, `name` HTML attribute
   * @instance 
   * */
  this.name = name;
  /** 
   * `id` HTML attribute, set by {@link Settings}
   * @instance
   * */
  this.id = '';
}
/** Datatype of the setting */
Input.prototype.datatype = null;
/** 
 * Function to generate the HTML of this element
 * @param value - Current value of setting
 * @returns {string}
 */
Input.prototype.template = function template(value) {};

/* eslint-enable */


/**
 * Normal checkbox with label to the right
 * @constructor
 * @implements {Settings.types.Input}
 * @memberof Settings.types
 * @param {string} label - Label of the input
 * @param {string} name - Settings field key, `name` HTML attribute
 * @param {string} helpText - Help text to display below the field
 */
function CheckBox(label, name, helpText) {
  this.label = label;
  this.name = name;
  this.helpText = helpText;
}
CheckBox.prototype.datatype = Boolean;
CheckBox.prototype.template = function template(value) {
  return '<div class="form-group">' +
    '<div class="checkbox">' +
      '<label>' +
        '<input type="checkbox" name="' + this.name + '" id="' + this.id + '"' +
          (value ? ' checked' : '') + '> ' +
        this.label +
      '</label>' +
    '</div>' +
    (this.helpText ? ('<p class="help-block">' + this.helpText + '</p>') : '') +
  '</div>';
};

types.CheckBox = CheckBox;

/**
 * Material design toggle with label to the right
 * @constructor
 * @implements {Settings.types.Input}
 * @memberof Settings.types
 * @param {string} label - Label of the input
 * @param {string} name - Settings field key, `name` HTML attribute
 * @param {string} helpText - Help text to display below the field
 */
function Toggle(label, name, helpText) {
  this.label = label;
  this.name = name;
  this.helpText = helpText;
}
Toggle.prototype.datatype = Boolean;
Toggle.prototype.template = function template(value) {
  return '<div class="form-group">' +
    '<div class="checkbox">' +
      '<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">' +
        '<input class="mdl-switch__input" type="checkbox" name="' + this.name + '"' +
          ' id="' + this.id + '" ' + (value ? 'checked' : '') + '>' +
        '<span class="mdl-switch__label"><strong>' + this.label + '</strong></span>' +
      '</label>' +
    '</div>' +
    (this.helpText ? ('<p class="help-block">' + this.helpText + '</p>') : '') +
  '</div>';
};

types.Toggle = Toggle;

/**
 * Normal text input
 * @constructor
 * @implements {Settings.types.Input}
 * @memberof Settings.types
 * @param {string} label - Label of the input
 * @param {string} name - Settings field key, `name` HTML attribute
 * @param {string} helpText - Help text to display below the field
 * @param {string} placeholder - Placeholder to display inside the field
 */
function Text(label, name, helpText, placeholder) {
  this.label = label;
  this.name = name;
  this.helpText = helpText || '';
  this.placeholder = placeholder || '';
}
Text.prototype.datatype = String;
Text.prototype.template = function template(value) {
  return '<div class="form-group">' +
    '<label for="' + this.id + '">' + this.label + '</label>' +
    '<input type="text" class="form-control" id="' + this.id + '"' +
      ' placeholder="' + this.placeholder + '" value="' + value + '">' +
    (this.helpText ? ('<p class="help-block">' + this.helpText + '</p>') : '') +
  '</div>';
};

types.Text = Text;

/**
 * Normal number input
 * @constructor
 * @implements {Settings.types.Input}
 * @memberof Settings.types
 * @param {string} label - Label of the input
 * @param {string} name - Settings field key, `name` HTML attribute
 * @param {string} helpText - Help text to display below the field
 * @param {string} placeholder - Placeholder to display inside the field
 */
function Num(label, name, helpText, placeholder) {
  this.label = label;
  this.name = name;
  this.helpText = helpText || '';
  this.placeholder = placeholder || '';
}
Num.prototype.datatype = Number;
Num.prototype.template = function template(value) {
  return '<div class="form-group">' +
    '<label for="' + this.id + '">' + this.label + '</label>' +
    '<input type="tel" class="form-control" id="' + this.id + '"' +
      ' placeholder="' + this.placeholder + '" value="' + value + '">' +
    (this.helpText ? ('<p class="help-block">' + this.helpText + '</p>') : '') +
  '</div>';
};

types.Num = Num;

/**
 * Textarea input
 * @constructor
 * @implements {Settings.types.Input}
 * @memberof Settings.types
 * @param {string} label - Label of the input
 * @param {string} name - Settings field key, `name` HTML attribute
 * @param {string} helpText - Help text to display below the field
 * @param {string} placeholder - Placeholder to display inside the field
 */
function Textarea(label, name, helpText, placeholder) {
  this.label = label;
  this.name = name;
  this.helpText = helpText || '';
  this.placeholder = placeholder || '';
}
Textarea.prototype.datatype = String;
Textarea.prototype.template = function template(value) {
  return '<div class="form-group">' +
    '<label for="' + this.id + '">' + this.label + '</label>' +
    '<texterea class="form-control" id="' + this.id + '" rows="3"' +
      ' placeholder="' + this.placeholder + '" value="' + value + '">' +
    (this.helpText ? ('<p class="help-block">' + this.helpText + '</p>') : '') +
  '</div>';
};

types.Textarea = Textarea;

/**
 * Set of checkboxes
 * @constructor
 * @implements {Settings.types.Input}
 * @memberof Settings.types
 * @param {Object[]} options - Array representing the list of checkboxes
 * @param {string} options[].label - Label of the checkbox
 * @param {string} options[].value - Value of the checkbox
 * @param {string} name - Settings field key, `name` HTML attribute
 * @param {string} helpText - Help text to display below the field
 */
function CheckBoxes(options, name, helpText) {
  this.options = options;
  this.name = name;
  this.helpText = helpText;
}
CheckBoxes.prototype.datatype = Array;
CheckBoxes.prototype.template = function template(value) {
  var self = this;
  return '<div class="form-group" id="' + self.id + '">' +
    this.options.map(function optionTemplate(option) {
      var checked = value.indexOf(option.value) >= 0 ? 'checked' : '';
      return '<div class="checkbox">' +
        '<label>' +
          '<input type="checkbox" name="' + self.name + '"' +
            ' value="' + option.value + '"' + checked + '> ' +
          option.label +
        '</label>' +
      '</div>';
    }).join('\n') +
    (this.helpText ? ('<p class="help-block">' + this.helpText + '</p>') : '') +
  '</div>';
};

types.CheckBoxes = CheckBoxes;

/**
 * Set of radio buttons
 * @constructor
 * @implements {Settings.types.Input}
 * @memberof Settings.types
 * @param {Object[]} options - Array representing the list of radios
 * @param {string} options[].label - Label of the radio
 * @param {string} options[].value - Value of the radio
 * @param {string} name - Settings field key, `name` HTML attribute
 * @param {string} helpText - Help text to display below the field
 */
function Radios(options, name, helpText) {
  this.options = options;
  this.name = name;
  this.helpText = helpText;
}
Radios.prototype.datatype = String;
Radios.prototype.template = function template(value) {
  var self = this;
  return '<div class="form-group" id="' + self.id + '">' +
    this.options.map(function optionTemplate(option) {
      var checked = value === option.value ? 'checked' : '';
      return '<div class="radio">' +
        '<label>' +
          '<input type="radio" name="' + self.name + '"' +
            ' value="' + option.value + '"' + checked + '> ' +
          option.label +
        '</label>' +
      '</div>';
    }).join('\n') +
    (self.helpText ? ('<p class="help-block">' + self.helpText + '</p>') : '') +
  '</div>';
};

types.Radios = Radios;
