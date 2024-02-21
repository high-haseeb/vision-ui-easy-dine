import { Card, Grid } from '@mui/material'
import breakpoints from 'assets/theme/base/breakpoints'
import Restaurent1 from 'assets/theme/components/card/ResstaurentCard/Restaurent1'
import VuiBox from 'components/VuiBox'
import VuiTypography from 'components/VuiTypography'
import Footer from 'examples/Footer'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'

const restaurents = [
    {
        name: "Restaurent 1",
        description: "As Uber works through a huge amount of internal management turmoil.",
        project: "project#1",
        isOnline: true,
        image: require("assets/images/restaurent/restaurent2.png")
    },
    {
        name: "Restaurent 2",
        description: "As Uber works through a huge amount of internal management turmoil.",
        project: "project#1",
        isOnline: true,
        image: require("assets/images/restaurent/restaurent3.png")
    }, {
        name: "Restaurent 3",
        description: "As Uber works through a huge amount of internal management turmoil.",
        project: "project#1",
        isOnline: true,
        image: require("assets/images/restaurent/restaurent8.png")
    },
    {
        name: "Restaurent 4",
        description: "As Uber works through a huge amount of internal management turmoil.",
        project: "project#1",
        isOnline: true,
        image: require("assets/images/restaurent/restaurent5.png")
    }, {
        name: "Restaurent 5",
        description: "As Uber works through a huge amount of internal management turmoil.",
        project: "project#1",
        isOnline: false,
        image: require("assets/images/restaurent/restaurent6.png")
    },
    {
        name: "Restaurent 6",
        description: "As Uber works through a huge amount of internal management turmoil.",
        project: "project#1",
        isOnline: false,
        image: require("assets/images/restaurent/restaurent7.png")
    }
]

function Restaurents(props) {
    const { values } = breakpoints;

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <VuiBox py={3}>
                <Grid container>
                    <Grid item xs={12} >
                        <VuiBox mb={3} p={1}>
                            <VuiTypography
                                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                                textTransform="capitalize"
                                fontWeight="bold"
                                color="white"
                            >
                                Restaurantname
                            </VuiTypography>
                        </VuiBox>
                    </Grid>
                    <Card style={{
                        width: "100%", background: '#061A3C'
                    }}>
                        <VuiTypography
                            fontWeight="bold"
                            color="white"
                            style={{ fontSize: 18 }}
                        >
                            Arbeitsbereiche
                        </VuiTypography>
                        <VuiTypography
                            fontWeight="normal"
                            color="text"
                            variant="body2"
                        >
                            Architects design houses
                        </VuiTypography>
                        <Grid container spacing={4} style={{ marginTop: 6 }}>
                            {restaurents.map((restaurent, key) => {
                                return (
                                    <Grid key={key} item xs={12} md={3} xl={4} >
                                        <Restaurent1 {...restaurent} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Card>
                </Grid>
            </VuiBox>
            <Footer />
        </DashboardLayout>
    )
}

export default Restaurents
