const n=`.loader {
      width: 64px;
      height: 64px;
      position: relative;
      background: #FFF;
      border-radius: 50%;
      transform: rotate(45deg);
      animation: rotate 2s linear infinite;
    }
    .loader:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 15px;
      height: 30px;
      background: #FF3D00;
      transform: skew(5deg , 60deg) translate(-50%, -5%);
    }

    .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #FFF;
      transform:translate(-50% , -50%);
    }

    @keyframes rotate {
      0% { transform: rotate(45deg)}
      30% , 50% , 70%  { transform: rotate(230deg)}
      40% , 60% , 80% { transform: rotate(240deg)}
      100% {  transform: rotate(245deg)}
   }
`;export{n as default};
