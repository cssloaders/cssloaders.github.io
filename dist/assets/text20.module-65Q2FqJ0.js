const n=`.loader{
    position: relative;
    font-size: 48px;
    letter-spacing: 6px;
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
    background-image: radial-gradient(circle 2px, #fff4 100%, transparent 0),
      radial-gradient(circle 1px, #fff3 100%, transparent 0);
    background-position: 14px -4px, 12px -1px;
    border-radius: 50%;
    position: absolute;
    margin: auto;
    top: -5px;
    right: 66px;
    transform-origin: center bottom;
    animation: fillBaloon 1s ease-in-out infinite alternate;
  }

  @keyframes fillBaloon {
    0% { transform: scale(1)}
    100% { transform: scale(3)}
  }
`;export{n as default};
