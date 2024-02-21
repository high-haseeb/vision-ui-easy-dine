import { Card, Grid } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import Restaurent1 from "assets/theme/components/card/ResstaurentCard/Restaurent1";
import TableOrder from "assets/theme/components/card/ResstaurentCard/TableOrder";
import VuiBox from "components/VuiBox";
import VuiSwitch from "components/VuiSwitch";
import VuiTypography from "components/VuiTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

const restaurents = [
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
  {
    name: "Tischbestellung: 125",
    time: "10.09.2023 / 13:20",
    description: "Music is something that every person has his or her own specific opinion about.",
    image: require("assets/images/restaurent/tableOrder.png"),
  },
];

function Restaurents(props) {
  const { values } = breakpoints;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid container>
          <Grid item xs={12}>
            <VuiBox mb={3} p={1}>
              <VuiTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
                color="white"
              >
                Tischbestellungen
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Card
            style={{
              width: "100%",
              background: "#061A3C",
            }}
          >
            <VuiBox display="flex" sx={{ gap: 2, alignItems: "center" }}>
              <VuiTypography fontWeight="bold" color="white" style={{ fontSize: 18 }}>
                Tischbestellungen
              </VuiTypography>
              <VuiSwitch color="info" />
            </VuiBox>
            <Grid container spacing={4} style={{ marginTop: 6 }}>
              {restaurents.map((tableOrder, key) => {
                return (
                  <Grid key={key} item xs={12} md={4} xl={3}>
                    <TableOrder {...tableOrder} />
                  </Grid>
                );
              })}
            </Grid>
          </Card>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Restaurents;
