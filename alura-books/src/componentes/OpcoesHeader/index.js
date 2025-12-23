import styled from 'styled-components'

const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

const Opcoes = styled.ul`
 display: flex;
`

//Lembrar que está utilizando funções em javascript -> Posso criar um array com qlqr texto que queira
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
  return (
    <Opcoes>
      { textoOpcoes.map( (texto) => ( //Chama função map para acessar esse array criado
        <Opcao><p>{texto}</p></Opcao>
      ) ) }
    </Opcoes>
  )
}

export default OpcoesHeader