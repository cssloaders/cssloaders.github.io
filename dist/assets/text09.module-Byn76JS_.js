const n=`.loader {
  font-size: 48px;
  font-weight: 600;
  display: inline-block;
  letter-spacing: 2px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFF;
  box-sizing: border-box;
  animation: spotlight 2s linear infinite alternate;
}

@keyframes spotlight {
  0% , 20% {
    opacity: 1;
    letter-spacing: 2px;
   }
 80% , 100% {
    opacity: 0;
    letter-spacing: 32px;
   }
}
`;export{n as default};
