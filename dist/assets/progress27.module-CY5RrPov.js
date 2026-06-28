const n=`.loader {
  width: 130px;
  height: 48px;
  display: inline-block;
  background: linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000 100%), linear-gradient(45deg, #000 25%, white 25%, white 75%, #000 75%, #000 100%);
  font-size: 10px;
  background-size: 32px 32px;
  box-sizing: border-box;
  animation: raceBoard 0.6s linear infinite;
  background-position: 0 0, 16px 16px;
}

@keyframes raceBoard {
  0% {
    background-position: 0 0, 16px 16px;
  }
  100% {
    background-position: 32px 0px, 48px 16px;
  }
}
`;export{n as default};
