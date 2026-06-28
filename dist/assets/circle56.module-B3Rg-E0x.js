const F=`.loader {
          position: relative;
          border:24px solid #FFF;
          border-radius:50%;
          transform: rotate(45deg);
          animation: pieFill 3s linear infinite;
        }

        @keyframes pieFill {
          0% , 19%{ border-color: #FFF #FFF #FFF #FFF }
          20% , 39%{ border-color: #FF3D00 #FFF #FFF #FFF }
          40% , 59%{ border-color: #FF3D00 #FF3D00 #FFF #FFF }
          60% , 79%{ border-color: #FF3D00 #FF3D00 #FF3D00 #FFF }
          80% , 100% { border-color: #FF3D00 #FF3D00 #FF3D00 #FF3D00 }
        }
`;export{F as default};
