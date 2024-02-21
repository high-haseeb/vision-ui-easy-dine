import { Card, Grid } from '@mui/material'
import VuiBox from 'components/VuiBox'
import VuiSelect from 'components/VuiSelect'
import VuiSwitch from 'components/VuiSwitch'
import VuiTypography from 'components/VuiTypography'
import FormField from 'layouts/pages/account/components/FormField'
import React from 'react'

const AddPeople = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={6} xxl={8}>
                <Card sx={{ marginTop: 2 }}>
                    <VuiTypography
                        component="label"
                        variant="caption"
                        color="white"
                        fontWeight="bold"
                        textTransform="capitalize"
                    >
                        Pricing
                    </VuiTypography>
                    <div style={{ display: "flex", flex: 1, marginTop: 20, marginBottom: 20, gap: 4 }}>
                        <div style={{ flex: 1 }}>
                            <FormField label="Price" placeholder="Price" />
                        </div>
                        <div style={{ flex: 1 }}>
                            <VuiTypography
                                component="label"
                                variant="caption"
                                color="white"
                                fontWeight="bold"
                                textTransform="capitalize"
                            >
                                currency
                            </VuiTypography>
                            <VuiSelect
                                placeholder="Currency"
                                options={[
                                    { value: "08:15", label: "08:15" },
                                    { value: "08:14", label: "08:14" },
                                ]}
                            />
                        </div>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} xxl={4}>
                <Card sx={{ marginTop: 2 }}>
                    <VuiTypography color="text" sx={{ fontSize: 10 }} fontWeight="medium">
                        Settings
                    </VuiTypography>
                    <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                        <VuiSwitch color="info" />
                        <VuiTypography color="white" variant="subtitle2" sx={{ fontSize: 14 }}>
                            Monthly Product updates
                        </VuiTypography>
                    </VuiBox>
                    <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                        <VuiSwitch color="info" />
                        <VuiTypography color="white" variant="subtitle2" sx={{ fontSize: 14 }}>
                            Monthly product updates
                        </VuiTypography>
                    </VuiBox>
                    <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                        <VuiSwitch color="info" />
                        <VuiTypography color="white" variant="subtitle2" sx={{ fontSize: 14 }}>
                            Optionale Auswahl Pakete
                        </VuiTypography>
                    </VuiBox>
                    <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                        <VuiSwitch color="info" />
                        <VuiTypography color="white" variant="subtitle2" sx={{ fontSize: 14 }}>
                            Altersnachfrage 18?
                        </VuiTypography>
                    </VuiBox>
                </Card>
            </Grid>
        </Grid>
    )
}

export default AddPeople