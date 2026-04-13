// PARADIGMA FUNCIONAL 
// PARADIGMA PROCEDURAL 

import { useState } from "react"

interface INovaTarefa {
    onAdicionar: (texto: string) => void
}

export function NovaTarefa({ onAdicionar }: INovaTarefa) {
    const [texto, setTexto] = useState<string>('')

    const handleAdicionar = () => {
        if (texto.trim() !== '') {
            onAdicionar(texto)
            setTexto("")
        }
        // Lógica para adicionar a nova tarefa

    }
    return (
        <div>
            <input type="text" placeholder="Digite a nova tarefa" value={texto} onChange={(e) => setTexto(e.target.value)} />
            <button onClick={handleAdicionar}>Adicionar</button>
        </div>
    )
}