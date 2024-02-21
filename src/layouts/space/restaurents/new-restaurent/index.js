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
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React example components
import Footer from "examples/Footer";

import PageLayout from "examples/LayoutContainers/PageLayout";
import RestaurentInfo from "./components/RestaurentInfo";
import Logos from "./components/Logos";
import About from "./components/About";

function getSteps() {
  return ["1. Product Info", "2. Media", "3. Social",];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <RestaurentInfo />;
    case 1:
      return <Logos />;
    case 2:
      return <About />;
      return null;
  }
}

function NewRestaurent() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const isLastStep = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  return (
    <PageLayout>
      <VuiBox mt={1} mb={20}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Card sx={{ overflow: "visible" }}>
              <VuiBox p={2}>
                <VuiBox>
                  {getStepContent(activeStep)}
                  <VuiBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <VuiBox />
                    ) : (
                      <VuiButton variant="gradient" color="light" onClick={handleBack}>
                        back
                      </VuiButton>
                    )}
                    <VuiButton
                      variant="contained"
                      color="info"
                      onClick={!isLastStep ? handleNext : undefined}
                    >
                      {isLastStep ? "send" : "next"}
                    </VuiButton>
                  </VuiBox>
                </VuiBox>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </PageLayout>
  );
}

export default NewRestaurent;
