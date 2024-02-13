/*
* @2023 Digital Aid Seattle
*/
import { Box, useTheme } from '@mui/material'
import ErrorComponent from 'components/ErrorComponent'
import Masthead from 'components/Masthead'
import { withBasicLayout } from 'components/layouts'
import ErrorImage from '../assets/404-error.png'

function Page404() {
  const theme = useTheme()

  const title = '404';

  return (
    <>
      <Masthead title={title} />
      <Box
        sx={{
          width: '100%',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ErrorComponent title="Page Not Found"
          description="Unfortunately, the page you are trying to access could not be located. Please return to our home page to continue your journey."
          imageSrc={ErrorImage.src}
          imageTitle="404 Error Image" />
      </Box>
    </>
  )
}

export default withBasicLayout(Page404)
