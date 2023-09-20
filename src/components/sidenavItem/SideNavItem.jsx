/* eslint-disable react/prop-types */
import styles from './sideNavItem.module.css';

const SideNavItem = ({ icon, text, selected }) => {
  return (
    <div className={`${styles.container} ${selected && styles.selectedItem}`}>
      <img className={styles.icon} src={icon} alt='icon' />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
export default SideNavItem;
