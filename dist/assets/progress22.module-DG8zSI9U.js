const n=`.loader{
      width: 100px;
      height: 46px;
      position: relative;
      border-bottom: 5px solid #FFF;
      border-top: 5px solid #FFF;
      box-sizing: border-box;
    }
    .loader:before , .loader:after {
      content: "";
      position: absolute;
      left: 0;
      top: -20px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #FF3D00;
      border: 5px solid #FFF;
      box-sizing: border-box;
      animation: slide 1s infinite ease-in-out alternate;

    }
    .loader:after {
      top: 20px;
      animation-direction: alternate-reverse;
    }
    @keyframes slide {
      0% , 20% {  transform: translateX(70px)  }
      80% , 100% { transform: translateX(-1px) }
    }
`;export{n as default};
