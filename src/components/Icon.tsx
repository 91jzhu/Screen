import React from "react"

const Icon = (props) => {
    return (
        <>
            <svg className='icon'>
                <use xlinkHref={'#icon-' + props.name}/>
            </svg>
        </>
    )
}
export {Icon}