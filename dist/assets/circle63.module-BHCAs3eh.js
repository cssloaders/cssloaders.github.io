const n=`.loader {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    animation: skLinRotate 1s ease-in-out infinite alternate;
  }
  .loader:after{
    content:"";
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #ff3d00;
  }
  @keyframes skLinRotate {
    95% ,100% { transform: rotate(840deg) }
  }
`;export{n as default};
