import { FaVolumeUp } from "react-icons/fa";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="speaker"
        >
          <FaVolumeUp />
        </a>
        <span className="symbol">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
