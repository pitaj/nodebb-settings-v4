# nodebb-settings-v4

Programmatically generate ACP Settings pages for NodeBB plugins

### Installation

Install to your plugin with `npm install --save nodebb-settings-v4`

### Usage

Settings v4 exports the [Settings](./docs#Settings) class for usage in your plugin. It 
accepts four parameters for the name, template, and default settings of your plugin as well 
as the specific options to configure behavior. 

#### Example

```js
var Settings = require('nodebb-settings-v4');

var name = 'calendar';

var template = [
  // pure HTML strings can be in the template too
  '<h2>Calendar</h2>',
  '<p>Configure nodebb-plugin-calendar</p>',

  // we can group together or split up inputs with normal bootstrap elements
  '<div class="row">',
    '<div class="col-md-6">',
    new Settings.types.Num(
      'Reminder polling interval', 
      'checkingInterval', 
      'The interval at which the Reminders are checked, default 300,000 ms (5 minutes)',
      'Enter a duration in milliseconds',
    ),
    '</div>',
    '<div class="col-md-6"',
    new Settings.types.CheckBox(
      'Only allowed in main post',
      'mainPostOnly',
      'Only allow events in the main post of a topic',
    ),
    '</div>',
  '</div>',
];

var defaultSettings = {
  checkingInterval: 1000 * 60 * 5,
  mainPostOnly: true,
};

var options = {
  autosave: true,
};

var settings = new Settings(name, template, defaultSettings, options);

// function for `static:init` hook
function init(obj) {
  var router = obj.router;
  var middleware = obj.middleware;

  settings.controllers(router, middleware);
}
```

All you have to do is create a new **Settings** object and then initialise the controllers 
within the init hook. Everything else is handled by Settings v4.

### Makes settings easier

Reduces the cognitive load on the programmer by providing an easy-to-use framework that's 
just a `require` away.

#### Things you do
 - Import the module
 - Create the template
 - Configure options
 - Call the `controllers` method
 - Pass around the object reference to other modules

#### Things it does
 - Adds client script to ACP
 - Configures **express** routes
 - Compiles and parses template
 - Handles database storage
 - Provides a simple API for setting and retrieving settings

### [Documentation](./docs.md)
