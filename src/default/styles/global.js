import { injectGlobal } from 'emotion';

const globalStyle = injectGlobal`
  html {
    box-sizing: border-box;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 16px;
  }

  *,
  *:after,
  *:before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2.4em;
  }

  h2 {
    font-size: 1.8em;
  }

  ul {
    list-style-position: inside;
  }

  a {
    color: #666;
    transition: .3s;
  }

  @media (hover: hover)  {
    a:hover {
      color: #900;
    }
  }

  :not(pre) > code[class*='language-'] {
    background: #eee;
    color: #666;
    text-shadow: none;
    padding: 1px 5px;
    border-radius: 2px;
  }


`;

export default globalStyle;
