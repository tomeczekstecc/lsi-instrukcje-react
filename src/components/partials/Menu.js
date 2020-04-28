import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  LisAboutWrapper,
  LisPdfWrapper,
  LisFilmsWrapper,
  Container,
  Ul,
  Img,
} from './Menu.style';
import caretDown from '../../assets/svg/caretDown.svg';
import Li from '../partials/Li';

const Menu = (props) => {
  const [showAboutLi, setShowAboutLi] = useState(false);
  const [showPdfLi, setShowPdfLi] = useState(false);
  const [showFilmsLi, setShowFilmsLi] = useState(false);

  return (
    <>
      <Wrapper>
        <Container>
          <div className='logo'>LSI instrukcje</div>
          <Ul className='primary-menu'>
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

            <li>Archiwum</li>
          </Ul>

          <Ul className='secondary-menu'>
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
            <li>Kontakt</li>
          </Ul>
        </Container>
      </Wrapper>
    </>
  );
};

Menu.defaultProps = {};

Menu.propTypes = {};

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
