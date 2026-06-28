const n=`.loader {
          width: 40px;
          height: 98px;
          display: inline-block;
          position: relative;
          border: 2px solid #FFF;
          box-sizing: border-box;
          color: rgba(255, 61, 0, 0.9);
          border-radius: 20px 20px 4px 4px;
          background: #fff;
          animation: fill 2s linear infinite alternate;
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
          animation: fillNeck 2s linear infinite alternate;
        }

        @keyframes fill {
          0% { box-shadow: 0 0  inset }
          50% , 100% { box-shadow: 0 -98px inset }
        }


        @keyframes fillNeck {
          0% , 50%{ box-shadow: 0 0  inset }
          100% { box-shadow: 0 -20px inset }
        }
`;export{n as default};
