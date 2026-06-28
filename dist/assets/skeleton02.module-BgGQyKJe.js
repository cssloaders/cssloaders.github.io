const n=`.loader {
  width: 360px;
  height: 100px;
  display: block;
  background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#FFF 100px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
  background-repeat: no-repeat;
  background-size: 75px 100px, 100px 100px, 125px 20px, 260px 20px, 260px 20px;
  background-position: -50% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}

@keyframes animloader {
  0% {
    background-position: 0% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
  }
  100% {
    background-position: 100% 0, 0 0, 120px 0, 120px 40px, 120px 80px, 120px 120px;
  }
}
`;export{n as default};
