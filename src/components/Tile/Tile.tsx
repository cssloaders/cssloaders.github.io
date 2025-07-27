import { FC } from 'react';
import styles from './Tile.module.scss';

interface TileProps {
  styleSheet: CSSModuleClasses;
  cssString: string;
  filename: string;
}

const Tile: FC<TileProps> = ({ styleSheet, filename }) => {
  return (
    <div className={styles.tile} data-ref={filename.replace(/\.module\.css$/, '')}>
      <span className={styleSheet.loader}></span>
    </div>
  );
};

export default Tile;
