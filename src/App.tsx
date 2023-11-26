import { Training, CodeGuide } from '@/pages'
import './App.css'
// import SyntaxHighlighter from 'react-syntax-highlighter'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { dark, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { a11yDark, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism' 
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Wrapper from '@/router/Wrapper'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Training components={{ code }} />,
    },
    {
      path: '/doc',
      element: <CodeGuide components={{ code }} />,
    },
  ].map((route) => ({
    ...route,
    element: <Wrapper children={route.element} />,
  })),
  {
    basename: import.meta.env.DEV ? '/' : '/react-mdx-runtime-reader-template/'
  }
)

function code({ className, children, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '')
  props.className = props.className
    ? props.className + ` rounded`
    : 'rounded-b-xl rounded-t-none'

  return match ? (
    <SyntaxHighlighter
      style={a11yDark}
      language={'tsx'}
      PreTag="div"
      {...props}
      children={children}
    />
  ) : (
    <code
      {...props}
      className="rounded-sm text-slate-100 py-1 px-1.5 text-xs"
      style={{
        backgroundColor: 'rgb(43, 43, 43)',
      }}
      children={children}
    />
  )
}

const App = () => {
  return (
    <div className="card dark:bg-gray-600">
      <RouterProvider router={router}  />
    </div>
  )
}

export default App
