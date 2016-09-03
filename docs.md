## Classes

<dl>
<dt><a href="#Settings">Settings</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Templateable">Templateable</a> : <code><a href="#Settings.types.Input">Input</a></code> | <code>string</code></dt>
<dd></dd>
</dl>

<a name="Settings"></a>

## Settings
**Kind**: global class  

* [Settings](#Settings)
    * [new Settings(name, template, defaultSettings, options)](#new_Settings_new)
    * _instance_
        * [.controllers(router, middleware)](#Settings+controllers)
        * [.parse(data)](#Settings+parse)
        * [.render(req, res, next)](#Settings+render)
        * [.getSettings(callback)](#Settings+getSettings) ⇒ <code>Object</code>
        * [.getSetting(key, callback)](#Settings+getSetting) ⇒ <code>Object</code>
        * [.setSettings(settings, callback)](#Settings+setSettings)
        * [.setSetting(key, value, callback)](#Settings+setSetting)
    * _static_
        * [.types](#Settings.types) : <code>object</code>
            * *[.Input](#Settings.types.Input)*
                * *[new Input(label, name, helpText, placeholder)](#new_Settings.types.Input_new)*
                * *[.label](#Settings.types.Input+label)*
                * *[.name](#Settings.types.Input+name)*
                * *[.id](#Settings.types.Input+id)*
                * *[.datatype](#Settings.types.Input+datatype)*
                * *[.template(value)](#Settings.types.Input+template) ⇒ <code>string</code>*
            * [.CheckBox](#Settings.types.CheckBox)
                * [new CheckBox(label, name, helpText)](#new_Settings.types.CheckBox_new)
                * [.label](#Settings.types.CheckBox+label)
                * [.name](#Settings.types.CheckBox+name)
                * [.datatype](#Settings.types.CheckBox+datatype)
                * [.template(value)](#Settings.types.CheckBox+template) ⇒ <code>string</code>
            * [.Toggle](#Settings.types.Toggle)
                * [new Toggle(label, name, helpText)](#new_Settings.types.Toggle_new)
                * [.label](#Settings.types.Toggle+label)
                * [.name](#Settings.types.Toggle+name)
                * [.datatype](#Settings.types.Toggle+datatype)
                * [.template(value)](#Settings.types.Toggle+template) ⇒ <code>string</code>
            * [.Text](#Settings.types.Text)
                * [new Text(label, name, helpText, placeholder)](#new_Settings.types.Text_new)
                * [.label](#Settings.types.Text+label)
                * [.name](#Settings.types.Text+name)
                * [.datatype](#Settings.types.Text+datatype)
                * [.template(value)](#Settings.types.Text+template) ⇒ <code>string</code>
            * [.Num](#Settings.types.Num)
                * [new Num(label, name, helpText, placeholder)](#new_Settings.types.Num_new)
                * [.label](#Settings.types.Num+label)
                * [.name](#Settings.types.Num+name)
                * [.datatype](#Settings.types.Num+datatype)
                * [.template(value)](#Settings.types.Num+template) ⇒ <code>string</code>
            * [.Textarea](#Settings.types.Textarea)
                * [new Textarea(label, name, helpText, placeholder)](#new_Settings.types.Textarea_new)
                * [.label](#Settings.types.Textarea+label)
                * [.name](#Settings.types.Textarea+name)
                * [.datatype](#Settings.types.Textarea+datatype)
                * [.template(value)](#Settings.types.Textarea+template) ⇒ <code>string</code>
            * [.CheckBoxes](#Settings.types.CheckBoxes)
                * [new CheckBoxes(options, name, helpText)](#new_Settings.types.CheckBoxes_new)
                * [.name](#Settings.types.CheckBoxes+name)
                * [.datatype](#Settings.types.CheckBoxes+datatype)
                * [.template(value)](#Settings.types.CheckBoxes+template) ⇒ <code>string</code>
            * [.Radios](#Settings.types.Radios)
                * [new Radios(options, name, helpText)](#new_Settings.types.Radios_new)
                * [.name](#Settings.types.Radios+name)
                * [.datatype](#Settings.types.Radios+datatype)
                * [.template(value)](#Settings.types.Radios+template) ⇒ <code>string</code>

<a name="new_Settings_new"></a>

### new Settings(name, template, defaultSettings, options)
Create settings objects


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Plugin name ex: 'mentions' |
| template | <code>[Array.&lt;Templateable&gt;](#Templateable)</code> | Array of inputs or HTML strings |
| defaultSettings | <code>Object</code> | Default settings object to initialize database with |
| options | <code>Object</code> | Configure how the settings page will work |
| options.autosave | <code>boolean</code> | (`false`) Autosave the settings on change |

<a name="Settings+controllers"></a>

### settings.controllers(router, middleware)
**Kind**: instance method of <code>[Settings](#Settings)</code>  

| Param | Description |
| --- | --- |
| router | NodeBB router from `static:init` hook |
| middleware | NodeBB middleware from `static:init` hook |

<a name="Settings+parse"></a>

### settings.parse(data)
**Kind**: instance method of <code>[Settings](#Settings)</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Settings object, data for templates |

<a name="Settings+render"></a>

### settings.render(req, res, next)
**Kind**: instance method of <code>[Settings](#Settings)</code>  

| Param | Type | Description |
| --- | --- | --- |
| req |  | HTTP request object |
| res |  | HTTP response object |
| next | <code>function</code> | Callback for errors |

<a name="Settings+getSettings"></a>

### settings.getSettings(callback) ⇒ <code>Object</code>
**Kind**: instance method of <code>[Settings](#Settings)</code>  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="Settings+getSetting"></a>

### settings.getSetting(key, callback) ⇒ <code>Object</code>
**Kind**: instance method of <code>[Settings](#Settings)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Setting to retreive |
| callback | <code>function</code> |  |

<a name="Settings+setSettings"></a>

### settings.setSettings(settings, callback)
**Kind**: instance method of <code>[Settings](#Settings)</code>  

| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> | Settings object to save |
| callback | <code>function</code> |  |

<a name="Settings+setSetting"></a>

### settings.setSetting(key, value, callback)
**Kind**: instance method of <code>[Settings](#Settings)</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Setting to save |
| value |  | Value to save |
| callback | <code>function</code> |  |

<a name="Settings.types"></a>

### Settings.types : <code>object</code>
**Kind**: static namespace of <code>[Settings](#Settings)</code>  

* [.types](#Settings.types) : <code>object</code>
    * *[.Input](#Settings.types.Input)*
        * *[new Input(label, name, helpText, placeholder)](#new_Settings.types.Input_new)*
        * *[.label](#Settings.types.Input+label)*
        * *[.name](#Settings.types.Input+name)*
        * *[.id](#Settings.types.Input+id)*
        * *[.datatype](#Settings.types.Input+datatype)*
        * *[.template(value)](#Settings.types.Input+template) ⇒ <code>string</code>*
    * [.CheckBox](#Settings.types.CheckBox)
        * [new CheckBox(label, name, helpText)](#new_Settings.types.CheckBox_new)
        * [.label](#Settings.types.CheckBox+label)
        * [.name](#Settings.types.CheckBox+name)
        * [.datatype](#Settings.types.CheckBox+datatype)
        * [.template(value)](#Settings.types.CheckBox+template) ⇒ <code>string</code>
    * [.Toggle](#Settings.types.Toggle)
        * [new Toggle(label, name, helpText)](#new_Settings.types.Toggle_new)
        * [.label](#Settings.types.Toggle+label)
        * [.name](#Settings.types.Toggle+name)
        * [.datatype](#Settings.types.Toggle+datatype)
        * [.template(value)](#Settings.types.Toggle+template) ⇒ <code>string</code>
    * [.Text](#Settings.types.Text)
        * [new Text(label, name, helpText, placeholder)](#new_Settings.types.Text_new)
        * [.label](#Settings.types.Text+label)
        * [.name](#Settings.types.Text+name)
        * [.datatype](#Settings.types.Text+datatype)
        * [.template(value)](#Settings.types.Text+template) ⇒ <code>string</code>
    * [.Num](#Settings.types.Num)
        * [new Num(label, name, helpText, placeholder)](#new_Settings.types.Num_new)
        * [.label](#Settings.types.Num+label)
        * [.name](#Settings.types.Num+name)
        * [.datatype](#Settings.types.Num+datatype)
        * [.template(value)](#Settings.types.Num+template) ⇒ <code>string</code>
    * [.Textarea](#Settings.types.Textarea)
        * [new Textarea(label, name, helpText, placeholder)](#new_Settings.types.Textarea_new)
        * [.label](#Settings.types.Textarea+label)
        * [.name](#Settings.types.Textarea+name)
        * [.datatype](#Settings.types.Textarea+datatype)
        * [.template(value)](#Settings.types.Textarea+template) ⇒ <code>string</code>
    * [.CheckBoxes](#Settings.types.CheckBoxes)
        * [new CheckBoxes(options, name, helpText)](#new_Settings.types.CheckBoxes_new)
        * [.name](#Settings.types.CheckBoxes+name)
        * [.datatype](#Settings.types.CheckBoxes+datatype)
        * [.template(value)](#Settings.types.CheckBoxes+template) ⇒ <code>string</code>
    * [.Radios](#Settings.types.Radios)
        * [new Radios(options, name, helpText)](#new_Settings.types.Radios_new)
        * [.name](#Settings.types.Radios+name)
        * [.datatype](#Settings.types.Radios+datatype)
        * [.template(value)](#Settings.types.Radios+template) ⇒ <code>string</code>

<a name="Settings.types.Input"></a>

#### *types.Input*
**Kind**: static abstract class of <code>[types](#Settings.types)</code>  

* *[.Input](#Settings.types.Input)*
    * *[new Input(label, name, helpText, placeholder)](#new_Settings.types.Input_new)*
    * *[.label](#Settings.types.Input+label)*
    * *[.name](#Settings.types.Input+name)*
    * *[.id](#Settings.types.Input+id)*
    * *[.datatype](#Settings.types.Input+datatype)*
    * *[.template(value)](#Settings.types.Input+template) ⇒ <code>string</code>*

<a name="new_Settings.types.Input_new"></a>

##### *new Input(label, name, helpText, placeholder)*
Generic Type, basis of all settings types


| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label of the input |
| name | <code>string</code> | Settings field key, `name` HTML attribute |
| helpText | <code>string</code> | Help text to display below the field |
| placeholder | <code>string</code> | Placeholder to display inside the field (if applicable) |

<a name="Settings.types.Input+label"></a>

##### *input.label*
Label of the input

**Kind**: instance property of <code>[Input](#Settings.types.Input)</code>  
<a name="Settings.types.Input+name"></a>

##### *input.name*
Settings field key, `name` HTML attribute

**Kind**: instance property of <code>[Input](#Settings.types.Input)</code>  
<a name="Settings.types.Input+id"></a>

##### *input.id*
`id` HTML attribute, set by [Settings](#Settings)

**Kind**: instance property of <code>[Input](#Settings.types.Input)</code>  
<a name="Settings.types.Input+datatype"></a>

##### *input.datatype*
Datatype of the setting

**Kind**: instance property of <code>[Input](#Settings.types.Input)</code>  
<a name="Settings.types.Input+template"></a>

##### *input.template(value) ⇒ <code>string</code>*
Function to generate the HTML of this element

**Kind**: instance method of <code>[Input](#Settings.types.Input)</code>  

| Param | Description |
| --- | --- |
| value | Current value of setting |

<a name="Settings.types.CheckBox"></a>

#### types.CheckBox
**Kind**: static class of <code>[types](#Settings.types)</code>  
**Implements:** <code>[Input](#Settings.types.Input)</code>  

* [.CheckBox](#Settings.types.CheckBox)
    * [new CheckBox(label, name, helpText)](#new_Settings.types.CheckBox_new)
    * [.label](#Settings.types.CheckBox+label)
    * [.name](#Settings.types.CheckBox+name)
    * [.datatype](#Settings.types.CheckBox+datatype)
    * [.template(value)](#Settings.types.CheckBox+template) ⇒ <code>string</code>

<a name="new_Settings.types.CheckBox_new"></a>

##### new CheckBox(label, name, helpText)
Normal checkbox with label to the right


| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label of the input |
| name | <code>string</code> | Settings field key, `name` HTML attribute |
| helpText | <code>string</code> | Help text to display below the field |

<a name="Settings.types.CheckBox+label"></a>

##### checkBox.label
Label of the input

**Kind**: instance property of <code>[CheckBox](#Settings.types.CheckBox)</code>  
**Implements:** <code>[label](#Settings.types.Input+label)</code>  
<a name="Settings.types.CheckBox+name"></a>

##### checkBox.name
Settings field key, `name` HTML attribute

**Kind**: instance property of <code>[CheckBox](#Settings.types.CheckBox)</code>  
**Implements:** <code>[name](#Settings.types.Input+name)</code>  
<a name="Settings.types.CheckBox+datatype"></a>

##### checkBox.datatype
Datatype of the setting

**Kind**: instance property of <code>[CheckBox](#Settings.types.CheckBox)</code>  
**Implements:** <code>[datatype](#Settings.types.Input+datatype)</code>  
<a name="Settings.types.CheckBox+template"></a>

##### checkBox.template(value) ⇒ <code>string</code>
Function to generate the HTML of this element

**Kind**: instance method of <code>[CheckBox](#Settings.types.CheckBox)</code>  
**Implements:** <code>[template](#Settings.types.Input+template)</code>  

| Param | Description |
| --- | --- |
| value | Current value of setting |

<a name="Settings.types.Toggle"></a>

#### types.Toggle
**Kind**: static class of <code>[types](#Settings.types)</code>  
**Implements:** <code>[Input](#Settings.types.Input)</code>  

* [.Toggle](#Settings.types.Toggle)
    * [new Toggle(label, name, helpText)](#new_Settings.types.Toggle_new)
    * [.label](#Settings.types.Toggle+label)
    * [.name](#Settings.types.Toggle+name)
    * [.datatype](#Settings.types.Toggle+datatype)
    * [.template(value)](#Settings.types.Toggle+template) ⇒ <code>string</code>

<a name="new_Settings.types.Toggle_new"></a>

##### new Toggle(label, name, helpText)
Material design toggle with label to the right


| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label of the input |
| name | <code>string</code> | Settings field key, `name` HTML attribute |
| helpText | <code>string</code> | Help text to display below the field |

<a name="Settings.types.Toggle+label"></a>

##### toggle.label
Label of the input

**Kind**: instance property of <code>[Toggle](#Settings.types.Toggle)</code>  
**Implements:** <code>[label](#Settings.types.Input+label)</code>  
<a name="Settings.types.Toggle+name"></a>

##### toggle.name
Settings field key, `name` HTML attribute

**Kind**: instance property of <code>[Toggle](#Settings.types.Toggle)</code>  
**Implements:** <code>[name](#Settings.types.Input+name)</code>  
<a name="Settings.types.Toggle+datatype"></a>

##### toggle.datatype
Datatype of the setting

**Kind**: instance property of <code>[Toggle](#Settings.types.Toggle)</code>  
**Implements:** <code>[datatype](#Settings.types.Input+datatype)</code>  
<a name="Settings.types.Toggle+template"></a>

##### toggle.template(value) ⇒ <code>string</code>
Function to generate the HTML of this element

**Kind**: instance method of <code>[Toggle](#Settings.types.Toggle)</code>  
**Implements:** <code>[template](#Settings.types.Input+template)</code>  

| Param | Description |
| --- | --- |
| value | Current value of setting |

<a name="Settings.types.Text"></a>

#### types.Text
**Kind**: static class of <code>[types](#Settings.types)</code>  
**Implements:** <code>[Input](#Settings.types.Input)</code>  

* [.Text](#Settings.types.Text)
    * [new Text(label, name, helpText, placeholder)](#new_Settings.types.Text_new)
    * [.label](#Settings.types.Text+label)
    * [.name](#Settings.types.Text+name)
    * [.datatype](#Settings.types.Text+datatype)
    * [.template(value)](#Settings.types.Text+template) ⇒ <code>string</code>

<a name="new_Settings.types.Text_new"></a>

##### new Text(label, name, helpText, placeholder)
Normal text input


| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label of the input |
| name | <code>string</code> | Settings field key, `name` HTML attribute |
| helpText | <code>string</code> | Help text to display below the field |
| placeholder | <code>string</code> | Placeholder to display inside the field |

<a name="Settings.types.Text+label"></a>

##### text.label
Label of the input

**Kind**: instance property of <code>[Text](#Settings.types.Text)</code>  
**Implements:** <code>[label](#Settings.types.Input+label)</code>  
<a name="Settings.types.Text+name"></a>

##### text.name
Settings field key, `name` HTML attribute

**Kind**: instance property of <code>[Text](#Settings.types.Text)</code>  
**Implements:** <code>[name](#Settings.types.Input+name)</code>  
<a name="Settings.types.Text+datatype"></a>

##### text.datatype
Datatype of the setting

**Kind**: instance property of <code>[Text](#Settings.types.Text)</code>  
**Implements:** <code>[datatype](#Settings.types.Input+datatype)</code>  
<a name="Settings.types.Text+template"></a>

##### text.template(value) ⇒ <code>string</code>
Function to generate the HTML of this element

**Kind**: instance method of <code>[Text](#Settings.types.Text)</code>  
**Implements:** <code>[template](#Settings.types.Input+template)</code>  

| Param | Description |
| --- | --- |
| value | Current value of setting |

<a name="Settings.types.Num"></a>

#### types.Num
**Kind**: static class of <code>[types](#Settings.types)</code>  
**Implements:** <code>[Input](#Settings.types.Input)</code>  

* [.Num](#Settings.types.Num)
    * [new Num(label, name, helpText, placeholder)](#new_Settings.types.Num_new)
    * [.label](#Settings.types.Num+label)
    * [.name](#Settings.types.Num+name)
    * [.datatype](#Settings.types.Num+datatype)
    * [.template(value)](#Settings.types.Num+template) ⇒ <code>string</code>

<a name="new_Settings.types.Num_new"></a>

##### new Num(label, name, helpText, placeholder)
Normal number input


| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label of the input |
| name | <code>string</code> | Settings field key, `name` HTML attribute |
| helpText | <code>string</code> | Help text to display below the field |
| placeholder | <code>string</code> | Placeholder to display inside the field |

<a name="Settings.types.Num+label"></a>

##### num.label
Label of the input

**Kind**: instance property of <code>[Num](#Settings.types.Num)</code>  
**Implements:** <code>[label](#Settings.types.Input+label)</code>  
<a name="Settings.types.Num+name"></a>

##### num.name
Settings field key, `name` HTML attribute

**Kind**: instance property of <code>[Num](#Settings.types.Num)</code>  
**Implements:** <code>[name](#Settings.types.Input+name)</code>  
<a name="Settings.types.Num+datatype"></a>

##### num.datatype
Datatype of the setting

**Kind**: instance property of <code>[Num](#Settings.types.Num)</code>  
**Implements:** <code>[datatype](#Settings.types.Input+datatype)</code>  
<a name="Settings.types.Num+template"></a>

##### num.template(value) ⇒ <code>string</code>
Function to generate the HTML of this element

**Kind**: instance method of <code>[Num](#Settings.types.Num)</code>  
**Implements:** <code>[template](#Settings.types.Input+template)</code>  

| Param | Description |
| --- | --- |
| value | Current value of setting |

<a name="Settings.types.Textarea"></a>

#### types.Textarea
**Kind**: static class of <code>[types](#Settings.types)</code>  
**Implements:** <code>[Input](#Settings.types.Input)</code>  

* [.Textarea](#Settings.types.Textarea)
    * [new Textarea(label, name, helpText, placeholder)](#new_Settings.types.Textarea_new)
    * [.label](#Settings.types.Textarea+label)
    * [.name](#Settings.types.Textarea+name)
    * [.datatype](#Settings.types.Textarea+datatype)
    * [.template(value)](#Settings.types.Textarea+template) ⇒ <code>string</code>

<a name="new_Settings.types.Textarea_new"></a>

##### new Textarea(label, name, helpText, placeholder)
Textarea input


| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | Label of the input |
| name | <code>string</code> | Settings field key, `name` HTML attribute |
| helpText | <code>string</code> | Help text to display below the field |
| placeholder | <code>string</code> | Placeholder to display inside the field |

<a name="Settings.types.Textarea+label"></a>

##### textarea.label
Label of the input

**Kind**: instance property of <code>[Textarea](#Settings.types.Textarea)</code>  
**Implements:** <code>[label](#Settings.types.Input+label)</code>  
<a name="Settings.types.Textarea+name"></a>

##### textarea.name
Settings field key, `name` HTML attribute

**Kind**: instance property of <code>[Textarea](#Settings.types.Textarea)</code>  
**Implements:** <code>[name](#Settings.types.Input+name)</code>  
<a name="Settings.types.Textarea+datatype"></a>

##### textarea.datatype
Datatype of the setting

**Kind**: instance property of <code>[Textarea](#Settings.types.Textarea)</code>  
**Implements:** <code>[datatype](#Settings.types.Input+datatype)</code>  
<a name="Settings.types.Textarea+template"></a>

##### textarea.template(value) ⇒ <code>string</code>
Function to generate the HTML of this element

**Kind**: instance method of <code>[Textarea](#Settings.types.Textarea)</code>  
**Implements:** <code>[template](#Settings.types.Input+template)</code>  

| Param | Description |
| --- | --- |
| value | Current value of setting |

<a name="Settings.types.CheckBoxes"></a>

#### types.CheckBoxes
**Kind**: static class of <code>[types](#Settings.types)</code>  
**Implements:** <code>[Input](#Settings.types.Input)</code>  

* [.CheckBoxes](#Settings.types.CheckBoxes)
    * [new CheckBoxes(options, name, helpText)](#new_Settings.types.CheckBoxes_new)
    * [.name](#Settings.types.CheckBoxes+name)
    * [.datatype](#Settings.types.CheckBoxes+datatype)
    * [.template(value)](#Settings.types.CheckBoxes+template) ⇒ <code>string</code>

<a name="new_Settings.types.CheckBoxes_new"></a>

##### new CheckBoxes(options, name, helpText)
Set of checkboxes


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Array.&lt;Object&gt;</code> | Array representing the list of checkboxes |
| options[].label | <code>string</code> | Label of the checkbox |
| options[].value | <code>string</code> | Value of the checkbox |
| name | <code>string</code> | Settings field key, `name` HTML attribute |
| helpText | <code>string</code> | Help text to display below the field |

<a name="Settings.types.CheckBoxes+name"></a>

##### checkBoxes.name
Settings field key, `name` HTML attribute

**Kind**: instance property of <code>[CheckBoxes](#Settings.types.CheckBoxes)</code>  
**Implements:** <code>[name](#Settings.types.Input+name)</code>  
<a name="Settings.types.CheckBoxes+datatype"></a>

##### checkBoxes.datatype
Datatype of the setting

**Kind**: instance property of <code>[CheckBoxes](#Settings.types.CheckBoxes)</code>  
**Implements:** <code>[datatype](#Settings.types.Input+datatype)</code>  
<a name="Settings.types.CheckBoxes+template"></a>

##### checkBoxes.template(value) ⇒ <code>string</code>
Function to generate the HTML of this element

**Kind**: instance method of <code>[CheckBoxes](#Settings.types.CheckBoxes)</code>  
**Implements:** <code>[template](#Settings.types.Input+template)</code>  

| Param | Description |
| --- | --- |
| value | Current value of setting |

<a name="Settings.types.Radios"></a>

#### types.Radios
**Kind**: static class of <code>[types](#Settings.types)</code>  
**Implements:** <code>[Input](#Settings.types.Input)</code>  

* [.Radios](#Settings.types.Radios)
    * [new Radios(options, name, helpText)](#new_Settings.types.Radios_new)
    * [.name](#Settings.types.Radios+name)
    * [.datatype](#Settings.types.Radios+datatype)
    * [.template(value)](#Settings.types.Radios+template) ⇒ <code>string</code>

<a name="new_Settings.types.Radios_new"></a>

##### new Radios(options, name, helpText)
Set of radio buttons


| Param | Type | Description |
| --- | --- | --- |
| options | <code>Array.&lt;Object&gt;</code> | Array representing the list of radios |
| options[].label | <code>string</code> | Label of the radio |
| options[].value | <code>string</code> | Value of the radio |
| name | <code>string</code> | Settings field key, `name` HTML attribute |
| helpText | <code>string</code> | Help text to display below the field |

<a name="Settings.types.Radios+name"></a>

##### radios.name
Settings field key, `name` HTML attribute

**Kind**: instance property of <code>[Radios](#Settings.types.Radios)</code>  
**Implements:** <code>[name](#Settings.types.Input+name)</code>  
<a name="Settings.types.Radios+datatype"></a>

##### radios.datatype
Datatype of the setting

**Kind**: instance property of <code>[Radios](#Settings.types.Radios)</code>  
**Implements:** <code>[datatype](#Settings.types.Input+datatype)</code>  
<a name="Settings.types.Radios+template"></a>

##### radios.template(value) ⇒ <code>string</code>
Function to generate the HTML of this element

**Kind**: instance method of <code>[Radios](#Settings.types.Radios)</code>  
**Implements:** <code>[template](#Settings.types.Input+template)</code>  

| Param | Description |
| --- | --- |
| value | Current value of setting |

<a name="Templateable"></a>

## Templateable : <code>[Input](#Settings.types.Input)</code> &#124; <code>string</code>
**Kind**: global typedef  
