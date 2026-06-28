const n=`.loader {
        position: relative;
        border: 24px solid;
        border-color: #fff  transparent #fff transparent;
        animation : rotate 2s linear infinite;
      }
      .loader:before,
      .loader:after {
        content:"";
        display: block;
        border: 24px solid transparent;
        border-left-color: #fff;
        position: absolute;
        left: -24px;
        top: -24px;
        animation: prix 1s infinite ease-in;
        transform-origin: 0% 100%;
      }
      .loader:before {
        border-color: transparent #fff transparent transparent;
        transform-origin: 100% 0%;
        animation-delay: 0.5s;
      }
      @keyframes rotate {
        100% {transform: rotate(360deg)}
      }
      @keyframes prix {
        20% , 80% {transform: rotate(0)}
        50% {transform: rotate(-90deg)}
      }
`;export{n as default};
