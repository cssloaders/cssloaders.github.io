const n=`.loader {
  width: 96px;
  box-sizing: content-box;
  height: 48px;
  background: #FFF;
  border-color: #de3500;
  border-style: solid;
  border-width: 2px 2px 50px 2px;
  border-radius: 100%;
  position: relative;
  animation: 3s yinYang linear infinite;
}
.loader:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  background: #FFF;
  border: 18px solid #de3500;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  box-sizing: content-box;
}
.loader:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  background: #de3500;
  border: 18px solid #FFF;
  border-radius: 100%;
  width: 12px;
  height: 12px;
  box-sizing: content-box;
}
@keyframes yinYang {
  100%{transform: rotate(360deg)}
}
`;export{n as default};
