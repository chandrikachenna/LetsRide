import * as React from 'react'

function FilterIcon(props) {
  return (
    <svg width={16} height={16} fill='none' viewBox='0 0 16 16' {...props}>
      <path
        fill='#7E858E'
        fillRule='evenodd'
        d='M1 3a1 1 0 011-1h12a1 1 0 010 2H2a1 1 0 01-1-1zm2 5a1 1 0 011-1h8a1 1 0 010 2H4a1 1 0 01-1-1zm3 4a1 1 0 000 2h4a1 1 0 000-2H6z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export default FilterIcon
