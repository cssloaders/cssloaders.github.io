const x=`.loader {
  width: 48px;
  height: 24px;
  color: #FFF;
  background: currentColor;
  border-radius: 50% 50% 0 0;
  position: relative;
  display: block;
  margin: 60px auto 0;
  box-sizing: border-box;
  animation: animloader 4s linear infinite;
}
.loader::after {
  content: '';  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: currentColor;
  top: -34px;
  box-sizing: border-box;
  animation: animloader1 4s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 0 0 0 -2px , 0 0 0 -2px , 0 0 0 -5px , 0 0 0 -5px;
  }
  20% {
    box-shadow: 40px -1px 0 -2px , 0 0 0 -2px , 40px -1px 0 -5px , 0 0 0 -5px;
  }
  40% {
    box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,  40px -1px 0 -5px ,-40px -1px 0 -5px;
  }
  60% {
    box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,   23px -29px 0 -5px ,-40px -1px 0 -5px;
  }
  80%, 95% {
    box-shadow: 40px -1px 0 -2px , -40px -1px 0 -2px ,   23px -29px 0 -5px , -23px -29px 0 -5px;
  }
  100% {
    box-shadow: 40px -1px 0 -2px rgba(255, 255, 255, 0), -40px -1px 0 -2px rgba(255, 255, 255, 0), 23px -29px 0 -5px rgba(255, 255, 255, 0), -23px -29px 0 -5px rgba(255, 255, 255, 0);
  }
}

@keyframes animloader1 {
  0% {
    box-shadow: 0 0 0 -2px , 0 0 0 -2px , 0 0 0 -5px , 0 0 0 -5px;
  }
  20% {
    box-shadow: 40px 2px 0 -2px  , 0 0 0 -2px , 40px 2px 0 -5px , 0 0 0 -5px;
  }
  40% {
    box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 40px 2px 0 -5px , -40px 2px 0 -5px;
  }
  60% {
    box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 23px -23px 0 -5px , -40px 2px 0 -5px;
  }
  80%, 95% {
    box-shadow: 40px 2px 0 -2px  , -40px 2px 0 -2px , 23px -23px 0 -5px , -23px -23px 0 -5px;
  }
  100% {
    box-shadow: 40px 2px 0 -2px rgba(255, 255, 255, 0), -40px 2px 0 -2px rgba(255, 255, 255, 0), 23px -23px 0 -5px rgba(255, 255, 255, 0), -23px -23px 0 -5px rgba(255, 255, 255, 0);
  }
}
`;export{x as default};
