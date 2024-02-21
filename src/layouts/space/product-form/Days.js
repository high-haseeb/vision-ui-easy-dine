import React from 'react'
import Day from './Day'
import VuiBox from 'components/VuiBox'

const Days = () => {
    return (
        <VuiBox display="flex" sx={{ justifyContent: "space-between", alignItems: "center", flex: 1 }}>
            <Day title={"MO"} />
            <Day title={"DI"} />
            <Day title={"MI"} />
            <Day title={"DO"} />
            <Day title={"FR"} />
            <Day title={"SA"} />
            <Day title={"SO"} />
        </VuiBox>
    )
}

export default Days