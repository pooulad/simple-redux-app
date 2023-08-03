import React, { memo } from 'react'

function CakeContainer() {
    return (
        <div>
            <div>CakeContainer</div>
            <div>CakeContainer</div>
            <div>CakeContainer</div>
            <div>CakeContainer</div>

        </div>
    )
}

export default memo(CakeContainer);