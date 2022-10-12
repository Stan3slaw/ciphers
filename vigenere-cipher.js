const generateKey = (str, key) => {
  if (str.length === key.length) {
    return key;
  } else {
    const generatedKey = key.split('');

    for (let i = 0; i < str.length - key.length; i++) {
      generatedKey.push(key[i % key.length]);
    }
    return generatedKey.join('');
  }
};

const encryptStr = (str, key) => {
  let encryptedStr = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = ((str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26) + 65;

    encryptedStr += String.fromCharCode(charCode);
  }

  return encryptedStr;
};

const decryptStr = (encryptedStr, key) => {
  let decryptedStr = '';

  for (let i = 0; i < encryptedStr.length; i++) {
    let charCode = ((encryptedStr[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26) + 65;
    decryptedStr += String.fromCharCode(charCode);
  }

  return decryptedStr;
};

const str = 'STANISLAV';
const keyword = 'LEM';
const key = generateKey(str.toUpperCase(), keyword.toUpperCase());
const encryptedStr = encryptStr(str.toUpperCase(), key);
const decryptedStr = decryptStr(encryptedStr.toUpperCase(), key);

console.log('Encrypted string: ', encryptedStr);
console.log('Decrypted string: ', decryptedStr);
