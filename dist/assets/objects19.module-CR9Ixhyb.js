const n=`.loader {
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  background-color: #FFF;
  background: radial-gradient(ellipse at center, #FF3D00 0%, #FF3D00 14%, #FFF 15%, #FFF 100%);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
}
.loader::after,
.loader::before {
  content: '';  
  position: absolute;
  height: 16px;
  width: 4px;
  background: #FF3D00;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) rotate(0deg);
  transform-origin: 25% 0;
  box-sizing: border-box;
  animation: rotation 10s linear infinite;
}
.loader::before {
  height: 22px;
  width: 2px;
  transform: translateX(-50%) rotate(0deg);
  animation-duration: 1s;
} 
@keyframes rotation {
  0%    { transform: rotate(0deg)}
  100%  { transform: rotate(360deg)}
}
`;export{n as default};
