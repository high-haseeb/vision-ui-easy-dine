/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiBadgeDot from "components/VuiBadgeDot";

// Images
import team1 from "assets/images/avatar2.png";
import team2 from "assets/images/avatar3.png";
import team3 from "assets/images/avatar4.png";
import team4 from "assets/images/avatar5.png";
import team5 from "assets/images/avatar6.png";
import team6 from "assets/images/avatar7.png";
import masterCard from "assets/images/icons/master.png";
import VuiBadge from "components/VuiBadge";
import VuiTypography from "components/VuiTypography";

export default {
  columns: [
    { name: "name", align: "left" },
    { name: "payment", align: "left" },
    { name: "isPaid", align: "left" },
    { name: "time", align: "center" },
  ],

  rows: [
    {
      name: [team2, "Tischnummer: 22", "Rechnung Ansehen"],
      payment: (
        <VuiBox>
          <VuiTypography variant="h6" color="white">
            Mastercard
          </VuiTypography>
          <VuiTypography
            sx={{ display: "flex", alignItems: "center", color: "text.main" }}
            variant="h6"
          >
            <img src={masterCard} />
            0303xxxx
          </VuiTypography>
        </VuiBox>
      ),
      isPaid: (
        <VuiBadge color="success" size="sm" badgeContent={"Bezahlt"} container variant="basic" />
      ),
      time: "14.06.23 / 14:32",
    },
    {
      name: [team2, "Tischnummer: 22", "Rechnung Ansehen"],
      payment: (
        <VuiBox>
          <VuiTypography variant="h6" color="white">
            Cash
          </VuiTypography>
          <VuiTypography
            sx={{ display: "flex", alignItems: "center", color: "text.main" }}
            variant="h6"
          >
            Money
          </VuiTypography>
        </VuiBox>
      ),
      isPaid: (
        <VuiBadge color="success" size="sm" badgeContent={"Bezahlt"} container variant="basic" />
      ),
      time: "14.06.23 / 14:32",
    },
    {
      name: [team2, "Tischnummer: 22", "Rechnung Ansehen"],
      payment: (
        <VuiBox>
          <VuiTypography variant="h6" color="white">
            Cash
          </VuiTypography>
          <VuiTypography
            sx={{ display: "flex", alignItems: "center", color: "text.main" }}
            variant="h6"
          >
            Project
          </VuiTypography>
        </VuiBox>
      ),
      isPaid: (
        <VuiBadge color="success" size="sm" badgeContent={"Bezahlt"} container variant="basic" />
      ),
      time: "14.06.23 / 14:32",
    },
    {
      name: [team2, "Tischnummer: 22", "Rechnung Ansehen"],
      payment: (
        <VuiBox>
          <VuiTypography variant="h6" color="white">
            Twint
          </VuiTypography>
          <VuiTypography
            sx={{ display: "flex", alignItems: "center", color: "text.main" }}
            variant="h6"
          >
            078452xxxx
          </VuiTypography>
        </VuiBox>
      ),
      isPaid: (
        <VuiBadge color="error" size="sm" badgeContent={"Bezahlt"} container variant="basic" />
      ),
      time: "14.06.23 / 14:32",
    },
    {
      name: [team2, "Tischnummer: 22", "Rechnung Ansehen"],
      payment: (
        <VuiBox>
          <VuiTypography variant="h6" color="white">
            Mastercard
          </VuiTypography>
          <VuiTypography
            sx={{ display: "flex", alignItems: "center", color: "text.main" }}
            variant="h6"
          >
            <img src={masterCard} />
            0303xxxx
          </VuiTypography>
        </VuiBox>
      ),
      isPaid: (
        <VuiBadge color="success" size="sm" badgeContent={"Bezahlt"} container variant="basic" />
      ),
      time: "14.06.23 / 14:32",
    },
  ],
};
