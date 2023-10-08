import { Card, Divider, Grid } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import Restaurent1 from "assets/theme/components/card/ResstaurentCard/Restaurent1";
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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function OrderDetail(props) {
  const { values } = breakpoints;
  const history = useHistory();

  const handleClick = () => {
    history.push('/dashboards/client-order/2342424')
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid container >
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
          <VuiBox mx="auto" display="flex" justifyContent="center" maxWidth="1100px">
            <Card sx={styles.innerWrapper}>
              <VuiBox display="flex" sx={{ gap: 2, alignItems: "center" }}>
                <VuiTypography fontWeight="bold" color="white" style={{ fontSize: 22 }}>
                  Tischbestellungen 125
                </VuiTypography>
                <VuiBox>
                  <VuiTypography fontWeight="normal" color="text" variant="body2">
                    Order no. <span style={styles.value}>241342</span> from{" "}
                    <span style={styles.value}>10.09.2023 / 13:43</span>
                  </VuiTypography>
                  <VuiTypography fontWeight="normal" color="text" variant="body2">
                    Total: 213.30 CHF
                  </VuiTypography>
                </VuiBox>
                <VuiBox style={styles.btnWrapper}>
                  <VuiButton
                    component="button"
                    // href={"/"}
                    color="info"
                    sx={{ backgroundColor: "info.main", boxShadow: "0px 4px 4px 0px #0075ff" }}
                    rel="noreferrer"
                    // height="35px"
                    size="large"
                    onClick={handleClick}
                  >
                    <VuiTypography color="white" style={{ fontSize: 10 }} fontWeight="bold">
                      Editor
                    </VuiTypography>
                  </VuiButton>
                  <VuiButton
                    component="a"
                    href={"/"}
                    color="error"
                    sx={{ backgroundColor: "error.medium", boxShadow: "0px 4px 4px 0px #EF0000" }}
                    rel="noreferrer"
                    // height="35px"
                    size="large"
                  >
                    <VuiTypography color="white" style={{ fontSize: 10 }} fontWeight="bold">
                      Editor
                    </VuiTypography>
                  </VuiButton>
                  <VuiButton
                    component="a"
                    href={"/"}
                    color="info"
                    sx={{ backgroundColor: "success.medium", boxShadow: "0px 4px 4px 0px #4CD964" }}
                    rel="noreferrer"
                    // height="35px"
                    size="large"
                  >
                    <VuiTypography color="white" style={{ fontSize: 10 }} fontWeight="bold">
                      Editor
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
            </Card>
          </VuiBox>
        </Grid>
      </VuiBox >
      <Footer />
    </DashboardLayout >
  );
}

export default OrderDetail;

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
