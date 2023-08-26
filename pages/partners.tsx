import {
  AccountBalanceOutlined,
  AdminPanelSettingsOutlined,
  ConstructionOutlined,
  DataObjectOutlined,
  DevicesOutlined,
  HandymanOutlined,
  VolunteerActivismOutlined,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import CardGridContainer from 'components/cards/CardGridContainer'
import CardOne, { ICON_STYLE } from 'components/cards/CardOne'
import SectionContainer from 'components/layout/SectionContainer'
import { withBasicLayout } from 'components/layouts'
import { designColor } from 'theme/theme'
import PartnerImage from '../assets/partnerWithUs.png'

/* eslint-disable @next/next/no-img-element */

const processContent = [
  'Apply for help using the “Get Help” button.',
  'You will receive an invitation for an interview within a few days.',
  'If accepted, complete your onboarding and gather a team for your project.',
  'Once work has begun, you will get weekly updates on the progress.',
]

const provideContent = [
  {
    title: 'Internal tools',
    description:
      'Every organization needs infrastructure. Support comes in part from good tooling, and we help design and develop effective tools that help teams thrive. As a bonus, we help teams implement good practices and level up on those tools, too.',
    icon: <AdminPanelSettingsOutlined style={ICON_STYLE} />,
  },
  {
    title: 'External tools',
    description:
      'The organizations we support serve individuals in need. Those folks often do not have access to resources and our aim is to streamline and facilitate success, whatever shape that takes.',
    icon: <DevicesOutlined style={ICON_STYLE} />,
  },
  {
    title: 'Technical problems',
    description:
      'No matter the size, any organization in business today is bound to face technical challenges. Open Seattle partners with non-profits and other organizations to navigate these challenges.',
    icon: <HandymanOutlined style={ICON_STYLE} />,
  },
]

const criteriaContent = [
  {
    title: 'Nonprofits',
    description:
      'We strive to bring enterprise-level operational maturity to nonprofits in need.',
    icon: <VolunteerActivismOutlined style={ICON_STYLE} />,
  },
  {
    title: 'Governments',
    description:
      'Local governmental organizations aimed at building a better community deserve a helping hand.',
    icon: <AccountBalanceOutlined style={ICON_STYLE} />,
  },
  {
    title: 'Open Source',
    description:
      'Whenever possible, we will cooperate using open source assets that can be leveraged by anyone.',
    icon: <DataObjectOutlined style={ICON_STYLE} />,
  },
  {
    title: 'Maintainability',
    description:
      "When we build, we don't just build for today. Our services and tools are designed for long-term usability and scale.",
    icon: <ConstructionOutlined style={ICON_STYLE} />,
  },
]

const PartnersPage = () => {
  const theme = useTheme()
  const palette = theme.palette
  const isSmallScreen = useMediaQuery('(max-width:600px)')

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <SectionContainer backgroundColor={theme.palette.primary.main}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: '40px' },
          }}
          maxWidth={'880px'}
        >
          <Box
            sx={{
              textAlign: 'left',
              width: '100%',
              maxWidth: '418px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem  ',
            }}
          >
            <Typography
              variant={isSmallScreen ? 'displayMedium' : 'displayLarge'}
              sx={{ color: theme.palette.primary.contrastText }}
            >
              Partner with us
            </Typography>
            <Typography
              variant="headlineLarge"
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            >
              Open Seattle works with Seattle-based nonprofits to create
              customized digital solutions for their needs, for free.
            </Typography>
            <div style={{ marginTop: '1rem' }}>
              <Button
                variant="contained"
                color="secondary"
                href={'https://airtable.com/shrVmFy3j3TVWxVBG'}
                target="_blank"
              >
                Partner with us
              </Button>
            </div>
          </Box>
          <img
            src={PartnerImage.src}
            alt="Partner page graphic"
            width="418px"
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </SectionContainer>
      <SectionContainer backgroundColor={designColor.background}>
        <Stack
          gap={{ xs: '64px', md: '80px' }}
          sx={{
            textAlign: 'center',
          }}
          maxWidth={'880px'}
        >
          <Typography variant="headlineLarge">Our criteria</Typography>

          <CardGridContainer columns={4}>
            {criteriaContent.map((item) => (
              <CardOne
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </CardGridContainer>
          <Typography variant="headlineLarge">How we can help</Typography>
          <CardGridContainer columns={3}>
            {provideContent.map((item) => (
              <CardOne
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </CardGridContainer>
        </Stack>
      </SectionContainer>
      <SectionContainer backgroundColor={designColor.white}>
        <Stack
          gap={{ xs: '64px', md: '80px' }}
          sx={{
            textAlign: 'left',
          }}
          maxWidth={'880px'}
        >
          <Stack gap={{ xs: 2, md: 4 }}>
            <Typography variant="headlineLarge">The process</Typography>
            <ol>
              {processContent.map((item, index) => (
                <li key={index + 1} style={{ marginBottom: '2rem' }}>
                  <Typography
                    variant="titleLarge"
                    color={palette.primary.main}
                  >{`${index + 1}.`}</Typography>
                  <Typography variant="bodyLarge" mx={2}>
                    {item}
                  </Typography>
                </li>
              ))}
            </ol>
            <div>
              <Button
                variant="contained"
                color="primary"
                href={'https://airtable.com/shrVmFy3j3TVWxVBG'}
                target="_blank"
              >
                Partner with us
              </Button>
            </div>
          </Stack>
          <Stack gap={{ xs: 2, md: 4 }}>
            <Typography variant="headlineLarge">
              Partner expectations
            </Typography>
            <Typography variant="bodyLarge">
              Partners should plan to maintain projects after handoff, and to
              provide all volunteers with the necessary documentation for timely
              project completion. All Open Seattle projects are open and
              accessible by default.
            </Typography>
          </Stack>
          <Stack gap={{ xs: 2, md: 4 }}>
            <Typography variant="headlineLarge">
              Volunteer expectations
            </Typography>
            <Typography variant="bodyLarge">
              All of our volunteers are vetted for experience, and sign a
              volunteer agreement before commencing work with Open Seattle.
            </Typography>
          </Stack>
        </Stack>
      </SectionContainer>
      <SectionContainer backgroundColor={theme.palette.background.default}>
        <Stack
          gap={{ xs: '2rem', md: '2.5rem' }}
          sx={{
            textAlign: 'center',
          }}
          maxWidth={'880px'}
        >
          <Typography variant="headlineLarge">
            Interested in partnering with Open Seattle?
          </Typography>
          <div>
            <Button
              variant="contained"
              color="secondary"
              href={'https://airtable.com/shrVmFy3j3TVWxVBG'}
              target="_blank"
            >
              Partner with us
            </Button>
          </div>
        </Stack>
      </SectionContainer>
    </Container>
  )
}

export default withBasicLayout(PartnersPage)
