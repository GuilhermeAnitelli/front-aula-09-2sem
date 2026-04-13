import { useEffect, useState } from "react"
import { listaProdutos } from "../../data/listaProdutos";
import type { TipoProduto } from "../../types/tipoProduto";
import { Link } from "react-router-dom";

export default function Produtos() {

  const [produtos, setProdutos] = useState<TipoProduto[]>();

  useEffect(() => {

    const lista = async ()=>{ 
      await setProdutos(listaProdutos);
    }
    lista();

  },[]);

  
  return (
    <main>
      <h1>Produtos</h1>

      <div>
        <table className="tabelaProd">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>PREÇO</th>
              <th>EDITAR/EXCLUIR</th>
            </tr>
          </thead>
          <tbody>
            {
              produtos?.map((p)=>(
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.nome}</td>
                  <td>{p.preco}</td>
                  <td><Link to={`/editar-produtos/${p.preco}`}>EDITAR</Link>  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                Quantidade de produtos : {produtos?.length}
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>


    </main>
  )
}