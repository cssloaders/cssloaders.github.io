const n=`.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 100px;
    background: linear-gradient(#FFF 4px, transparent 0) no-repeat;
    background-position: 0 14px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .loader:before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 24px;
    height: 24px;
    background: #FF3D00;
    animation: ballbns 1s linear infinite alternate ;
  }
  
  @keyframes ballbns {
    0% {  left: 0; transform: translateX(0%) rotate(45deg); }
    100% {  left: 100%; transform: translateX(-100%) rotate(45deg); }
  }
`;export{n as default};
