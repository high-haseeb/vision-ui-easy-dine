import { Card, Grid } from '@mui/material'
import VuiBox from 'components/VuiBox'
import VuiSwitch from 'components/VuiSwitch'
import VuiTypography from 'components/VuiTypography'
import FormField from 'layouts/pages/account/components/FormField'
import React from 'react'

const OtherSettings = () => {
    return (
        <VuiBox container>
            <Card sx={{ marginTop: 2 }}>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Closed
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Früchstückskarte
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Optionale Auswahl Pakete
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Altersnachfrage 18?
                    </VuiTypography>
                </VuiBox>
                <VuiTypography color="text" sx={{ fontSize: 10 }} fontWeight="medium">
                    Settings
                </VuiTypography>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiBox  >
                        {/* <VuiTypography color="white" variant="h6">
                            Mindesbestellwert
                        </VuiTypography> */}
                        <FormField label="Mindesbestellwert" placeholder="50CHF" />
                    </VuiBox>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Lagersystem
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Altersnachfrage 18?
                    </VuiTypography>
                </VuiBox>

                <VuiTypography color="text" sx={{ fontSize: 10 }} fontWeight="medium">
                    Settings
                </VuiTypography>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        EasyMeet
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Monthly product updates
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Take-Away
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Altersnachfrage 18?
                    </VuiTypography>
                </VuiBox>
            </Card>
        </VuiBox>
    )
}

export default OtherSettings