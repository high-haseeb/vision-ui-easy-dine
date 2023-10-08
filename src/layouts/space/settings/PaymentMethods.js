import { Card, Grid } from '@mui/material'
import VuiBox from 'components/VuiBox'
import VuiSelect from 'components/VuiSelect'
import VuiSwitch from 'components/VuiSwitch'
import VuiTypography from 'components/VuiTypography'
import FormField from 'layouts/pages/account/components/FormField'
import React from 'react'

const PaymentMethods = () => {
    return (
        <Grid item xs={12}>
            <Card sx={{ marginTop: 2 }}>
                <VuiBox mb={1} ml={0.5} lineHeight={0} display="flex" style={{ justifyContent: "space-between" }}>
                    <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 18 }}>
                        Zahlungsmethode
                    </VuiTypography>
                    <VuiBox display="flex" style={{ gap: 2 }}>
                        <VuiBox lineHeight={1} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                            <VuiSwitch color="info" />
                            <VuiTypography color="white" variant="h6">
                                Nicht Verfügbar
                            </VuiTypography>
                        </VuiBox>
                        <VuiBox lineHeight={1} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                            <VuiSwitch color="info" />
                            <VuiTypography color="white" variant="h6">
                                Nicht Verfügbar
                            </VuiTypography>
                        </VuiBox>
                    </VuiBox>
                </VuiBox>
                <Grid container mt={4}>
                    <Grid item xs={12} md={6} lg={3}>
                        <FormField label="Zahlungsanbieter" placeholder="Pasha Lounge" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <FormField label="Bestellschluss" placeholder="Bestellschluss" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <FormField label="Kalorien" placeholder="Kalorien" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <FormField label="Currency" placeholder="Currency" />
                    </Grid>
                    <Grid item xs={12}>
                        <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
                            <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 18 }}>
                                Mitarbeiter
                            </VuiTypography>
                        </VuiBox>
                        <VuiSelect
                            defaultValue={[
                                { value: "in stock", label: "In Stock" },
                                { value: "out of stock", label: "Out of Stock" },
                            ]}
                            options={[
                                { value: "black friday", label: "Black Friday" },
                                { value: "expired", label: "Expired", isDisabled: true },
                                { value: "out of stock", label: "Out of Stock" },
                                { value: "in stock", label: "In Stock" },
                                { value: "sale", label: "Sale" },
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