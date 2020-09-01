import styled from 'styled-components';

export default styled.div`
  position: relative;
  padding: 20px 0;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-align: center;
  z-index: 5;

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 130px;
    top: 0;
    background: #f9f9f9;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    z-index: -1;
  }

  > .details {
    > .user-photo {
      position: relative;
      background: #fff;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 30px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      left: 50%;

      transform: translateX(-50%);

      > img {
        padding: 5px;
        width: 150px;
        border: 0;
        border-radius: 50%;
      }
    }

    > .user-title {
      color: #999;
      font-size: 18px;
      margin: 0;
    }

    > .user-value {
      color: #2c2e31;
      font-size: 1.2rem;
      margin: 5px;
      text-transform: capitalize;
    }
  }
`;
