const n=`.loader {
      width: 32px;
      height: 84px;
      border-radius: 0 0 20px 20px;
      position: relative;
      background: #FFF radial-gradient(circle 5px at 50% 85%, #FF3D00 100%, transparent 0);
    }
    .loader:before , .loader:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 32px;
      height: 84px;
      border-radius: 0 0 20px 20px;
      background: #FFF;
      opacity: 0.8;
      transform: rotate(60deg);
      transform-origin: 50% 85%;
      z-index: -2;
      animation: rotate 1s infinite linear alternate;
    }
    .loader:after {
      animation: rotate2 1s infinite linear alternate;
      opacity: 0.5;
    }
    @keyframes rotate {
      0% , 20% { transform: rotate(0deg) }
      80% , 100% { transform: rotate(30deg) }
    }
    @keyframes rotate2 {
      0% , 20% { transform: rotate(0deg) }
      80% , 100% { transform: rotate(60deg) }
    }
`;export{n as default};
