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

import { useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// uuid is a library for generating unique id
import { v4 as uuidv4 } from "uuid";

// @mui material components
import { Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import Card from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiAvatar from "components/VuiAvatar";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

function Table({ columns, rows }) {
  const { light, grey } = colors;
  const { size, fontWeightMedium } = typography;
  const { borderWidth } = borders;

  const renderRows = rows.map((row, key) => {
    const rowKey = `row-${key}`;

    const tableRow = columns.map(({ name, align }) => {
      let template;

      if (Array.isArray(row[name])) {
        template = (
          <VuiBox
            key={uuidv4()}
            component="td"
            py={1}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${grey[600]}` : null}
          >
            <VuiBox display="flex" alignItems="center" py={0.5}>
              <VuiBox mr={2}>
                <VuiAvatar src={row[name][0]} name={row[name][1]} variant="rounded" size="sm" />
              </VuiBox>
              <VuiTypography
                variant="button"
                color="white"
                fontWeight="medium"
                sx={{ width: "max-content" }}
              >
                <span>{row[name][1]}</span>
                <VuiTypography variant="h6" sx={{ color: "text.main" }}>
                  {row[name][2]}
                </VuiTypography>
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        );
      } else {
        template = (
          <VuiBox
            key={uuidv4()}
            component="td"
            p={1}
            textAlign={align}
            borderBottom={row.hasBorder ? `${borderWidth[1]} solid ${grey[600]}` : null}
          >
            <VuiTypography
              variant="button"
              fontWeight="regular"
              color="white"
              sx={{ display: "inline-block", width: "max-content" }}
            >
              {row[name]}
            </VuiTypography>
          </VuiBox>
        );
      }

      return template;
    });

    return <TableRow key={rowKey}>{tableRow}</TableRow>;
  });

  return useMemo(
    () => (
      <MuiTable>
        <TableBody>{renderRows}</TableBody>
      </MuiTable>
    ),
    [columns, rows]
  );
}

// Setting default values for the props of Table
Table.defaultProps = {
  columns: [],
  rows: [{}],
};

// Typechecking props for the Table
Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
};

export default Table;
