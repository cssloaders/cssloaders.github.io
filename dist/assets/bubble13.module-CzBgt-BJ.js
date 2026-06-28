const n=`.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: block;
  margin:15px auto;
  position: relative;
  background: #FF3D00;
  color: #FFF;
  box-shadow: -24px 0, 24px 0;
  box-sizing: border-box;
  animation: rotation 2s ease-in-out infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;export{n as default};
