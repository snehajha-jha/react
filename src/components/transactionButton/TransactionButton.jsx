/* eslint-disable react/prop-types */
const TransactionButton = ({ title, icon }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems:'center'
      }}
    >
      <div
        style={{
          width: '35px',
          height: '35px',
          backgroundColor: 'red',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor:'pointer'
        }}
      >
        <img style={{ width: '20px' }} src={icon} alt='button-icon' />
      </div>
      <span style={{ fontSize: '10px' }}>{title}</span>
    </div>
  );
};

export default TransactionButton;
