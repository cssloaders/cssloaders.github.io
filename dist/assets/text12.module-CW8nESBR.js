const n=`.loader {
  position: relative;
  display: inline-block;
}
.loader::before {
  
  content: 'Loading';
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
  letter-spacing: 2px;
  display: inline-block;
  box-sizing: border-box;
  animation: floating 1s ease-out infinite alternate;
}
.loader::after {
  content: '';  
  width: 100%;
  height: 10px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  left: 0;
  top: 100%;
  filter: blur(4px);
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 1s ease-out infinite alternate;
}

@keyframes floating {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-25px);
  }
}

@keyframes animloader {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.2);
  }
}
`;export{n as default};
