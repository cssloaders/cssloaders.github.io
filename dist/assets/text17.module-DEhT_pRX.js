const n=`.loader{
      font-size: 48px;
      color: #FFF;
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      position: relative;
    }
    .loader:after{
      content: 'Loading';
      position: relative;
      z-index: 5;
    }
    .loader:before{
      content: '';
      height: 6px;
      border: 1px solid;
      border-radius: 10px;
      width: 100%;
      position: absolute;
      bottom: 0px;
      background: linear-gradient(#FF3D00 100%, transparent 0) no-repeat;
      background-size: 0% auto;
      animation: 10s lineGrow linear infinite;
    }

    @keyframes lineGrow {to {  background-size: 100% auto}}
`;export{n as default};
