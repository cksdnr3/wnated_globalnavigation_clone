import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import MenuItem from './MenuItem';
import SearchBar from './SearchBar';
import Explore from './Explore';
import logo from '../../images/wanted.png';

const GlobalNavigationBar = () => {
  const [mainItems, setMainItems] = useState([
    { text: '홈', selected: false, xsOnly: true },
    { text: '탐색', selected: false },
    { text: '커리어 성장', selected: false },
    { text: '이력서', selected: false, smMoreVisible: true },
    { text: '직군별 연봉', selected: false, smMoreVisible: true },
    { text: '매치업', selected: false, smMoreVisible: true },
    { text: '프리랜서', selected: false, smMoreVisible: true },
    { text: 'Ai 합격예측', selected: false, smMoreVisible: true },
  ]);

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const changePage = useCallback((item) => () => {
    setMainItems(mainItems.map((v) => {
      if (item.text === v.text) {
        return { ...item, selected: true };
      }
      return { ...v, selected: false };
    }));
  }, [mainItems]);

  const openSearchBar = useCallback(() => {
    setIsSearchBarOpen(true);
  }, []);

  const closeSearchBar = useCallback(() => {
    setIsSearchBarOpen(false);
  }, []);

  return (
    <>
      <GNB>
        <NavWrapper>
          <Nav>
            <XsDivide>
              <IconAnchor>
                <img
                  src={logo}
                  alt="logo"
                />
              </IconAnchor>
              <button type="button">회원가입하기</button>
            </XsDivide>
            <MenuItems>
              {mainItems?.map((item) => (
                <MenuItem
                  key={item.text}
                  item={item}
                  changePage={changePage}
                  setIsExploreOpen={setIsExploreOpen}
                />
              ))}
            </MenuItems>
            {isExploreOpen && <Explore setIsExploreOpen={setIsExploreOpen} show={isExploreOpen ? 'show' : ''} />}
            <AsideMenu>
              <ul>
                <li><SearchOutlined style={{ fontSize: '18px' }} onClick={openSearchBar} /></li>
                <li>
                  <button className="signupButton" type="button">
                    회원가입/로그인
                  </button>
                </li>
                <li className="smMoreVisible leftDivision">
                  <a className="dashboardButton">기업 서비스</a>
                </li>
                <li>
                  <button className="menuButton" type="button">
                    <MenuOutlined style={{ fontSize: '18px' }} />
                  </button>
                </li>
              </ul>
            </AsideMenu>
          </Nav>
        </NavWrapper>
      </GNB>
      {isSearchBarOpen && <SearchBar onClose={closeSearchBar} />}
    </>
  );
};

const GNB = styled.div`
    width: 100%;
    position: fixed;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`;

const NavWrapper = styled.div`
  max-width: 1060px;
  height: 50px;
  position: relative;
  margin: 0 auto;
  
  nav, & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1200px) {
    width: 87.72%;
    margin: 0 auto;
    height: 50px;
  }
  
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
    margin: 0 auto;
    height: 50px;
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    margin: 0 auto;
    height: 50px;
    width: 90%;
  }
  
  @media (max-width: 767px) {
    height: 102px;
  }
`;

const Nav = styled.nav`
  ul {
    margin: 0;
  }
  
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

const XsDivide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    width: 100%;
    padding: 15px 20px 0;
  }
  
  & > button {
    display: none;
    color: #36f;
    font-size: 14px;
    line-height: 32px;
    height: 34px;
    border: 1px solid #36f;
    border-radius: 17px;
    padding: 0 14px;
    
    @media (max-width: 767px) {
      display: block;
    }
  }
`;

const IconAnchor = styled.a`
  width: 75px;
  height: 21px;
  
  img {
    background-size: cover;
  }
`;

const MenuItems = styled.ul`
  height: inherit;
  text-align: center;
  padding: 0px;
  
  @media (max-width: 767px) {
    text-align: left;
  }
  
  & > .xsOnly {
    @media (min-width: 992px) and (max-width:1199px) {
      display: none;
    }
    
    @media (min-width: 1200px) {
      display: none;
    }
  }
  
  .smMoreVisible {
    @media (max-width: 767px) {
      display: none;
    }
  }
  
  li:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px -2px inset;
  }
  
  li {
    height: inherit;
    display: inline-block;
    
    a {
      display: inline-block;
      vertical-align: middle;
    }
  }
  
  li::after {
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    content: "";
  }
  
  @media screen and (min-width: 768px) and (max-width: 974px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
  }
`;

const AsideMenu = styled.aside`
  height: 100%;
  
  ul {
    .leftDivision {
      display: inline-flex;
      
        @media (max-width: 767px) {
          display: none;
        }
      
      .dashboardButton {
        font-size: 13px;
        color: #666;
        line-height: 30px;
        height: 30px;
        border: 1px solid #e1e2e3;
        border-radius: 15px;
        padding: 0 10px;
        margin: 0 0 0 12px;
        font-weight: 400;
      }
    }
    
    .leftDivision::before {
      display: block;
      content: "";
      width: 1px;
      height: 21px;
      background-color: #e1e2e3;
      margin: 5px 10px 5px 0px;
    }
  }
  
  ul > li {
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    
    .signupButton {
      margin-right: 12px;
      
      @media (max-width: 767px) {
        display: none;
      }
    }
    
    .menuButton {
      margin-right: 10px;
      padding-left: 10px;
      
      @media (min-width: 1200px) {
        display: none;
      }
      
      @media (min-width: 992px) and (max-width: 1199px) {
        display: none;
      }
      
      @media (min-width: 768px) and (max-width: 991px) {
        display: none;
      }
    }
  }
  
  ul > li > * {
    padding: 0 10px;
    height: 100%;
    padding: 0 10px;
    font-size: 14px;
    color: #333;
    font-weight: 600;
    line-height: 1;
  }
  
  .smMoreVisible {
    @media (max-width: 767px) {
      display: none;
    }
  }
  
  @media (max-width: 767px) {
    padding: 14px 0;
  }
  
`;

export default GlobalNavigationBar;
