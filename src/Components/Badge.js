import React from 'react'

export default function Badge(props) {
    const{mode, source} = props;
  return (
    <div className='d-flex justify-content-end position-absolute end-0 top-0'>
                    <span className={`badge rounded-pill text-${mode === 'dark' ? 'dark' : 'light'} bg-${mode === 'dark' ? 'light' : 'danger'}`} >
                        {source}
                    </span>
                </div>
  )
}
