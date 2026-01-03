import React, { useState } from 'react';
import ShortenForm from '../components/ShortenForm';
import ResolveForm from '../components/ResolveForm';

const Home = () => {
  const [activeTab, setActiveTab] = useState('shorten');

  return (
    <div className="container">
      <h1>🚀 URL Shortener</h1>
      
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'shorten' ? 'active' : ''}`}
          onClick={() => setActiveTab('shorten')}
        >
          Shorten URL
        </button>
        <button 
          className={`tab-btn ${activeTab === 'resolve' ? 'active' : ''}`}
          onClick={() => setActiveTab('resolve')}
        >
          Resolve / Check
        </button>
      </div>

      {activeTab === 'shorten' ? <ShortenForm /> : <ResolveForm />}
    </div>
  );
};

export default Home;