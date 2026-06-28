const n=`.loader {
  box-sizing: border-box;
  position: relative;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;
}
.loader:after, .loader:before {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  background: #FF3D00;
  animation: flipY 1s linear infinite;
  transform-origin: 50% 50%;
}
.loader:before {
  transform-origin: 0% 100%;
  background: #fff;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes flipY {
  0%, 50% {
    transform: rotateY(0deg);
  }
  50%, 100% {
    transform: rotateY(180deg);
  }
}
`;export{n as default};
