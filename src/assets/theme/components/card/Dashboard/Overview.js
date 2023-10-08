import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';
import VuiBox from 'components/VuiBox'
import VuiTypography from 'components/VuiTypography';

import BasicLineChart from 'examples/Charts/LineCharts/BasicLineChart/index';
import React from 'react'

const Overview = ({ title, value, lineChartData, lineChartOptions }) => {

    const { gradients, info } = colors;
    const { cardContent } = gradients;
    return (
        <VuiBox
            display='flex'
            p='12px 18px'
            alignItems='center'
            sx={{
                background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px'
            }}>
            <VuiBox display='flex' flexDirection='column' mr='auto'>
                <VuiTypography color='text' variant='caption' fontWeight='normal' mb='2px'>
                    {title}
                </VuiTypography>
                <VuiTypography
                    color='white'
                    variant='h4'
                    fontWeight='bold'
                    sx={({ breakpoints }) => ({
                        [breakpoints.only('xl')]: {
                            fontSize: '20px'
                        }
                    })}>
                    {value}
                </VuiTypography>
            </VuiBox>
            <VuiBox sx={{ maxHeight: '75px' }}>
                <BasicLineChart
                    lineChartData={lineChartData}
                    lineChartOptions={lineChartOptions}
                />
            </VuiBox>
        </VuiBox>
    )
}

export default Overview