const n=`.loader {
  width: 4.8px;
  height: 4.8px;
  display: block;
  margin: 20px auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  background: currentColor;
  box-sizing: border-box;
  animation: animloader 0.3s 0.3s linear infinite alternate;
}
.loader::after,
.loader::before {
  content: '';  
  box-sizing: border-box;
  width: 4.8px;
  height: 4.8px;
  border-radius: 4px;
  background: currentColor;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;
  animation: animloader 0.3s 0.45s linear infinite alternate;
}
.loader::after {
    top: -15px;
    animation-delay: 0s;
}

@keyframes animloader {
    0% { width: 4.8px }
    100% { width: 48px}
}
`;export{n as default};
