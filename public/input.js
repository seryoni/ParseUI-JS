/*

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

 */

var PARSE_UI_AUTOSAVE = 'autosave';
var parseUIContext = new Parse.Object('ParseUIContext');

parseUIContext.set(PARSE_UI_AUTOSAVE, false);

function getDataFromParseObject(obj, fieldName) {
    var fieldNames = fieldName.split('.');
    var result = obj;

    for (var i = 0; i < fieldNames.length; i++) {
        if (result == null) {
            return null;
        }

        result = result.get(fieldNames[i]);
    }

    return result;
}

function setDataToParseObject(obj, fieldName, value) {
    var fieldNames = fieldName.split('.');

    for (var i = 1; i < fieldNames.length; i++) {
        if (obj == null) {
            return;
        }

        obj = obj.get(fieldNames[i - 1]);
    }

    obj.set(fieldNames[fieldNames.length - 1], value);
}

function updateCurrentValues() {
    jQuery.each($("input, span, paper-input, gold-email-input"), function(i, val) {
        var objName = $(this).attr('parseobj');
        var objField = $(this).attr('parsefield');
        var object = parseUIContext.get(objName);

        if (!objName || !objField || !object) {
            return;
        }

        var newVal = getDataFromParseObject(object, objField);

        var className = $(this).prop('tagName');

        if (className == 'SPAN') {
            $(this).text(newVal);
        } else {
            $(this).val(newVal);
        }
    });
}

$("input, paper-input, gold-email-input").change(function(e) {
    var objName = $(this).attr('parseobj');
    var objField = $(this).attr('parsefield');
    var parseSave = $(this).attr('parsesave');
    var object = parseUIContext.get(objName);

    if (!objName || !objField || !object) {
        return;
    }

    setDataToParseObject(object, objField, $(this).val());

    if ((parseSave == null) || (parseSave == undefined)) {
        parseSave = "true";
    }

    if ((parseSave == "true") && (parseUIContext.get(PARSE_UI_AUTOSAVE))) {
        object.save();
    }
});

