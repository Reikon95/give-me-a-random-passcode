import React from "react";
import "./content.css";
export default function Content() {
  return (
    <div className="content">
      <div>
        <h2>Additional Info </h2>
        This is simply an advisory tool and we are not responsible for your
        password useage.
        <div>
          Programmed by{" "}
          <a
            href="https://www.linkedin.com/in/cameron-blackwood-2b758883/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cameron Blackwood.
          </a>
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
  );
}
