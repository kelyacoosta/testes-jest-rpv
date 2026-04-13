import { render, screen } from "@testing-library/react"
import { NovaTarefa } from "./NovaTarefa"
import "@testing-library/jest-dom"
import { userEvent } from "@testing-library/user-event";

describe('Component de Nova Tarefa', () => {
    it('Deve renderizar o input e o botão corretamente na tela', () => {
        // Renderizar o componente NovaTarefa
        // Verificar se o input e o botão estão presentes na tela
        render(<NovaTarefa onAdicionar={() => { }} />);

        const input = screen.getByPlaceholderText('Digite a nova tarefa')
        const button = screen.getByRole('button', { name: 'Adicionar' })

        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()

    });

    it('Deve chamar a função onAdicionar enviando o texto digitado', async () => {
        // Renderizar o componente NovaTarefa
        // Simular a digitação de uma nova tarefa no input
        // Simular o clique no botão "Adicionar"
        // Verificar se a função onAdicionar foi chamada com o texto correto
        const funcaoEspia = jest.fn()

        render(<NovaTarefa onAdicionar={funcaoEspia} />)

        const input = screen.getByPlaceholderText('Digite a nova tarefa')
        const button = screen.getByRole('button', { name: 'Adicionar' })

        await userEvent.type(input, 'Estudar React')
        await userEvent.click(button)

        expect(funcaoEspia).toHaveBeenCalledWith(1)
        expect(funcaoEspia).toHaveBeenCalledWith('Estudar React')

        expect(input).toHaveValue('')
    })
})