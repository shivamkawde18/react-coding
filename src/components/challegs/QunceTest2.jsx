import React, { useState, useEffect } from 'react';

const Login = ({ onLogin }) => {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export const OrderBook = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [symbols, setSymbols] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState('');
  const [prices, setPrices] = useState([]);
console.log(prices)
  useEffect(() => {
    // Fetch symbols from API when component mounts
    fetchSymbols();
  }, []);

  const fetchSymbols = async () => {
    try {
      const response = await fetch('https://api.binance.com/api/v3/exchangeInfo');
      const data = await response.json();
      const symbols = data.symbols.map(symbol => ({
        symbol: symbol.symbol,
        label: symbol.symbol,
      }));
      setSymbols(symbols);
    } catch (error) {
      console.error('Error fetching symbols:', error);
    }
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleSymbolChange = (event) => {
    setSelectedSymbol(event.target.value);
    fetchPrices(event.target.value);
  };

  const fetchPrices = async (symbol) => {
    try {
      const response = await fetch(`https://api.binance.com/api/v3/trades?symbol=${symbol}`);
      const data = await response.json();
      setPrices(data);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };

  return (
    <div>
      <h1>Order Book Page</h1>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <select value={selectedSymbol} onChange={handleSymbolChange}>
            <option value="">Select Symbol</option>
            {symbols.map(symbol => (
              <option key={symbol.symbol} value={symbol.symbol}>{symbol.label}</option>
            ))}
          </select>
          <table>
            <thead>
              <tr>
                {prices.length > 0 && Object.keys(prices[0]).map(key => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prices.map((price, index) => (
                <tr key={index}>
                  {Object.values(price).map((value, i) => (
                    <td key={i}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderBook;
