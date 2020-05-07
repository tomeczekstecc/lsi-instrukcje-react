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


return loading ? <Spinner/> : <Wrapper id='wrapper'>
      <h1 className='title'>Operator</h1>
      <div className='type-wrapper'>{cardsOper}</div>
      <h1 className='title'>Beneficjent</h1>
      <div className='type-wrapper'> {cardsBen}</div>
    </Wrapper>



};

export default Pdfs;
