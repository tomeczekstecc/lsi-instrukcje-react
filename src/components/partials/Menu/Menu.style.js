import styled from 'styled-components';

export const Wrapper = styled.nav`
         background-color: #007bff;
         -webkit-box-shadow: 4px 10px 28px -6px rgba(0, 0, 0, 0.54);
         -moz-box-shadow: 4px 10px 28px -6px rgba(0, 0, 0, 0.54);
         box-shadow: 4px 10px 28px -6px rgba(0, 0, 0, 0.54);
        max-height: 70px;
         padding-left: 2em;
         transition: all .2s ease;
         z-index: 100;

         @media (max-width: 860px) {

           position: fixed;
           bottom: 0;
           left: 0;
           width: 100%;
           padding-left: 0;
           min-height: 40px;
         }
       `;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 1.3rem;

  @media (max-width: 860px) {
    justify-contexnt: center;
    height: 100%;
    font-size: 1rem;
    padding:0;
    }
`;

export const LisAboutWrapper = styled.div`
  visibility: ${(props) => (props.showAboutLi ? null : 'hidden')};
  position: absolute;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: #000 !important;
  font-size: 0.9em;
  background-color: rgba(255, 255, 255, 0.8);
  overflow: hidden;
  width: 230px;
`;

export const Ul = styled.ul`
  cursor: pointer;
  list-style-type: none;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  max-height: 100%;
  overflow:hidden;

  @media (max-width: 860px) {
    justify-contexnt: center;
    height: 100%;
    align-items: center;
    margin: 10px;
    margin:0;
  }
`;

export const MenuButton = styled.img`
  display: none;
  position: absolute;
  cursor: pointer;
  left: 10px;
  top: 15px;
`;
export const Img = styled.img`
  height: 26px;
`;
export const Logo = styled.div`
  margin-top: 0.2em;
`;
