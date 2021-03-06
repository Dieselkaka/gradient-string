// Run with npm run-script built-in
const gradient = require('..');

const log = console.log;
const str = '■'.repeat(48);

log('');

for (const t of [
	'cristal',
	'teen',
	'mind',
	'morning',
	'vice',
	'passion',
	'fruit',
	'instagram',
	'atlas',
	'retro',
	'summer',
	'pastel',
	'rainbow'
]) {
	log(pad(t), gradient[t](str));
}

log('');

function pad(s) {
	let i = -1;
	const l = 11 - s.length;
	while (++i < l) {
		s += ' ';
	}
	return '  ' + s;
}
