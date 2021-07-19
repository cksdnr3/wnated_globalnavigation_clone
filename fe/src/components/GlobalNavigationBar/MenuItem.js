import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuItem = ({ item, changePage, setIsExploreOpen }) => {
  const onMouseoverExplore = useCallback(() => {
    if (item.text === '탐색') {
      setIsExploreOpen(true);
    } else {
      setIsExploreOpen(false);
    }
  }, [setIsExploreOpen]);

  if (item.xsOnly) {
    return (
      <li className="xsOnly">
        <MenuAnchor onClick={changePage(item)}>{item.text}</MenuAnchor>
      </li>
    );
  }

  return (
    <>
      {(item.selected)
        ? (
          (item.smMoreVisible)
            ? (
              <li
                name={item.text}
                className="smMoreVisible"
                style={{ boxShadow: 'inset 0 -2px #258bf7' }}
              >
                <MenuAnchor onClick={changePage(item)}>{item.text}</MenuAnchor>
              </li>
            )
            : (
              <li
                name={item.text}
                onFocus={onMouseoverExplore}
                onMouseOver={onMouseoverExplore}
                style={{ boxShadow: 'inset 0 -2px #258bf7' }}
              >
                <MenuAnchor onClick={changePage(item)}>{item.text}</MenuAnchor>
              </li>
            )
        )
        : (
          (item.smMoreVisible)
            ? (
              <li
                name={item.text}
                className="smMoreVisible"
              >
                <MenuAnchor onClick={changePage(item)}>{item.text}</MenuAnchor>
              </li>
            )
            : (
              <li
                name={item.text}
                onFocus={onMouseoverExplore}
                onMouseOver={onMouseoverExplore}
              >
                <MenuAnchor onClick={changePage(item)}>{item.text}</MenuAnchor>
              </li>
            )
        )}
    </>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    selected: PropTypes.bool,
    text: PropTypes.string,
    xsOnly: PropTypes.bool,
    smMoreVisible: PropTypes.bool,
  }).isRequired,
  changePage: PropTypes.func.isRequired,
  setIsExploreOpen: PropTypes.func.isRequired,
};

const MenuAnchor = styled.a`
    position: relative;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    padding: 15px;
  
    @media (max-width: 767px) {
      padding: 14px 13px 19px;
    }
    
    @media screen and (min-width: 768px) and (max-width: 974px) {
      padding-right: 0!important;
      padding-left: 0!important;
      font-size: 13px;
    }
`;

export default MenuItem;
