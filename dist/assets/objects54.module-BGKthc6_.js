const n=`.loader {
  width: 175px;
  height: 80px;
  display: block;
  margin:auto;
  background-image: linear-gradient(#263238 50px, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), radial-gradient(circle 50px at 50px 50px, #FFF 100%, transparent 0), radial-gradient(circle 25px at 25px 25px, #FFF 100%, transparent 0), linear-gradient(#FFF 50px, transparent 0);
  background-size: 64px 6px, 50px 50px, 100px 76px, 50px 50px, 120px 40px;
  background-position: 55px 60px, 0px 30px, 37px 0px, 122px 30px, 25px 40px;
  background-repeat: no-repeat;
  position: relative;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  position: absolute;
  left: 50%;
  transform: translateX(-50%) rotate(-180deg);
  top: 62px;
  height: 64px;
  width: 60px;
  background-color: #FFF;
  background-image: linear-gradient(#DDD 20px, transparent 0), linear-gradient(#DDD 5px, transparent 0), linear-gradient(#DDD 10px, transparent 0), linear-gradient(#DDD 10px, transparent 0);
  background-size: 50px 20px;
  background-position: 5px 36px, 5px 25px, 5px 10px;
  background-repeat: no-repeat;
  border-radius: 2px 2px 4px 4px;
  z-index: 10;
  box-shadow: 0px -4px 7px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  animation: animloader 4s linear infinite;
}

@keyframes animloader {
  0% {
    height: 64px;
  }
  90%, 100% {
    height: 0px;
  }
}
`;export{n as default};
