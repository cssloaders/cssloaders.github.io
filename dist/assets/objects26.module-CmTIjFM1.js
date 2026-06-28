const n=`.loader {
  width: 48px;
  height: 24px;
  display: inline-block;
  position: relative;
  color: #FFF;
  border: 1px solid;
  box-sizing: border-box;
  animation: fillX 2s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: #FFF;
  width: 5px;
  height: 12px;
}

@keyframes fillX {
  0% {
    box-shadow: 0 0 inset;
  }
  100% {
    box-shadow: 48px 0 inset;
  }
}
`;export{n as default};
