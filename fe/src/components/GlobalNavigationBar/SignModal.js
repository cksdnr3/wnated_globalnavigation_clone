import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CloseOutlined, MailOutlined, FacebookFilled, AppleFilled, GoogleOutlined } from '@ant-design/icons';
import logo from '../../images/wanted.png';
import useInput from '../../hooks/useInput';
import LoginButton, { Button } from './LoginButton';
import useHinge from '../../hooks/useHinge';

const BUTTONS = [
  { icon: <MailOutlined />,
    text: '이메일로 시작하기',
    social: false },
  { icon: '' },
  { icon: <FacebookFilled />,
    text: 'Facebook으로 시작하기',
    social: true },
  { icon: <AppleFilled />,
    text: 'Apple로 시작하기',
    social: true },
  { icon: <GoogleOutlined />,
    text: 'Google로 시작하기',
    social: true },
];

const SignModal = ({ onClose }) => {
  console.log('SignModal render');
  const [email, onChangeEmail] = useInput('');
  const [isOpenSignin, setIsOpenSignin] = useState(false);

  const [openSignin, closeSignin] = useHinge(setIsOpenSignin);

  return (
    <>
      <SignModalStyle>
        <Container>
          <Header>
            {isOpenSignin ? '비밀번호 입력' : <img src={logo} alt="logo" />}
            <button type="button" onClick={onClose}>
              <CloseOutlined style={{ fontSize: '20px', color: 'rgb(153, 153, 153)' }} />
            </button>
          </Header>
          <Body>
            {isOpenSignin
              ? (
                <div>
                  <input type="email" value={email} style={{ display: 'none' }} />
                  <EmailLogin>
                    <label htmlFor="password-text-field">비밀번호</label>
                    <div>
                      <input id="password-text-field" type="password" placeholder="비밀번호" />
                    </div>
                  </EmailLogin>
                  <Button type="button">로그인</Button>
                  <Button className="as-link" type="button">비밀번호 초기화/변경</Button>
                </div>
              )
              : (
                <>
                  <Description>
                    <h1>
                      직장인을 위한
                      {' '}
                      <br />
                      {' '}
                      커리어 플랫폼, 원티드!
                    </h1>
                    <h2>
                      커리어 성장과 행복을 위한 여정
                      {' '}
                      <br />
                      {' '}
                      지금 원티드에서 시작하세요.
                    </h2>
                  </Description>
                  <Content>
                    <AutoPassword />
                    <EmailLogin>
                      <label htmlFor="email">이메일</label>
                      <div>
                        <input type="email" id="email" placeholder="이메일을 입력해 주세요." value={email} onChange={onChangeEmail} />
                      </div>
                    </EmailLogin>
                    <LoginButtonsStyle>
                      {BUTTONS?.map((v) => <LoginButton openSignin={openSignin} button={v} />)}
                    </LoginButtonsStyle>
                    <PrivacyNotice>
                      걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
                      <br />
                      회원가입 시
                      <a>개인정보 처리방침</a>
                      과
                      <a>이용약관</a>
                      을 확인하였으며, 동의합니다.
                    </PrivacyNotice>
                  </Content>
                </>
              )}
          </Body>
        </Container>
        <SignModalBackground />
      </SignModalStyle>
    </>
  );
};

SignModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const SignModalStyle = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: hidden;
  z-index: 1001;
`;

const Container = styled.div`
  width: 400px !important;
  overflow-y: auto !important;
  z-index: 5;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  overflow: hidden;
  
  @media (max-width: 767px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: none;
    width: 100% !important;
    transform: none;
    border-radius: 0;
    max-height: none;
    overflow: visible;
  }
  
  @media (min-width: 1200px) {
    top: 50%;
    left: 50%;
    max-width: 500px;
    width: 100%;
    transform: translate(-50%, -50%);
    max-height: calc(100vh - 150px);
    z-index: 5;
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    top: 50%;
    left: 50%;
    max-width: 500px;
    width: 100%;
    transform: translate(-50%, -50%);
    max-height: calc(100vh - 150px);
    z-index: 5;
  }
  
  @media (min-width: 992px) and (max-width: 1199px) {
    top: 50%;
    left: 50%;
    max-width: 500px;
    width: 100%;
    transform: translate(-50%, -50%);
    max-height: calc(100vh - 150px);
    z-index: 5;
  }
`;

const Header = styled.div`
  height: 54px;
  padding: 16px 20px;
  position: relative;
  color: #333;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
  
  button {
    position: absolute;
    top: 50%;
    right: 0;
    padding: 15px;
    line-height: 0;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }
  
  img {
    width: 70px; 
    display: block;
    margin: 0 auto;
  }
`;

const Body = styled.div`
  background-color: #fff;
  padding: 20px;
  
  @media (max-width: 767px) {
    overflow: auto;
    height: calc(100% - 54px);
    height: -webkit-fill-available;
    -webkit-overflow-scrolling: touch;
  }
`;

const Description = styled.div`
  text-align: center;
  word-break; break-word;
  margin-top: 24px;
  margin-bottom: 40px;
  
  h1 {
    line-height: 1.54;
    font-size: 26px;
    font-weight: 600;
    color: #333;
  }
  
  h2 {
    margin-top: 16px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 400;
    color: #666;
  }
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-bottom: 20px;
  
  & .social {
    color: #737373;
    border: 1px solid #e1e2e3;
    background-color: #fff;
  }
  
  & .social:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const EmailLogin = styled.div`
  position: relative;
  padding-bottom: 22px;
  color: #767676;
  
  & > div {
    margin-top: 11px;
    
    input[type=email], input[type=password], input[type=text] {
      width: 100%;
      height: 50px;
      padding-right: 15px;
      padding-left: 15px;
      border-radius: 5px;
      border: 1px solid #e1e2e3;
      font-size: 15px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      resize: none;
    }
  }
  
  label {
    font-size: 14px;
    font-weight: 400;
  }
`;

const AutoPassword = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  z-index: -1;
  top: -10px;
  left: 0;
  padding: 0;
  height: 0;
  border: 1px solid transparent;
`;

const LoginButtonsStyle = styled.div`
  margin-top: -2px;
`;

const PrivacyNotice = styled.p`
  margin-top: 26px;
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  color: #999;
  
  a {
    color: #3336ff;
    text-decoration: underline;
  }
`;

const SignModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, .5);
`;

export default SignModal;
