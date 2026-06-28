const x=`.loader {
  width: 48px;
  height: 6px;
  display: block;
  margin: auto;
  position: relative;
  border-radius: 4px;
  color: #FFF;
  box-sizing: border-box;
  animation: animloader 0.6s linear infinite;
}

@keyframes animloader {
  0% { box-shadow: -10px 20px, 10px 35px , 0px 50px }
  25% { box-shadow: 0px 20px ,  0px 35px, 10px 50px }
  50% { box-shadow: 10px 20px, -10px 35px, 0px 50px }
  75% { box-shadow: 0px 20px, 0px  35px, -10px 50px }
  100% { box-shadow: -10px 20px, 10px  35px, 0px 50px}
}
`;export{x as default};
