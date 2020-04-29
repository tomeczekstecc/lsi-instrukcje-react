import React, { useState} from 'react';
// import PropTypes from 'prop-types';
import {
  Wrapper,
  LisAboutWrapper,
  LisPdfWrapper,
  LisFilmsWrapper,
  Container,
  Ul,
  Img,
  MenuButton,
} from './Menu.style';
import caretDown from '../../../assets/svg/caretDown.svg';
import logoMenu from '../../../assets/svg/logoMenu.svg';
import Li from './Li';

const Menu = () => {
  const [showAboutLi, setShowAboutLi] = useState(false);
  const [showPdfLi, setShowPdfLi] = useState(false);
  const [showFilmsLi, setShowFilmsLi] = useState(false);
  const [show, setShow] = useState(true);

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
            <li style={style.li}>
              <div style={style.div}>
                PDF
                <LisPdfWrapper showPdfLi={showPdfLi}>
                  <Li>Dla Operatora</Li>
                  <Li>Dla Beneficjenta</Li>
                  <Li>Instrukcje na rpo.slaskie.pl</Li>
                </LisPdfWrapper>
              </div>
              <Img
                onClick={() => {
                  setShowPdfLi((prev) => !prev);
                  setShowAboutLi(false);
                  setShowFilmsLi(false);
                }}
                style={style.img}
                src={caretDown}
                alt='caretDown'
              />{' '}
            </li>
            <li style={style.li}>
              <div style={style.div}>
                Filmy
                <LisFilmsWrapper showFilmsLi={showFilmsLi}>
                  <Li>Dla Operatora</Li>
                  <Li>Dla Beneficjenta</Li>
                  <Li>KanaLSI na YouTube</Li>
                </LisFilmsWrapper>
              </div>
              <Img
                onClick={() => {
                  setShowFilmsLi((prev) => !prev);
                  setShowAboutLi(false);
                  setShowPdfLi(false);
                }}
                style={style.img}
                src={caretDown}
                alt='caretDown'
              />{' '}
            </li>

            <li
              onClick={() => {
                setShowAboutLi(false);
                setShowPdfLi(false);
                setShowFilmsLi(false);
              }}
            >
              Archiwum
            </li>
          </Ul>

          <Ul show={show} className='secondary-menu'>
            <li style={style.li}>
              <div style={style.div}>
                O LSI
                <LisAboutWrapper showAboutLi={showAboutLi}>
                  <Li>O LSI 2014-2020</Li>
                  <Li>Instrukcje na Youtube</Li>
                  <Li>LSI na rpo.slaskie.pl</Li>
                </LisAboutWrapper>{' '}
              </div>
              <Img
                onClick={() => {
                  setShowAboutLi((prev) => !prev);
                  setShowPdfLi(false);
                  setShowFilmsLi(false);
                }}
                style={style.img}
                src={caretDown}
                alt='caretDown'
              />{' '}
            </li>
            <li
              onClick={() => {
                setShowAboutLi(false);
                setShowPdfLi(false);
                setShowFilmsLi(false);
              }}
            >
              Kontakt
            </li>
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
