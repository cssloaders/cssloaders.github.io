const e=`.loader{
    width:120px;
    height:24px;
    -webkit-mask:
      radial-gradient(circle closest-side,#fff 94%,#0000) 0 0/25% 100%,
      linear-gradient(#fff 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
    mask:
      radial-gradient(circle closest-side,#fff 94%,#0000) 0 0/25% 100%,
      linear-gradient(#fff 0 0) center/calc(100% - 12px) calc(100% - 12px) no-repeat;
    background: linear-gradient(#FF3D00 0 0) left/0% 100% no-repeat #fff;
    animation:bblprg 2s infinite linear;
  }
  @keyframes bblprg {
      100% {background-size:100% 100%}
  }
`;export{e as default};
