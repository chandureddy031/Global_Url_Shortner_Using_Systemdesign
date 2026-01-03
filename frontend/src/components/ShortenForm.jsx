import React, { useState } from 'react';
import { shortenUrl } from '../api/urlService';
import ResultCard from './ResultCard';

const ShortenForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShortUrl('');

    try {
      const result = await shortenUrl(longUrl);
      // Assuming backend returns { short_url: "..." }
      setShortUrl(result.short_url); 
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Shorten a URL</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="url"
            placeholder="Enter long URL (https://...)"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Shorten'}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>

      <ResultCard title="Shortened Link:" data={shortUrl} />
    </div>
  );
};

export default ShortenForm;