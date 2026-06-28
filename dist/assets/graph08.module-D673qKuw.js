const n=`.loader {
  position: relative;
  background: #ff3d00;
  width: 80px;
  height: 30px;
  line-height: 18px;
  text-align: center;
  color: #931010;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 14px;
  box-sizing: border-box;
  border: 5px groove #de3500;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 5px 7px #0002;
}
.loader:before {
  content: "";
  width: 70px;
  height: 80px;
  background: #fff;
  box-shadow: 0 0 10px #0003;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  bottom: calc(100% + 6px);
  animation: loadPaper 4s ease-in infinite;
}
.loader:after {
  content: "";
  width: 70px;
  height: 80px;
  background: linear-gradient(to right, #fff 50%, #0000 51%);
  background-size: 9px 80px;
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  top: calc(100% + 6px);
  animation: disposePaper 4s ease-in infinite;
}

@keyframes loadPaper {
  0%,
  10% {
    height: 80px;
    bottom: calc(100% + 40px);
  }
  50% {
    height: 80px;
    bottom: calc(100% + 6px);
  }
  75%,
  100% {
    height: 0px;
    bottom: calc(100% + 6px);
  }
}

@keyframes disposePaper {
  0%,
  50% {
    height: 0px;
    top: calc(100% + 6px);
  }
  75% {
    height: 80px;
    top: calc(100% + 6px);
    opacity: 1;
  }
  100% {
    height: 80px;
    top: calc(100% + 40px);
    opacity: 0;
  }
}
`;export{n as default};
