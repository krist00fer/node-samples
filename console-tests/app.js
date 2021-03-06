var program = require('commander');

program
	.version('1.0.0')
	.option('-p, --peppers', 'Add peppers')
	.option('-P, --pineapple', 'Add pineapple')
	.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
	.parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers)	console.log('  - peppers');
if (program.pineapple) 	console.log('  - pineapple');
console.log('  - %s cheese', program.cheese);