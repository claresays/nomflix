import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle `
    ${reset};
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        background-color: #000000;
        box-sizing: border-box;
    }
    body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        font-size:14px;
        background-color:rgba(20,20,20,1);
        color: #ffffff;
        padding-top: 80px;
    }
`;

export default globalStyles;