const fs = require('fs');
let c = fs.readFileSync('assets/index-new.js', 'utf8');

// Replace Arabic numeral placeholders with generic ones
c = c.replace('placeholder:"١٨"', 'placeholder:"•"');
c = c.replace('placeholder:"٤"', 'placeholder:"•"');
c = c.replace('placeholder:"٢٠٢٦"', 'placeholder:"•"');

fs.writeFileSync('assets/index-new.js', c);

// Verify
const check = fs.readFileSync('assets/index-new.js', 'utf8');
const idx = check.indexOf('placeholder:');
console.log(check.substring(idx, idx + 100));
