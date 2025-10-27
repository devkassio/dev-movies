import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
    }
    
    html {
        width: 100%;
        overflow-x: hidden;
        /* Previne zoom horizontal em dispositivos móveis */
        touch-action: manipulation;
        /* Suporte para iPhones com notch */
        padding-top: env(safe-area-inset-top);
        padding-bottom: env(safe-area-inset-bottom);
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);
    }
    
    body {
        background: #000000;
        font-family: "Montserrat", sans-serif;
        color: #ffffff;
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        /* Previne scroll horizontal em qualquer situação */
        position: relative;
        /* Suporte melhorado para dispositivos móveis */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* Previne zoom no iOS quando focus em inputs */
        -webkit-text-size-adjust: 100%;
    }
    
    /* Containers principais nunca devem vazar horizontalmente */
    #root {
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
    }
    
    /* Previne vazamento em elementos com transform ou position */
    * {
        max-width: 100%;
    }
    
    /* Correção específica para iPhones com notch/dynamic island */
    @supports (padding-top: env(safe-area-inset-top)) {
        .header-safe-area {
            padding-top: calc(env(safe-area-inset-top) + 10px);
        }
        
        .footer-safe-area {
            padding-bottom: calc(env(safe-area-inset-bottom) + 10px);
        }
    }
    
    /* Previne problemas de zoom em landscape no iOS */
    @media screen and (orientation: landscape) and (max-height: 500px) {
        html {
            font-size: 16px;
        }
    }
`;
