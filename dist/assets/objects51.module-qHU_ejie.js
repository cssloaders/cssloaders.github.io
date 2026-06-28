const n=`.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin: auto;
  background-image: radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-bottom-color: #FF3D00;
  box-sizing: border-box;
  animation: fadePull 1s linear infinite;
}
.loader::before {
  content: '';  
  left: 50%;
  bottom: 15px;
  transform: translate(-50%, 0);
  position: absolute;
  width: 15px;
  height: 15px;
  background: #FF3D00;
  box-sizing: border-box;
  animation: fadePull 1s linear infinite;
}

@keyframes fadePull {
  0% {
    transform: translate(-50%, 15px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, 0px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -15px);
    opacity: 0;
  }
}
`;export{n as default};
