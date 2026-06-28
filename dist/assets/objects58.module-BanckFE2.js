const n=`.loader {
            position: relative;
            animation: flix 3s ease-in infinite alternate;
          }
          .loader:before {
            content: '';
            display: block;
            font-size: 0;
            width: 48px;
            height: 48px;
            background-color: #fff ;
            background-image:
              radial-gradient(circle 12px at 22px 22px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 10px at 6px 40px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 14px at 31px -6px, #FF3D00 100%, transparent 0),
              radial-gradient(circle 5px at 40px 30px, #FF3D00 100%, transparent 0);
            border-radius: 50%;
            animation: rotate 1s linear infinite;
          }
          .loader:after {
              content: '';
              position: absolute;
              top: 0%;
              transform: translate(-50% , -100%);
              left: 50%;
              width: 24px;
              height: 12px;
              background: #fff;
              border-radius: 50px 50px 0 0;
            }

          @keyframes flix {
            0%  , 60% { transform: rotate(-10deg)}
            100%  , 30% , 80% { transform: rotate(5deg)}
          }
          @keyframes rotate {
            100%   { transform: rotate(360deg)}
          }
`;export{n as default};
