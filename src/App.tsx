import * as d3 from "d3"
import { useState } from "react"
import styles from "./App.module.css"
import LinePlot from "./LinePlot"
import { MouseEvent } from "react"
import { Circles } from "./components/Circles"

export function App() {
  const [data, setData] = useState(() => d3.ticks(-Math.PI, Math.PI, 10000).map(Math.sin))

  function onMouseMove(event: MouseEvent) {
    const [x, y] = d3.pointer(event.nativeEvent)
    setData(data.slice(-200).concat(Math.sin(Math.atan2(x, y))))
    //setData(data)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h1>My D3 DataViz Playground</h1>

        <div onMouseMove={onMouseMove}>
          <LinePlot data={data} />
        </div>

        <Circles />
      </div>
    </>
  )
}

export default App
