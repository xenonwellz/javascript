module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "extends": [
        "prettier",
        "plugin:unicorn/all",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:json/recommended-legacy"
    ],
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/no-unused-vars": 0,
        "quotes": "off",
        "space-before-function-paren": "off",
        "no-irregular-whitespace": ["error"],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
        "max-len": ["error", { "code": 120 }],
        "unicorn/no-null": "off",
        "one-var": ["error", "never"],
        "no-cond-assign": ["error", "except-parens"],
        "comma-dangle": ["error", "always-multiline"],
        "eqeqeq": ["error", "always"],
        "eol-last": ["error", "always"],
        "new-parens": ["error", "always"],
        "no-caller": ["error"],
        "no-constant-condition": ["error"],
        "no-control-regex": ["error"],
        "no-debugger": ["error"],
        "no-duplicate-case": ["error"],
        "no-eval": ["error"],
        "no-ex-assign": ["error"],
        "no-extra-boolean-cast": ["error"],
        "no-fallthrough": ["error"],
        "no-inner-declarations": ["error"],
        "no-invalid-regexp": ["error", { "allowConstructorFlags": ["u", "y"] }],
        "no-proto": ["error"],
        "no-shadow": "off",
        "no-regex-spaces": ["error"],
        "no-self-compare": ["error"],
        "no-sparse-arrays": ["error"],
        "no-mixed-spaces-and-tabs": ["error"],
        "no-unsafe-negation": ["error"],
        "no-new-wrappers": ["error"],
        "no-self-assign": ["error"],
        "no-this-before-super": ["error"],
        "no-with": ["error"],
        "rest-spread-spacing": ["error", "never"],
        "no-trailing-spaces": ["error", { "ignoreComments": true }],
        "no-undef-init": ["error"],
        "no-unsafe-finally": ["error"],
        "padded-blocks": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "use-isnan": ["error"],
        "valid-typeof": ["error", { "requireStringLiterals": true }],
        "brace-style": ["error", "1tbs"],
        "curly": ["error", "all"],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "format": ["camelCase", "UPPER_CASE", "PascalCase"]
            },
            {
                "selector": "typeLike",
                "format": ["PascalCase"]
            },
            {
                "selector": "class",
                "format": ["PascalCase"]
            },
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "custom": {
                    "regex": "^I[A-Z]",
                    "match": false
                }
            }
        ],
        "handle-callback-err": ["error", "^(err|error)$"],
        "max-len": [
            "error",
            {
                "code": 100,
                "comments": 120,
                "ignoreUrls": true,
                "ignoreTemplateLiterals": true
            }
        ],
        "no-array-constructor": ["error"],
        "no-unreachable": ["error"],
        "no-multi-spaces": ["error"],
        "unicorn/prefer-module": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/no-await-expression-member": "error",
        "unicorn/no-for-loop": "error",
        "unicorn/no-instanceof-array": "error",
        "unicorn/filename-case": ["error", { "case": "snakeCase" }],
        "unicorn/prefer-number-properties": "error",
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": ["error", { "endOfLine": "auto" }]
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    }
}
