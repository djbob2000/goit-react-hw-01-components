import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'

function FriendListItem({name, avatar, isOnline}){
    const styleStatus = isOnline === true ? s.active : s.noActive
    return (
        <li className={s.item}>
            <span className={styleStatus}></span>
            <img className={s.avatar} src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
