const n=`.loader {
  display: block;
  position: relative;
  width: 118px;
  height: 160px;
  background-color: #FFF;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  transform-origin: 50% 100%;
  animation: 2s eggRot linear infinite alternate;
}
.loader:after{
  content:"";
  position: absolute;
  left: 50%;
  bottom: 15%;
  width: 80px;
  height: 86px;
  transform: translateX(-50%);
  background-color: #ffd900;
  border-radius: 50% ;
}

@keyframes eggRot {
  0%{    transform: rotate(-25deg)}
  100%{    transform: rotate(25deg)}
}
`;export{n as default};
