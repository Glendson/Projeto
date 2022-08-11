import Cliente from "../core/Cliente"
import { IconeEdicao, IconeLixo } from "./Icones"

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {


    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="p-4">Ações</th>
            </tr>
        )
    }
    function renderizarDados() {
        return props.clientes?.map((Cliente, i) => {
            return (
                <tr key={Cliente.id} className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}>
                    <td className="text-left p-4">{Cliente.id}</td>
                    <td className="text-left p-4">{Cliente.nome}</td>
                    <td className="text-left p-4">{Cliente.idade}</td>
                    {renderizarAcoes(Cliente)}
                </tr>
            )
        })
    }
    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)}
                    className={`
                    flex justify-center items-center p-2 m-1
                    text-green-600 rounded-full
                    hover:bg-purple-50
                `}>
                        {IconeEdicao}
                    </button>

                ) : false}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} 
                    className={`
                    flex justify-center items-center p-2 m-1
                    text-red-600 rounded-full
                    hover:bg-purple-50
                `}>
                        {IconeLixo}
                    </button>
                ) : false}

            </td >
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={"bg-gradient-to-r from-purple-500 to-purple-500 text-gray-100"}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}