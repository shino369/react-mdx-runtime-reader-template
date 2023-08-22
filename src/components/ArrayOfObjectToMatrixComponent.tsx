import React, { useEffect, useState } from 'react'
import ButtonComponent from '@/components/ButtonComponent'
const testCase = [
  [
    { b: 1, a: 2 },
    { b: 3, a: 4 },
  ],
  [{ a: 1, b: 2 }, { c: 3, d: 4 }, {}],
  [{ a: { b: 1, c: 2 } }, { a: { b: 3, d: 4 } }],
  [[{ a: null }], [{ b: true }], [{ c: 'x' }]],
  [{}, {}, {}],
]

const expect = [
  [
    ['a', 'b'],
    [2, 1],
    [4, 3],
  ],
  [
    ['a', 'b', 'c', 'd'],
    [1, 2, '', ''],
    ['', '', 3, 4],
    ['', '', '', ''],
  ],
  [
    ['a.b', 'a.c', 'a.d'],
    [1, 2, ''],
    [3, '', 4],
  ],
  [
    ['0.a', '0.b', '0.c'],
    [null, '', ''],
    ['', true, ''],
    ['', '', 'x'],
  ],
  [[], [], [], []],
]

const ArrayOfObjectToMatrixComponent: React.FC = () => {
  const [matrix, setMatrix] = useState<any[]>([])

  const jsonToMatrix = (_arr: any[]) => {
    const matrix: any = []
    // your code here

    return matrix
  }

  const Matrix = (mat: any[]) => {
    return mat.map((mat: any[], i) => {
      return (
        <div key={i} className="mb-2 bg-slate-300">
          {mat.map((row: any[], index: number) => {
            return (
              <div key={index} className="flex items-center">
                {row.map((col, i) => (
                  <div
                    key={i}
                    className="h-6 w-6 text-center p-2 m-1 border border-black border-solid"
                  >
                    {`${col}`}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      )
    })
  }

  return (
    <div className="flex">
      <div className="w-fit mr-2"> expect: {Matrix(expect)}</div>
      <div className="w-fit">result: {Matrix(matrix)}</div>

      <ButtonComponent
        style={{
          marginLeft: '0.5rem',
          alignSelf: 'flex-end',
        }}
        onClick={() => {
          setMatrix([])
          testCase.forEach((ca) => {
            setMatrix((prev) => [...prev, jsonToMatrix(ca)])
          })
        }}
      >
        proceed
      </ButtonComponent>
    </div>
  )
}

export default ArrayOfObjectToMatrixComponent
