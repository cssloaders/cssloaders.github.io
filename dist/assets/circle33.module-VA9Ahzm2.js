const n=`.loader {
      width: 48px;
      height: 48px;
      border:10px solid #FFF;
      border-radius: 50%;
      position: relative;
      transform:rotate(45deg);
      box-sizing: border-box;
    }
    .loader::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      inset:-10px;
      border-radius: 50%;
      border:10px solid #FF3D00;
      animation: prixClipFix 2s infinite linear;
    }

    @keyframes prixClipFix {
        0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
        25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
        50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
        75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
        100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
    }
`;export{n as default};
