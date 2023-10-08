import React from 'react'
import restaurent1 from "assets/images/restaurent/restaurent1.png";
import { Card } from '@mui/material';
import VuiTypography from 'components/VuiTypography';
import breakpoints from 'assets/theme/base/breakpoints';
import VuiButton from 'components/VuiButton';
import { ArrowDownward, KeyboardArrowDown } from '@mui/icons-material';

const Restaurent2 = () => {
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
                <VuiButton
                    component="a"
                    href={"/"}
                    target="_blank"
                    rel="noreferrer"
                    color={"info"}
                    variant="contained"
                    width="135px"
                    height="35px"
                    size="small"
                    style={styles.title}
                >
                    <div style={styles.titleWrapper}>
                        Wählen
                    </div>
                    <KeyboardArrowDown />
                </VuiButton>
            </div>
        </Card>
    )
}

export default Restaurent2

const styles = {
    outerWrapper: {
        height: "100%"
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