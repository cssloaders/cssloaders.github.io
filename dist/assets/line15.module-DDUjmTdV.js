const n=`.loader {
  width: 20px;
  height: 12px;
  display: block;
  margin: auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.6s 0.3s ease infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 20px;
  height: 12px;
  background: currentColor;
  position: absolute;
  border-radius: 4px;
  top: 0;
  right: 110%;
  animation: animloader  0.6s ease infinite alternate;
}
.loader::after {
  left: 110%;
  right: auto;
  animation-delay: 0.6s;
}

@keyframes animloader {
  0% {
    width: 20px;
  }
  100% {
    width: 48px;
  }
}
`;export{n as default};
