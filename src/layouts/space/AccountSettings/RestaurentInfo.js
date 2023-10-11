import React from 'react'
import restaurent1 from "assets/images/restaurent/restaurent1.png";
import { Button, Card } from '@mui/material';
import VuiTypography from 'components/VuiTypography';
import breakpoints from 'assets/theme/base/breakpoints';
import VuiButton from 'components/VuiButton';
import { ArrowDownward, KeyboardArrowDown } from '@mui/icons-material';
import VuiBox from 'components/VuiBox';

const RestaurentInfo = () => {
    const { values } = breakpoints;
    return (
        <Card style={styles.outerWrapper}>
            <img alt="" style={styles.img} src={restaurent1} />
            <div style={styles.wrapper}>
                <VuiTypography variant="body2" fontWeight="regular" color="white">
                    Alles Restaurants
                </VuiTypography>
                <VuiTypography variant="body2" fontWeight="regular" color="white">
                    EasyDine Club
                </VuiTypography>
                <VuiBox display="flex" sx={{ flexDirection: "column", alignItems: "center" }} mt={2}>
                    <Button
                        component="button"
                        // href={"/"}
                        color="info"
                        sx={{
                            backgroundColor: "secondary.main",
                            boxShadow: "0px 18px 24px 0px#0075ff",
                            padding: "12px 60px !important",
                            width: "auto",
                            fontSize: 18,
                            fontWeight: 700,
                            color: "white",
                            textTransform: "capitalize"
                        }}
                        rel="noreferrer"
                        // height="35px"
                        size="small"
                    // onClick={handleClick}
                    >
                        Wählen
                    </Button>
                    <Button
                        component="button"
                        // href={"/"}
                        color="info"
                        sx={{
                            backgroundColor: "secondary.main",
                            boxShadow: "0px 18px 24px 0px#0075ff",
                            padding: "12px 50px !important",
                            width: "auto",
                            fontSize: 18,
                            fontWeight: 700,
                            color: "white",
                            marginTop: 3,
                            textTransform: "capitalize"
                        }}
                        rel="noreferrer"
                        // height="35px"
                        size="small"
                    // onClick={handleClick}
                    >
                        Daylicard
                    </Button>
                </VuiBox>
            </div>
        </Card>
    )
}

export default RestaurentInfo

const styles = {
    outerWrapper: {
        // height: "100%",
        marginTop: 10
    },
    img: {
        borderRadius: 20
    },
    wrapper: {
        textAlign: "center",
        marginTop: 10
    },
    title: {
        marginTop: 20,
        width: "100%",
        paddingRight: 20
    },
    titleWrapper: {
        flex: 1
    }
}