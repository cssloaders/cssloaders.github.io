const e=`.loader{
    font-size: 48px;
    color: transparent;
    overflow:hidden;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow:0 0 #FFF, 5em 0 #FFF;
    animation:marquee 2s infinite ease;
  }
  .loader:before {
    content:"Loading...";
  }

  @keyframes marquee {to{text-shadow:-5em 0 #FFF, 0 0 #FFF}}
`;export{e as default};
