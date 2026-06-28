const n=`.loader {
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #263238;
  box-sizing: border-box;
  text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
  letter-spacing: 2px;
  position: relative;
}
.loader::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: #FFF;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
`;export{n as default};
