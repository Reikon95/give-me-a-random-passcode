import React from "react";
import "./content.css";
export default function Content() {
  return (
    <div className="content">
      {/* <h2>Why should I care about this?</h2>
      <ul>
        <li>
          {" "}
          - Simple passwords are a hacker's best friend - if they can guess it,
          they can get it.
        </li>
        <li>
          - Hackers are most likely to target somebody who's password relates to
          their interests - for example, I wouldn't make my passcode{" "}
          <em>ArsenalFan123</em>.
        </li>
        <li>
          - Because the codes generated here are random, it would be very
          difficult to guess!
        </li>
      </ul>
      <h2>How long should my password be?</h2>
      <p>
        It's about striking a balance - the general principle is the longer your
        password, the more secure it is, but this isn't the only factor. In
        practical terms, you need to be able to remember your passcode! That
        being said, in most cases 8 characters should be your minimum.
      </p>
      <h2>Why do you suggest using different characters?</h2>
      <p>
        Useage of special characters, numbers and a mix of upper and lower case
        letters make your password both much harder to guess and crack.
      </p>
      <h2>What should I do now? </h2>
      <p>Good question! Here's some general principles/tips to stick by:</p>
      <ul className="content-list">
        <li>Avoid using the same password for multiple services!</li>
        <li>
          If any dialog prompt asks for your password, take a minute to check
          the domain is legit, and ask yourself why they need it.
        </li>
        <li>
          You can see if any website/service you have signed up for has been
          breached by entering your email at{" "}
          <a
            href="https://haveibeenpwned.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            haveibeenpwned
          </a>
        </li>
      </ul> */}
      <div>
        <h2>Additional Info </h2>
        This is simply an advisory tool and we are not responsible for your
        password useage. Programmed by Cameron Blackwood -{" "}
        <a
          href="mailto:cameronjwblackwood@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          get in touch here.
        </a>{" "}
        <a
          href="https://github.com/Reikon95/give-me-a-random"
          rel="noopener noreferrer"
          target="_blank"
        >
          Check out the code
        </a>
      </div>
    </div>
  );
}
