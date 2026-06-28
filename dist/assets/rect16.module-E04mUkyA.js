const n=`.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  position: absolute;
  left: 0;
  top: -24px;
  animation: animloader1 2s linear infinite alternate;
}
.loader::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  animation: animloader2 2s linear infinite alternate;
}

@keyframes animloader1 {
  0%, 32% {
    box-shadow: 0 24px white, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  33%, 65% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
  }
  66%, 99% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 24px white, 24px 24px white, 24px 48px white, 0px 48px white;
  }
}

@keyframes animloader2 {
  0% {
    transform: translate(0, 0) rotateX(0) rotateY(0);
  }
  33% {
    transform: translate(100%, 0) rotateX(0) rotateY(180deg);
  }
  66% {
    transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
  }
  100% {
    transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
  }
}
`;export{n as default};
