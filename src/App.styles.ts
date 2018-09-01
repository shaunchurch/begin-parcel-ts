import styled, { injectGlobal, css } from 'styled-components';
import styledNormalize from 'styled-normalize';

/**
 * Global base typography
 */
const configureType = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 62.5%; /* 1em = 10px */
`;

const bodyType = css`
  font-size: 1.8em;
  line-height: 1.6em;
`;

/**
 * Minimal global styling. Use sparingly or not at all 😇
 */
injectGlobal`
  ${styledNormalize}

  /**
  * Universal border-box box-sizing.
  */
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    ${configureType}
  }

  body {
    ${bodyType}
  }

`;

export const defaultMargin = css`
  margin: ${props => props.theme.margin}em;
`;

export const Page = styled.section`
  ${defaultMargin};
`;
