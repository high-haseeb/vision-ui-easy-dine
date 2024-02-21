import React from "react";
import { Card } from "@mui/material";
import VuiTypography from "components/VuiTypography";
import breakpoints from "assets/theme/base/breakpoints";
import VuiButton from "components/VuiButton";
import PropTypes from "prop-types";
import VuiBox from "components/VuiBox";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const TableOrder = (props) => {
  const { name, image, time, description } = props;
  const { values } = breakpoints;
  const history = useHistory();

  const handleClick = () => {
    history.push("/dashboards/order/23423");
  };

  return (
    <Card style={styles.outerWrapper} onClick={handleClick}>
      <div style={styles.imgWrapper}>
        <img alt="" style={styles.img} src={image} />
      </div>
      <div style={styles.wrapper}>
        <VuiTypography style={{ fontSize: 10 }} fontWeight="medium" color="text">
          {time}
        </VuiTypography>
        <VuiBox sx={styles.nameWrapper}>
          <VuiTypography style={{ fontSize: 18 }} fontWeight="bold" color="white">
            {name}
          </VuiTypography>
          <VuiBox sx={styles.status}>
            <VuiTypography style={{ fontSize: 10 }} fontWeight="bold" color="white">
              Bezahlt
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiTypography sx={{ maxWidth: "90%" }} variant="body2" fontWeight="regular" color="text">
          {description}
        </VuiTypography>
        <VuiBox display="flex" sx={{ justifyContent: "space-evenly", alignItems: "baseline" }}>
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
            See
          </VuiButton>
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
            Verwalten
          </VuiButton>
        </VuiBox>
      </div>
    </Card>
  );
};

export default TableOrder;

TableOrder.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

const styles = {
  outerWrapper: {
    height: "100%",
    padding: 0,
    paddingBottom: 20,
    background: "#061A3C",
    borderRadius: 10,
    cursor: "pointer",
  },
  img: {
    borderRadius: 10,
    maxWidth: "100%",
    width: "100%",
  },
  wrapper: {
    background: "transparent",
    marginTop: 10,
    paddingLeft: 10,
  },
  viewAll: {
    marginTop: 20,
    paddingLeft: 14,
    paddingRight: 14,
  },
  imgWrapper: {
    position: "relative",
    width: "100%",
  },
  nameWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  status: {
    padding: "1px 5px",
    borderRadius: "10px",
    background: "green",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
