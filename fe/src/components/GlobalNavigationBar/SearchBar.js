import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchOutlined, CloseOutlined, RightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import TagListItem from './TagListItem';

const HASHTAG = [
  { tag: '#연봉 상위',
    color: '#f0f8f8' },
  { tag: '#보육 시설',
    color: '#eeedf4' },
  { tag: '#퇴사율 5% 이하',
    color: '#e8edf3' },
  { tag: '#샐러드',
    color: '#e9f4fb' },
  { tag: '#셔틀버스',
    color: '#effbf3' },
];

const SearchBar = ({ onClose }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    function onResize() {
      if (document.documentElement.clientWidth >= 762) {
        setText('기업태그 홈 이동하기');
      } else {
        setText('기업태그 홈');
      }
    }
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <SearchBarStyle>
        <SearchInputWrapper>
          <form style={{ position: 'relative' }}>
            <SearchInput placeholder="#태그, 회사, 포지션 검색" />
            <SearchIcon />
            <Button onClick={onClose}>
              <CloseOutlined />
            </Button>
          </form>
          <TagSearchStyle>
            <div className="container">
              <H4>추천 태그로 검색해보세요.</H4>
              <A>
                {text || ((document.documentElement.clientWidth <= 762) ? '기업태그 홈' : '기업태그 홈 이동하기') }
                <RightOutlined style={{ fontSize: '11px', marginLeft: '3px' }} />
              </A>
              <TagListStyle>
                {/* eslint-disable-next-line react/no-array-index-key */}
                {HASHTAG?.map((v, i) => <TagListItem key={i} hashtag={v} />)}
              </TagListStyle>
            </div>
          </TagSearchStyle>
        </SearchInputWrapper>
        <ModalBackground onClick={onClose} />
      </SearchBarStyle>
    </>
  );
};

SearchBar.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const ModalBackground = styled.div`
    content: "";
    display: block;
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.4);
    z-index: -1;
`;

const SearchBarStyle = styled.div`
    left: 0;
    top: 0;
    width: 100%;
    position: absolute;
    background: #fff;
`;

const SearchInputWrapper = styled.div`
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
    padding: 30px 0 100px;
    position: relative;
    background-color: #fff;
    
    @media (max-width: 767px) {
      padding: 20px;
    }
    
    @media (min-width: 768px) and (max-width: 991px) {
      width: 90%;
    }
`;

const SearchInput = styled.input`
    height: 50px;
    line-height: 50px;
    width: 100%;
    margin: 0;
    padding: 0 36px 0 60px;
    border: 1px solid #f2f4f7;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 400;
    color: #767676;
    background-color: #f2f4f7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SearchIcon = styled(SearchOutlined)`
    position: absolute;
    top: 26px;
    left: 20px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    color: #939393;
    margin: 0 16px 0 6px;
    font-size: 20px;
`;

const TagSearchStyle = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    background-color: #fff;
    
    @media (max-width: 767px) {
      height: calc(100% - 50px);
      background: #fff;
      overflow: auto;
    }
    
    .container {
      position: relative;
      margin: 0 auto;
      padding: 50px 0 0;
      max-width: 1060px;
      
      @media (max-width: 767px) {
        padding: 40px 20px 20px;
      }
      
      @media (min-width: 768px) {
        width: 90%
      }
    }
`;

const Button = styled.button`
  display: none;
  position: absolute;
  right: 2px;
  top: 2px;
  color: #999;
  padding: 15px;
  cursor: pointer;
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: 767px) {
    display: block;
  }
`;

const H4 = styled.h4`
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: #333;
`;

const A = styled.a`
  float: right;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #767676!important;
`;

const TagListStyle = styled.ul`
  padding-top: 20px;
  padding-bottom: 50px;
  
  &:after {
    display: block;
    content: "";
    clear: both;
  }

  @media (max-width: 767px) {
    padding: 20px 0 40px;
  }
  
  & > li {
    width: 100%;
    position: relative;
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 35px;
    color: #333;
    
    @media (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 8px;
      line-height: 24px;
      color: #333;
    }
  }
  
  & > .tagListItem {
    float: left;
    width: auto;
    
    :nth-of-type(5n+1) > button {
      background: #f0f8f8;
    }
    
    :first-of-type(5n+1) > button {
      margin-left: 0;
    }
    
    @media (max-width: 767px) {
      font-size: 16px;
      margin-bottom: 0;
    }
    
    > button {
      margin-bottom: 0;
      
      @media (max-width: 767px) {
        margin-top: 5px;
        margin-bottom: 3px;
      }
    }
  }
`;

export default SearchBar;
