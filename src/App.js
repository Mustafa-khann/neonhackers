import React, { useState } from 'react';
import './App.css';

function App() {
  const [showFinalDestination, setShowFinalDestination] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  const handleShowFinalDestination = () => {
    setShowFinalDestination(true);
  };

  const encodedMessage = "V2VsbCBkb25lLCBOZW9uIEhhY2tlcnMhIFlvdSd2ZSBzdWNjZXNzZnVsbHkgZGVjb2RlZCB0aGUgaGlkZGVuIG1lc3NhZ2U6ICdJbiB0aGUgd29ybGQgb2YgY3liZXIgZHJlYW1zLCBpbm5vdmF0aW9uIGlzIHlvdXIgZ3JlYXRlc3QgYWxseS4nIFlvdSd2ZSBuYXZpZ2F0ZWQgVGhlIEdyaWQgd2l0aCBza2lsbCBhbmQgdGVhbXdvcmsuIENlbGVicmF0ZSB5b3VyIHZpY3RvcnkgYW5kIGdldCByZWFkeSB0byB1bmxlYXNoIHlvdXIgbmV4dCBiaWcgaWRlYSE=";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(encodedMessage);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Failed to copy');
    }
  };

  return (
    <div className="App">
      {!showFinalDestination ? (
        <div className="cyberpunk-container">
          <h1 className="glitch" data-text="NEON HACKERS">NEON HACKERS</h1>
          <p className="subtext">Welcome to the future of coding</p>
          <button className="cyberpunk-button" onClick={handleShowFinalDestination}>
            SHOW THE FINAL DESTINATION
          </button>
        </div>
      ) : (
        <div className="encoded-message-container">
          <div className="encoded-message">
            {encodedMessage}
          </div>
          <button className="cyberpunk-button copy-button" onClick={copyToClipboard}>
            {copySuccess || 'Copy'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
