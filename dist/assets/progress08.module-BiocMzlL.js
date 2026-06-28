const n=`.loader {
  width: 100%;
  height: 8px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.15);
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
  background-size: 15px 15px;
  z-index: 10;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 0%;
  height: 100%;
  background-color: #FFF;
  position: absolute;
  border-radius: 0 4px 4px 0;
  top: 0;
  left: 0;
  animation: animFw 10s ease-in infinite;
}


@keyframes animFw {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
`;export{n as default};
