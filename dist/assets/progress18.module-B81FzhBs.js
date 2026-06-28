const n=`.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 120px;
    background: linear-gradient(#FFF 4px, transparent 0) no-repeat;
    background-position: 0 16px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #FF3D00;
    border:6px solid #FFF;
    box-sizing: border-box;
    animation: ballbns 1.5s linear infinite;
  }
  
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(-100%); }
    100% {  left: 100%; transform: translateX(0%); }
  }
`;export{n as default};
