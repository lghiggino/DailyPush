import { render } from '@testing-library/react'
import App from './App'

test('sum', () => {
    function sum(a: number, b: number): number {
        return a + b
    }

    expect(sum(1, 1)).toBe(2)
})


test('app', () => {
    const { getByText } = render(<App />)

    expect(getByText('Hello World')).toBeTruthy();
})