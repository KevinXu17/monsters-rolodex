import React from 'react'
import './search-box.styles.css'


export const SearchBox = ({palceHolder, handleFunc}) => {
    return (
     <input className='search' type='search' placeholder={palceHolder} onChange={handleFunc}/>
    )
};