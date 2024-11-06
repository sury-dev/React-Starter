import { useState } from 'react';
import { InputBox } from './components/index.js';
import './App.css';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);  // Fetch currency info for the 'from' currency

  const options = Object.keys(currencyInfo);  // Currency options for select dropdown

  const swap = () => {
    setFrom(to);  // Swap from and to currencies
    setTo(from);
    setConvertedAmount(amount);  // Keep the amount same after swap
    setAmount(convertedAmount);  // Set the amount to the previously converted amount
  };

  const convert = () => {
    // Check if the 'to' currency exists in the fetched currencyInfo before proceeding with conversion
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
    else{
      setConvertedAmount(amount * 1);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();  // Call convert function when form is submitted
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currncyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}  // Update the 'from' currency
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value)}  // Update the amount based on input
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}  // Trigger the swap function when clicked
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}  // Display the converted amount
                currncyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}  // Update the 'to' currency
                selectCurrency={to}  // Use the 'to' currency for the dropdown
                amountDisable  // Disable the input field for amount (since it's a converted value)
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
