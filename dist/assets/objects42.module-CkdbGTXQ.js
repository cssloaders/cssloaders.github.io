const n=`.loader {
        position: relative;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        box-shadow: inset 0 0 20px -5px rgba(255, 255, 255, 0.5),
                inset 0 -40px 40px -20px rgba(255, 255, 255, 0.5);
        background: linear-gradient(#FF3D00 120px, transparent 0) no-repeat;
        background-position: 0px 120px;
        animation: fillLq 10s linear infinite alternate;
      }
      .loader:before {
        position: absolute;
        content: '';
        width: 40%;
        height: 25%;
        top: 20px;
        left: 10px;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
        transform: rotate(-45deg);
      }

      @keyframes fillLq {
        0% , 10% { background-position: 0 120px}
        90% , 100% { background-position: 0 0}
      }
`;export{n as default};
