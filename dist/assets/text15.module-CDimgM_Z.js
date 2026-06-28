const n=`.loader{
        font-size: 48px;
        color: #FFF;
        display: inline-block;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        position: relative;
      }
      .loader:after{
        content: '';
        height: 4px;
        width:0%;
        display: block;
        background: #FF3D00;
        animation: 5s lineGrow linear infinite;
      }
      
      @keyframes lineGrow {to{width: 100%;}}
`;export{n as default};
