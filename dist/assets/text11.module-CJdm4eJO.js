const n=`.loader {
  color: #FFF;
  display: inline-block;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 4px;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  position: absolute;
  right: 68px;
  bottom: 10px;
  height: 24px;
  width: 7px;
  outline: 1px solid #FFF;
  color: #FF3D00;
  box-sizing: border-box;
  animation: animloader1 1s linear infinite alternate;
}
.loader::after {
  content: '';  
  width: 4px;
  height: 4px;
  background: #FF3D00;
  position: absolute;
  right: 70px;
  top: 8px;
  box-sizing: border-box;
  animation: animloader 1s ease-out infinite alternate;
}

@keyframes animloader {
  0% {
    top: 8px;
    transform: rotate(0deg) scale(1);
  }
  100% {
    top: 0px;
    transform: rotate(180deg) scale(1.5);
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 0 0 inset;
  }
  100% {
    box-shadow: 0 -28px inset;
  }
}
`;export{n as default};
