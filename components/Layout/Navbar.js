import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const Wrapper = styled(SwiperSlide)`
  position: relative;
  border-bottom: 1px solid #ebebeb;

  .swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;

    .swiper-wrapper {
      padding: 0;
      margin: 0;

      > .swiper-slide {
        display: inline-block;
        font-size: 13.5px;
        width: auto;
        padding: 0 11px;
        line-height: 35px;
        position: relative;
        font-weight: 300;

        &.active::after {
          width: 100%;
          height: 2px;
          position: absolute;
          bottom: 0;
          left: 0;
          content: '';
          background: #4b4b4b;
        }

        > .link {
          color: #1f1f1f;
          display: block;
          text-decoration: none;
          cursor: pointer;
        }
      }
    }
  }
`;

const Navbar = ({ links, activeKey, onClick }) => (
  <Wrapper className="main-category">
    <Swiper tag="nav" wrapperTag="ul" freeMode slidesPerView="auto" mousewheel>
      {links.map(({ key, component: Component, to, name }) => (
        <SwiperSlide key={key} tag="li" className={activeKey === key ? 'active' : ''}>
          {Component ? (
            <Component className="link" href={to} onClick={() => onClick(key)}>
              {name}
            </Component>
          ) : (
            <a className="link" href={to} onClick={onClick}>
              {name}
            </a>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  </Wrapper>
);

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

Navbar.defaultProps = {
  links: [],
  activeKey: '',
  onClick: null,
};

export default Navbar;
