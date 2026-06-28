const n=`.loader {
        height: 30px;
        width: 10px;
        border-radius: 4px;
        color: #fff;
        background: currentColor;
        position: relative;
        animation: ht 1s ease-in infinite alternate;
        box-shadow: 15px 0 0 -1px , -15px 0 0 -1px ,
                    30px 0 0 -2px , -30px 0 0 -2px,
                    45px 0 0 -3px , -45px 0 0 -3px;
      }

      @keyframes ht {
        100% { height: 0px }
      }
`;export{n as default};
