import { SectioTitle } from "../sectionTitle/sectionTitle"



interface  InfoProps{

}
export function Info(props : InfoProps) {
    return(
        <div className="infos">
            <SectioTitle text="Languages"/>
        
        <div className="languages-info">
        <span>🇺🇸 EN - Fluent</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        
        <SectioTitle text="Education"/>
        <div className="educatio-info">
        <span>🎓 Analista e Desenvolvimento de sistemas - Unicesumar</span>
        <span>🎓 Bacharel em sistemas da informação - Facuildades Spei</span>
        </div>
      </div>
    )
}

