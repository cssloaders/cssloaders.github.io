const n=`.loader {
            width: 48px;
            height: 48px;
            position: relative;
            animation : rotate 4s linear infinite;
          }
          .loader:before,
          .loader:after {
            content:"";
            display: block;
            border: 24px solid;
            border-color: transparent transparent #fff  #fff;
            position: absolute;
            left: 0;
            top: 0;
            animation: mvx 1s infinite ease-in;
          }
          .loader:before {
            left: -1px;
            top: 1px;
            border-color:#FF3D00  #FF3D00 transparent transparent;
            animation-name:mvrx;
          }

          @keyframes rotate {
            100% {transform: rotate(360deg)}
          }
          @keyframes mvx {
            0% , 15% {transform: translate(0 , 0) rotate(0deg)}
            50% {transform: translate(-50% , 50%) rotate(180deg)}
            100% {transform: translate(0% , 0%) rotate(180deg)}
          }
          @keyframes mvrx {
            0% , 15%  {transform: translate(0 , 0) rotate(0deg)}
            50% {transform: translate(50% , -50%) rotate(180deg)}
            100% {transform: translate(0% , 0%) rotate(180deg)}
          }
`;export{n as default};
