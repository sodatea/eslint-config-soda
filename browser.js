module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint-config-soda/rules/esnext',

        'eslint-config-soda/rules/react',

        'eslint-config-soda/rules/ast',
        'eslint-config-soda/rules/best-practices',
        'eslint-config-soda/rules/complexity',
        'eslint-config-soda/rules/strict',
        'eslint-config-soda/rules/style',
        'eslint-config-soda/rules/variables',

        // must be placed after esnext in order to override some of its rules
        'eslint-config-soda/rules/browser'
    ],
    parser: 'babel-eslint'
};
