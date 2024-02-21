import { Card } from '@mui/material'
import VuiBox from 'components/VuiBox'
import VuiInput from 'components/VuiInput'
import VuiSelect from 'components/VuiSelect'
import VuiSwitch from 'components/VuiSwitch'
import VuiTypography from 'components/VuiTypography'
import React from 'react'

const Filter = () => {
    return (
        <>
            <Card>
                <VuiTypography sx={{ fontSize: 18 }} fontWeight="bold" color="white">
                    Filter
                </VuiTypography>

                <VuiTypography color="text" sx={{ fontSize: 10, marginY: 2 }} fontWeight="medium">
                    Things
                </VuiTypography>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Email me when someone follows me
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Email me when someone answer me
                    </VuiTypography>
                </VuiBox>
                <VuiBox lineHeight={2} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                    <VuiSwitch color="info" />
                    <VuiTypography color="white" variant="h6">
                        Email me when someone mention me
                    </VuiTypography>
                </VuiBox>
            </Card>
            <Card sx={{ marginY: 3 }}>
                <VuiInput
                    placeholder="Add Category"
                    icon={{ component: "search", direction: "left" }}
                    sx={({ breakpoints }) => ({
                        [breakpoints.down("sm")]: {
                            maxWidth: "80px",
                        },
                        [breakpoints.only("sm")]: {
                            maxWidth: "80px",
                        },
                        backgroundColor: "info.main !important",
                    })}
                />
                <br />
                <VuiSelect
                    defaultValue={[
                        { value: "Vine", label: "Vine" },
                        { value: "Kristian Kovec", label: "Kristain Kovec" },
                        { value: "Michael Reist", label: "Michael Reist" },
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
        </>
    )
}

export default Filter