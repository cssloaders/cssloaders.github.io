const n=`.loader {
  display: inline-block;
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #FFF;
  position: relative;
}
.loader::before {
  content: '';  
  position: absolute;
  left: 34px;
  bottom: 8px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid #FFF;
  border-bottom-color: #FF3D00;
  box-sizing: border-box;
  animation: rotation 0.6s linear infinite;
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
