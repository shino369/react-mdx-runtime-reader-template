import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface Props {
  children: ReactNode
}

const Wrapper: React.FC<Props> = ({ children }) => {
  const location = useLocation()

  return (
    <div className="card">
      <div className="fixed top-0 right-0 p-4">
        <div className="flex flex-col items-center justify-center bg-slate-500 rounded text-white capitalize">
          {[
            { path: '/', name: 'main' },
            { path: '/doc', name: 'document' },
          ].map((p) => (
            <Link
              key={p.name}
              className="mx-2 text-white"
              to={p.path}
              style={{
                opacity: location.pathname === p.path ? 0.5 : 1,
                pointerEvents: location.pathname === p.path ? 'none' : 'unset',
              }}
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>

      {children}
    </div>
  )
}

export default Wrapper
