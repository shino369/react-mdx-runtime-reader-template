import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'

const SleepComponent: React.FC = () => {
  const [millis, setMillis] = useState<number>(0)

  const sleep = (millisSec: number) => {
    // implement your code here
  }

  const clicked = () => {
    // let t = Date.now()
    // sleep(millis).then(() => {
    //   alert(Date.now() - t) // 100
    // })
  }

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    // implement your code here
  }

  return (
    <div className="flex items-center b">
      <input className="focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:border-gray-600" value={millis} onInput={onInputChange} placeholder="input millis" />
      <ButtonComponent onClick={clicked}>click me to set</ButtonComponent>
    </div>
  )
}

export default SleepComponent
