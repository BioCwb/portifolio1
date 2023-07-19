import Image from "next/image"
import "../header/header.scss"

export function Header (){
    return(
<div className="header">
          <div>
            <h1>Hi, i´m Fabio Santos! 👋</h1>
            <h2>Developer Jr</h2>
          </div>
          <Image
            src="/perfil.jpg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
        </div>

    )
}