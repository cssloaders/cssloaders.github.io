const n=`.loader {
  width: 48px;
  height: 48px;
  border: 4px solid;
  background: rgba(255, 255, 255, 0.2);
  border-color: transparent #FFF #FFF transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s ease-in-out infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 12px solid;
  border-color: transparent #FF3D00 #FF3D00 transparent;
  transform: translate(-50%, -50%);
  border-radius: 50%;
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
