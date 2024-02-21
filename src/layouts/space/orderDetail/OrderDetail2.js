import { Card, Divider, Grid } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import table32 from "assets/images/restaurent/table32.png";
import TableOrder from "assets/theme/components/card/ResstaurentCard/TableOrder";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiSwitch from "components/VuiSwitch";
import VuiTypography from "components/VuiTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import goBack from "../../../assets/images/icons/goBack.png";
import OrderInfo from "layouts/ecommerce/orders/order-details/components/OrderInfo";
import OrderCard1 from "assets/theme/components/card/OrderInfo/OrderCard1";
import OrderBreak from "./OrderBreak";

import TrackOrder from "layouts/ecommerce/orders/order-details/components/TrackOrder";
import BillingInformation from "layouts/ecommerce/orders/order-details/components/BillingInformation";
import PaymentDetails from "layouts/ecommerce/orders/order-details/components/PaymentDetails";
import OrderSummary from "layouts/ecommerce/orders/order-details/components/OrderSummary";
import Transaction from "layouts/pages/account/billing/components/Transaction";

function OrderDetail2(props) {
  const { values } = breakpoints;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid container>
          <Grid item xs={12}>
            <VuiBox mb={3} p={1} sx={styles.wrapper}>
              <VuiTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
                color="white"
                sx={{ fontSize: 30 }}
              >
                Detail | Order no. 241342
              </VuiTypography>
              <VuiButton
                component="a"
                href={"/"}
                rel="noreferrer"
                color={"white"}
                variant="outlined"
                // height="35px"
                size="small"
                style={{ display: "flex", gap: 4, fontSize: 10 }}
              >
                <img src={goBack} alt="" />
                go back to home
              </VuiButton>
            </VuiBox>
          </Grid>
          <Card sx={styles.innerWrapper}>
            <Grid container>
              <Grid item xs={12} md={6} lg={5} xl={6}>
                <VuiBox display="flex" sx={{ gap: 2, flexDirection: "column" }}>
                  <VuiTypography fontWeight="bold" color="white" style={{ fontSize: 22 }}>
                    Order Detail
                  </VuiTypography>
                  <VuiBox display="flex" sx={({ breakpoints }) => ({
                    justifyContent: "space-between",
                    [breakpoints.down('md')]: {
                      flexDirection: "column"
                    }
                  })}>
                    <VuiBox>
                      <VuiTypography fontWeight="normal" color="text" variant="body2">
                        Order no. <span style={styles.value}>241342</span> from{" "}
                        <span style={styles.value}>10.09.2023 / 13:43</span>
                      </VuiTypography>
                      <VuiTypography fontWeight="normal" color="text" variant="body2">
                        Code: <span style={styles.value}> KF332</span>
                      </VuiTypography>
                    </VuiBox>
                    <VuiButton
                      component="a"
                      href={"/"}
                      target="_blank"
                      rel="noreferrer"
                      color={"white"}
                      variant="outlined"
                      sx={{ padding: "0px 40px", height: 10 }}
                      // width="100%"
                      // height="35px"
                      size="small"
                    // style={styles.viewAll}
                    >
                      <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 10 }}>
                        View All
                      </VuiTypography>
                    </VuiButton>
                  </VuiBox>
                </VuiBox>
                <Grid container spacing={4} style={{ marginTop: 6 }}>
                  <Grid item xs={12}>
                    <Divider light />
                    <OrderCard1 />
                    <Divider light />
                    <OrderCard1 />
                    <Divider light />
                    <OrderCard1 />
                    <Divider light />
                    <OrderCard1 />
                    <Divider light />
                    <OrderCard1 />
                  </Grid>

                </Grid>
              </Grid>
              <Grid item xs={12} md={6} lg={7} xl={6}>
                <Grid container>
                  <Grid item xs={12} md={12} lg={6} xl={5} sx={{ paddingX: 2 }}>
                    <PaymentDetails />
                    <TrackOrder />
                  </Grid>
                  <Grid item xs={12} md={12} lg={6} xl={7}>
                    <OrderSummary />
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <VuiBox
                      component="ul"
                      display="flex"
                      flexDirection="column"
                      p={0}
                      m={0}
                      sx={{ listStyle: "none" }}
                    >
                      <Transaction
                        color="error"
                        icon="arrow_downward"
                        name="Stripe"
                        description="26 March 2020, at 13:45 PM"
                        value="+ $ 750"
                      />
                      <Transaction
                        color="success"
                        icon="arrow_upward"
                        name="HubSpot"
                        description="26 March 2020, at 12:30 PM"
                        value="+ $ 1,000"
                      />
                      <Transaction
                        color="error"
                        icon="arrow_downward"
                        name="HubSpot"
                        description="26 March 2020, at 08:30 AM"
                        value="+ $ 2,500"
                      />
                      <Transaction
                        color="text"
                        icon="priority_high"
                        name="Webflow"
                        description="26 March 2020, at 05:00 AM"
                        value="Pending"
                      />
                    </VuiBox>
                    <VuiBox display="flex" sx={{ justifyContent: "space-between", gap: 5, alignItems: "center" }}>
                      <img src={table32} style={{ flex: 1, maxWidth: "100%" }} />
                      <VuiTypography sx={{ flex: 3 }} fontWeight="medium" variant="body2" color="text">
                        Total
                      </VuiTypography>
                      <VuiTypography sx={{
                        flex: 23
                      }} fontWeight="medium" variant="body2" color="white">
                        $105.95
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrderDetail2;

const styles = {
  wrapper: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  innerWrapper: {
    width: "100%",
    background: "#061A3C",
  },
  value: {
    color: "white",
  },
  btnWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    gap: 4,
  },
};
