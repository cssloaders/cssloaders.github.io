const n=`.loader {
      width: 86px;
      height: 50px;
      border-radius: 50px;
      background:
        radial-gradient(farthest-side,#0000 calc(100% - 10px),#FFF calc(100% - 10px) 100%,#0000) left,
        radial-gradient(farthest-side,#0000 calc(100% - 10px),#FFF calc(100% - 10px) 100%,#0000) right;
      background-size: calc(50% + 5px) 100%;
      background-repeat: no-repeat;
      position: relative;
      animation: flipX 1s infinite linear;
    }
    .loader:before {
      content: "";
      position: absolute;
      inset:0;
      margin:auto;
      width:10px;
      height: 10px;
      border-radius: 50%;
      background:#FF3D00;
      transform-origin: -14px 50%;
      animation: rotate 0.5s infinite linear;
    }

    @keyframes flipX {
        0%,49.99% { transform:scaleX(1)}
        50%,100% { transform:scaleX(-1)}
    }

    @keyframes rotate {
        100% { transform:rotate(360deg)}
    }
`;export{n as default};
