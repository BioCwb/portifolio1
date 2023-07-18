import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import './styles/home.scss'

export default function Home() {
  return (
    <main className='container'>
      <Header />
      <Experience />
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
