import { useState } from "react";

const SpeechToText = () => {
  const [text, setText] = useState("");
  const [isListening, setIsListening] = useState(false);

  // Check for browser support
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true; // Keep listening
  recognition.interimResults = true; // Show intermediate results
  recognition.lang = "en-US"; // Set language

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join("");
    setText(transcript);
  };

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-lg font-bold">Audio to Text Converter</h2>
      <p className="border p-2 mt-4">{text || "Start speaking..."}</p>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded mr-2"
          onClick={startListening}
          disabled={isListening}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={stopListening}
          disabled={!isListening}
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default SpeechToText;
