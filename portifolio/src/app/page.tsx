import { Header } from './components/header/header'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <div className="experience">
        <h1>Experiência</h1>
        <h3>3 anos de experiecia com as seguintes linguagens</h3>
      </div>
      <div className="experience-time">
        <h3></h3>
      </div>
      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>EN - Basic</span>
          <span>PT-BR - Native Speaker</span>
        </div>
        <h3>Education</h3>
        <div className="educatio-info">
        <span>Analista e Desenvolvimento de sistemas - Unicesumar</span>
        <span>Bacharel em sistemas da informação - Facuildades Spei</span>
        </div>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>Contact me</button>
      </div>
      
    </main>
  )
}
