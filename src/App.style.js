import styled, { createGlobalStyle } from 'styled-components';
import { Card } from 'antd';

export const GlobalStyles = createGlobalStyle`
/********** Add Your Global CSS Here **********/

body {
  -webkit-overflow-scrolling: touch;
}

html h1,
html h2,
html h3,
html h4,
html h5,
html h6,
html a,
html p,
html li,
input,
textarea,
span,
div,
html,
body,
html a {
  margin-bottom: 0;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal
}

html ul {
  -webkit-padding-start: 0px;
  list-style: none;
  margin-bottom: 0;
}
html, body,
  #root{
    height: 100%;
  }
  .m-t-10 {
    margin-top: 10px;
  }
  .m-b-10 {
    margin-bottom: 10px;
  }
`;

export const AppStyles = styled.div`
  height: 100%;
  padding: 30px;
  div > h1 {
    margin-bottom: 30px;
    text-align: center;
  }
`;
export const CardStyles = styled(Card)`
  background: ${(props) => props.background};
  .ant-card-body {
    div {
      line-height: 1.5;
    }
    h2 {
      margin-bottom: 20px;
    }
    h4 {
      font-weight: 600;
      margin: 15px 0;
    }
    .ant-form-item {
      margin-bottom: 10px;
    }
  }
`;

export const SuccessStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .anticon-check-circle {
    font-size: 50px;
    margin-bottom: 20px;
  }
  h3 {
    margin-bottom: 10px;
  }
  h4 {
    margin-bottom: 20px;
  }
`;
