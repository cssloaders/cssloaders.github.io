const n=`.loader {
              width: 64px;
              height: 64px;
              display: block;
              border: 1px solid #FFF;
              border-radius: 50px ;
              position: relative;
              box-shadow: 0px 0px #FF3D00 inset;
              background-color: #fff;
              background-image: linear-gradient(#FF3D00 100px, transparent 0);
              background-position: 0  20px;
              background-size: 100% auto;
              background-repeat: no-repeat;
              box-sizing: border-box;
            }
            .loader::after {
              content: '';
              box-sizing: border-box;
              position: absolute;
              left: 50%;
              top: 0%;
              transform: translate(-50% , -95%);
              border: 2px solid #FFF;
              border-bottom: none;
              background: #fff;
              width: 15px;
              height: 35px;
            }
            .loader::before {
              content: '';
              box-sizing: border-box;
              left: 50%;
              transform: translateX(-125%);
              bottom: -4px;
              border-radius: 50%;
              position: absolute;
              width: 6px;
              height: 6px;
              z-index: 10;
              animation: bubbles 6s linear infinite;
            }
            @keyframes bubbles {
              0% {
                box-shadow: 4px -10px rgba(255, 0, 0, 0), 6px 0px rgba(255, 0, 0, 0), 8px -15px rgba(255, 0, 0, 0), 12px 0px rgba(255, 0, 0, 0);
              }
              20% {
                box-shadow: 4px -20px rgba(255, 0, 0, 0), 8px -10px rgba(255, 0, 0, 0), 10px -30px rgba(255, 255, 255, 0.5), 15px -5px rgba(255, 0, 0, 0);
              }
              40% {
                box-shadow: 2px -40px rgba(255, 255, 255, 0.5), 8px -30px rgba(255, 0, 0, 0.4), 8px -60px rgba(255, 255, 255, 0.5), 12px -15px rgba(255, 255, 255, 0.5);
              }
              60% {
                box-shadow: 4px -60px rgba(255, 255, 255, 0.5), 6px -50px rgba(255, 0, 0, 0.4), 10px -90px rgba(255, 255, 255, 0.5), 15px -25px rgba(255, 255, 255, 0.5);
              }
              80% {
                box-shadow: 2px -80px rgba(255, 0, 0, 0.5), 4px -70px rgba(255, 0, 0, 0.4), 8px -120px rgba(255, 0, 0, 0), 12px -35px rgba(255, 0, 0, 0.5);
              }
              100% {
                box-shadow: 4px -100px rgba(255, 0, 0, 0), 8px -90px rgba(255, 0, 0, 0), 10px -120px rgba(255, 0, 0, 0), 15px -45px rgba(255, 0, 0, 0);
              }
            }
`;export{n as default};
