import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const itemBGColor = ['#50c4f5', '#a43cf3', '#e64c66', '#20b8c5', '#4caf50'];
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>
        {stats.map(({ id, label, percentage }, index) => (
          <li
            className={s.item}
            key={id}
            style={{ backgroundColor: itemBGColor[index % itemBGColor.length] }}
          >
            {console.log(index % itemBGColor.length)}
            <span className={s.label}>{label} </span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  stats: [],
};

// Statistics.propTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.array.isRequired,
// };

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
