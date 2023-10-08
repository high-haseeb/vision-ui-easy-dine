import VuiBox from 'components/VuiBox'
import VuiTypography from 'components/VuiTypography'
import React from 'react'
import potato from 'assets/images/icons/potato.png'

const OrderBadge = () => {
    return (

        <VuiBox sx={styles.wrapper} display="flex">
            <img src={potato} alt="" />
            <VuiTypography sx={{ fontSize: 13 }} color="white" fontWeight="normal" >
                Potato
            </VuiTypography>
        </VuiBox>
    )
}

export default OrderBadge;

const styles = {
    wrapper: {
        backgroundColor: "dark.medium",
        alignItems: "center",
        gap: 1,
        borderRadius: 50,
        paddingX: 1
    }
}