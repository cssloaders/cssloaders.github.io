const n=`.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 0;
  animation: scaleOut 2s ease-in-out infinite;
}
.loader::after {
  border-color: #FF3D00;
  animation-delay: 1s;
}

@keyframes scaleOut {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
`;export{n as default};
