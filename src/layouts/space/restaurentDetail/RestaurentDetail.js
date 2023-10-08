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
import kalVisualsSquare from "assets/images/message-card-image.png";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Calendar from "examples/Calendar";
import MessageCard from "examples/Cards/MessageCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import Footer from "examples/Footer";
// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import InvoicesList from "examples/Lists/InvoicesList";
import RankingsList from "examples/Lists/RankingsList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Welcome from "layouts/dashboards/crm/components/Welcome";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";
// Data
import invoicesListData from "layouts/dashboards/crm/data/invoicesListData";
import rankingsListData from "layouts/dashboards/crm/data/rankingsListData";
import { useMemo } from "react";
import {
  lineChartDataCRM1,
  lineChartDataCRM2,
  lineChartOptionsCRM1,
  lineChartOptionsCRM2,
} from "./data";
import { Card } from "@mui/material";
import Overview from "assets/theme/components/card/Dashboard/Overview";
import {
  lineChartOptionsProfile2,
  lineChartOptionsProfile1,
} from "layouts/pages/profile/profile-overview/data/lineChart";
import {
  lineChartDataProfile1,
  lineChartDataProfile2,
} from "layouts/pages/profile/profile-overview/data/lineChart";
import Overview2 from "assets/theme/components/card/Dashboard/Overview2";
import { timelineDataLight } from "layouts/pages/projects/timeline/data/timelineData";
import TimelineItem from "examples/Timeline/TimelineItem";
import TimelineList from "examples/Timeline/TimelineList";
import TodoList from "layouts/pages/projects/general/components/TodoList";
import Restaurent2 from "assets/theme/components/card/ResstaurentCard/Restaurent2";

function RestaurentDetail() {
  const { transactionsData, revenueData } = rankingsListData;

  const renderTimelineItemsLight = timelineDataLight
    .slice(0, 3)
    .map(({ color, icon, title, dateTime, description, badges, lastItem }) => (
      <TimelineItem
        key={title + color}
        color={color}
        icon={icon}
        title={title}
        dateTime={dateTime}
        description={description}
        badges={badges}
        lastItem={lastItem}
      />
    ));

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <MiniGradientLineChart
                      title="visitors"
                      description={
                        <VuiTypography variant="lg" color="white" fontWeight="bold">
                          5,927{" "}
                          <VuiTypography variant="button" color="success" fontWeight="bold">
                            +55%
                          </VuiTypography>
                        </VuiTypography>
                      }
                      chart={
                        <BasicLineChart
                          lineChartData={lineChartDataCRM1}
                          lineChartOptions={lineChartOptionsCRM1}
                        />
                      }
                    />
                    <br />
                    <MiniGradientLineChart
                      title="Today"
                      description={
                        <VuiTypography variant="lg" color="white" fontWeight="bold">
                          5,927{" "}
                          <VuiTypography variant="button" color="success" fontWeight="bold">
                            +55%
                          </VuiTypography>
                        </VuiTypography>
                      }
                      chart={
                        <BasicLineChart
                          lineChartData={lineChartDataCRM1}
                          lineChartOptions={lineChartOptionsCRM1}
                        />
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    style={{ display: "flex", flexDirection: "column", gap: 6 }}
                  >
                    <Overview
                      value="20%"
                      title="Efficiency"
                      lineChartOptions={lineChartOptionsProfile1}
                      lineChartData={lineChartDataProfile1}
                    />
                    <Overview
                      value="22.10"
                      title="Nächster Arbeitstag"
                      lineChartOptions={lineChartOptionsProfile2}
                      lineChartData={lineChartDataProfile2}
                    />
                    <Overview
                      value="Aktiv"
                      title="Efficiency"
                      lineChartOptions={lineChartOptionsProfile1}
                      lineChartData={lineChartDataProfile1}
                    />
                    <Overview2 title="Ferien" value="23.10.2023" />
                    <Overview2 title="Überzeit" value="-20.23" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* <Card> */}
              <TimelineList
                style={{ maxHeight: 585, overflow: "auto" }}
                title="Timeline with dotted line"
              >
                {renderTimelineItemsLight}
              </TimelineList>
              {/* </Card> */}
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={5}>
              <Grid item xs={12}>
                <VuiBox mt={3}>
                  {useMemo(
                    () => (
                      <Calendar
                        header={{ title: "calendar", date: "Monday, 2021" }}
                        headerToolbar={false}
                        initialView="dayGridMonth"
                        initialDate="2021-08-10"
                        events={calendarEventsData}
                        selectable
                        editable
                      />
                    ),
                    [calendarEventsData]
                  )}
                </VuiBox>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid item xs={12}>
                <VuiBox my={3}>
                  <TodoList />
                </VuiBox>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
              <Grid container pt={3} spacing={3}>
                <Grid item xs={12} md={6} lg={12}>
                  <MessageCard
                    image={kalVisualsSquare}
                    text={
                      <>
                        Today is Arthur's birthday.
                        <br /> Wish her the best of luck!
                      </>
                    }
                    button={{ color: "white", text: "send message" }}
                    action={{
                      type: "internal",
                      route: "/dashboards/crm",
                      color: "info",
                      label: "send message",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container pt={3} spacing={3}>
                <Grid item xs={12} md={6} lg={12}>
                  <Restaurent2 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RestaurentDetail;
