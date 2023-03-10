import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TheJamsilThin from "@assets/fonts/The-Jamsil-1-Thin.woff";
import TheJamsilLight from "@assets/fonts/The-Jamsil-2-Light.woff";
import TheJamsilRegular from "@assets/fonts/The-Jamsil-3-Regular.woff";
import TheJamsilMedium from "@assets/fonts/The-Jamsil-4-Medium.woff";
import TheJamsilBold from "@assets/fonts/The-Jamsil-5-Bold.woff";
import TheJamsilExtraBold from "@assets/fonts/The-Jamsil-6-ExtraBold.woff";
import BlackHanSans from "@assets/fonts/BlackHanSans-Regular.woff";

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: "theJamsil";
        src: local("theJamsil"), url(${TheJamsilThin}) format('woff'); 
        font-weight: 100;
    }

    @font-face {
        font-family: "theJamsil";
        src: local("theJamsil"), url(${TheJamsilLight}) format('woff'); 
        font-weight: 300;
    }

    @font-face {
        font-family: "theJamsil";
        src: local("theJamsil"), url(${TheJamsilRegular}) format('woff'); 
        font-weight: 400;
    }

    @font-face {
        font-family: "theJamsil";
        src: local("theJamsil"), url(${TheJamsilMedium}) format('woff'); 
        font-weight: 500;
    }

    @font-face {
        font-family: "theJamsil";
        src: local("theJamsil"), url(${TheJamsilBold}) format('woff'); 
        font-weight: 700;
    }

    @font-face {
        font-family: "theJamsil";
        src: local("theJamsil"), url(${TheJamsilExtraBold}) format('woff'); 
        font-weight: 800;
    }

    @font-face {
        font-family: "blackHanSans";
        src: local("blackHanSans"), url(${BlackHanSans}) format('woff'); 
        font-weight: normal;
    }

    :root {
        font-family: "theJamsil";
        background-color: #DCBC8C;
    }

    #root {
        max-width: 430px;
        margin: 0 auto;
        padding: 40px 20px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a {
        text-decoration: none;
        color: inherit;
    }

    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }

    button {
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
`;

// body{
//     background-color: #ffffff;
//     font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; //????????? ????????? ?????? ??????????????? ??????????????????.
//   }
//  h1, h2, h3, h4, h5, h6{
//     font-family:'Maven Pro', sans-serif;
//   }
//   img {
//     display: block;
//     width: 100%;
//     height: 100%;
//   }
//   } ??????????????? ???????????????
