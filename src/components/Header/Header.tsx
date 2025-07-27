import React from 'react';
import styles from './Header.module.scss';
import codepen from '/images/codepen.png';
import github from '/images/github.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span className={styles.header_brand}>L &nbsp; aders</span>

      <nav>
        <a
          target="_blank"
          style={{ backgroundImage: `url(${codepen})` }}
          href="https://codepen.io/vineethtrv/pen/NWxZqMM"
        ></a>
        <a
          target="_blank"
          style={{ backgroundImage: `url(${github})` }}
          href="https://github.com/vineethtrv/css-loader"
        ></a>
      </nav>
    </header>
  );
};

export default Header;
