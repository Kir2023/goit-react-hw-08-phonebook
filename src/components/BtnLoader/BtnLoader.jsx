import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

const BtnLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ProgressBar
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        height="40"
        width="100%"
        borderColor="#F4442E"
        barColor="darkgray"
        display="flex"
        alignItems="center"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default BtnLoader;
