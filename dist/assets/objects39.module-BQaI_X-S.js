const n=`.loader {
  width: 4px;
  height: 86px;
  background: #fff;
  margin: auto;
  position: relative;
  animation: shake 1s linear infinite alternate,
             lightup 1s linear infinite;
  transform-origin: 0 0;
}

.loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  width: 32px;
  height: 16px;
  box-sizing:border-box;
  border: 5px solid #FF3D00;
  border-top: none;
  border-radius: 0 0 20px 20px;
}
.loader::after {
  content: '';
  left: 50%;
  bottom: 0;
  position: absolute;
  transform: translateX(-50%);
  width: 64px;
  height: 32px;
  border-radius: 50px 50px 0 0;
  background: #fff;
}

@keyframes shake {
  0% { transform: rotate(10deg)  }
  100% { transform: rotate(-10deg)  }
}
@keyframes lightup {
  0% ,20% , 40% {
    opacity: 0
  }
  10%, 30% , 50% , 100% {
    opacity: 1
  }
}
`;export{n as default};
