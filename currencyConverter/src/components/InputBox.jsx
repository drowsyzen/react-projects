import { useRef } from "react";
import React from "react";

function InputBox({
  className,
  label,
  amount = 0,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
}) {
  const inputRef = useRef();

  console.log("amount>>>>>>>", amount);

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={inputRef} className="text-black/80 mb-2 inline-block">
          {label}
        </label>
        <input
          id={inputRef}
          className="outline-none w-full text-black/80 bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/80 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 text-black/80 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
