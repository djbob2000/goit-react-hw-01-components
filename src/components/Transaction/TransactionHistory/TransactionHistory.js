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
        {transactions.map(({ type, amount, currency, id }) => (
          <Transaction
            key={id}
            type={type}
            currency={currency}
            amount={amount}
          />
        ))}
      </tbody>
    </table>
  );
};

// TransactionHistory.propTypes = {
//   transactions: PropTypes.array.isRequired,
// };

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
