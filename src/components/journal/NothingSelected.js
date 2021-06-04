import React from 'react'

export const NothingSelected = () => {
    return (
        <div className="nothing__main">
            <p>
                    Select Someting
                    <br />
                    or Create an Entry!

            </p>
                   <img 
                    src={`../assets/rocket.svg`}
                    alt='Rocket'
                    className='nothing__img'
                   />
        </div>
    )
}
