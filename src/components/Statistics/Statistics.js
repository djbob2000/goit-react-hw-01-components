import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const itemBGColor = ['#50c4f5', '#a43cf3', '#e64c66', '#20b8c5', '#4caf50'];
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>
        {stats.map((stat, index) => (
          <li
            className={s.item}
            key={stat.id}
            style={{ backgroundColor: itemBGColor[index % itemBGColor.length] }}
          >
            <span className={s.label}>{stat.label} </span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

// function isTitleHere(title) {
//   return <h2 className={s.title}>{title}</h2>;
// };

// function showTitle(props) {
//   const isTitleSend = props.title;
//   if (isTitleSend) {
//     return <isTitleHere />;
//   }
//   return null;
// };

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
