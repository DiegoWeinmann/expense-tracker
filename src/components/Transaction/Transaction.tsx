import React from 'react';
import { Transaction as TransactionType } from '../../types';

interface TransactionProps extends TransactionType {}

export const Transaction: React.FC<TransactionProps> = ({
  id,
  amount,
  text,
}) => {
  const sign = Number(amount) < 0 ? '-' : '+';
  return (
    <li className="minus">
      {text}{' '}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  );
};
