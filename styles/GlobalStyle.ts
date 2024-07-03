// styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-image:linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0));
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    backdrop-filter: blur(10px); 
    box-shadow: 10px 10px 10px rgba(30,30,30,0.5);
  }

  .container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    height: 90vh;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  h1, h2, h3 {
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
   background-image:linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0));
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
  }

  button:disabled {
    background-color: #c0c0c0;
  }

  input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
