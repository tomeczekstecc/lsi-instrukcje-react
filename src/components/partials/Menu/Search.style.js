import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  max-width: ${(props) => (props.showInput ? '100%' : 0)};

  height: 1.8rem;
  width: 150px;
  border: 1.5px solid rgba(255, 255, 255, 0.75);
  border ${(props) => (props.showInput ? null : 'none')};
  border-radius: 5px;
  padding: 0.25rem;
  font-size: 1rem;
  outline: none;
  background-color: #007bff;
  color: rgba(255, 255, 255, 0.75);
  transition: all .7s ease;
`;

export const Img = styled.img`
  height: 24px;
  margin-right: 5px;
`;

export const Container = styled.div`
  display: flex;
  width: 150px;
`;
