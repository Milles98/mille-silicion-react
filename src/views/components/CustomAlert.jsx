import React from 'react';

const CustomAlert = ({ config: { message, type }, onClose }) => (
  <>
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(5px)',
        backgroundColor: 'rgba(0,0,0,0.4)', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
      }}
    ></div>
    <div
      style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: type === 'success' ? '#d4edda' : '#f8d7da',
        color: type === 'success' ? '#155724' : '#721c24',
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'auto',
        maxWidth: '80%',
      }}
    >
      <span>{message}</span>
      <button className='btn-theme' onClick={onClose} style={{ marginLeft: '20px', cursor: 'pointer' }}>
        Close
      </button>
    </div>
  </>
);

export default CustomAlert;
