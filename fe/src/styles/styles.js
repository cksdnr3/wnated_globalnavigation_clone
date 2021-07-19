import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
      line-height: 1.42857143;
      font-family: 'Nanum Gothic';
      font-size: 14px;
  }
  
  ul {
      list-style: none;
  } 
  
  img {
      max-width: 100%;
  }
    
  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
    
  button,
  input {
      outline: 0;
      border: 0;
      background: none;
  }

  
  * {
    box-sizing: border-box;
  }
  
  button,
  a {
    cursor: pointer;
  }
  
  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
  }
  
`;

export const MaxWidth = styled.div`
    margin: 0 auto;
    position: relative;
    max-width: 1060px;
`;
