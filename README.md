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

## Motivation

This code helps create really quick forms and prototypes in JavaScript.

## Installation

Add the following script imports to get started. You should skip the jquery and parse JS SDK imports if you already have them. Just make sure you import input.js AFTER the first 2 dependencies.

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="//www.parsecdn.com/js/parse-1.6.14.min.js"></script>
<script src="input.js"></script>
```

## Contributors

Just fork and create pull requests to enhance this code. It'll be really cool to have this project turn into THE ParseUI-JS project.

It would be great to see tests, Angular examples, react.js examples and offline support.

## License

 The MIT License (MIT)

 Copyright (c) 2016 Jonathan Seroussi

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 