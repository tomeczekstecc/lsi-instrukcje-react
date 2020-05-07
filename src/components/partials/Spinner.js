import React from 'react';
import spinner from '../../assets/img/spinner.gif';

const Spinner = () => {
  return (
    <div style={style.main}>
      <img src={spinner} alt='spinner' />
    </div>
  );
};

export default Spinner;

const style = {
  main: {

  }
}
