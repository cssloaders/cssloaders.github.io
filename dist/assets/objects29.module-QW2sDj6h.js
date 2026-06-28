const n=`.loader{
        display: block;
        position: relative;
        height: 32px;
        width: 120px;
        border-bottom: 5px solid #fff;
        box-sizing: border-box;
        animation: balancing 2s linear infinite alternate;
        transform-origin: 50% 100%;
      }
      .loader:before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #FF3D00;
        animation: ballbns 2s linear infinite alternate;
      }
      .loader:after{
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        height: 20px;
        width: 20px;
        transform: translate(-50%, 100%);
        border-radius: 50%;
        border: 6px solid #fff;
      }
      @keyframes ballbns {
        0% {  left: 0; transform: translateX(0%); }
        100% {  left: 100%; transform: translateX(-100%); }
      }
      @keyframes balancing {
        0% {  transform: rotate(-15deg); }
        50% {  transform: rotate(0deg); }
        100% {  transform: rotate(15deg); }
      }
`;export{n as default};
