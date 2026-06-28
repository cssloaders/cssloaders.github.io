const n=`.loader{
      width: 315px;
      height: 200px;
      background:
          linear-gradient(0.25turn, transparent, #FFF, transparent),
          linear-gradient(#DDD, #DDD),
          radial-gradient(38px circle at 19px 19px, #DDD 50%, transparent 51%),
          linear-gradient(#DDD, #DDD);
      background-color: #fff;
      background-repeat: no-repeat;
      background-size: 315px 200px, 315px 130px, 100px 100px, 225px 30px;
      background-position: -315px 0, 0 0, 15px 140px, 65px 145px;
      animation: loading 1.5s infinite;
  }

  @keyframes loading {
    to {
      background-position: 315px 0, 0 0, 15px 140px, 65px 145px;
    }
  }
`;export{n as default};
