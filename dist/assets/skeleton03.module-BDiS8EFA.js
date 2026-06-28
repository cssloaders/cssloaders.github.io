const n=`.loader {
  width: 360px;
  height: 100px;
  display: block;
  position: relative;
  background-image: linear-gradient(100deg, transparent, rgba(38, 50, 56, 0.5) 50%, transparent 80%), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0), linear-gradient(#FFF 20px, transparent 0);
  background-repeat: no-repeat;
  background-size: 75px 100px,  125px 20px, 260px 20px, 260px 20px;
  background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background: #FFF;
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes animloader {
  0% {
    background-position: 0% 0, 120px 0, 120px 40px, 120px 80px;
  }
  100% {
    background-position: 100% 0, 120px 0, 120px 40px, 120px 80px;
  }
}
`;export{n as default};
