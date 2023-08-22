import React, { PropsWithChildren, useEffect } from 'react'

interface Props {
  title?: string
  children: React.ReactNode & {
    props: {
      children: {
        props: {
          children: string
          className: string
        }
      }
    }
  }
}
const CodeBlock: React.FC<Props> = ({ children, title }) => {
  const copyScript = () => {
    if (children?.props?.children.props.children) {
      navigator.clipboard.writeText(children.props.children.props.children)
    }
  }

  return (
    <div className="code-block">
      {title && (
        <div className=" bg-zinc-900 text-white rounded-t-xl p-2 flex justify-between px-2 items-center">
          <div>{title}</div>
          <button
            className="px-2 py-1 bg-gray-600 uppercase text-xs"
            onClick={copyScript}
          >
            copy
          </button>
        </div>
      )}
      <div>{children}</div>
    </div>
  )
}

export default CodeBlock
