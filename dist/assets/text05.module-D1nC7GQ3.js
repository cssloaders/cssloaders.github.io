const n=`.loader {
  color: #FFF;
  position: relative;
  display: inline-block;
  margin-top: 40px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 4px;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  position: absolute;
  right: 70px;
  bottom: 10px;
  height: 28px;
  width: 5.15px;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader1 1s linear infinite alternate;
}
.loader::after {
  content: '';  
  width: 10px;
  height: 10px;
  position: absolute;
  left: 125px;
  top: 2px;
  border-radius: 50%;
  background: red;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    transform: translate(0px, 0px) scaleX(1);
  }
  14% {
    transform: translate(-12px, -16px) scaleX(1.05);
  }
  28% {
    transform: translate(-27px, -28px) scaleX(1.07);
  }
  42% {
    transform: translate(-46px, -35px) scaleX(1.1);
  }
  57% {
    transform: translate(-70px, -37px) scaleX(1.1);
  }
  71% {
    transform: translate(-94px, -32px) scaleX(1.07);
  }
  85% {
    transform: translate(-111px, -22px) scaleX(1.05);
  }
  100% {
    transform: translate(-125px, -9px) scaleX(1);
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 0 -6px, -122.9px -8px;
  }
  25%, 75% {
    box-shadow: 0 0px, -122.9px -8px;
  }
  100% {
    box-shadow: 0 0px, -122.9px -16px;
  }
}
`;export{n as default};
