import styled from 'styled-components';

export const Wrapper = styled.div`

  .title {
      font-size: 2rem;
      background-color:#f4f4f4;
      border-radius: 40px;
      text-align: center
    }
  .type-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5rem;


    @media (max-width: 1095px) {
      justify-content: space-around;
    }
  }
`;
