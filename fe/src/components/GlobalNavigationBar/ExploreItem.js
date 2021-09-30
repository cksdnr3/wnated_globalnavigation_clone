import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RightOutlined } from '@ant-design/icons';

const ExploreItem = ({ item }) => (

  <>
    <ExploreItemStyle>
      {item.job ? (
        <a>
          <h2>
            {item.job}
            {' '}
            <RightOutlined style={{ fontSize: '11px', color: '#999', position: 'absolute', top: '3px', right: '0' }} />
          </h2>
        </a>
      ) : <a><h2>&nbsp;</h2></a>}
      {/* eslint-disable-next-line react/no-array-index-key */}
      {item.category?.map((v, i) => <a key={i}><h3>{v}</h3></a>)}
      {item.jobs && item.jobs.map((v, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <a key={i}>
          <h2>
            {v}
            {' '}
            <RightOutlined style={{ fontSize: '11px', color: '#999', position: 'absolute', top: '3px', right: '0' }} />
          </h2>
        </a>
      ))}
    </ExploreItemStyle>
  </>
);

const ExploreItemStyle = styled.div`
  float: left;
  width: 16.666%;
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;

  h2 {
    position: relative;
    font-size: 17px;
    color: #333;
    line-height: 20px;
    vertical-align: top;
    padding-right: 20px;
    padding-bottom: 15px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  h3 {
    position: relative;
    font-size: 13px;
    color: #999;
    padding: 5px 20px 5px 0;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

ExploreItem.propTypes = {
  item: PropTypes.shape({
    job: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
    jobs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ExploreItem;
