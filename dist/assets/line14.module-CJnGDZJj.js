const p=`.loader {
    position: relative;
    width: 55px;
    height: 55px;
    background-repeat: no-repeat;
    background-image: linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0),
                      linear-gradient(#FFF 50px, transparent 0);
    background-size: 5px 40px;
    background-position: 0px center, 10px center, 20px center, 30px center, 40px center, 50px center;
    animation: spikeUp 1s linear infinite alternate;
  }
@keyframes spikeUp {
  0% { background-size: 5px 40px}
  16% { background-size: 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px}
  33% { background-size: 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px, 5px 40px}
  50% { background-size: 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px, 5px 40px}
  66% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px, 5px 40px}
  83% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px, 5px 40px}
  100% { background-size: 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 40px, 5px 55px}
}
`;export{p as default};
