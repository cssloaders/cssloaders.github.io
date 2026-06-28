const n=`.loader{
    display: block;
    position: relative;
    height: 32px;
    width: 200px;
    background: #fff;
    border:2px solid #fff;
    color: red;
    overflow: hidden;
  }
  .loader::before{
    content: '';
    background: red;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    animation: loading 10s linear infinite;
  }
  .loader:after{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 24px;
    line-height: 32px;
    color: rgb(0,255,255);
    mix-blend-mode: difference;
    animation: percentage 10s linear infinite;
  }
  
  @keyframes loading {
    0% { width: 0 }
    100% { width: 100% }
  }
  @keyframes percentage {
    0% { content: "0%"}
    5% { content: "5%"}
    10% { content: "10%"}
    20% { content: "20%"}
    30% { content: "30%"}
    40% { content: "40%"}
    50% { content: "50%"}
    60% { content: "60%"}
    70% { content: "70%"}
    80% { content: "80%"}
    90% { content: "90%"}
    95% { content: "95%"}
    96% { content: "96%"}
    97% { content: "97%"}
    98% { content: "98%"}
    99% { content: "99%"}
    100% { content: "100%"}
  }
`;export{n as default};
