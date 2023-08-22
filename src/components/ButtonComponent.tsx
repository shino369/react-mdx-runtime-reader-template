import React from 'react'

const ButtonComponent: React.FC<any> = (props) => {
  return (
    <button
      type="button"
      {...props}
      className="link-underline py-1.5 px-4 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      
    >
    </button>
  )
}

export default ButtonComponent
