const n=`.loader {
  width: 48px;
  height: 78px;
  position: relative;
  box-sizing: border-box;
  border: 2px solid #fff;
  margin: auto;
  border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
}
.loader::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 10px;
  animation: scrollDown 1.5s linear infinite;
}
@keyframes scrollDown {
  0% {
    top: 15px;
    height: 4px;
    opacity: 1;
  }
  33% {
    top: 15px;
    height: 40px;
  }
  66% {
    top: 50px;
    height: 10px;
    opacity: 1;
  }
  100% {
    top: 56px;
    height: 4px;
    opacity: 0;
  }
}
`;export{n as default};
