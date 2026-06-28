const n=`.loader{
    position: relative;
    font-size: 48px;
    letter-spacing: 2px;
  }
  .loader:before {
    content: "Loading";
    color: #fff;
  }
  .loader:after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #ff3d00;
    border-radius: 50%;
    position: absolute;
    inset: 0;
    margin: auto;
    top: -70px;
    animation: motion 3s ease-in-out infinite;
  }

  @keyframes motion {
    0%, 50%, 100% {
      transform: translateX(0) scale(1);
    }
    25% {
      transform: translateX(-100px) scale(0.3);
    }
    75% {
      transform: translateX(100px) scale(0.3);
    }
  }
`;export{n as default};
