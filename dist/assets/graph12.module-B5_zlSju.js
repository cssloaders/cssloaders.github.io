const n=`.loader {
    position: relative;
    width: 120px;
    height: 55px;
    background-repeat: no-repeat;
    background-image:
    radial-gradient(circle 2.5px , #ff3d00  100%, transparent 0),
    linear-gradient(#525252 90px, transparent 0),
    linear-gradient(#ececec 120px, transparent 0),
    linear-gradient(to right, #eee 10%,#333 10%,#333 90%,#eee 90%)
    ;

    background-size: 5px 5px, 90px 10px, 120px 45px , 100px 15px;
    background-position: 110px 15px,center bottom , center bottom , center 0 ;

  }
  .loader:before {
    content: "";
    width: 70px;
    background-color: #fff;
    box-shadow: 0 0 10px #0003;
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    bottom: calc(100% - 10px);
    animation: printerPaper 4s ease-in infinite;
  }
  .loader:after {
    content: "";
    width: 70px;
    height: 80px;
    background-color: #fff;
    background-image:   linear-gradient(to bottom, #FFF 50%, #ff3d00  51%),
                        linear-gradient(to bottom, #bbb 50%, #0000 51%);
    background-size: 60px 20px,  60px 10px;
    background-repeat: no-repeat, repeat-y;
    background-position: center 55px , center 0;
    position: absolute;
    left: 50%;
    transform: translatex(-50%) rotate(180deg);
    box-shadow: 0 10px #fff inset;
    top: calc(100% - 8px);
    animation: PrintedPaper 4s ease-in infinite;
  }

  @keyframes printerPaper {
    0% , 25% { height: 50px}
    75%, 100% { height: 0}
  }

  @keyframes PrintedPaper {
    0%, 30% {
      height: 0px;
      top: calc(100% - 8px);
    }

    80% {
      height: 80px;
      top: calc(100% - 8px);
      opacity: 1;
    }
    100% {
      height: 80px;
      top: calc(100% + 10px);
      opacity: 0;
    }
  }
`;export{n as default};
