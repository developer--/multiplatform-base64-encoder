(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'MBase64-Encoder'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'MBase64-Encoder'.");
    }root['MBase64-Encoder'] = factory(typeof this['MBase64-Encoder'] === 'undefined' ? {} : this['MBase64-Encoder'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var toChar = Kotlin.toChar;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwCCE = Kotlin.throwCCE;
  var toByte = Kotlin.toByte;
  function Base64Encoder() {
  }
  Base64Encoder.prototype.encodeToString_fqrh44$ = function (src) {
    var encoded = this.encode_fqrh44$(src);
    var $receiver = StringBuilder_init(encoded.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== encoded.length; ++tmp$) {
      var element = encoded[tmp$];
      $receiver.append_s8itvh$(toChar(element));
    }
    return $receiver.toString();
  };
  Base64Encoder.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Base64Encoder',
    interfaces: []
  };
  function Base64Factory() {
    Base64Factory_instance = this;
  }
  Base64Factory.prototype.createEncoder = function () {
    return JsBase64Encoder_getInstance();
  };
  Base64Factory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Base64Factory',
    interfaces: []
  };
  var Base64Factory_instance = null;
  function Base64Factory_getInstance() {
    if (Base64Factory_instance === null) {
      new Base64Factory();
    }return Base64Factory_instance;
  }
  function JsBase64Encoder() {
    JsBase64Encoder_instance = this;
  }
  JsBase64Encoder.prototype.encode_fqrh44$ = function (src) {
    var tmp$;
    var buffer = Buffer.from(src);
    var string = typeof (tmp$ = buffer.toString('base64')) === 'string' ? tmp$ : throwCCE();
    var array = new Int8Array(string.length);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = toByte(string.charCodeAt(i) | 0);
    }
    return array;
  };
  JsBase64Encoder.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'JsBase64Encoder',
    interfaces: [Base64Encoder]
  };
  var JsBase64Encoder_instance = null;
  function JsBase64Encoder_getInstance() {
    if (JsBase64Encoder_instance === null) {
      new JsBase64Encoder();
    }return JsBase64Encoder_instance;
  }
  _.Base64Encoder = Base64Encoder;
  Object.defineProperty(_, 'Base64Factory', {
    get: Base64Factory_getInstance
  });
  Object.defineProperty(_, 'JsBase64Encoder', {
    get: JsBase64Encoder_getInstance
  });
  JsBase64Encoder.prototype.encodeToString_fqrh44$ = Base64Encoder.prototype.encodeToString_fqrh44$;
  Kotlin.defineModule('MBase64-Encoder', _);
  return _;
}));

//# sourceMappingURL=MBase64-Encoder.js.map
