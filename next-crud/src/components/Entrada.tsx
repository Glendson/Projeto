interface EntradaProps {
    tipo?: "text" | "number"
    texto: string
    valor: any
    somenteLeitura?: boolean
    mudarValor?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2">
                {props.texto}
            </label>
            <input type={props.tipo ?? "text"} 
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.mudarValor?.(e.target.value)}
            className={`
            border border-purple-500 rounded-lg
            ${props.somenteLeitura ? "" : "focus:bg-white"} bg-gray-100
            px-4 py-2
            `}/>
        </div>
    )
}