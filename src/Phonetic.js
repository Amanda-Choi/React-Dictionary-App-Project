import { FaVolumeUp } from "react-icons/fa";
import "./Phonetic.css";

export default function Phonetic(props) {
  const playAudio = (event) => {
    event.preventDefault();
    const audioElement = new Audio(props.phonetic.audio);
    audioElement.play();
  };

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="speaker"
          onClick={playAudio}
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
