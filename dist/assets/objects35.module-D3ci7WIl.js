const n=`.loader {
  width: 48px;
  height: 48px;
  display: block;
  margin: 20px auto;
  position: relative;
  border: 3px solid #FFF;
  border-radius: 50%;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 6px;
  height: 24px;
  background: #FFF;
  transform: rotate(-45deg);
  position: absolute;
  bottom: -20px;
  left: 46px;
}

@keyframes animloader {
  0% {
    transform: translate(-10px, -10px);
  }
  25% {
    transform: translate(-10px, 10px);
  }
  50% {
    transform: translate(10px, 10px);
  }
  75% {
    transform: translate(10px, -10px);
  }
  100% {
    transform: translate(-10px, -10px);
  }
}
`;export{n as default};
