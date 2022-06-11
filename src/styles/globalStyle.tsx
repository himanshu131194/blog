import { css, Global, useTheme } from '@emotion/react';

const GlobalStyle = () => {
  const theme = useTheme();

  const global = css`
    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      box-sizing: border-box;
    }
    body {
      font-size: 16px;
      margin: 0;
      padding: 0;
      background: ${theme.background.first};
      box-sizing: border-box;
      color: ${theme.color.primary};
    }
    ul,
    ol {
      list-style: none;
      margin: 0px;
      padding: 0px;
    }
    button {
      all: unset;
    }
    h1,
    h2 {
      margin: 0;
    }
    p {
      margin: 0;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  `;

  return <Global styles={global} />;
};

export default GlobalStyle;
