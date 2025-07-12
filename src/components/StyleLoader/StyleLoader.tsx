import { FC, useEffect, useState } from 'react'
import Tile from '../Tile/Tile';

async function loadCssModuleWithRaw(file: string) {
    const [styles, raw] = await Promise.all([
      import(`${file}`),
      import(`${file}?raw`),
    ]);
  
    return {
      styles: styles.default,
      raw: raw.default,
    };
  }
  

  interface Props {
    folder: string;
    fileName: string;
  }


const StyleLoader: FC<Props> = ({folder , fileName}) => {
  const [styleSheet, setStyleSheet] = useState<{ styles: CSSModuleClasses; raw: string } | null>(null);
  useEffect(() => {
    loadCssModuleWithRaw(`../../loaders/${folder}/${fileName}.module.css`).then(setStyleSheet);
  }, []);

  if (!styleSheet) return null;

  return <Tile styleSheet={styleSheet.styles} />
}

export default StyleLoader