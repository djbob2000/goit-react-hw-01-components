import PropTypes from 'prop-types';

function Transaction(props) {
  return (
    <tr>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Transaction;