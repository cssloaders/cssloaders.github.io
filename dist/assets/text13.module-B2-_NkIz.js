const n=`.loader {
  font-size: 48px;
  display: inline-block;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 1s ease-in infinite alternate;
}

@keyframes animloader {
  0% {
    filter: blur(0px);
    transform: skew(0deg);
  }
  100% {
    filter: blur(3px);
    transform: skew(-4deg);
  }
}
`;export{n as default};
