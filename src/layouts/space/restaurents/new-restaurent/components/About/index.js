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

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiSelect from "components/VuiSelect";
import VuiTypography from "components/VuiTypography";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";
import Days from "layouts/space/settings/Days";

function About() {
  return (
    <VuiBox>
      <VuiBox sx={{ textAlign: "center" }}>
        <VuiTypography variant="h5" color="white">
          Daten zu deinem Restaurant
        </VuiTypography>
        <VuiTypography variant="body2" color="text">
          One thing I love about the later sunsets is the chance to go for a walk through the neighborhood woods before dinner
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormField type="text" label="Describe your restaurant" placeholder="EasyDine Lounge" />
          </Grid>
          <Grid item xs={12} md={6} display={"flex"} sx={{ gap: 2 }}>
            <Grid item xs={6} display="flex" sx={{ alignItems: "center", marginTop: 3, gap: 2 }}>
              <div style={{ flex: 1 }}>
                <VuiSelect
                  placeholder="Time"
                  options={[
                    { value: "08:15", label: "08:15" },
                    { value: "08:14", label: "08:14" },
                  ]}
                />
              </div>
              <div style={{ flex: 1 }}>
                <VuiSelect
                  placeholder="Time"
                  options={[
                    { value: "08:15", label: "08:15" },
                    { value: "08:14", label: "08:14" },
                  ]}
                />
              </div>
            </Grid>
            <Grid item xs={6} display="flex">
              <Days />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <FormField type="email" label="Email" placeholder="test@gmail.com" />
          </Grid>
          <Grid item xs={6}>
            <FormField type="text" label="Country" placeholder="Sitzerland" />
          </Grid>
          <Grid item xs={12} md={3}>
            <VuiTypography
              component="label"
              variant="caption"
              color="white"
              fontWeight="bold"
              textTransform="capitalize"
            >
              Zahlungsanbieter
            </VuiTypography>
            <VuiSelect
              placeholder="Time"
              options={[
                { value: "08:15", label: "08:15" },
                { value: "08:14", label: "08:14" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <VuiTypography
              component="label"
              variant="caption"
              color="white"
              fontWeight="bold"
              textTransform="capitalize"
            >
              Währung
            </VuiTypography>
            <VuiSelect
              placeholder="Time"
              options={[
                { value: "08:15", label: "08:15" },
                { value: "08:14", label: "08:14" },
              ]}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox >
  );
}

export default About;
