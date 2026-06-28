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
  right: 70px;
  bottom: 10px;
  height: 24px;
  width: 5px;
  background: currentColor;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  width: 4px;
  height: 4px;
  background: currentColor;
  position: absolute;
  right: 70px;
  top: 8px;
  box-sizing: border-box;
  animation: animloader 0.6s ease-out infinite alternate;
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
`;export{n as default};
