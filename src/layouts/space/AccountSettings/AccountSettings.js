import { Button, Card, Grid } from "@mui/material";
import breakpoints from "assets/theme/base/breakpoints";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState, Component } from "react";
import HorizontalMenu from "./HorizontalMenu";
import './account-settings.css'

import nudlen from 'assets/images/foods/nudlen.png'
import iceTea from 'assets/images/foods/iceTea.png'
import fish from 'assets/images/foods/fish.png'
import salat from 'assets/images/foods/salat.png'
import fanta from 'assets/images/foods/fanta.png'
import FoodCard from "./FoodCard";
import VuiInput from "components/VuiInput";
import RestaurentInfo from "./RestaurentInfo";
import Filter from "./Filter";

class AccountSettings extends Component {

  constructor(props) {
    super(props);
    this.state = {
        foods: []
    };
  }

  componentDidMount() {

    fetch(`http://localhost:8095/menuitems`)
        .then(response => response.json())
        .then(data => this.setState({foods: data}));

  }

  render() {

      const {foods} = this.state;

      return (
      <DashboardLayout>
        <DashboardNavbar />
        <VuiBox py={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <VuiBox display="flex" sx={{ justifyContent: "space-between" }}>
                <HorizontalMenu />
              </VuiBox>
              <Grid container spacing={2} mt={2}>
                {foods.map((food, index) => {
                  return (
                    <Grid key={index} item xs={12} md={4} xxl={3}>
                      <FoodCard {...food} />
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} mt={8}>
              <VuiInput
                placeholder="Name, Artikelnummer,datum"
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

              <RestaurentInfo />
              <Card sx={{ marginY: 3 }}>
                <Button
                  component="button"
                  color="info"
                  sx={{
                    backgroundColor: "secondary.main",
                    boxShadow: "0px 18px 24px 0px#0075ff",
                    // padding: "12px 50px !important",
                    width: "100%",
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
                  Produkt Hinzufügen
                </Button>
              </Card>
              <Filter />
            </Grid>
          </Grid>
        </VuiBox>
        <Footer />
      </DashboardLayout>
    );
  }
}

export default AccountSettings;
