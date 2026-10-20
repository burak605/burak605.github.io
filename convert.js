var fs = require('fs');

var ps1Content = fs.readFileSync('client.ps1', 'utf8');
var escapedContent = JSON.stringify(ps1Content);

//console.log(`const ps1Content = ${escapedContent};`);
//fs.writeFileSync('output.txt', ps1Content, 'utf8');