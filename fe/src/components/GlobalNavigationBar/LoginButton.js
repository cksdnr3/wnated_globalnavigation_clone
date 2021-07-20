import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoginButton = ({ button, openSignin }) => (
  <>
    {button.icon
      ? (
        <Button onClick={button.social ? () => {} : openSignin} className={button.social ? 'social' : 'email'}>
          {button.icon}
          {button.text}
        </Button>
      )
      : <Division />}
  </>
);

LoginButton.propTypes = {
  openSignin: PropTypes.func.isRequired,
  button: PropTypes.shape({
    icon: PropTypes.objectOf,
    text: PropTypes.string,
    social: PropTypes.bool,
  }).isRequired,

};

export const Button = styled.button`
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 54px;
  border: 0;
  border-radius: 27px;
  background-color: #36f;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  
  &.as-link {
    background-color: transparent;
    font-size: 14px;
    color: #36f;
    margin-top: 4px;
  }

  svg {
    margin-right: 10px;
  }
`;

const Division = styled.div`
  ::after {
    display: block;
    content: "or";
    color: #969696;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    margin: 10px auto;
  }
`;

export default LoginButton;
