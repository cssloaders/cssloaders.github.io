const n=`.loader{
      display: block;
      position: relative;
      height: 12px;
      width: 80%;
      border: 1px solid #fff;
      border-radius: 10px;
      overflow: hidden;
    }
    .loader::after {
      content: '';
      width: 40%;
      height: 100%;
      background: #FF3D00;
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      animation: animloader 2s linear infinite;
    }
    
    @keyframes animloader {
      0% {
        left: 0;
        transform: translateX(-100%);
      }
      100% {
        left: 100%;
        transform: translateX(0%);
      }
    }
`;export{n as default};
