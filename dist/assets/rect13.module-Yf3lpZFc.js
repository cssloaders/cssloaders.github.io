const n=`.loader {
  position: relative;
}
.loader:after {
  content: '';
  background: #FFF;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 32px;
  height: 32px;
  border-radius:4px;
  transform-origin: -16px -32px;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
   0% , 100% {
      transform: rotate(-45deg)  translate(-50% , -50%)
    }
   50% {
      transform: rotate(-245deg)  translate(-50% , -50%)
   }
}
`;export{n as default};
