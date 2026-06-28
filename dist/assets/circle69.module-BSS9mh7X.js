const n=`.loader {
  width: 64px;
  height: 64px;
  position: relative;
  border-radius: 50%;
  box-shadow: -10px 8px 0 18px inset #fff;
  animation: rotate 2s ease-in infinite alternate;
}
.loader::before {
  content: '';
  position: absolute;
  left: 14px;
  bottom: 16px;
  background: #FF3D00;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: scale 1s ease-in infinite alternate;
}
@keyframes rotate {
  100% { transform: rotate(750deg)}
}
@keyframes scale {
 100% { transform: scale(0.5) translateY(5px)}
}
`;export{n as default};
