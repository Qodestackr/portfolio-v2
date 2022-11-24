import React, { forwardRef, useLayoutEffect } from 'react'

// _as attribute represents a tag name such as blockquote, h1, or even dev!

const Test = forwardRef(({ _as, text, className }) => {

    if (_as === '') {
        _as = 'div'
    }

    return (
        <>
            {<_as className={className}>{text}</_as>}
        </>
    )
})

export default Test