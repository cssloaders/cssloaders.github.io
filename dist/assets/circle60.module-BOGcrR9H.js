const n=`.loader {
          border: 24px solid #FFF;
          border-color: #FF3D00 #FF3D00 #fff #fff;
          border-radius: 50%;
          position: relative;
          animation: rotate 1s linear infinite
        }

        .loader:before {
            content: '';
            position: absolute;
            top: 50%;
            transform: translate(-50% , -125%);
            left: 50%;
            width: 12px;
            height: 12px;
            background: #fff;
            border-radius: 50%;
          }
        @keyframes rotate {
          100%   { transform: rotate(360deg)}
        }
`;export{n as default};
