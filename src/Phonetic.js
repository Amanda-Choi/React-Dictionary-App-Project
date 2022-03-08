import { FaVolumeUp } from "react-icons/fa";

import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <span className="symbol">{props.phonetic.text}</span>
        <br />
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="speaker"
        >
          <FaVolumeUp />
        </a>
      </div>
    );
  } else {
    return null;
  }
}
