const n=`.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 0;
  height: 4.8px;
  background: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  animation: animFw 10s linear infinite;
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
