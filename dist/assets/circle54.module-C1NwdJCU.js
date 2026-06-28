const n=`.loader {
  width: 48px;
  height: 48px;
  position: relative;
  perspective: 500px;
}
.loader:before , .loader:after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 48px;
  background: #FF3D00;
  border-radius: 0 24px 24px 0;
  transform-origin: 0 0;
  animation: flip 2s linear infinite alternate;
}
.loader:after {
  left: 0;
  border-radius: 24px 0 0 24px;
  transform-origin: 100% 0;
  animation-delay: 1s;
}

@keyframes flip {
    0% , 10% { transform: rotateY(0deg)}
    90%, 100% { transform: rotateY(-180deg)}
}
`;export{n as default};
