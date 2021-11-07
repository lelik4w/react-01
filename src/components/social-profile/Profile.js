import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './default-avatar.jpg'
import styles from './Profile.module.css';

const Profile = ({name, tag, location, avatar, stats}) => (
    <div className={styles.profile}>
        <div className="description">
            <img
            src={avatar}
            alt={name}
            className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.qty}>{stats.followers}</span>
            </li>
            <li>
            <span className={styles.label}>Views</span>
            <span className={styles.qty}>{stats.views}</span>
            </li>
            <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.qty}>{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.defaultProps = {
    avatar: defaultAvatar
};

Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object,
};

export default Profile;