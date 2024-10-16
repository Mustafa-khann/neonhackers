import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showFinalDestination, setShowFinalDestination] = useState(false);
  const [glitchText, setGlitchText] = useState('DATA PHANTOMS');

  const handleShowFinalDestination = () => {
    setShowFinalDestination(true);
  };

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChance = Math.random();
      if (glitchChance > 0.7) {
        setGlitchText('N3ON H4CK3RS');
        setTimeout(() => setGlitchText('N30N H4CK3RS'), 200);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const encodedMessage = "V2VsbCBkb25lLCBOZW9uIEhhY2tlcnMhIFlvdSd2ZSBzdWNjZXNzZnVsbHkgZGVjb2RlZCB0aGUgaGlkZGVuIG1lc3NhZ2U6ICdJbiB0aGUgd29ybGQgb2YgY3liZXIgZHJlYW1zLCBpbm5vdmF0aW9uIGlzIHlvdXIgZ3JlYXRlc3QgYWxseS4nIFlvdSd2ZSBuYXZpZ2F0ZWQgVGhlIEdyaWQgd2l0aCBza2lsbCBhbmQgdGVhbXdvcmsuIENlbGVicmF0ZSB5b3VyIHZpY3RvcnkgYW5kIGdldCByZWFkeSB0byB1bmxlYXNoIHlvdXIgbmV4dCBiaWcgaWRlYSE=";

  return (
    <div className="App">
      <div className="cyberpunk-background"></div>
      {!showFinalDestination ? (
        <div className="cyberpunk-container">
          <h1 className="glitch" data-text={glitchText}>{glitchText}</h1>
          <p className="subtext">Welcome to Night City, 2077</p>
          <button className="cyberpunk-button" onClick={handleShowFinalDestination}>
            JACK IN
          </button>
        </div>
      ) : (
        <div className="encoded-message">
          <p className="message-body">{encodedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
