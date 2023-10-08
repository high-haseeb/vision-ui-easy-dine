import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';
import VuiBox from 'components/VuiBox'
import VuiTypography from 'components/VuiTypography';
import WhiteLightning from 'assets/images/shapes/white-lightning.svg';
import React from 'react'

const Overview2 = ({ title, value }) => {

    const { gradients, info } = colors;
    const { cardContent } = gradients;
    return (
        <VuiBox
            display='flex'
            p='12px 18px'
            alignItems='center'
            sx={{
                background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
                borderRadius: '20px',
                minHeight: '110px'
            }}>
            <VuiBox display='flex' flexDirection='column' mr='auto'>
                <VuiTypography color='text' variant='caption' fontWeight='medium' mb='2px'>
                    title
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
            <VuiBox
                display='flex'
                justifyContent='center'
                alignItems='center'
                sx={{
                    background: info.main,
                    borderRadius: '12px',
                    width: '56px',
                    height: '56px'
                }}>
                <VuiBox component='img' src={WhiteLightning} />
            </VuiBox>
        </VuiBox>
    )
}

export default Overview2