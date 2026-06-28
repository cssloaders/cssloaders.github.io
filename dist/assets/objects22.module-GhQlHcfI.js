const n=`.loader {
  width: 15px;
  height: 20px;
  background: #FFF;
  margin-left: 15px;
  margin-top: 15px;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: bump 0.4s linear infinite alternate;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  left: 50%;
  bottom: 100%;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-bottom-color: #FFF;
}

@keyframes bump {
  0% {
    transform: translate(-50%, 5px);
  }
  100% {
    transform: translate(-50%, -5px);
  }
}
`;export{n as default};
