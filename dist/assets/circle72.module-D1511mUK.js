const n=`.loader {
      width: 84px;
      height: 84px;
      position: relative;
    }
    .loader:before , .loader:after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      width:64px;
      height: 64px;
      border-radius: 50%;
      background:#FFF;
      transform: translate(-50% , -100%)  scale(0);
      animation: push 2s infinite linear;
    }
    .loader:after {
      animation-delay: 1s;
    }
    @keyframes push {
        0% , 50%{ transform: translate(-50% , 0%)  scale(1) }
      100% { transform: translate(-50%, -100%) scale(0) }
    }
`;export{n as default};
