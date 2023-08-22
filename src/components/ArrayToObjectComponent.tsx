import React, { useState } from 'react'
import ButtonComponent from '@/components/ButtonComponent'

const ArrayToObjectComponent: React.FC = () => {
  const [errorStr, setErrorStr] = useState<string>('')
  const [inputText, setInputText] = useState<string>(
    `
    [
        {
            "name": "Lawrence",
            "isHero": true,
            "id": "0000"
        },
        {
            "name": "Aaron",
            "id": "0001"
        },
        {
            "name": "Anthony",
            "id": "0002"
        },
        {
            "name": "Anson",
            "id": "0003"
        }      
    ]
    
    `,
  )
  const [transformed, setTransformed] = useState<
    Record<string, Record<string, any>>
  >({})

  const onInputChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setInputText(e.currentTarget.value)
  }

  const arrayToObject = (arr: any[]): Record<string, Record<string, any>> => {
    // your code here
    return {}
  }

  const transform = () => {
    try {
      const trimmed = inputText.trim().replace(/\r\n/, '')
      const parsed = JSON.parse(trimmed)
      if (!Array.isArray(parsed)) {
        throw new Error('please input a correct format')
      }
      setTransformed(arrayToObject(parsed))
      setErrorStr('')
    } catch (err) {
      setErrorStr((err as Error).message)
    }
  }

  return (
    <div className="flex items-center">
      <div
        style={{
          width: '100%',
        }}
      >
        {errorStr && (
          <>
            <code
              style={{
                color: 'red',
              }}
            >
              {errorStr}
            </code>
            <br />
          </>
        )}
        <div>
          <pre>{JSON.stringify(transformed, null, 2)}</pre>
        </div>
        <br></br>
      </div>
      <textarea
        style={{
          minHeight: '400px',
          width: '100%',
          marginLeft: '0.5rem',
          alignSelf: 'flex-end',
        }}
        value={inputText}
        onInput={onInputChange}
        placeholder="input array"
        className="focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:border-gray-600"
      />
      <ButtonComponent
        style={{
          marginLeft: '0.5rem',
          alignSelf: 'flex-end',
        }}
        onClick={transform}
      >
        format
      </ButtonComponent>
    </div>
  )
}

export default ArrayToObjectComponent
