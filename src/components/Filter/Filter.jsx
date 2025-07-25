import React from 'react'
import style from './Filter.module.css'

function Filter({ setFilter, currentFilter, }) {
    const Filters = ['All', 'Complete', 'Pending'];

  return (
    <div className={`${style.filter_row}`}>
        {Filters.map((f) => (
            <button
                key={f}
                onClick={() => setFilter(f)}
                className={`${style.filter_btn} ${currentFilter === f ? style.active : ''} `}
            >
                {f}
            </button>
        ))}
    </div>
  )
}

export default Filter