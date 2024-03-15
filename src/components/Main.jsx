import { useState } from "react"
import Card from "./Card"
import * as S from "./styled"

export default function Main() {

  return (
    <main>
      
    <S.BoxCard>
      <Card imagem={"https://gazetanortesc.com.br/wp-content/uploads/2022/09/foto-1-6-1-696x364.jpg"}
        titulo={"Uno Buffado"}
        texto={"5.000"}
       />
       <Card imagem={"https://as1.ftcdn.net/v2/jpg/02/45/62/60/1000_F_245626007_SKKwTJWdX2XDlofVZDyI5mQifhaJFg6X.jpg"}
        titulo={"Pickup da Fernanda"}
        texto={"10.000"}
       />
       <Card imagem={"https://noticiassobreautomovel.com.br/wp-content/uploads/2024/03/Chevy-Impala-67.jpg"}
        titulo={"Impala winchester's"}
        texto={"20.000"}
       />
    </S.BoxCard>
     <S.BoxCard>
      <Card imagem={"https://gazetanortesc.com.br/wp-content/uploads/2022/09/foto-1-6-1-696x364.jpg"}
        titulo={"Uno Buffado"}
        texto={"5.000"}
       />
       <Card imagem={"https://as1.ftcdn.net/v2/jpg/02/45/62/60/1000_F_245626007_SKKwTJWdX2XDlofVZDyI5mQifhaJFg6X.jpg"}
        titulo={"Pickup da Fernanda"}
        texto={"10.000"}
       />
       <Card imagem={"https://noticiassobreautomovel.com.br/wp-content/uploads/2024/03/Chevy-Impala-67.jpg"}
        titulo={"Impala winchester's"}
        texto={"20.000"}
       />
    </S.BoxCard>
    </main>
  )
}
