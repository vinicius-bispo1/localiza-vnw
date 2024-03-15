import * as S from "./styled"
import logo from "../assets/logovnw.jpg"

export default function Header() {
  return (
    <S.Header>
        <img src={"https://images2.imgbox.com/ca/ca/RjBOFE4T_o.png"} alt="" />
      <input placeholder="Busque seu carro aqui" type="text" />
     <S.Lista>
        <li>Aluguel Mensal</li>
        <li>Seminovos</li>
        <li>Frotas</li>
        <li>Carro por Assinatura</li>
     </S.Lista>

    </S.Header>
  )
}
