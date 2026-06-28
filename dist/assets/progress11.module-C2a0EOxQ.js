const n=`.loader{
        display: block;
        position: relative;
        height: 12px;
        width: 80%;
        border: 1px solid #fff;
        border-radius: 10px;
        overflow: hidden;
      }
      .loader:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0;
        background: #FF3D00;
        animation: 6s prog ease-in infinite;
      }
      
      @keyframes prog {
        to  {   width: 100%;}
      }
`;export{n as default};
