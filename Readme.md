# eslint-plugin-switch-error-warn

Switch errors to warnings and visa versa

This is a fork of [eslint-plugin-only-warn](https://travis-ci.org/bfanger/eslint-plugin-only-warn), modified to flip error and warn statuses on messages rather than downgrading all to warn status. This allows the default to still be warn whilst allowing a crude form of exceptions to the default.

This does mean that the rules that would normally default to warn must be changed to error if you want them to still only trigger warnings (e.g. 'no-console')

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-switch-error-warn`:

```
$ npm install eslint-plugin-switch-error-warn --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-switch-error-warn` globally.

## Usage

Add `switch-error-warn` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "switch-error-warn"
    ]
}
```
