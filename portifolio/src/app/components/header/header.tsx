import Image from "next/image"
import "../header/header.scss"

export function Header (){
    return(
<div className="header">
    <div>

        <h1>Ola! Sou Fabio Santos</h1>
        <h2>Desenvolvedor jr</h2>
    </div>
      <Image
       src="/perfil.jpg"
        alt=""
        width={325}
        height={310}
        priority />
      </div>

    )
}