const gcd = (a, b) => {
  let tmp;

  while (b > 0) {
    tmp = a % b;
    a = b;
    b = tmp;
  }

  return a;
};

const generateEncryptionExponent = (phi) => {
  let e = 5;

  while (gcd(phi, e) !== 1) {
    e++;
  }

  return e;
};

const power = (a, b) => {
  let tmp = 1;

  for (let i = 1; i <= b; i++) {
    tmp *= a;
  }

  return tmp;
};

const encrypt = (n, e, message) => {
  let r;
  let i = 0;
  let prod = 1;
  let rem_mod = 0;

  while (e > 0) {
    r = e % 2;

    if (i++ == 0) {
      rem_mod = message % n;
    } else {
      rem_mod = power(rem_mod, 2) % n;
    }

    if (r == 1) {
      prod *= rem_mod;
      prod = prod % n;
    }

    e = parseInt(e / 2);
  }
  return prod;
};

const generateDencryptionExponent = (phi, e) => {
  let x, y, tmp, r;
  let orig_phi = phi;
  let x2 = 1;
  let x1 = 0;
  let y2 = 0;
  let y1 = 1;

  while (e > 0) {
    tmp = parseInt(phi / e);
    r = phi - tmp * e;
    x = x2 - tmp * x1;
    y = y2 - tmp * y1;
    phi = e;
    e = r;
    x2 = x1;
    x1 = x;
    y2 = y1;
    y1 = y;

    if (phi == 1) {
      y2 += orig_phi;
      break;
    }
  }
  return y2;
};

const decrypt = (c, d, n) => {
  let r;
  let i = 0;
  let prod = 1;
  let rem_mod = 0;

  while (d > 0) {
    r = d % 2;

    if (i++ == 0) {
      rem_mod = c % n;
    } else {
      rem_mod = power(rem_mod, 2) % n;
    }

    if (r == 1) {
      prod *= rem_mod;
      prod = prod % n;
    }

    d = parseInt(d / 2);
  }
  return prod;
};

const rsa = () => {
  const p = 53;
  const q = 61;
  const message = 999;
  const n = p * q;
  const phi = (p - 1) * (q - 1);
  const encryptionExponent = generateEncryptionExponent(phi);
  const encryptedMessage = encrypt(n, encryptionExponent, message);
  const dencryptionExponent = (1 + 4 * phi) / encryptionExponent;
  // const dencryptionExponent = generateDencryptionExponent(phi, encryptionExponent);

  console.log('n = ', n);
  console.log('phi = ', phi);
  console.log('encryption exponent = ', encryptionExponent);
  console.log('encrypted message = ', encryptedMessage);
  console.log('dencryption exponent = ', dencryptionExponent);
  console.log('decrypted value = ', decrypt(encryptedMessage, dencryptionExponent, n));
};

rsa();
