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

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiEditor from "components/VuiEditor";
import VuiSelect from "components/VuiSelect";

// NewProduct page components
import FormField from "layouts/ecommerce/products/new-product/components/FormField";

function RestaurentInfo() {
  const [editorValue, setEditorValue] = useState(
    "<p>Some initial <strong>bold</strong> text</p><br><br><br>"
  );

  return (
    <VuiBox>
      <VuiBox sx={{ textAlign: "center" }}>
        <VuiTypography variant="h5" sx={{ fontSize: 18 }} color="white">
          Are you living in a nice area?
        </VuiTypography>
        <VuiTypography variant="body2" color="text">
          One thing I love about the later sunsets is the chance to go for a walk through the neighborhood woods before dinner
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <FormField type="text" label="Name des Gastrobetriebts" placeholder="eg. Off-White" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Address" placeholder="eg. 42" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="City" placeholder="eg. 42" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField type="text" label="Geschäftsführer" placeholder="eg. 42" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="State" placeholder="eg. 42" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormField type="text" label="ZIP" placeholder="eg. 42" />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default RestaurentInfo;
