import React, { useState } from 'react';

const ResultCard = ({ title, data }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!data) return null;

  return (
    <div className="card result-box">
      <h3>{title}</h3>
      <div className="input-group">
        <input type="text" value={data} readOnly />
        <button onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;