import React from "react"
import "./content.css"
export default function Content() {
  return (
    <div className="content">
      <div>
        <h2>Additional Info </h2>
        <div>
          {" "}
          This is simply an advisory tool and I'm not responsible for your
          password useage.
        </div>
        <div>
          You can check if any existing passwords you use have been compormised
          using{" "}
          <a
            href="https://haveibeenpwned.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            haveibeenpwned.
          </a>
        </div>
        <div>
          Programmed by{" "}
          <a
            href="https://www.linkedin.com/in/cameron-blackwood-2b758883/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cameron Blackwood
          </a>{" "}
          using Javascript/React (with hooks).
        </div>
        <a
          href="https://github.com/Reikon95/give-me-a-random"
          rel="noopener noreferrer"
          target="_blank"
        >
          Check out the code here!
        </a>
      </div>
    </div>
  )
}
