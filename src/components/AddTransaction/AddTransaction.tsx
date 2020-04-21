import React, { useState } from 'react';

export const AddTransaction: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setText(e.target.value)
            }
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
