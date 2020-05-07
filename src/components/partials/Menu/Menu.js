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
  Logo,
} from './Menu.style';
import caretDown from '../../../assets/svg/caretDown.svg';
import logoMenu from '../../../assets/svg/logoMenu.svg';
import pdf from '../../../assets/svg/pdf.svg';
import film from '../../../assets/svg/film.svg';
import archive from '../../../assets/svg/archive.svg';
import about from '../../../assets/svg/about.svg';
import contact from '../../../assets/svg/contact.svg';

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
          <Logo className='logo'>LSI instrukcje</Logo>
          <Ul show={show} className='primary-menu'>
            <li>
              <Link onClick={resetLinks} to='/'>
                <span className='linkName'>PDF</span>
                <span className='linkSvg'>
                  <img src={pdf} alt='document' />
                </span>
              </Link>
            </li>
            <li>
              <Link onClick={resetLinks} to='films'>
                <span className='linkName'>Filmy</span>
                <span className='linkSvg'>
                  <img src={film} alt='document' />
                </span>
              </Link>
            </li>{' '}
            <li
              title='archiwum'
              onClick={() => {
                setShowAboutLi(false);
              }}
            >
              <Link to='archive'>
                <span className='linkName'>Archiwum</span>
                <span className='linkSvg'>
                  <img src={archive} alt='document' />
                </span>
              </Link>{' '}
            </li>
          </Ul>

          <Ul show={show} className='secondary-menu'>
            <li style={style.li}>
              <div style={style.div}>
                <span className='linkName'>O LSI</span>
                <span className='linkSvg'>
                  <img src={about} alt='document' />
                </span>

                <LisAboutWrapper id="lisAboutWrapper" showAboutLi={showAboutLi}>
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
              <Img id="caret"
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
                <span className='linkName'>Kontakt</span>
                <span className='linkSvg'>
                  <img src={contact} alt='document' />
                </span>
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
