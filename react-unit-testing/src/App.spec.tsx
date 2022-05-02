import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('APP', () => {
    it('should render list items', () => {
        const { getByText } = render(<App />)

        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()
    })

    it('should be able to add new item to list', async () => {
        const { getByText } = render(<App />)
        const addButton = getByText('Adicionar')

        await userEvent.click(addButton);

        expect(getByText('Novo')).toBeInTheDocument()
    })
})

// https://youtu.be/edXudaVB0Bg?t=2680