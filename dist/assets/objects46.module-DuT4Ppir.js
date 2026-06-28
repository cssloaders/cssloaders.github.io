const n=`.loader {
  width: 48px;
  height: 78px;
  box-sizing: border-box;
  border: 2px solid #fff;
  position: relative;
  border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
}

.loader::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50% , 50%);
  width: 10px;
  height: 10px;
  background: #FFF;
  border-radius: 50%;
  animation: fadeDown 1s ease-out infinite;
}

@keyframes fadeDown {
  0% {
    top: 0%;
    opacity: 1;
  }
  100% {
    top: 60%;
    opacity: 0;
  }
}
`;export{n as default};
