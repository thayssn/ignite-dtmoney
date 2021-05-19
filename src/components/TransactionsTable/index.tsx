import { useEffect } from "react";
import { api } from "../../services/api";
import { TransactionsTableContainer } from "./styles";

export function TransactionsTable () {

    useEffect(() => {
        api.get('transdactions')
        .then(response => console.log(response.data))
        .catch(err => console.error(err.message));
    }, [])

    return (
        <TransactionsTableContainer>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>22/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ 2.800,00</td>
                        <td>Casa</td>
                        <td>09/05/2021</td>
                    </tr>
                    <tr>
                        <td>Condomínio</td>
                        <td className="withdraw">R$ 990,00</td>
                        <td>Casa</td>
                        <td>07/05/2021</td>
                    </tr>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$ 4.600,00</td>
                        <td>Salário</td>
                        <td>03/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </TransactionsTableContainer>
    )   
}