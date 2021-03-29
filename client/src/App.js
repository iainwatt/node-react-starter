import React, { useState, useEffect } from "react";

// SERVICES
import dictionaryService from './services/dictionaryService';

function App() {

  const word_def = dictionaryService.getWord()

  return (
    <div className="App">
      <p>show word here</p>
      <p>{word_def}</p>
    </div>
  );
}

export default App;
