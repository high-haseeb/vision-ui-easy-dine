import { Card, Grid } from '@mui/material'
import VuiBox from 'components/VuiBox'
import VuiSelect from 'components/VuiSelect'
import VuiTypography from 'components/VuiTypography'
import React from 'react'

const AddPeople = () => {
    return (
        <Grid item xs={12}>
            <Card sx={{ marginTop: 2 }}>
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
            </Card>
        </Grid>
    )
}

export default AddPeople