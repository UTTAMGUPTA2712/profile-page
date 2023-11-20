import React from 'react'

export const DisplayField = (props: DisplayFieldPropsType) => {
    const { key, data } = props
    if (typeof data === 'string') {
        return <p className="mt-5 text-2xl leading-12 tracking-wide text-gray-600" key={key}>{data}</p>
    } else {
        return <span>
            {
                data.map((item, index) => <p className="mt-5 tracking-wide leading-12 text-2xl text-gray-600" key={index}>- {item}</p>)
            }
        </span>
    }
}
