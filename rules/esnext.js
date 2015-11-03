module.exports = {
    // parser: 'babel-eslint',  // seems eslint can't process this setting when it's in a subpath
    env: {
        es6: false
    },
    ecmaFeatures: {
        arrowFunctions: true,
        binaryLiterals: true,
        octalLiterals: true,
        blockBindings: true,
        classes: true,
        defaultParams: true,
        destructuring: true,
        forOf: true,
        modules: true,
        objectLiteralComputedProperties: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        restParams: true,
        spread: true,
        superInFunctions: true,
        templateStrings: true,
        generators: true,
        regexUFlag: true,
        unicodeCodePointEscapes: false,

        // should not be enabled for non-react projects
        jsx: false,

        // IMO, this feature is very error-prone
        objectLiteralDuplicateProperties: false,

        // not polyfillable; most JavaScript engines hasn't implemented this feature
        regexYFlag: false
    },
    rules: {
        // 箭头函数的参数，即使只有一个也要带上括号
        'arrow-parens': [1, 'always'],

        // => 前后都应有空格
        'arrow-spacing': [1, { before: true, after: true }],

        // 派生类的构造器函数必须有 super() 调用，其他情况下构造器函数都不允许调用 super()
        'constructor-super': 2,

        // 派生类必须先调用过 super() 才能引用 this
        'no-this-before-super': 2,

        // 生成器函数的星号前需要有空格，星号后不能有空格，例如 function *foo() {}
        'generator-star-spacing': [1, { before: true, after: false }],

        // 不要写出不带 yield 语句的生成器函数
        'require-yield': 1,

        // 不要出现以下例子里的情况：
        // class A {}
        // A = 0;
        'no-class-assign': 2,

        // 不能对常量进行赋值
        'no-const-assign': 2,

        // 禁止 class 定义中出现两个同名成员
        'no-dupe-class-members': 2,

        // 禁止不产生新变量的 destructuring pattern
        'no-empty-pattern': 2,

        // 是否使用 object shorthand 应该由开发者视可读性而定，不一刀切
        'object-shorthand': 0,

        // 如果需要使用的方法可以用 Reflect 的接口完成，则优先使用 Reflect
        // 不过由于 Reflect 不可被 polyfill 而且也没有完整实现，暂不开启
        'prefer-reflect': 0,

        // 仅使用 let 和 const，不使用 var
        'no-var': 1,

        // 对于不会被修改的变量，优先考虑使用 const 而非 let
        'prefer-const': 1,

        // 如果仅仅是为了使用数组作为函数参数，那么应该优先考虑使用 spread operator 而不是 .apply()
        'prefer-spread': 1,

        // 回调函数尽可能使用箭头函数，而不是 Inline 的匿名函数
        'prefer-arrow-callback': 1,

        // 禁止复杂的字符串拼接，用模板引擎或 ES6 template string 替代
        'prefer-template': 1,

        // Disallow arrow functions where a condition is expected, so as to avoid potential typo
        'no-arrow-condition': 2,

        // Require braces in arrow function body when there might be confusions
        'arrow-body-style': [1, 'as-needed']
    }
};
