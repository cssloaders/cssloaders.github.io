const n=`.loader {
  width: 20px;
  height: 20px;
  display: block;
  margin: 80px auto 20px;
  border-radius: 50%;
  background: #FF3D00;
  border: 5px solid #FFF;
  position: relative;
  box-sizing: border-box;
}
.loader::before {
  content: '';  
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  width: 8px;
  height: 80px;
  border: 2px solid #FFF;
  border-bottom: none;
  background: #FFF;
  color: #FF3D00;
  border-radius: 50px 50px 0 0;
  box-shadow: 0px 0px  inset;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 0px 0px  inset;
  }
  100% {
    box-shadow: 0px -80px  inset;
  }
}
`;export{n as default};
