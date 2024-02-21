import { Card } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import VuiTypography from "components/VuiTypography";
import hookah from "assets/images/restaurent/hookah.png";
import appleIcon from "assets/images/foods/apple.png";
import grapesIcon from "assets/images/foods/grapes.png";
import redBullIcon from "assets/images/foods/redBull.png";

import React from "react";
import VuiSelect from "components/VuiSelect";

const ProductFormImages = () => {
  return (
    <>
      <Card>
        <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 18 }}>
          Restaurant Image
        </VuiTypography>
        <VuiBox mt={2}>
          <img src={hookah} alt="" style={{ width: "100%" }} />
        </VuiBox>
        <VuiBox display="flex" sx={{ gap: 3 }} mt={2}>
          <VuiButton sx={{ paddingX: 5, paddingY: 0 }}>EDIT</VuiButton>
          <VuiButton sx={{ paddingX: 5, paddingY: 0 }} color="info">
            REMOVE
          </VuiButton>
        </VuiBox>
      </Card>
      <Card style={{ marginTop: 10 }}>
        <VuiTypography sx={{ fontSize: 18 }} color="white" fontWeight="bold">
          Zutaten
        </VuiTypography>
        <VuiBox mt={3} sx={{ zIndex: 10 }}>
          <VuiTypography display="block" mb={1} color="text" fontWeight="bold" variant="caption">
            Ingredients
          </VuiTypography>
          <VuiSelect
            defaultValue={[
              { value: "Apple", label: "Apple", icon: appleIcon },
              { value: "Grapes", label: "Grapes", icon: grapesIcon },
              { value: "Red Bull", label: "Red Bull", icon: redBullIcon },
            ]}
            options={[
              { value: "Oranges", label: "Oranges", icon: appleIcon },
              { value: "Melon", label: "Melon", icon: grapesIcon },
              { value: "Banana", label: "Banana", icon: redBullIcon },
            ]}
            size="large"
            isMulti
          />
        </VuiBox>
        <VuiBox mt={3} lineHeight={0} display="inline-block">
          <VuiTypography display="block" mb={1} color="text" fontWeight="bold" variant="caption">
            Ingredients
          </VuiTypography>
          <VuiSelect
            defaultValue={[
              { value: "Apple", label: "Apple", icon: appleIcon },
              { value: "Grapes", label: "Grapes", icon: grapesIcon },
              { value: "Red Bull", label: "Red Bull", icon: redBullIcon },
            ]}
            options={[
              { value: "Oranges", label: "Oranges", icon: appleIcon },
              { value: "Melon", label: "Melon", icon: grapesIcon },
              { value: "Banana", label: "Banana", icon: redBullIcon },
            ]}
            size="large"
            isMulti
          />
        </VuiBox>
      </Card>
    </>
  );
};

export default ProductFormImages;
