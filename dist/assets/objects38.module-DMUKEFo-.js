const n=`.loader {
  width: 60px;
  height: 60px;
  display: block;
  margin: 20px auto;
  position: relative;
  background: radial-gradient(ellipse at center, #FFF 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #FFF 48%, #FFF 52%, rgba(0, 0, 0, 0) 53%);
  background-size: 20px 20px , 20px auto;
  background-repeat: repeat-x;
  background-position: center bottom, center -5px;
  box-sizing: border-box;
}
.loader::before,
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: -20px;
  top: 0;
  width: 20px;
  height: 60px;
  background: radial-gradient(ellipse at center, #FFF 69%, rgba(0, 0, 0, 0) 70%), linear-gradient(to right, rgba(0, 0, 0, 0) 47%, #FFF 48%, #FFF 52%, rgba(0, 0, 0, 0) 53%);
  background-size: 20px 20px , 20px auto;
  background-repeat: no-repeat;
  background-position: center bottom, center -5px;
  transform: rotate(0deg);
  transform-origin: 50% 0%;
  animation: animPend 1s linear infinite alternate;
}
.loader::after {
  animation: animPend2 1s linear infinite alternate;
  left: 100%;
}

@keyframes animPend {
  0% {
    transform: rotate(22deg);
  }
  50% {
    transform: rotate(0deg);
  }
}

@keyframes animPend2 {
  0%, 55% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-22deg);
  }
}
`;export{n as default};
