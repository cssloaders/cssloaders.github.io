const n=`.loader {
  width: 15px;
  height: 20px;
  margin-left: 15px;
  background: #FFF;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: bump 0.4s ease-in infinite alternate;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0);
  position: absolute;
  border: 15px solid transparent;
  border-top-color: #FFF;
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
