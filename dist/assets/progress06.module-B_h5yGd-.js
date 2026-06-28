const n=`.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.15);
  position: relative;
  overflow: hidden;
}
.loader::after {
  content: '';  
  width: 0%;
  height: 4.8px;
  background-color: #FFF;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.25) 25%, transparent 25%, transparent 50%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.25) 75%, transparent 75%, transparent);
  background-size: 15px 15px;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: animFw 6s ease-in infinite;
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
