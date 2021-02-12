import React from "react"
import { SocialIcons } from "./social.css"
import GithubIcon from "../../icons/social/github.svg"
import LinkedinIcon from "../../icons/social/linkedin.svg"
import CodepenIcon from "../../icons/social/codepen.svg"
import TwitterIcon from "../../icons/social/twitter.svg"

const Social = () => {
  return (
    <SocialIcons>
      <li>
        <a
          rel="noreferrer"
          href="https://github.com/CoralSilver"
          target="_blank"
          aria-label="github icon"
        >
          <GithubIcon />
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/coral-s-063b5028/"
          target="_blank"
          aria-label="linkedin icon"
        >
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          href="http://codepen.io/coralsea/"
          target="_blank"
          aria-label="codepen icon"
        >
          <CodepenIcon />
        </a>
      </li>
      <li>
        <a
          rel="noreferrer"
          href="https://twitter.com/coral_silverman"
          target="_blank"
          aria-label="twitter icon"
        >
          <TwitterIcon />
        </a>
      </li>
    </SocialIcons>
  )
}

export default Social
