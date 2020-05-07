import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 340px;

  .card-container:hover .card-outmore {
    background: #2c3e50;
    color: #fff;
  }

  .card-container:hover .thecard {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    transform: translateY(-15px);
  }

  .thecard {
    position: relative;
    width: 300px;
    margin: 5% auto;
    box-shadow: 0 1px 30px rgba(0, 0, 0, 0.4);
    display: block;
    background-color: #fff;
    border-radius: 4px;
    transition: 400ms ease;
  }

  .card-img {
    height: 225px;
  }

  .card-img img {
    width: 100%;
    border-radius: 4px 4px 0px 0px;
  }

  .card-caption {
    position: relative;
    background: #ffffff;
    padding: 15px 25px 5px 25px;
    border-radius: 0px 0px 4px 4px;
  }

  .card-outmore {
    padding: 10px 25px 10px 25px;
    border-radius: 0px 0px 4px 4px;
    border-top: 1px solid #e0e0e0;
    background: #efefef;
    color: #222;
    display: inline-table;
    width: 100%;

    transition: 400ms ease;
  }
  .card-outmore h5 {
    float: left;
  }
  .card-outmore i {
    float: right;
  }

  span.date {
    font-size: 10px;
  }

  h1 {
    font-size: 32px;
    line-height: 1.5;
  }

  h5 {
    margin: 0;
  }

  #like-btn {
    font-size: 22px;
    background: #446cb3;
    color: #fff;
    padding: 13px 15px;
    border-radius: 50%;
    position: absolute;
    right: 20px;
    top: -22px;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
    transition: 400ms ease;
  }

  #like-btn:hover {
    font-size: 28px;
    background: #3b5998;
    color: #fff;
    padding: 13px 15px;
    border-radius: 50em;
    position: absolute;
    right: 20px;
    top: -22px;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
  }

  #outmore-icon {
    border: 1px solid;
    padding: 1px 6px;
    border-radius: 50em;
  }

  #new {
    display: ${props => props.premiereTag?'block' : 'none'};
    position: absolute;
    z-index: 3;
    background-color: red;
    color: white;
    padding: 6px 12px;
    padding-top: 9px;
    transform: translate(10px, -15px);
    line-height: 0.8;
    text-align: center;
    border-radius: 14px;
  }
`;
