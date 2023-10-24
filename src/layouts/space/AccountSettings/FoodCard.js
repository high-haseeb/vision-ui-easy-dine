import { Star } from '@mui/icons-material'
import VuiBox from 'components/VuiBox'
import VuiTypography from 'components/VuiTypography'
import waitTimeIcon from 'assets/images/foods/waitTime.png'
import priceIcon from 'assets/images/foods/price.png'
import React from 'react'
import VuiButton from 'components/VuiButton'
import { Button } from '@mui/material'

const FoodCard = ({ image, name, category, rating, waitTime, price, id }) => {
    return (
        <VuiBox sx={{
            borderRadius: "26px 26px 26px 26px",
            background: "linear-gradient(106.9deg, rgba(6, 11, 40, 0.94) -32.04%, rgba(10, 14, 35, 0.49) 105.03%)",
            overflow: "hidden"
        }}>
            <VuiBox sx={{ height: 136, width: "100%" }}>
                <img src={"http://localhost:8095/menuitems/" + id + "/image"} alt="" style={{ width: "100%", height: "100%" }} />
            </VuiBox>
            <VuiBox p={2}>
                <VuiBox display="flex" sx={{ justifyContent: "center" }} >
                    <VuiBox sx={{ flex: 1 }}>
                        <VuiTypography color="white" variant={"body2"} fontWeight="bold">
                            {name}
                        </VuiTypography>
                        <VuiTypography color="text" sx={{ fontSize: 10 }} fontWeight="medium">
                            {category}
                        </VuiTypography>
                    </VuiBox>
                    <Button
                        component="button"
                        // href={"/"}
                        color="info"
                        sx={{
                            backgroundColor: "secondary.main",
                            boxShadow: "0px 12px 10px 0px#0075ff",
                            padding: "5px 20px !important",
                            height: "20px !important",
                            width: "auto",
                            fontSize: 10,
                            fontWeight: 700,
                            color: "white"
                        }}
                        rel="noreferrer"
                        // height="35px"
                        size="small"
                    // onClick={handleClick}
                    >
                        {/* <VuiTypography color="white" style={{ fontSize: 10 }} fontWeight="bold"> */}
                        Edito
                        {/* </VuiTypography> */}
                    </Button>
                </VuiBox>
                <VuiBox display="flex" sx={{ justifyContent: "space-between" }}>
                    <VuiTypography color="text" sx={{ fontSize: 11, display: "flex", alignItems: "center" }} fontWeight="medium">
                        <Star sx={{ color: "#FFD90F" }} />
                        {rating}
                    </VuiTypography>
                    <VuiTypography color="text" sx={{ fontSize: 11, display: "flex", alignItems: "center" }} fontWeight="medium">
                        <img src={waitTimeIcon} alt="" />
                        {waitTime}
                    </VuiTypography>
                    <VuiTypography color="text" sx={{ fontSize: 11, display: "flex", alignItems: "center" }} fontWeight="medium">
                        <img src={priceIcon} alt="" />
                        {price}
                    </VuiTypography>
                </VuiBox>
            </VuiBox>
        </VuiBox>
    )
}

export default FoodCard