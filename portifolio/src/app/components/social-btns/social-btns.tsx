import { GitHubIcon } from "../icons/github-icons";
import { InstaIcon } from "../icons/insta-icons";
import { LinkedInIcon } from "../icons/linkedin-icons";


import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/bioteckster/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/fabio-augusto-santos-a148b12b/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/biocwb">
                <GitHubIcon/>
            </a>
            
        </div>
    )
}