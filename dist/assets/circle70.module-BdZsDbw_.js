const n=`.loader {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      position: relative;
      background: rgba(255, 255, 255, 0.8);
    }
    .loader:before , .loader:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: #FFF;
      animation: slide 1s infinite linear alternate;
      opacity: 0.5;
    }
    .loader:after {
      animation: slide2 1s infinite linear alternate;
      opacity: 1;

    }
    @keyframes slide {
      0% , 20% {  transform: translate(0, 0)  }
      80% , 100% { transform: translate(15px, 15px) }
    }
    @keyframes slide2 {
      0% , 20% {  transform: translate(0, 0) }
      80% , 100% { transform: translate(-15px, -15px) }
    }
`;export{n as default};
