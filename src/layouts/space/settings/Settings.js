import { Card, Divider, Grid } from "@mui/material";
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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SettingsForm from "./SettingsForm";
import AddPeople from "./AddPeople";
import SettingImages from "./SettingImages";
import SettingsHeader from "./SettingsHeader";
import PaymentMethods from "./PaymentMethods";
import OtherSettings from "./OtherSettings";

function Settings(props) {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid container>
          <SettingsHeader />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={5}>
              <SettingImages />
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
              <SettingsForm />
              <Grid container spacing={2}>
                <Grid item xs={12} xxl={8} >
                  <AddPeople />
                  <PaymentMethods />
                </Grid>
                <Grid item xs={12} xxl={4}>
                  <OtherSettings />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Settings;

const styles = {
  wrapper: {
    alignItems: "flex-start",
    display: "flex",
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
