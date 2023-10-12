import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    // Fetch the list of coins
    fetch('https://api.coinranking.com/v2/coins')
      .then(response => response.json())
      .then(data => {
        setCoins(data.data.coins.slice(0, 50)); // Limit to first 50 coins
      })
      .catch(error => console.error('Error:', error));
  }, []);

  useEffect(() => {
    // Fetch coin data (replace with your actual API endpoint)
    fetch('https://example.com/api/coin-data')
      .then(response => response.json())
      .then(data => {
        setCoinData(data);
      })
      .catch(error => console.error('Error:', error));
  }, []); // Adjust the URL and data handling accordingly

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">DAACoins</h1>
      </header>
      <section className="news-section">
        <div className="container">
          <h2>Latest News</h2>
          <div className="news-content">
            <div className="news-item">
              <h3>Bitcoin Hits New All-Time High</h3>
              <p>Bitcoin reached a new all-time high of $60,000 today, marking a significant milestone in the cryptocurrency market.</p>
            </div>
            <div className="news-item">
              <h3>Ethereum Upgrades to ETH 2.0</h3>
              <p>Ethereum successfully transitioned to the new ETH 2.0 network, bringing scalability improvements and energy efficiency.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="crypto-section">
        <div className="container">
          <div className="crypto-list-container">
            {coins.map(coin => (
              <div className="crypto-item" key={coin.id}>
                <h4>{coin.name}</h4>
                <p>Symbol: {coin.symbol}</p>
                <p>Price: ${parseFloat(coin.price).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="graph-section">
        <div className="container">
          <h2>Top 3 Cryptocurrency Graphs</h2>
          <div className="chart-container">
            <div className="graph-image">
            <img src="./images/pic1.png" alt="Graph 1" />
            <img src="./images/pic2.png" alt="Graph 1" />
            <img src="./images/pic3.png" alt="Graph 1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
