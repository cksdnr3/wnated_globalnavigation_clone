import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import logo from '../../images/logo.png';

const DROP_DOWN = ['이력서', '매치업', '추천', '프리랜서', '직군별 연봉', '커리어 성장', '기업 서비스'];

const DropDownMenu = ({ onClose, openSignModal }) => {
  console.log();

  return (
    <>
      <XsOnly>
        <DropDownMenuStyle>
          <DropDownContainer>
            <Icons>
              <a><img src={logo} alt="logo" /></a>
              <button onClick={onClose} type="button">
                <CloseOutlined />
              </button>
            </Icons>
            <ul><li /></ul>
            <UlWrapper>
              <li><button onClick={openSignModal} type="button">로그인</button></li>
              {DROP_DOWN.map((v) => ((v === '이력서' || v === '직군별 연봉' || v === '기업 서비스')
                ? <DivideCategory key={v}><a>{v}</a></DivideCategory>
                : <li key={v}><a>{v}</a></li>))}
            </UlWrapper>
          </DropDownContainer>
          <div />
        </DropDownMenuStyle>
      </XsOnly>
    </>
  );
};

DropDownMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
  openSignModal: PropTypes.func.isRequired,
};

const XsOnly = styled.div`
    @media (min-width: 768px) and (max-width: 991px) {
        display: none;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
        display: none;
    }
    
    @media (min-width: 1200px) {
        display: none;
    }
`;

const DropDownMenuStyle = styled.div`
    position: absolute;
    top: 100%;
    right: 27px;
    margin-top: 13px;
    padding: 0;
    display: block;
    -webkit-transform: translate(50%, 8px);
    transform: translate(50%, 8px);
    
    @media (max-width: 767px) {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin-top: 0;
        -webkit-transform: none;
        transform: none;
    }
`;

const DropDownContainer = styled.div`
    overflow: hidden;
    min-width: 194px;
    border-radius: 10px;
    -webkit-box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    box-shadow: 1px 2px 10px 0 rgb(0 0 0 / 30%);
    border: 1px solid #cdcdcd;
    background-color: #fff;
    
    @media (max-width: 767px) {
        -webkit-box-shadow: none;
        box-shadow: none;
        border 1px solid #e1e2e3;
        border-radius: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 20px;
    }
`;

const Ul = styled.ul`
  margin: 45px 0 15px;
  
  button {
    display: block;
    width: 100%;
    color: #333;
    padding: 15px 0;
    font-size: 20px;
    line-height: 1;
    text-align: left;
  }
  
  li {
    a {
      padding: 15px 0;
      font-size: 20px;
      font-weight: 500;
      line-height: 1;
    }
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
      display: none;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
      display: none;
  }
  
  @media (min-width: 1200px) {
      display: none;
  }
`;

const UlWrapper = styled(Ul)`
  li {
    width: 100%;
    height: auto;
    
    a {
      position: relative;
      display: block;
      width: 100%;
    }
  }
`;

const DivideCategory = styled.li`
  padding-top: 15px;
  border-top: 1px solid #eee;
  margin-top: 15px;
`;

const Icons = styled.div`
    display: none;
    height: 50px;
    width: 100%;
    
    img {
      display: inline-block;
      width: 50px;
      padding: 0;
    }
    
    button {
      float: right;
      color: #999;
      font-size: 20px;
      margin: 12px 0 10px;
    }
    
    @media (max-width: 767px) {
        display: block;
    }
`;

export default DropDownMenu;
