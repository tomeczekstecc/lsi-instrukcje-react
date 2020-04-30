import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Search from './Search';
import {
  Wrapper,
  LisAboutWrapper,
  Container,
  Ul,
  Img,
  MenuButton,
} from './Menu.style';
import caretDown from '../../../assets/svg/caretDown.svg';
import logoMenu from '../../../assets/svg/logoMenu.svg';
import pdf from '../../../assets/svg/pdf.svg';

import Li from './Li';

const Menu = () => {
  const [showAboutLi, setShowAboutLi] = useState(false);
  const [show, setShow] = useState(true);

  const resetLinks = () => {
    setShowAboutLi(false);
  };

  return (
    <>
      <Wrapper>
        {' '}
        <MenuButton
          id='logoMenu'
          onClick={() => setShow((prev) => !prev)}
          src={logoMenu}
          alt=''
        />
        <Container show={show}>
          <div className='logo'>LSI instrukcje</div>
          <Ul show={show} className='primary-menu'>
            <Link onClick={resetLinks} to='/'>
              <span className='linkName'>PDF</span>
              <span className='linkSvg'>
                <img src={pdf} alt='document' />
              </span>
            </Link>

            <Link onClick={resetLinks} Link to='films'>
              Filmy
            </Link>

            <Link to='archive'>
              <li
                onClick={() => {
                  setShowAboutLi(false);
                }}
              >
                Archiwum
              </li>
            </Link>
          </Ul>

          <Ul show={show} className='secondary-menu'>
            <li style={style.li}>
              <div style={style.div}>
                O LSI
                <LisAboutWrapper showAboutLi={showAboutLi}>
                  <Link onClick={resetLinks} to='about'>
                    {' '}
                    <Li>O LSI 2014-2020</Li>
                  </Link>
                  <a
                    onClick={resetLinks}
                    href='https://www.youtube.com/channel/UCOLRaGQOE5gQfewv28DMNfQ'
                    target='_blank'
                  >
                    <Li>Instrukcje na Youtube</Li>
                  </a>
                  <a
                    onClick={resetLinks}
                    target='_blank'
                    href='https://rpo.slaskie.pl/repo/?unit=4&category=9'
                  >
                    <Li>Instrukcje na rpo.slaskie.pl</Li>
                  </a>
                  <a
                    onClick={resetLinks}
                    target='_blank'
                    href='https://rpo.slaskie.pl/szukaj/?q=lsi'
                  >
                    {' '}
                    <Li>LSI na rpo.slaskie.pl</Li>
                  </a>
                </LisAboutWrapper>{' '}
              </div>
              <Img
                onClick={() => {
                  setShowAboutLi((prev) => !prev);
                }}
                style={style.img}
                src={caretDown}
                alt='caretDown'
              />{' '}
            </li>
            <Link to='contact'>
              <li
                onClick={() => {
                  setShowAboutLi(false);
                }}
              >
                Kontakt
              </li>
            </Link>
            <Search />
          </Ul>
        </Container>
      </Wrapper>
    </>
  );
};

// Menu.defaultProps = {};

// Menu.propTypes = {};

const style = {
  li: {
    display: 'flex',
  },
  div: {
    minWidth: '50px',
    position: 'relative',
  },
};

export default Menu;
