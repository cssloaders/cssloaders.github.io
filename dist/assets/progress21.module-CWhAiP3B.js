const n=`.loader{
  width: 200px;
  height: 40px;
  background-color: #0004;
  position: relative;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.05);
}
.loader:after {
  border-radius: 50px;
  content: "";
  position: absolute;
  background-color: #fff;
  left: 2px;
  top: 2px;
  bottom: 2px;
  right: 360px;
  animation: slide 2s linear infinite;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes slide {
  0% {
    right: 150px;
    left: 2px;
  }
  5% {
    left: 2px;
  }
  50% {
    right: 2px;
    left: 150px;
  }
  55% {
    right: 2px;
  }
  100% {
    right: 150px;
    left: 2px;
  }
}
`;export{n as default};
