const n=`.loader {
  width: 24px;
  height: 80px;
  display: block;
  margin: 35px auto 0;
  border: 1px solid #FFF;
  border-radius: 0 0 50px 50px;
  position: relative;
  box-shadow: 0px 0px #FF3D00 inset;
  background-image: linear-gradient(#FF3D00 100px, transparent 0);
  background-position: 0px 0px;
  background-size: 22px 80px;
  background-repeat: no-repeat;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  border: 1px solid #FFF;
  border-radius: 50%;
  width: 28px;
  height: 6px;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  left: 0;
  bottom: -4px;
  border-radius: 50%;
  position: absolute;
  width: 6px;
  height: 6px;
  animation: animloader1 6s linear infinite;
}

@keyframes animloader {
  0% {
    background-position: 0px 80px;
  }
  100% {
    background-position: 0px 0px;
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 4px -10px rgba(255, 255, 255, 0), 6px 0px rgba(255, 255, 255, 0), 8px -15px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0);
  }
  20% {
    box-shadow: 4px -20px rgba(255, 255, 255, 0), 8px -10px rgba(255, 255, 255, 0), 10px -30px rgba(255, 255, 255, 0.5), 15px -5px rgba(255, 255, 255, 0);
  }
  40% {
    box-shadow: 2px -40px rgba(255, 255, 255, 0.5), 8px -30px rgba(255, 255, 255, 0.4), 8px -60px rgba(255, 255, 255, 0.5), 12px -15px rgba(255, 255, 255, 0.5);
  }
  60% {
    box-shadow: 4px -60px rgba(255, 255, 255, 0.5), 6px -50px rgba(255, 255, 255, 0.4), 10px -90px rgba(255, 255, 255, 0.5), 15px -25px rgba(255, 255, 255, 0.5);
  }
  80% {
    box-shadow: 2px -80px rgba(255, 255, 255, 0.5), 4px -70px rgba(255, 255, 255, 0.4), 8px -120px rgba(255, 255, 255, 0), 12px -35px rgba(255, 255, 255, 0.5);
  }
  100% {
    box-shadow: 4px -100px rgba(255, 255, 255, 0), 8px -90px rgba(255, 255, 255, 0), 10px -120px rgba(255, 255, 255, 0), 15px -45px rgba(255, 255, 255, 0);
  }
}
`;export{n as default};
