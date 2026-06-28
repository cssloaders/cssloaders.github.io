const n=`.loader {
      position: relative;
      color: #de3500;
      width: 0;
      height: 0;
      border-right: 50px solid transparent;
      border-bottom: 35px solid #de3500;
      border-left: 50px solid transparent;
      animation: 3s starRotate linear infinite;
    }
    .loader:before {
      border-bottom: 40px solid #de3500;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -22px;
      left: -31px;
      display: block;
      content: '';
      transform: rotate(-35deg);
    }
    .loader:after {
      content: '';
      position: absolute;
      display: block;
      color: #de3500;
      top: 1.5px;
      transform: rotate(-70deg);
      left: -52px;
      width: 0px;
      height: 0px;
      border-right: 50px solid transparent;
      border-bottom: 35px solid #de3500;
      border-left: 50px solid transparent;
    }

  @keyframes starRotate {
    0%{    transform: rotate(0deg) scale(0.15)}
    50%{    transform: rotate(360deg) scale(1)}
    100%{    transform: rotate(720deg) scale(0.15)}
  }
`;export{n as default};
