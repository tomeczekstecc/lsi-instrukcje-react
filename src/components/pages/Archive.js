import React, { useEffect, useState } from 'react';
import Card from '../partials/Cards/Card';
import { Wrapper } from './Pdfs.style';

const Archive = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docsData = await (
        await fetch('https://dokmenagier.herokuapp.com/api/pdfs')
      ).json();
      setDocs(docsData.data);
    };
    fetchData();
  }, []);

  console.log(docs);
  const cardsBen = docs
    .filter((item) => item.target === 'ben' && item.archived)
    .map((item, i) => <Card cardData={item} key={i} />);

  const cardsOper = docs
    .filter((item) => item.target === 'oper' && item.archived)
    .map((item, i) => <Card cardData={item} key={i} />);
  return (
    <Wrapper id='wrapper'>
      <h1 className='title'>Operator</h1>
      <div className='type-wrapper'>
        {cardsOper.length > 0 ? (
          cardsOper
        ) : (
          <h1>Jescze nie dodano instrukcji</h1>
        )}
      </div>
      <h1 className='title'>Beneficjent</h1>
      <div className='type-wrapper'>
        {' '}
        {cardsBen.length > 0 ? (
          cardsBen
        ) : (
          <h1>Jescze nie dodano instrukcji</h1>
        )}
      </div>
    </Wrapper>
  );
};

export default Archive;
