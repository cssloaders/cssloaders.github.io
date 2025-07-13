import { Fragment, useEffect, useState } from "react";
import styles from "./Outlet.module.scss";
import { LOADERS } from "../../loaders";
import { Tile } from "../index";

const Outlet = () => {
  const [styleSheets, setStyleSheets] = useState<Record<string, any[]>>({});

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
          {styleSheets[loaderName].map((styleSheet, count) => (
            <Tile key={loaderName + count} cssString={styleSheet.raw} styleSheet={styleSheet.styles} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default Outlet;
