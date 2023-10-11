import VuiBox from "components/VuiBox";
import breakpoints from "assets/theme/base/breakpoints";
import VuiTypography from "components/VuiTypography";
import React from "react";
import VuiButton from "components/VuiButton";
import goBack from "../../../assets/images/icons/goBack.png";
import { Card, Grid } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FormsHeader = () => {
  const { values } = breakpoints;
  const history = useHistory();

  const handleClick = () => {
    history.push("/dashboards/client-order/2342424");
  };

  return (
    <Grid item xs={12}>
      <VuiBox mb={1} p={1} sx={styles.wrapper}>
        <VuiTypography
          variant={window.innerWidth < values.sm ? "h3" : "h2"}
          textTransform="capitalize"
          fontWeight="bold"
          color="white"
          sx={{ fontSize: 30 }}
        >
          Make the changes below
        </VuiTypography>
        <VuiButton
          component="a"
          href={"/"}
          rel="noreferrer"
          color={"white"}
          variant="outlined"
          // height="35px"
          size="small"
          style={{ display: "flex", gap: 4, fontSize: 10 }}
        >
          <img src={goBack} alt="" />
          go back to home
        </VuiButton>
      </VuiBox>
      <VuiBox mb={3} p={1} sx={styles.wrapper}>
        <VuiTypography variant={"h6"} fontWeight="normal" color="text">
          We’re constantly trying to express ourselves and actualize our dreams. If you have the
          opportunity to play.
        </VuiTypography>
        <Card style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <VuiButton
            component="button"
            // href={"/"}
            color="info"
            sx={{
              backgroundColor: "secondary.main",
              boxShadow: "0px 18px 24px 0px#0075ff",
              paddingX: 8,
              paddingY: 1,
            }}
            rel="noreferrer"
            // height="35px"
            size="medium"
            onClick={handleClick}
          >
            <VuiTypography color="white" style={{ fontSize: 10 }} fontWeight="bold">
              Editor
            </VuiTypography>
          </VuiButton>
          <VuiButton
            component="button"
            // href={"/"}
            color="info"
            sx={{
              backgroundColor: "error.dark",
              boxShadow: "0px 18px 24px 0px#D30000",
              paddingX: 8,
              paddingY: 1,
            }}
            rel="noreferrer"
            size="medium"
            onClick={handleClick}
          >
            <VuiTypography color="white" style={{ fontSize: 10 }} fontWeight="bold">
              Editor
            </VuiTypography>
          </VuiButton>
          <VuiButton
            component="button"
            // href={"/"}
            color="info"
            sx={{
              backgroundColor: "success.dark",
              boxShadow: "0px 18px 24px 0px#04B816",
              paddingX: 8,
              paddingY: 1,
            }}
            rel="noreferrer"
            // height="35px"
            size="medium"
            onClick={handleClick}
          >
            <VuiTypography color="white" style={{ fontSize: 10 }} fontWeight="bold">
              Editor
            </VuiTypography>
          </VuiButton>
        </Card>
      </VuiBox>
    </Grid>
  );
};

export default FormsHeader;

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
