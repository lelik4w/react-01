import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './default-avatar.jpg'
import styles from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => (
    <>
        <span className={isOnline ? styles.online : styles.offline}></span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </>
);

FriendListItem.defaultProps = {
    avatar: defaultAvatar,
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendListItem;