/*
 * @2024 Digital Aid Seattle
 */
import { Container, Stack, Typography, useTheme } from '@mui/material'
import CardQuote from 'components/cards/CardQuote'
import CardRowContainer from 'components/cards/CardRowContainer'
import SectionContainer from 'components/layout/SectionContainer'
import { BlockComponent, withBasicLayout } from 'components/layouts'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Placeholder from '../assets/placeholder-person.png'

import { useFeature } from './api/FeatureService'

const LABELS = {
  impact_title: 'What people say about us'
}

const QUOTES = [
  {
    title: 'Inspirational',
    quote: 'Volunteering with DAS has been truly inspirational, as it’s shown me the profound impact we can make together.',
    avatar: Placeholder.src,
    person: 'Ella Grayson',
    role: 'Volunteer'
  },
  {
    title: 'Transformative',
    quote: 'The support from DAS has been transformative, helping us achieve goals we never thought possible.',
    avatar: Placeholder.src,
    person: 'Liam Mercer',
    role: 'Partner'
  },
  {
    title: 'Impactful',
    quote: 'My contributions to DAS have been incredibly impactful, directly fueling meaningful change in the nonprofit sector.',
    avatar: undefined,
    person: 'Bashir Muhammad',
    role: 'Partner'
  }
]

const SupportUsSection = ({ backgroundColor, children }) => (
  <SectionContainer backgroundColor={backgroundColor}>
    <Stack
      gap={{ xs: '64px', md: '80px' }}
      sx={{
        textAlign: 'center',
      }}
      maxWidth={'880px'}
    >
      {children}
    </Stack>
  </SectionContainer>
)

const SupportUsPage = () => {
  const theme = useTheme()
  const { data: supportUs } = useFeature('support-us');
  const router = useRouter();

  useEffect(() => {
    if (supportUs !== undefined && supportUs === false) {
      console.error(`Support Us feature not implemented.`);
      router.push('/404')
    }
  }, [supportUs, router])

  const WhatPeopleSaySection = ({ theme }) => (
    <SupportUsSection backgroundColor={theme.palette.background.default}>
      <Typography variant="headlineMedium" component="h2">
        {LABELS.impact_title}
      </Typography>
      <CardRowContainer>
        {QUOTES.map((info, idx) =>
          <CardQuote
            key={'q-' + idx}
            title={info.title}
            description={info.quote}
            avatar={info.avatar}
            person={info.person}
            role={info.role}
          />)}
      </CardRowContainer>
    </SupportUsSection>
  )

  return (
    <>
      <BlockComponent block={false}>
        <Container
          maxWidth={false}
          disableGutters
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* <SupportUsHeroSection />
          <DonateSection theme={theme} /> */}
          <WhatPeopleSaySection theme={theme} />
        </Container>
      </BlockComponent>
    </>
  )
}

export default withBasicLayout(SupportUsPage)
