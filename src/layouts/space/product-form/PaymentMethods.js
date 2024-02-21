import { Card, Grid } from '@mui/material'
import VuiBox from 'components/VuiBox'
import VuiButton from 'components/VuiButton'
import VuiSelect from 'components/VuiSelect'
import VuiSwitch from 'components/VuiSwitch'
import VuiTypography from 'components/VuiTypography'
import FormField from 'layouts/pages/account/components/FormField'
import React from 'react'

import appleIcon from "assets/images/foods/apple.png";
import grapesIcon from "assets/images/foods/grapes.png";
import redBullIcon from "assets/images/foods/redBull.png";


const PaymentMethods = () => {
    return (
        <Grid item xs={12}>
            <Card sx={{ marginTop: 2 }}>
                <VuiBox mb={1} ml={0.5} lineHeight={0} display="flex" style={{ justifyContent: "space-between" }}>
                    <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 18 }}>
                        Product Information
                    </VuiTypography>
                </VuiBox>
                <Grid container mt={4}>
                    <Grid item xs={12} md={6} lg={3} xxl={2}>
                        <FormField label="Zubereitungs Zeit in Minuten" placeholder="10.00 - 15.00 min" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <FormField label="Bestellschluss" placeholder="Bestellschluss" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <FormField label="Kalorien" placeholder="Kalorien" />
                    </Grid>
                    <Grid item xs={12} xxl={4} display={"flex"} sx={{ alignItems: "center" }}>
                        <VuiBox>
                            <VuiBox>
                                <VuiTypography variant="caption" color="whtie">Translate</VuiTypography>
                                <VuiButton sx={{ display: "block", }} variant="contained" color="info">
                                    Translate
                                </VuiButton>
                            </VuiBox>
                            <VuiBox>
                                <VuiTypography variant="caption" color="whtie">Herkunftsland</VuiTypography>
                                <VuiButton sx={{ display: "block" }} variant="outlined" color="white">
                                    Herkunftsland
                                </VuiButton>
                            </VuiBox>
                        </VuiBox>
                        <VuiBox>
                            <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                                <VuiSwitch color="info" />
                                <VuiTypography sx={{ fontSize: 14 }} color="text" variant="subtitle2">
                                    Angebote
                                </VuiTypography>
                            </VuiBox>
                            <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                                <VuiSwitch color="info" />
                                <VuiTypography sx={{ fontSize: 14 }} color="text" variant="subtitle2">
                                    Optionale Auswahl
                                </VuiTypography>
                            </VuiBox>
                        </VuiBox>
                    </Grid>
                    <Grid item xs={12}>
                        <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                            <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 12 }}>
                                Packages
                            </VuiTypography>
                        </VuiBox>
                        <VuiSelect
                            defaultValue={[
                                { value: "Apple", label: "Apple", icon: redBullIcon },
                                { value: "Grapes", label: "Grapes", icon: redBullIcon },
                                { value: "Red Bull", label: "Red Bull", icon: redBullIcon },
                            ]}
                            options={[
                                { value: "Apple", label: "Apple", icon: appleIcon },
                                { value: "Grapes", label: "Grapes", icon: grapesIcon },
                                { value: "Red Bull", label: "Red Bull", icon: redBullIcon },
                                { value: "Apple", label: "Apple", icon: appleIcon },
                                { value: "Grapes", label: "Grapes", icon: grapesIcon },
                                { value: "Red Bull", label: "Red Bull", icon: redBullIcon },
                            ]}
                            size="large"
                            isMulti
                        />
                        <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                            <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 12 }}>
                                Allergic Ingredients
                            </VuiTypography>
                        </VuiBox>
                        <VuiSelect
                            defaultValue={[
                                { value: "Apple", label: "Apple", icon: appleIcon },
                                { value: "Grapes", label: "Grapes", icon: grapesIcon },
                                { value: "Red Bull", label: "Red Bull", icon: redBullIcon },
                            ]}
                            options={[
                                { value: "Apple", label: "Apple", icon: appleIcon },
                                { value: "Grapes", label: "Grapes", icon: grapesIcon },
                                { value: "Red Bull", label: "Red Bull", icon: redBullIcon },
                                { value: "Apple", label: "Apple", icon: appleIcon },
                                { value: "Grapes", label: "Grapes", icon: grapesIcon },
                                { value: "Red Bull", label: "Red Bull", icon: redBullIcon },
                            ]}
                            size="large"
                            isMulti
                        />
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default PaymentMethods