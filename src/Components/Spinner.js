import React from 'react'

export default function Spinner(props) {
  const { mode } = props
  return (
      <div className="text-center m-3">
        <div className={`spinner-border text-${mode === 'dark' ? 'light' : 'dark'}`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
  )
}
