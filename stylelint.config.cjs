module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^[-_a-z]+$',
    'scss/partial-no-import': null, // Allow partials with no direct imports
  },
};
