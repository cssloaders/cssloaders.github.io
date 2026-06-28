const n=`.loader {
  width: 82px;
  height: 18px;
  position: relative;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translate(-50% , 10%);
  top: 0;
  background: #FF3D00;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: jump 0.5s ease-in infinite alternate;
}

.loader::after {
  background: #0000;
  color: #fff;
  top: 100%;
  box-shadow: 32px -20px , -32px -20px;
  animation: split 0.5s ease-out infinite alternate;
}

@keyframes split {
  0% { box-shadow: 8px -20px, -8px -20px}
  100% { box-shadow: 32px -20px , -32px -20px}
}
@keyframes jump {
 0% { transform: translate(-50% , -150%)}
 100% { transform: translate(-50% , 10%)}
}
`;export{n as default};
