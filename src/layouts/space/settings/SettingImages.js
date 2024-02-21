import { Card } from '@mui/material'
import VuiBox from 'components/VuiBox'
import VuiButton from 'components/VuiButton'
import VuiTypography from 'components/VuiTypography'
import hookah from "assets/images/restaurent/hookah.png";
import hookah2 from "assets/images/restaurent/hookah2.png";
import logo from "assets/images/restaurent/logo.png";


import React from 'react'

const SettingImages = () => {
    return (
        <>
            <Card>
                <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 18 }}>
                    Restaurant Image
                </VuiTypography>
                <VuiBox mt={2}>
                    <img src={hookah} alt="" style={{ width: "100%" }} />
                </VuiBox>
                <VuiBox display="flex" sx={{ gap: 3 }} mt={2}>
                    <VuiButton sx={{ paddingX: 5, paddingY: 0 }}>EDIT</VuiButton>
                    <VuiButton sx={{ paddingX: 5, paddingY: 0 }} color="info">
                        REMOVE
                    </VuiButton>
                </VuiBox>
            </Card>
            <Card style={{ marginTop: 10 }}>
                <VuiBox mt={2}>
                    <img src={hookah2} alt="" style={{ width: "100%" }} />
                </VuiBox>
                <VuiBox display="flex" sx={{ gap: 3 }} mt={2}>
                    <VuiButton sx={{ paddingX: 5, paddingY: 0 }}>EDIT</VuiButton>
                    <VuiButton sx={{ paddingX: 5, paddingY: 0 }} color="info">
                        REMOVE
                    </VuiButton>
                </VuiBox>
            </Card>
            <Card style={{ marginTop: 10 }}>
                <VuiBox mt={2} sx={{ backgroundColor: "#73737326", padding: 10, paddingY: 5 }}>
                    <img src={logo} alt="" style={{ width: "100%" }} />
                </VuiBox>
                <VuiBox display="flex" sx={{ gap: 3 }} mt={2}>
                    <VuiButton sx={{ paddingX: 5, paddingY: 0 }}>EDIT</VuiButton>
                    <VuiButton sx={{ paddingX: 5, paddingY: 0 }} color="info">
                        REMOVE
                    </VuiButton>
                </VuiBox>
            </Card>
        </>

    )
}

export default SettingImages