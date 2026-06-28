const n=`.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #FF3D00;
  position: relative;
}
.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 0;
  background: #fff;
  transform: rotate(0deg) translate(30px);
  animation: rotate 1s ease infinite;
}
.loader:after {
  animation-delay: 0.5s
}
@keyframes rotate {
  100% {transform: rotate(360deg) translate(30px)}
}
`;export{n as default};
