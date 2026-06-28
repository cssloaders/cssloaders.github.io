const n=`.loader {
  width: 54px;
  height: 54px;
  position: relative;
  background: #fff;
  border-radius: 4px;
}
.loader:before {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  width: 24px;
  height: 24px;
  background: #FF3D00;
  border-radius: 50%;
  transform-origin: 100% 100%;
  animation: move 1s linear infinite;
}
@keyframes move {
    0% , 100%{ transform: translate(0 ,0)}
    25%{ transform: translate(100% ,0)}
    50%{ transform: translate(100% ,100%)}
    75%{ transform: translate(0 ,100%)}
}
`;export{n as default};
