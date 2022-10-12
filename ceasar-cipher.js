const ceasarCipher = (str, k) => {
  return [...str]
    .map((char) => char.charCodeAt(0))
    .map((n) => (n >= 65 && n <= 90 ? ((n - 65 + k) % 26) + 65 : n))
    .map((n) => (n >= 97 && n <= 122 ? ((n - 97 + k) % 26) + 97 : n))
    .map((n) => String.fromCharCode(n))
    .join('');
};

console.log(ceasarCipher('DEFG', -3));
