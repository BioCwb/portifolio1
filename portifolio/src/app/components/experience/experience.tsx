import "../experience/experience.scss"
import { Skill } from "../skill/skill"
import { SectioTitle } from "../sectionTitle/sectionTitle"
interface ComponentNameProps {

}
export function Experience() {
    return(
      <div className="experience">
      <SectioTitle text="Experience"/>
      <p>3 years working as a Software Developer, in companys such as Itaú, Stone and Aftersale.</p>
      <div className="experience-time">
        <Skill image="/react.png" measure={2} years="2 years"/>
        <Skill image="/ts.png" measure={3} years="3 years"/>
        <Skill image="/js.png" measure={3} years="3 years"/>
        <Skill image="/c-.png" measure={2} years="1 year"/>
      </div>
    </div>
    )
}