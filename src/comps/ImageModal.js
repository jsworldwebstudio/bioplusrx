import React from 'react';

const ImageModal = ({ selectedUrl, selectedAltText, setValues }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')){
      setValues(null, null);
    };
  };

  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedUrl} alt={selectedAltText} />
    </div>
  );
}

export default ImageModal;
