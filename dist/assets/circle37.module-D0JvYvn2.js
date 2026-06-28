const n=`.loader {
  width: 48px;
  height: 48px;
  border-width: 3px;
  border-style: dashed solid  solid dotted;
  border-color: #FF3D00 #FF3D00 transparent #FF3D00;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 20px;
  top: 31px;
  border: 10px solid transparent;
  border-right-color: #FF3D00;
  transform: rotate(-40deg);
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
