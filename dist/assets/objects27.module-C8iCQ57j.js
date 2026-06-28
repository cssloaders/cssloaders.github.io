const n=`.loader {
  width: 48px;
  height: 24px;
  display: inline-block;
  position: relative;
  border: 1px solid #FFF;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 1px solid #FFF;
  width: 5px;
  height: 12px;
}
.loader::before {
  content: '';  
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  height: 80%;
  width: 6px;
  box-sizing: border-box;
  animation: animloader  2s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 11px 0 rgba(255, 255, 255, 0), 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  25% {
    box-shadow: 11px 0 white, 22px 0 rgba(255, 255, 255, 0), 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 rgba(255, 255, 255, 0), 44px 0 rgba(255, 255, 255, 0);
  }
  75% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 11px 0 white, 22px 0 white, 33px 0 white, 44px 0 white;
  }
}
`;export{n as default};
