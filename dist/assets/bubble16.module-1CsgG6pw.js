const n=`.loader {
  width: 64px;
  height: 12px;
  background:
    radial-gradient(circle 6px, #FFF 100%, transparent 0),
    radial-gradient(circle 6px, #FFF 100%, transparent 0);
  background-size:12px 12px;
  background-position: left center , right center ;
  background-repeat: no-repeat;
  position: relative;
}
.loader:before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FF3D00;
  inset:0;
  margin: auto;
  animation: mvX 0.6s, mvY 0.3s;
  animation-timing-function:cubic-bezier(.5,-300,.5, 300);
  animation-iteration-count:infinite;
}

@keyframes mvX {
    100% { left: 0.85px}
}
@keyframes mvY {
    100% { top : 0.5px }
}
`;export{n as default};
