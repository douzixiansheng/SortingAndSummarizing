'use strict';

const crypto = require('crypto');


var CryptoUtil = function(name){
    this.name = name;
};
CryptoUtil.prototype.SayHello = function (){
    console.log('sayHello',this.name);
}
/**
 * 解密
 */
CryptoUtil.prototype.Decrypt = function (dataStr, key, iv){
    let cipherChunks = [];
    let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
    decipher.setAutoPadding(true);
    cipherChunks.push(decipher.update(dataStr, 'base64', 'utf8'));
    cipherChunks.push(decipher.final('utf8'));
    return cipherChunks.join('');
}
//加密
CryptoUtil.prototype.Encrypt = function (dataStr, key, iv){
    let cipherChunks = [];
    let cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
    cipher.setAutoPadding(true);
    cipherChunks.push(cipher.update(dataStr, 'utf8', 'base64'));
    cipherChunks.push(cipher.final('base64'));
    return cipherChunks.join('');
}

module.exports = CryptoUtil;