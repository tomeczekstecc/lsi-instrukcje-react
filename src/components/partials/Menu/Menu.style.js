import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: #007bff;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  @media (max-width: 690px) {
    flex-direction: column;
    justify-contexnt: center;
    height: 100%;
    align-items: center;
    margin: 10px;
  }
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
  overflow: hidden;
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
  overflow: hidden;
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
  overflow: hidden;
  width: 250px;
`;

export const Ul = styled.ul`
  cursor: pointer;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 690px) {

    justify-contexnt: center;
    height: 100%;
    align-items: center;
    margin: 10px;
  }
`;

export const MenuButton = styled.img`
  display: none;
  margin-top: 6px;
  position: absolute;
  cursor: pointer;
  padding: 1em;

  @media (max-width: 690px) {
  }
`;
export const Img = styled.img`
  height: 26px;
`;