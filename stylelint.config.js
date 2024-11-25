module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-prettier',
		'stylelint-scss'
	],
	rules: {
		'block-no-empty': null,
		'color-no-invalid-hex': true,
		'declaration-colon-space-after': 'always',
		'indentation': 2
	}
};
