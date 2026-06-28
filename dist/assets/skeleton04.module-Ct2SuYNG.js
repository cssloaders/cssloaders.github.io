const n=`.loader {
  width: 320px;
  height: 150px;
  margin: auto;
  display: block;
  position: relative;
  background: #FFF;
  box-sizing: border-box;
}
.loader::after {
  content: '';  
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  top: 15px;
  left: 15px;
  position: absolute;
  background-image: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.5) 50%, transparent 80%), linear-gradient(#DDD 56px, transparent 0), linear-gradient(#DDD 24px, transparent 0), linear-gradient(#DDD 18px, transparent 0), linear-gradient(#DDD 66px, transparent 0);
  background-repeat: no-repeat;
  background-size: 75px 130px, 55px 56px, 160px 30px, 260px 20px, 290px 56px;
  background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}

@keyframes animloader {
  0% {
    background-position: 0% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
  }
  100% {
    background-position: 150% 0, 0 0, 70px 5px, 70px 38px, 0px 66px;
  }
}
`;export{n as default};
