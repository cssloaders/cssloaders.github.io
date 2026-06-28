const n=`.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 140px;
    border: 3px solid #fff;
    border-radius: 20px;
    box-sizing: border-box;
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
    animation: ballbns 2s ease-in-out infinite alternate;
  }
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(0%); }
    100% {  left: 100%; transform: translateX(-100%); }
  }
`;export{n as default};
