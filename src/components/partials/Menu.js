import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Container, Ul } from './Menu.style';

const Menu = (props) => {
  return (
    <>
      <Wrapper>
        <Container>
          <div className='logo'>LSI instrukcje</div>
          <Ul className='primary-menu'>
            <li style = {{}}>Instrukcje pdf</li>
            <li> Filmy instruktażowe</li>
            <li>Archiwum</li>
          </Ul>

          <Ul className='secondary-menu'>
            <li>O LSI</li>
            <li>Kontakt</li>
          </Ul>
        </Container>
      </Wrapper>
    </>
  );
};

Menu.defaultProps = {};

Menu.propTypes = {};

export default Menu;
