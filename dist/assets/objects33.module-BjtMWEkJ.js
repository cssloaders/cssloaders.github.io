const n=`.loader {
  width: 48px;
  height: 40px;
  margin-top: 30px;
  display: inline-block;
  position: relative;
  background: #FFF;
  border-radius: 15% 15% 35% 35%;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 45px;
  top: 8px;
  border: 4px solid #FFF;
  width: 16px;
  height: 20px;
  border-radius: 0 4px 4px 0;
}
.loader::before {
  content: '';  
  position: absolute;
  width: 1px;
  height: 10px;
  color: #FFF;
  top: -15px;
  left: 11px;
  box-sizing: border-box;
  animation: animloader 1s ease infinite;
}

@keyframes animloader {
    0% {
  box-shadow: 2px 0px rgba(255, 255, 255, 0), 12px 0px rgba(255, 255, 255, 0.3), 20px 0px rgba(255, 255, 255, 0);
}
    50% {
  box-shadow: 2px -5px rgba(255, 255, 255, 0.5), 12px -3px rgba(255, 255, 255, 0.5), 20px -2px rgba(255, 255, 255, 0.6);
}
    100% {
  box-shadow: 2px -8px rgba(255, 255, 255, 0), 12px -5px rgba(255, 255, 255, 0), 20px -5px rgba(255, 255, 255, 0);
}
  }
`;export{n as default};
