import React, { useEffect, useState } from 'react';
import Spinner from '../partials/Spinner';
import Card from '../partials/Cards/Card';
import { Wrapper } from './Pdfs.style';

const Pdfs = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const docsData = await (
        await fetch('https://dokmenagier.herokuapp.com/api/pdfs')
      ).json();
      setDocs(docsData.data);
      setLoading(false)
    };
    fetchData();
  }, []);

  console.log(docs);
  const cardsBen = docs
    .filter((item) => item.target === 'ben' && !item.archived)
    .map((item, i) => <Card cardData={item} key={i} />);

  const cardsOper = docs
    .filter((item) => item.target === 'oper' && !item.archived)
    .map((item, i) => <Card cardData={item} key={i} />);


return loading ? (
  <Spinner />
) : (
  <Wrapper id='wrapper'>
    <h1 className='title'>Operator</h1>
    <div className='type-wrapper'>
      {' '}
      {cardsOper.length > 0 ? cardsOper : <h2>Jescze nie dodano instrukcji</h2>}
    </div>
    <h2 className='title'>Beneficjent</h2>
    <div className='type-wrapper'>
      {' '}
      {cardsBen.length > 0 ? cardsBen : <h2>Jescze nie dodano instrukcji</h2>}
    </div>
  </Wrapper>
);



};

export default Pdfs;
