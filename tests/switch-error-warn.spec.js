const eslint = require('eslint')
const { disable, enable } = require('../src/switch-error-warn') // apply patch

describe('eslint-plugin-switch-error-warn', () => {
  const linter = new eslint.Linter()
  const configError = {
    rules: { semi: 2 } // error on missing `;`
  }
  const configWarn = {
    rules: { semi: 1 } // warn on missing `;`
  }
  const sourceCode = 'var foo'
  it('should downgrade error(2) to warn(1)', () => {
    const messages = linter.verify(sourceCode, configError)
    expect(messages[0].severity).toBe(1)
  })

  it('should upgrade warn(1) to error(2)', () => {
    const messages = linter.verify(sourceCode, configWarn)
    expect(messages[0].severity).toBe(2)
  })

  it('can be temporarly disabled', () => {
    disable()
    const messages1 = linter.verify(sourceCode, configError)
    expect(messages1[0].severity).toBe(2)
    enable()
    const messages2 = linter.verify(sourceCode, configError)
    expect(messages2[0].severity).toBe(1)
  })
})
