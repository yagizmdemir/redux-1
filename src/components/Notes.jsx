import React from 'react'
import { useSelector } from 'react-redux';
import { filteredItems } from '../redux/note/not.slice';

const Notes = () => {
    const items = useSelector(filteredItems);
    
    return (
        <div className='note-list'>
            {
                items.map((item, index) => (
                    <div className='note' key={`note-${index}`} style={{ background: item.color }}>
                        {item.text}
                    </div>
                ))
            }
        </div>
    )
}

export default Notes;