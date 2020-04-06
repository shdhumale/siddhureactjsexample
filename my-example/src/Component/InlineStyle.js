import React from 'react'

function InlineStyle() {
    const inlineStyle = {
        fontSize: '72px',
        color: 'green'
    }

    return (
        <div>
            <h1 className='primary'>this is main component with simple CSS</h1>

            {/* this is not permitted <h1 className={styles.primary}>this is main component with module css</h1> */}
            <h1 style={inlineStyle}>this is inline styling</h1>
        </div>
    )
}

export default InlineStyle
