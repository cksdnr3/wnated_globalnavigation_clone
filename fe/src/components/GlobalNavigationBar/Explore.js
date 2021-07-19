import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ExploreItem from './ExploreItem';

const ITEMS = [
  // { job: '개발',
  //   category: ['서버 개발자', '웹 개발자', '프론트엔드 개발자', '자바 개발자', '소프트웨어 엔지니어',
  //   '안드로이드 개발자', 'iOS 개발자', '파이썬 개발자'] },
  // { job: '',
  //   category: ['Node.js 개발자', '데이터 엔지니어', 'DevOps / 시스템 관리자', '머신러닝 엔지니어',
  //   '시스템,네트워크 관리자', '데이터 사이언티스트', 'C, C++ 개발자', '더보기'] },
  // { job: '경영·비즈니스',
  //   category: ['서비스 기획자', 'PM·PO', '사업개발·기획자', '전략 기획자', '운영 매니저', '경영지원', '데이터 분석가', '더보기'] },
  // { job: '마케팅·광고',
  //   category: ['디지털 마케터', '마케터', '콘텐츠 마케터', '퍼포먼스 마케터', '마케팅 전략 기획자',
  //   '브랜드 마케터', '광고 기획자(AE)', '더보기'] },
  // { job: '디자인',
  //   category: ['UX 디자이너', 'UI,GUI 디자이너', '웹 디자이너', '그래픽 디자이너', '모바일 디자이너',
  //   'BI/BX 디자이너', '광고 디자이너', '더보기'] },
  // { job: '고객서비스·리테일',
  //   category: ['MD', 'CS 매니저', '서비스 운영', '리테일 MD', 'CS 어드바이저', '패션 MD', 'CRM 전문가', '더보기'] },
  { job: '영업',
    category: ['기업영업', '외부영업', '영업 관리자', '기술영업', '주요고객사 담당자', '솔루녀 컨설턴트', '해외영업', '더보기'] },
  { job: '미디어',
    category: ['콘텐츠 크리에이터', 'PD', '영상 편집가', '에디터', '비디오 제작', '작가', '출판 기획자', '더보기'] },
  { job: '인사',
    category: ['인사담당', '리크루터', '조직문화', '평가·보상', '헤드헌터', 'BRBP', 'HRD', '출판 기획자', '더보기'] },
  { job: '게임 제작',
    category: ['게임 기획자', '게임 그래픽 디자이너', '모바일 게임 개발자', '게임 아티스트', '게임 클라이언트 개발자', '게임 서버 개발자', '유니티 개발자', '더보기'] },
  { job: '엔지니어링·설계',
    category: ['전자 엔지니어', '기계 엔지니어', '전기 엔지니어', '전기기계 공학자', '로봇', '로봇·자동화', 'QA엔지니어', '제품 엔지니어', '더보기'] },
  { job: '금융',
    jobs: ['제조·생산', '물류·무역', '의료·제약·바이오', '교육', '법률·법집행기관', '식·음료', '건설·시설', '공공·복지'] },
];

// eslint-disable-next-line no-unused-vars
const Explore = ({ show, setIsExploreOpen }) => (
  <>
    <Background show={show}>
      <div
        onMouseLeave={() => setIsExploreOpen(false)}
        className="overlay explore-content"
      >
        <Container>
          <Row>
            {/* eslint-disable-next-line react/no-array-index-key */}
            {ITEMS?.map((v, i) => <ExploreItem key={i} item={v} />)}
          </Row>
        </Container>
      </div>
    </Background>
  </>
);

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
  background-color: rgba(0,0,0,.4);
  height: ${(props) => (props.show ? 'auto' : '0')};
  opacity: ${(props) => (props.show ? '100%' : '0%')};
  overflow: hidden;
  transition: .5s;

  .overlay.explore-content {
    height: 100%;
  }
  
  .overlay {
    position: relative;
    height: 0%;
    max-height: 625px;
    background-color: #fff;
    transition: .5s;
  }
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1060px;
  height: inherit;
  
  @media (min-width: 768px) {
    width: 90%;
  }
  
  @media (min-width: 1200px) {
    width: 87.72%;
  }
  
  @media (min-width: 992ox) {
    width: 90%
  }
`;

const Row = styled.div`
  margin-right: -20px;;
`;

Explore.propTypes = {
  show: PropTypes.string.isRequired,
  setIsExploreOpen: PropTypes.func.isRequired,
};

export default Explore;
