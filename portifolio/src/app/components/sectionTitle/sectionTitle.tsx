import "../sectionTitle/sectionTitle.scss"

interface SectioTitleProps {
    text: string
}
export function SectioTitle({ text} : SectioTitleProps) {
    return(
        <h3 className="section-title">{text}</h3>
    )
}