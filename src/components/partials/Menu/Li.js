import React from 'react';
import { DropdownItem } from './Li.style';
// import PropTypes from 'prop-types';

const Li = (props) => {
  return (
    <div style={style.liWrapper} className='liWrapper'>
      <DropdownItem>{props.children}</DropdownItem>
    </div>
  );
};

// Li.propTypes = {};

const style = {
  liWrapper: {
    borderBottom: '1px solid lightgray',
    width:'230px'

  },
};

export default Li;
