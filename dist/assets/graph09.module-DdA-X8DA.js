const n=`.loader {
  position: relative;
  width: 120px;
  height: 55px;
  background-repeat: no-repeat;
  background-image:
  radial-gradient(circle 2.5px , #ff3d00 100%, transparent 0),
  radial-gradient(circle 2.5px , #ff3d00 100%, transparent 0),
  linear-gradient(#f0fda3 20px, transparent 0),
  linear-gradient(#333 90px, transparent 0),
  linear-gradient(#049b87 120px, transparent 0),
  linear-gradient(to right, #017a6a 10%,#333 10%,#333 90%,#017a6a 90%)
  ;

  background-size: 5px 5px, 5px 5px, 30px 5px, 90px 10px, 120px 45px , 100px 15px;
  background-position: 48px 20px , 60px 20px,  10px 20px, center bottom , center bottom , center 0 ;

}
.loader:before {
  content: "";
  width: 70px;
  height: 80px;
  background-color: #fff;
  background-image:   linear-gradient(to bottom, #FFF 50%, #f86133 51%),
                      linear-gradient(to bottom, #bbb 50%, #0000 51%);
  background-size: 60px 20px,  60px 10px;
  background-repeat: no-repeat, repeat-y;
  background-position: center -5px , center 0;
  box-shadow: 0 0 10px #0003;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  bottom: calc(100% + 30px);
  animation: loadPaper 2s ease-in infinite;
}
.loader:after {
  content: "";
  width: 70px;
  height: 90px;
  background-image:
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%),
      linear-gradient(to right, #fff 50%, #0000 51%);
  background-size: 10px 80px;
  background-position: 0 0px , 9px 5px, 18px 0px, 27px 7px,
                      36px 10px, 45px 5px, 55px 0px, 64px 8px;
  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  top: calc(100% + 6px);
  animation: disposePaper 2s ease-in infinite;
}

@keyframes loadPaper {
  0% {
    opacity: 0;
    height: 80px;
    bottom: calc(100% + 30px);
  }
  2% {
    opacity: 0;
    height: 80px;
    bottom: calc(100% + 15px);
  }
  50% {
    height: 80px;
    bottom: calc(100% - 10px);
  }
  75%,
  100% {
    height: 0px;
    bottom: calc(100% - 10px);
  }
}

@keyframes disposePaper {
  0%,
  60% {
    height: 0px;
    top: calc(100% - 9px);
    background-position: 0 0px , 9px 0, 18px 0, 27px 0,
                      36px 0, 45px 0, 55px 0, 64px 0;
  }
  80% {
    height: 90px;
    top: calc(100% - 9px);
    opacity: 1;
  }
  100% {
    height: 90px;
    top: calc(100% + 25px);
    background-position: 0 0px , 9px 5px, 18px 0px, 27px 7px,
                      36px 10px, 45px 5px, 55px 0px, 64px 8px;
    opacity: 0;
  }
}
`;export{n as default};
