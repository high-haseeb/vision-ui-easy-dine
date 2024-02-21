import React from "react";
import { Card } from "@mui/material";
import VuiTypography from "components/VuiTypography";
import breakpoints from "assets/theme/base/breakpoints";
import VuiButton from "components/VuiButton";
import PropTypes from "prop-types";
import VuiAvatar from "components/VuiAvatar";

// Images
import team1 from "assets/images/avatar1.png";
import team2 from "assets/images/avatar2.png";
import team3 from "assets/images/avatar3.png";
import team4 from "assets/images/avatar4.png";
import team5 from "assets/images/avatar5.png";
import VuiBox from "components/VuiBox";

const members = [team1, team2, team3, team4, team5];

const Restaurent1 = (props) => {
  const { name, image, project, description, isOnline } = props;
  const { values } = breakpoints;

  const renderMembers = members.map((member, key) => {
    const memberKey = `member-${key}`;

    return (
      <VuiAvatar
        key={memberKey}
        src={member}
        alt="member profile"
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          cursor: "pointer",
          position: "relative",

          "&:not(:first-of-type)": {
            ml: -1.25,
          },

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    );
  });

  return (
    <Card style={styles.outerWrapper}>
      <div style={styles.imgWrapper}>
        <img alt="" style={styles.img} src={image} />
        <VuiBox
          sx={{
            ...styles.status,
            backgroundColor: isOnline ? "success.medium" : "warning.medium",
          }}
        >
          <VuiTypography style={{ fontSize: 18 }} fontWeight="bold" color="white">
            {isOnline ? "Online" : "Offline"}
          </VuiTypography>
        </VuiBox>
      </div>
      <div style={styles.wrapper}>
        <VuiTypography style={{ fontSize: 10 }} fontWeight="medium" color="text">
          {project}
        </VuiTypography>
        <VuiTypography style={{ fontSize: 18 }} fontWeight="bold" color="white">
          {name}
        </VuiTypography>
        <VuiTypography
          style={{ maxWidth: "80%" }}
          variant="body2"
          fontWeight="regular"
          color="text"
        >
          {description}
        </VuiTypography>
        <VuiBox display="flex" style={{ justifyContent: "space-between", alignItems: "baseline" }}>
          <VuiButton
            component="a"
            href={"/"}
            target="_blank"
            rel="noreferrer"
            color={"white"}
            variant="outlined"
            width="100%"
            height="35px"
            size="small"
            style={styles.viewAll}
          >
            View All
          </VuiButton>

          {members.length > -1 ? <VuiBox display="flex">{renderMembers}</VuiBox> : null}
        </VuiBox>
      </div>
    </Card>
  );
};

export default Restaurent1;

Restaurent1.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const styles = {
  outerWrapper: {
    height: "100%",
    padding: 0,
    paddingBottom: 20,
    background: "#061A3C",
    borderRadius: 10,
  },
  img: {
    borderRadius: 10,
    maxWidth: "100%",
  },
  wrapper: {
    background: "transparent",
    marginTop: 10,
    paddingLeft: 10,
  },
  viewAll: {
    marginTop: 20,
  },
  imgWrapper: {
    position: "relative",
  },
  status: {
    position: "absolute",
    top: 20,
    right: 40,
    padding: "1px 15px",
    borderRadius: "41px",
  },
};
