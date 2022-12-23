import PropTypes from 'prop-types';
import Transaction from '../Transaction';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={s.transaction_history}>
      <thead>
        <tr>
          <th> Type </th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(prop => (
          <Transaction
            key={prop.id}
            type={prop.type}
            currency={prop.currency}
            amount={prop.amount}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
