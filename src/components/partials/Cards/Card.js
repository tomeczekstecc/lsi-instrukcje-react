import React from 'react';
import { CardContainer } from './Card.style';
import rwd from '../../../assets/img/rwd.jpg';
import { Link } from 'react-router-dom';

const Card = ({ cardData }) => {
  const { archived, publishDate, shortTitle, premiereTag } = cardData;

  return (
    <CardContainer premiereTag={premiereTag}>
      <div className='card-container'>
        <div className='thecard'>
          <div className='card-img'>
            <img src={rwd} alt='LSI' />
          </div>
          <div id='new'>NOWOŚĆ</div>
          <div className='card-caption'>
            <a
              title='czytaj'
              target='_blank'
              href='http://bestcodes.pl/lsi/pdf_host/[2.0]_KOP_oper.pdf'
            >
              <i id='like-btn' className='fas fa-book-reader'></i>
            </a>
            <span className='date'>{publishDate}</span>
            <h1>{shortTitle}</h1>
          </div>
          <div className='card-outmore'>
            <h5>Więcej szczegółów</h5>
            <i id='outmore-icon' className='fa fa-angle-right'></i>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
