const n=`.loader {
  width: 8px;
  height: 48px;
  display: inline-block;
  position: relative;
  border-radius: 4px;
  box-sizing: border-box;
  animation: animloader 1s linear infinite alternate;
}

@keyframes animloader {
  0% {
    box-shadow: 20px 0 rgba(255, 255, 255, 0), 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  20% {
    box-shadow: 20px 0 white, 40px 0 rgba(255, 255, 255, 0), 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  40% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 rgba(255, 255, 255, 0), 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  60% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 rgba(255, 255, 255, 0), 100px 0 rgba(255, 255, 255, 0);
  }
  80% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 20px 0 white, 40px 0 white, 60px 0 white, 80px 0 white, 100px 0 white;
  }
}
`;export{n as default};
