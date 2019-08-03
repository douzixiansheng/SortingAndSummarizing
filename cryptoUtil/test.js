'use strict';

const cryptoUtil = require('./crypotUtil');
const crypto = require('crypto');

let dataStr = "Hello World";
let key = '751f621ea5c8f930';
let iv = '2624750004598718';

let _cryptoUtil = new cryptoUtil(iv);
_cryptoUtil.SayHello();

let _en = _cryptoUtil.Encrypt(dataStr, key, iv);
console.log('en ',_en);

let _de = _cryptoUtil.Decrypt(_en, key, iv);
console.log(_de);
