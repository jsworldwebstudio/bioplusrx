import React, { useState } from 'react';
import Title from './comps/Title';
import ImageGrid from './comps/ImageGrid';
import ImageModal from './comps/ImageModal';

function App() {
  const [selectedUrl, setSelectedUrl] = useState(null);
  const [selectedAltText, setSelectedAltText] = useState(null);

  const setValues = (url, altText) => {
    setSelectedUrl(url);
    setSelectedAltText(altText);
  };

  return (
    <div className="App">
      <div className="title">
        <Title />
        <ImageGrid setValues={setValues} />
        { selectedUrl && <ImageModal selectedUrl={selectedUrl} selectedAltText={selectedAltText} setValues={setValues} /> }
      </div>
    </div>
  );
}

export default App;
