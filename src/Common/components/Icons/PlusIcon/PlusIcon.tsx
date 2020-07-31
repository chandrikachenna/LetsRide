import * as React from 'react'

function PlusIcon(props) {
  return (
    <svg width={16} height={16} fill='none' viewBox='0 0 16 16' {...props}>
      <path
        fill='#7E858E'
        fillRule='evenodd'
        d='M7.25 7.25V2h1.5v5.25H14v1.5H8.75V14h-1.5V8.75H2v-1.5h5.25z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default PlusIcon
