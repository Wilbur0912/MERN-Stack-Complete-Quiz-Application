import React, { useState } from 'react'

export default function Questions() {

    const [checked, setChecked] = useState(undefined)

    function onSelect() {
        console.log('Radio button change')
    }

    return (
        <div className='questions'>
            <h2 className='text-light'>Simple Question 1</h2>

            <ul>
                <li>
                    <input
                        type="radio"
                        value={true}
                        name="options"
                        id='q1-option'
                        onChange={onSelect()}
                    />

                    <label className='text-primary' htmlFor="q1-option"></label>
                    <div className='check checked'></div>
                </li>
            </ul>
        </div>
    )
}
