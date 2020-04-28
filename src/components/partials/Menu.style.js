import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: #007bff;
`;
export const LisAboutWrapper = styled.div`
  visibility: ${(props) => (props.showAboutLi ? null : 'hidden')};

  position: absolute;
  margin-top: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: #000 !important;
  font-size: 0.9em;
  background-color: rgba(255, 255, 255, 0.8);

  width: 250px;
`;
export const LisPdfWrapper = styled.div`
  visibility: ${(props) => (props.showPdfLi ? null : 'hidden')};

  position: absolute;
  margin-top: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: #000 !important;
  font-size: 0.9em;
  background-color: rgba(255, 255, 255, 0.8);

  width: 250px;
`;
export const LisFilmsWrapper = styled.div`
  visibility: ${(props) => (props.showFilmsLi ? null : 'hidden')};

  position: absolute;
  margin-top: 8px;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: #000 !important;
  font-size: 0.9em;
  background-color: rgba(255, 255, 255, 0.8);

  width: 250px;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
`;

export const Ul = styled.ul`
  cursor: pointer;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;
export const Img = styled.img`

  height: 26px;
`;
