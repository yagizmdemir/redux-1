import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNew, filter } from '../redux/note/not.slice';

const Textarea = () => {
    const dispatch = useDispatch();

    const [color, setColor] = useState('#f06292');
    const [text, setText] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length) {
            dispatch(addNew({text, color}))
            setText('')
        }
    }

    const handleChange = (e) => {
        dispatch(filter(e.target.value));
    }

    return (
        <div className='form--area'>
            <input type='text' placeholder='Search...' onChange={handleChange} />
            <textarea placeholder='Enter your text here...' value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <div className='txt-bottom'>
                <div className='colors'>
                    <div
                        className={`color-item ${color === '#f06292' ? 'selected' : ''}`}
                        onClick={() => setColor('#f06292')}
                        style={{ backgroundColor: "#f06292" }}
                    />
                    <div
                        className={`color-item ${color === '#ba68c8' ? 'selected' : ''}`}
                        onClick={() => setColor('#ba68c8')}
                        style={{ backgroundColor: "#ba68c8" }}
                    />
                    <div
                        className={`color-item ${color === '#ffd54f' ? 'selected' : ''}`}
                        onClick={() => setColor('#ffd54f')}
                        style={{ backgroundColor: "#ffd54f" }}
                    />
                    <div
                        className={`color-item ${color === '#4fc3f7' ? 'selected' : ''}`}
                        onClick={() => setColor('#4fc3f7')}
                        style={{ backgroundColor: "#4fc3f7" }}
                    />
                    <div
                        className={`color-item ${color === '#aed581' ? 'selected' : ''}`}
                        onClick={() => setColor('#aed581')}
                        style={{ backgroundColor: "#aed581" }}
                    />
                </div>
                <button className='submit' onClick={handleSubmit}>ADD</button>
            </div>
        </div>
    )
}

export default Textarea