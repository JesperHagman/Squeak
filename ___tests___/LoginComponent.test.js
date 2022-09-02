import {LoginComponent, validateInput} from '../src/components/LoginComponent'
import React, {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


describe("login", () => {
    test('Validate function should pass on correct input', () => {
    const text = 'text@test.com'
    expect(validateInput(text)).toBe(true)
    })

    test('Validate function should fail on incorrect input', () => {
    const text = 'text'
    expect(validateInput(text)).not.toBe(true)
    })

})
