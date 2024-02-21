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
import VuiTypography from "components/VuiTypography";
import settings from 'assets/images/icons/Setting.png'
import builder from 'assets/images/icons/builder.png'

function Logos() {
  return (
    <VuiBox>
      <VuiBox sx={{ textAlign: "center" }}>
        <VuiTypography variant="h5" color="white">
          What are you doing? (checkboxes)
        </VuiTypography>
        <VuiTypography variant="body2" color="text">
          Give us more details about you. What do you enjoy doing in your spare time?
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={6} display="flex" sx={({ breakpoints }) => ({
        justifyContent: "space-between", paddingX: 20, [breakpoints.down('md')]: {
          flexDirection: "column"
        }
      })}>
        <VuiBox mb={1} ml={0.5} lineHeight={0} display="flex" sx={{ flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}>
          <VuiBox sx={{ border: "1px solid #0075ff", borderRadius: "20px !important", padding: "35px !important", }}>
            <img src={settings} alt="" />
          </VuiBox>
          <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
            Product Image
          </VuiTypography>
        </VuiBox> <VuiBox mb={1} ml={0.5} lineHeight={0} display="flex" sx={{ flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}>
          <VuiBox sx={{ border: "1px solid #0075ff", borderRadius: "20px !important", padding: "35px !important", }}>
            <img src={builder} alt="" />
          </VuiBox>
          <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
            Product Image
          </VuiTypography>
        </VuiBox> <VuiBox mb={1} ml={0.5} lineHeight={0} display="flex" sx={{ flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}>
          <VuiBox sx={{ border: "1px solid #0075ff", borderRadius: "20px !important", padding: "35px !important", }}>
            <img src={builder} alt="" />
          </VuiBox>
          <VuiTypography component="label" variant="caption" fontWeight="bold" color="white">
            Product Image
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </VuiBox>
  );
}

export default Logos;
