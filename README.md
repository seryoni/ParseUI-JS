## Summary

Small yet useful jQuery code to connect HTML elements with ParseObjects. This code helps connect html input and span elements with ParseObjects using jQuery.

## Code Example

The first step to connect HTML elements to ParseObjects is setting the context. You'll need to run the following JS code after the input.js code is imported.

```js
var testObj = new Parse.Object("TestObject");
parseUIContext.set('testObj', testObj);
```

To connect an input to a parse object simply add the following attributes to the input element:
- parseobj: described the object to take from the parseUIContext object.
- parsefield: described the field to connect to the input (from the parseobj). You can use . notation to access fields of sub objects (see examples).

```html
<input parseobj="testobj" parsefield="testfield" />
```
Note that by default your objects will be automatically saved when the input change event is fired. To change this behaviour, just modify the PARSE_UI_AUTOSAVE on they parseUIContext object.

```js
parseUIContext.set(PARSE_UI_AUTOSAVE, false);
```
