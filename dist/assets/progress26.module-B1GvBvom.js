const n=`.loader {
  width: 96px;
  height: 24px;
  display: inline-block;
  background-color: #FFF;
  border: 1px solid #FFF;
  border-radius: 4px;
  background: linear-gradient(45deg, transparent 49%, #FFF 50%, #FFF 50%, transparent 51%, transparent), linear-gradient(-45deg, transparent 49%, #FFF 50%, #FFF 50%, transparent 51%, transparent);
  font-size: 15px;
  background-size: 1em 1em;
  box-sizing: border-box;
  animation: barStripe 0.6s linear infinite;
}

@keyframes barStripe {
  0% {
    background-position: 1em 0;
  }
  100% {
    background-position: 0 0;
  }
}
`;export{n as default};
