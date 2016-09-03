/* globals $, RELATIVE_PATH, app */

(function closure() {
  var settings4 = {};

  function debounce(func, wait, immediate) {
    var timeout;
    return function debounced() {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  settings4.init = function init(form) {
    var $form = $(form);
    var pluginName = $form.attr('name');
    var autosave = $form.attr('data-autosave');
    var arrayInputs = JSON.parse($form.attr('data-arrayInputs'));
    var names = JSON.parse($form.attr('data-names'));

    function save() {
      var settings = names.map(function toSetting(name) {
        var elem = $('[name="' + name + '"]');
        if (arrayInputs.indexOf(name) < 0) {
          if (elem.attr('type') === 'radio') {
            return elem.filter(':checked').val();
          }
          return elem.val() || elem.is(':checked');
        }
        return Array.prototype.filter.call(elem, function isChecked(el) {
          return el.checked;
        }).map(function getValue(el) {
          return el.value;
        });
      }).reduce(function toObject(prev, current, index) {
        prev[names[index]] = current;
        return prev;
      }, {});

      $.ajax({
        url: RELATIVE_PATH + '/admin/plugins/' + pluginName + '/save',
        type: 'GET',
        contentType: 'application/json',
        data: JSON.stringify(settings),
        error: function error(a, b, err) {
          app.alertError(err);
        },
        success: function success() {
          app.alertSuccess('[[success:settings-saved]]');
        },
      });
    }

    if (autosave) {
      $form.on('change keyup', 'input, textarea', debounce(save, 250));
    } else {
      $('#settings_v4-save').click(save);
    }
  };

  function load() {
    var form = $('.settings_v4')[0];
    settings4.init(form);
  }

  $(window).on('action:ajaxify.end', load);
  $(document).ready(load);
}());
