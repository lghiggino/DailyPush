import { getByText, queryByText, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './components/List'

describe('LIST', () => {
    it('should render list items', () => {
        const { getByText, queryByText, findByText, rerender } = render(<List initialItems={['Diego', 'Rodz', 'Mayk']} />)

        expect(getByText('Diego')).toBeInTheDocument()
        expect(getByText('Rodz')).toBeInTheDocument()
        expect(getByText('Mayk')).toBeInTheDocument()

        rerender(<List initialItems={['Julia']} />)
        expect(getByText('Julia')).toBeInTheDocument()

    })

    it('should be able to add new item to list', async () => {
        const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]} />)
        const addButton = getByText('Adicionar')
        const inputForm = getByPlaceholderText('Novo usuário')

        await userEvent.type(inputForm, 'Banana')
        await userEvent.click(addButton);

        expect(await findByText('Banana')).toBeInTheDocument()
    })

    it('should be able to delete item from list', async () => {
        const { queryByText, getAllByText, debug } = render(<List initialItems={['Diego']} />)
        const removeButtons = getAllByText('Remover')

        await userEvent.click(removeButtons[0])

        await waitFor(() => {
            expect(queryByText('Diego')).not.toBeInTheDocument()
        })


    })
})


function query(query: any) {
    throw new Error('Function not implemented.')
}
// https://youtu.be/edXudaVB0Bg?t=2664