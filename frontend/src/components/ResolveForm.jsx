import React, { useState } from 'react';
import { resolveUrl } from '../api/urlService';
import ResultCard from './ResultCard';

const ResolveForm = () => {
  const [shortCode, setShortCode] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setOriginalUrl('');

    try {
      const result = await resolveUrl(shortCode);
      // Assuming backend returns { original_url: "..." }
      setOriginalUrl(result.original_url);
    } catch (err) {
      setError('Short code not found.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Check Destination</h2>
      <p style={{marginBottom: '10px', fontSize: '0.9rem', color: '#666'}}>
        Enter a short code to see where it leads without visiting.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter short code (e.g., Xy7z9)"
            value={shortCode}
            onChange={(e) => setShortCode(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Checking...' : 'Resolve'}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>

      <ResultCard title="Original URL:" data={originalUrl} />
    </div>
  );
};

export default ResolveForm;