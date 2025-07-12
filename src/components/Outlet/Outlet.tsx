import styles from './Outlet.module.scss'
import {StyleLoader} from '../index'
import {LOADERS} from '../../loaders'
import React, { useEffect, useState } from 'react'




// import cssCode  from '../../loaders/circle/circle1.module.css?raw'

const Outlet = () => {



  return(
    <div className={styles.outlet}>
    {LOADERS.map((loader, i) => (
      <React.Fragment key={i}>
        {Array.from({ length: loader.length }).map((_, c) => (
          <StyleLoader
            key={`${loader.name}${c + 1}`}
            folder={loader.name}
            fileName={`${loader.name}${c + 1}`}
          />
        ))}
      </React.Fragment>
    ))}
</div>

  )


  // console.log('loaders', loaders)

  return (
    <div className={styles.outlet}>
      <span className={op2?.styles.loader}></span>

      <pre>
        <code>{op2?.raw}</code>
      </pre>



      {/* {LOADERS.map((loader, i) => (
        <React.Fragment key={i}>
          {loader.styleSheets.map((styleSheet, c) => (
            <Tile
              key={`${loader.name}${c}`}
              cssString={styleSheet}
            >
              <Loader />
            </Tile>
          ))}
        </React.Fragment>
      ))} */}
</div>

  )
}

export default Outlet