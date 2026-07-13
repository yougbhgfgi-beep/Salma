const fs = require('fs');
const c = fs.readFileSync('assets/index-new.js', 'utf8');
let idx = 0;
while ((idx = c.indexOf('placeholder:', idx)) !== -1) {
  console.log(idx, ':', c.substring(idx, idx + 40));
  idx += 10;
}
