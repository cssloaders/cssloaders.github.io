const n=`.loader {
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  color: #FF3D00;
  animation: fill 1s ease-in infinite alternate;
}
.loader::before , .loader::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  left: 48px;
  top: 0;
  animation: fill 0.9s ease-in infinite alternate;
}

.loader::after {
  left: auto;
  right: 48px;
  animation-duration: 1.1s;
}

@keyframes fill {
 0% {  box-shadow: 0 0 0 2px inset }
 100%{ box-shadow: 0 0 0 10px inset }
}
`;export{n as default};
