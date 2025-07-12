import { FC } from 'react'
import styles from './Tile.module.scss'

interface TileProps {
  styleSheet: CSSModuleClasses
}

const Tile: FC<TileProps> = ({styleSheet}) => {

  return (
    <div className={styles.tile}>
        <span className={styleSheet.loader}></span>
    </div>
  )
}

export default Tile