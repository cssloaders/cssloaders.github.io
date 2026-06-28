const n=`.loader {
  width: 120px;
  height: 80px;
  position: relative;
  transform: rotate(-90deg);
  background: linear-gradient(174deg, #0000 49%,#000 50%, #0000 51%);
}
.loader:after,
.loader:before {
  content: "";
  border-radius: 100%;
  width: 35px;
  height: 35px;
  display: block;
  position: absolute;
  border: 4px dashed #fff;
  bottom: 49px;
  transform: rotate(0deg);
  box-sizing: border-box;
  animation: tape 4s linear infinite;

}
.loader:before {
  right: -14px;
  box-shadow: 0 0 0 4px #fff, 0 0 0 34px #000 , 0 0 5px 34px #0005;
}
.loader:after {
  left: -13px;
  box-shadow: 0 0 0 4px #fff, 0 0 0 65px #000, 0 0 5px 65px #0005;
}

@keyframes tape {
  0% { transform: rotate(0deg) scale(0.4) }
  100% { transform: rotate(-360deg) scale(0.4) }
}
`;export{n as default};
