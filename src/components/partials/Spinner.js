import React from 'react';
import spinner from '../../assets/img/spinner.gif';

const Spinner = () => {
  return (
    <div style={style.main}>
      <img style={style.img} src={spinner} alt='spinner' />
    </div>
  );
};

export default Spinner;

const style = {
  main: {
    width: '100%',
    padding: '10% 20%'
  },
  img:{
    width:'100%',
    margin: '0 auto'
  }
};
