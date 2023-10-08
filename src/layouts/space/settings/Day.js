import VuiBox from 'components/VuiBox'
import VuiTypography from 'components/VuiTypography'
import React, { useState } from 'react'

const Day = ({ title }) => {
    const [active, setActive] = useState(true);
    const handleClick = () => {
        setActive(!active);
    }

    return (
        <VuiBox display="flex" sx={styles.wrapper}>
            <VuiTypography variant="caption" color="text.main">
                {title}
            </VuiTypography>
            <VuiBox onClick={handleClick} sx={styles.input(active)}></VuiBox>
        </VuiBox>
    )
}

export default Day;

const styles = {
    wrapper: {
        flexDirection: "column",
        alignItems: "center",
        gap: 1
    },
    input: (active) => ({
        border: "0.5px solid #E2E8F04D",
        borderRadius: "10px",
        width: 25,
        height: 40,
        cursor: "pointer",
        backgroundColor: active ? "info.main" : "transpanrent"
    })
}