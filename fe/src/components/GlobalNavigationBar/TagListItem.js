import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TagListItem = ({ hashtag }) => (
  <>
    <li className="tagListItem">
      <Button color={hashtag.color}>
        {hashtag.tag}
      </Button>
    </li>
  </>
);

TagListItem.propTypes = {
  hashtag: PropTypes.shape({
    tag: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

const Button = styled.button`
  display: inline-block;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  font-weight: 400;
  color: #333;
  border-radius: 3px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 0 26px;
  background-color: ${(props) => props.color};
  border-radius: 25px;

  @media (max-width: 767px) {
    margin: 10px 4px 0 0;
    font-size: 13px;
    padding: 0 12px;
    height: 34px;
    line-height: 34px;
  }
`;

export default TagListItem;
