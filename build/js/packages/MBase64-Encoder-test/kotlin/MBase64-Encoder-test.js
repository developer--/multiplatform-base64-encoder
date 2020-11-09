(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'MBase64-Encoder', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('MBase64-Encoder'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MBase64-Encoder-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MBase64-Encoder-test'.");
    }if (typeof this['MBase64-Encoder'] === 'undefined') {
      throw new Error("Error loading module 'MBase64-Encoder-test'. Its dependency 'MBase64-Encoder' was not found. Please, check whether 'MBase64-Encoder' is loaded prior to 'MBase64-Encoder-test'.");
    }if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'MBase64-Encoder-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'MBase64-Encoder-test'.");
    }root['MBase64-Encoder-test'] = factory(typeof this['MBase64-Encoder-test'] === 'undefined' ? {} : this['MBase64-Encoder-test'], kotlin, this['MBase64-Encoder'], this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$MBase64_Encoder, $module$kotlin_test) {
  'use strict';
  var anonymous = $module$MBase64_Encoder;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var toByte = Kotlin.toByte;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function Base64Test() {
  }
  Base64Test.prototype.testEncodeToString = function () {
    this.checkEncodeToString_0('Kotlin is awesome', 'S290bGluIGlzIGF3ZXNvbWU=');
  };
  Base64Test.prototype.testPaddedStrings = function () {
    this.checkEncodeToString_0('', '');
    this.checkEncodeToString_0('1', 'MQ==');
    this.checkEncodeToString_0('22', 'MjI=');
    this.checkEncodeToString_0('333', 'MzMz');
    this.checkEncodeToString_0('4444', 'NDQ0NA==');
  };
  Base64Test.prototype.checkEncodeToString_0 = function (input, expectedOutput) {
    assertEquals(expectedOutput, anonymous.Base64Factory.createEncoder().encodeToString_fqrh44$(this.asciiToByteArray_0(input)));
  };
  Base64Test.prototype.asciiToByteArray_0 = function ($receiver) {
    var array = new Int8Array($receiver.length);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = toByte($receiver.charCodeAt(i) | 0);
    }
    return array;
  };
  Base64Test.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base64Test',
    interfaces: []
  };
  _.Base64Test = Base64Test;
  suite('', false, function () {
    suite('Base64Test', false, function () {
      test('testEncodeToString', false, function () {
        return (new Base64Test()).testEncodeToString();
      });
      test('testPaddedStrings', false, function () {
        return (new Base64Test()).testPaddedStrings();
      });
    });
  });
  Kotlin.defineModule('MBase64-Encoder-test', _);
  return _;
}));

//# sourceMappingURL=MBase64-Encoder-test.js.map
