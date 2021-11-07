import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.statList}>
            {stats.map(({id, label, percentage})=>{
                const itemBox = () => {
                    switch(label){
                        case '.pdf':
                            return styles.purple;
                        case '.mp3':
                            return styles.red;
                        case '.psd':
                            return styles.turkise;
                        default:
                            return styles.blue;
                    }
                };

                return (<li key={id} className={itemBox()}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
                </li>);
            }
                
            )}
        </ul>
        
    </section>
);

Statistics.defaultProps = {
    title: '',
    styles: {
        item: 'blue'
    }
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })),
};

export default Statistics;