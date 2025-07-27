import { Fragment, useEffect, useState } from 'react';
import styles from './Outlet.module.scss';
import { LOADERS } from '../../loaders';
import { Tile } from '../index';
export interface Loaders {
  styles: any;
  raw: string;
  fileName: string;
}

const Outlet = () => {
  const [styleSheets, setStyleSheets] = useState<Record<string, Loaders[]>>({});

  useEffect(() => {
    LOADERS.forEach(async (loader) => {
      const styles = await loader.loadStyles();
      setStyleSheets((prev) => ({
        ...prev,
        [loader.name]: styles,
      }));
    });
  }, []);

  return (
    <div className={styles.outlet}>
      {Object.keys(styleSheets).map((loaderName) => (
        <Fragment key={loaderName}>
          {styleSheets[loaderName]
            .sort((a, b) => a.fileName.localeCompare(b.fileName))
            .map((styleSheet, count) => (
              <Tile
                key={loaderName + count}
                filename={styleSheet.fileName}
                cssString={styleSheet.raw}
                styleSheet={styleSheet.styles}
              />
            ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Outlet;
