import styled, { injectGlobal, css } from 'styled-components';
import styledNormalize from 'styled-normalize';

/**
 * Minimal global styling. Use sparingly or not at all 😇
 */
injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1em = 10px */
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1.8em;
    line-height: 1.6em;
    color: #222;
  }
`;

export const Page = styled.section`
  margin: ${props => props.theme.margin}em;
`;
