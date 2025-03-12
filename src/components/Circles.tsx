import { useState } from "react"
import { useInterval } from "../hooks/useInterval"

const generateDataset = () =>
  Array(10)
    .fill(0)
    .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10])

export function Circles() {
  const [dataset, setDataset] = useState(generateDataset())

  useInterval(() => {
    const newDataset = generateDataset()
    console.log(newDataset)
    setDataset(newDataset)
  }, 3000)

  return (
    <svg viewBox="0 0 100 50">
      {dataset.map(([x, y]) => (
        <circle cx={x} cy={y} r="1.5" />
      ))}
    </svg>
  )
}
