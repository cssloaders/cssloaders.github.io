const n=`.loader {
        position: relative;
        border: 24px solid #FFF;
        border-radius: 50%;
        box-sizing: border-box;
        animation: eat 1s linear infinite;
      }
      .loader::after , .loader::before {
        content: '';
        position: absolute;
        left: 50px;
        top: 50%;
        transform: translateY(-50%);
        background: #fff;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        box-sizing: border-box;
        opacity: 0;
        animation: move 2s linear infinite;
      }

      .loader::before {
        animation-delay: 1s;
      }

      @keyframes eat {
        0% , 49% { border-right-color: #FFF }
        50% , 100% { border-right-color: #0000 }
      }
      @keyframes move {
        0% { left: 75px ; opacity: 1}
        50% { left: 0px; opacity: 1 }
        52%, 100% { left: -5px; opacity: 0; }
      }
`;export{n as default};
