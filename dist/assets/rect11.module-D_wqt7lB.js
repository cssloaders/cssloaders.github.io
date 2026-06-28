const n=`.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 100px;
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
    animation: ballbns 2s ease-in infinite;
  }
  
  @keyframes ballbns {
    0% {  
      left: 0; 
      transform: translateX(-100%) rotate(0deg);
      border-radius: 0; 
      background: #FFF;
    }
    100% {  
      left: 100%; 
      transform: translateX(0%) rotate(360deg); 
      border-radius: 50%;
      background: #FFF; 
    }
  }
`;export{n as default};
