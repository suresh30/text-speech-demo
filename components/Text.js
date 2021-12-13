// import React from "react";

// // function Text(props) {
// //   console.log(props);
// //   const SpeechRecognition =
// //     props.window.SpeechRecognition || props.window.webkitSpeechRecognition;
// //   const mic = new SpeechRecognition();

// //   mic.continuous = true;
// //   mic.interimResults = true;
// //   mic.lang = "en-US";

// //   const [isListening, setIsListening] = useState(false);
// //   const [note, setNote] = useState(null);
// //   const [savedNotes, setSavedNotes] = useState([]);

// //   useEffect(() => {
// //     handleListen();
// //     console.log(props);
// //   }, [isListening]);

// //   const handleListen = () => {
// //     if (isListening) {
// //       mic.start();
// //       mic.onend = () => {
// //         console.log("continue..");
// //         mic.start();
// //       };
// //     } else {
// //       mic.stop();
// //       mic.onend = () => {
// //         console.log("Stopped Mic on Click");
// //       };
// //     }
// //     mic.onstart = () => {
// //       console.log("Mics on");
// //     };

// //     mic.onresult = (event) => {
// //       const transcript = Array.from(event.results)
// //         .map((result) => result[0])
// //         .map((result) => result.transcript)
// //         .join("");
// //       console.log(transcript);
// //       setNote(transcript);
// //       mic.onerror = (event) => {
// //         console.log(event.error);
// //       };
// //     };
// //   };

// //   const handleSaveNote = () => {
// //     setSavedNotes([...savedNotes, note]);
// //     setNote("");
// //   };

// //   return (
// //     <>
// //       <h1>Voice Notes</h1>
// //       <div className="container">
// //         <div className="box">
// //           <h2>Current Note</h2>
// //           {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
// //           <button onClick={handleSaveNote} disabled={!note}>
// //             Save Note
// //           </button>
// //           <button onClick={() => setIsListening((prevState) => !prevState)}>
// //             Start/Stop
// //           </button>
// //           <p>{note}</p>
// //         </div>
// //         <div className="box">
// //           <h2>Notes</h2>
// //           {savedNotes.map((n) => (
// //             <p key={n}>{n}</p>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// class Text extends React.Component {
//   //   console.log(window);

//   state = {
//     isListening: false,
//     note: null,
//     savedNotes: [],
//   };

//   componentDidMount() {
//     console.log(window);
//   }

//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//       </div>
//     );
//   }
// }

// export default Text;

import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Link from "next/link";

const Text = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <Link href="/" className="link">
        Go Back
      </Link>
    </div>
  );
};
export default Text;
