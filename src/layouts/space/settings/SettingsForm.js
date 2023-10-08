import { Card, Grid } from "@mui/material";
import VuiTypography from "components/VuiTypography";
import FormField from "layouts/pages/account/components/FormField";
import React from "react";
import TextAreaInput from "./TextAreaInput";
import VuiBox from "components/VuiBox";
import VuiSelect from "components/VuiSelect";
import Days from "./Days";
import VuiSwitch from "components/VuiSwitch";
import VuiEditor from "components/VuiEditor";

const SettingsForm = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <VuiTypography color="white" fontWeight="bold" sx={{ fontSize: 18 }}>
            Restaurant information
          </VuiTypography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormField label="Restaurent Name" placeholder="Pasha Lounge" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormField label="Address" placeholder="Address" />
            </Grid>
            <Grid item xs={12} md={6} display="flex" sx={{ flexDirection: "column", gap: 4 }}>
              <VuiTypography
                component="label"
                variant="caption"
                color="white"
                fontWeight="bold"
                textTransform="capitalize"
              >
                Öffnungszeiten
              </VuiTypography>
              <VuiEditor />

            </Grid>
            <Grid item xs={12} md={6}>
              <VuiBox>
                <Grid container spacing={2}>
                  <Grid item xs={12} xxl={6} sx={{ display: "flex", flexDirection: "column" }}>
                    <VuiTypography
                      component="label"
                      variant="caption"
                      color="white"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      Öffnungszeiten
                    </VuiTypography>
                    <div style={{ display: "flex", flex: 1, marginTop: 10, gap: 2 }}>
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
                    </div>
                  </Grid>
                  <Grid item xs={12} xxl={6}>
                    <Days />
                  </Grid>
                  <Grid item xs={12} xxl={6} display={"flex"} sx={({ breakpoints }) => ({
                    gap: 2,
                    [breakpoints.up('xxl')]: {
                      flexDirection: "column"
                    }
                  })}>
                    <VuiBox lineHeight={1} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                      <VuiSwitch color="info" />
                      <VuiTypography color="white" variant="h6">
                        Nicht Verfügbar
                      </VuiTypography>
                    </VuiBox>
                    <VuiBox lineHeight={1} display="flex" sx={{ alignItems: "center", gap: 2 }}>
                      <VuiSwitch color="info" />
                      <VuiTypography color="white" variant="h6">
                        Rabatt in %
                      </VuiTypography>
                    </VuiBox>
                  </Grid>
                  <Grid item xs={12} xxl={6} display="flex" sx={{ gap: 2, flexDirection: "column" }}>
                    <VuiSelect
                      placeholder="23/10/2023 | 14.30"
                      options={[
                        { value: "08:15", label: "08:15" },
                        { value: "08:14", label: "08:14" },
                      ]}
                    />
                    <VuiSelect
                      placeholder="0%"
                      options={[
                        { value: "08:15", label: "08:15" },
                        { value: "08:14", label: "08:14" },
                      ]}
                    />
                  </Grid>
                </Grid>
              </VuiBox>
            </Grid>

          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SettingsForm;
