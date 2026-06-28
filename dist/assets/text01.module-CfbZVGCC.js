const n=`.loader {
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  display: inline-block;
  color: #FF3D00;
  letter-spacing: 2px;
  position: relative;
  box-sizing: border-box;
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
    height: 100%;
  }
  100% {
    height: 0%;
  }
}
`;export{n as default};
