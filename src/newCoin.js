import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCoinPrice] = useState(0);
  const [canbuy, setCanby] = useState("");

  const coinPrice = (event) => {
    setCoinPrice(event.target.value);
  };

  const onPotato = (event) => {
    setCanby(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coin price! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={coinPrice}>
          <option>Select Coins</option>
          {coins.map((crypto, index) => (
            <option key={index} value={crypto.quotes.USD.price}>
              {crypto.name} ({crypto.symbol}) : {crypto.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <h2>I have amount⬇️⬇️</h2>
        <input
          onChange={onPotato}
          value={canbuy}
          type="number"
          placeholder="Write your USD"
        />{" "}
        $
      </div>
      <h2>You can buy : {canbuy / cost} coins</h2>
    </div>
  );
}
export default App;
