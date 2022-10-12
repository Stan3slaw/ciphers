const power = (a, b, p) => (b === 1 ? a : Math.pow(a, b) % p);

const P = 23;
const G = 9;
const alicePrivateKey = 4;
const bobPrivateKey = 3;

console.log(`The value of P: ${P}`);
console.log(`The value of G: ${G}`);
console.log(`The private key a for Alice: ${alicePrivateKey}`);
const x = power(G, alicePrivateKey, P);

console.log(`The private key b for Bob: ${bobPrivateKey}`);
const y = power(G, bobPrivateKey, P);

const ka = power(y, alicePrivateKey, P);
const kb = power(x, bobPrivateKey, P);

console.log(`Secret key for the Alice is: ${ka}`);
console.log(`Secret key for the Bob is: ${kb}`);
