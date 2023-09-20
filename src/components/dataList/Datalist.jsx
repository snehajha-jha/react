import styles from './datalist.module.css';
import constants from './constants';



const Datalist = () => {
   
  return (
    constants.map(item=><div key={item.id} className={styles.container}>
        <div style={{ width: '10%', }}>{item.id}</div>
        <div style={{ width: '25%' }}>{item.name} |<span style={{color:'#999',padding:'5px'}}>{item.code}</span></div>
        <div style={{ width: '20%' }}>{item.price}</div>
        <div style={{ width: '15%' }}>{item.change}</div>
        <div style={{ width: '20%'}}>
          <img style={{ width: '20px' }} src={`/icons/trending-${item.trend}.svg`} />
        </div>
        <div style={{ width: '10%' }}>
          <div className={styles.infoButton}>Info</div>
        </div>
      </div>)
  );
};

export default Datalist;
