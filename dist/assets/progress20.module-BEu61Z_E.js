const n=`.loader{
    display: block;
    position: relative;
    height: 32px;
    border: 2px solid #fff;
    width: 120px;
    background: #fff;
    box-sizing: border-box;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 28px;
    height: 28px;
    background: #FF3D00;
    animation: ballbns 1s ease-in-out infinite alternate;
  }
  
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(0%); }
    100% {  left: 100%; transform: translateX(-100%); }
  }
`;export{n as default};
