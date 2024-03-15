import * as S from "./styled"

export default function Card(props) {
  return (
    <S.Card>
        <img src={props.imagem} alt="" />
        <h2>{props.titulo}</h2>
        <p>R$:{props.texto}</p>
        <button>Alugue Agora</button>
    </S.Card>
  )
}
