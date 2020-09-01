import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useSprings, animated } from 'react-spring';

import { selectors, thunks } from '../../store/slices/randomUsersSlice';
import UserCard from '../../components/UserCard';

const AnimatedItem = styled(animated(UserCard))`
  cursor: pointer;
`;
AnimatedItem.defaultProps = {
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  height: [300, null, 450],
};

const StyledUl = styled.ul`
  padding: 0;
  margin: 10px;
  list-style: none;

  > li {
    display: inline-block;
    width: calc(50% - 20px);
    margin: 10px;
  }

  @media (max-width: 1440px) {
    > li {
      width: calc(100% - 20px);
    }
  }
`;

const RandomUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectors.selectUsers);
  const loading = useSelector(selectors.selectLoading);

  const springs = useSprings(
    users.length,
    users.map(() => ({
      opacity: 1,
      transform: 'translateY(0px)',
      from: {
        opacity: 0,
        transform: 'translateY(100px)',
      },
    }))
  );

  useEffect(() => {
    dispatch(thunks.loadRandomUsers());
  }, []);

  return (
    <div style={{ opacity: loading === 'loaded' ? 1 : 0.5 }}>
      <span>{loading}</span>
      <StyledUl>
        {springs.map(({ opacity, transform }, index) => (
          <animated.li key={index} style={{ opacity, transform }}>
            <UserCard user={users[index]} />
          </animated.li>
        ))}
        {/* {users.map((user) => ( */}
        {/*  <li key={`${user.id.name}-${user.id.value}`}> */}
        {/*    <UserCard user={user} /> */}
        {/*  </li> */}
        {/* ))} */}
      </StyledUl>
    </div>
  );
};

export default RandomUsers;
