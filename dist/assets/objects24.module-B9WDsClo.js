const n=`.loader {
  width: 48px;
  height: 12px;
  margin-top: 40px;
  background: #FFF;
  display: inline-block;
  position: relative;
}
.loader::after {
  content: '';  
  left: 50%;
  top: -47px;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-bottom-color: #FFF;
  box-sizing: border-box;
  animation: bump 0.4s ease-in-out infinite alternate;
}
.loader::before {
  content: '';  
  left: 50%;
  bottom: 15px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 15px;
  height: 20px;
  background: #FFF;
  box-sizing: border-box;
  animation: bump 0.4s ease-in-out infinite alternate;
}

@keyframes bump {
  0% {
    transform: translate(-50%, 5px);
  }
  100% {
    transform: translate(-50%, -5px);
  }
}
`;export{n as default};
