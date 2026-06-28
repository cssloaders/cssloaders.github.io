const n=`.loader {
      width: 48px;
      height: 48px;
      display: flex;
      animation: rotate 1.5s infinite linear;
    }
    .loader:before,
    .loader:after {
      content:"";
      flex:1;
      background:#fff;
      animation: mvx 0.5s infinite linear alternate;
    }
    .loader:before {
      background: #FF3D00;
      animation-name:mvrx;
    }

    @keyframes rotate {
      100% {transform: rotate(360deg)}
    }
    @keyframes mvx {
      0% {transform: translateX(-15px)}
      100% {transform: translateX(15px)}
    }
    @keyframes mvrx {
      0% {transform: translateX(15px)}
      100% {transform: translateX(-15px)}
    }
`;export{n as default};
