/**
 * @filename : GlobalStyle.js
 * @author : 박찬우
 * @description : 전역으로 적용할 스타일 지정
 */

// 패키지 참조
import { createGlobalStyle } from 'styled-components';

// 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

export default GlobalStyle;
