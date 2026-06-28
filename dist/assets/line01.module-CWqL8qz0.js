const n=`.loader {
  width: 8px;
  height: 40px;
  border-radius: 4px;
  display: inline-block;
  margin-left: 20px;
  margin-top: 10px;
  position: relative;
  background: currentColor;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 8px;
  height: 40px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  bottom: 0;
  left: 20px;
  animation: animloader1 0.3s  0.45s  linear infinite alternate;
}
.loader::before {
  left: -20px;
  animation-delay: 0s;
}

@keyframes animloader {
  0% {
    height: 40px;
    transform: translateY(0);
  }
  100% {
    height: 10px;
    transform: translateY(30px);
  }
}

@keyframes animloader1 {
  0% {
    height: 48px;
  }
  100% {
    height: 4.8px;
  }
}
`;export{n as default};
