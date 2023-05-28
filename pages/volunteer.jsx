import Container from '../components/Container'
import Layout from '../components/Layout'

// test
import CardProject from '../components/cards/CardProject'
import CardGridContainer from '../components/cards/CardGridContainer'

import CardRowContainer from '../components/cards/CardRowContainer';
import CardOne from '../components/cards/CardOne'
import AccessibilityIcon from '@mui/icons-material/Accessibility';
//
import CardThree from '../components/cards/CardThree'

export default function VolunteerForm() {
  return (
    <Layout>
      
      {/* test */}
      <CardGridContainer>
        <CardProject
          title= "Seattle Humane Society"
          partner="City of Bellevue"
          programAreas={["Animals"]}
          description= "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
          status= "active"
          projectLink= "#"
          duration= {{start: "Jun 1", end: "Jul 15"}}/>
      </CardGridContainer>
      <CardRowContainer>
        <CardThree 
          icon={<AccessibilityIcon fontSize="large" sx={{ color: "white" }}/>} 
          description="Reach out to Open Seattle! We work with Washington-based nonprofits to create customized digital solutions for free."
          buttonText="Partner With Us"
          />
        <CardThree 
          icon={<AccessibilityIcon fontSize="large" sx={{ color: "white" }}/>} 
          description="Join Open Seattle to make a difference in the lives of others—we have a wide range of volunteer opportunities available." 
          buttonText="Volunteer With Us"
          />        
        <CardThree 
          icon={<AccessibilityIcon fontSize="large" sx={{ color: "white" }}/>} 
          description="Support Open Seattle in its mission to build tech solutions for our community nonprofits by donating." 
          buttonText="Support Us"
          />
      </CardRowContainer>

      <Container>
        <iframe
          class="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shr1lbcr3qmkoIbNW?backgroundColor=purpleLight"
          frameborder="0"
          width="100%"
          height="3610"
          style={{
            background: 'transparent',
            border: '1px solid #ccc',
            overflow: 'hidden',
          }}
        ></iframe>
      </Container>
    </Layout>
  )
}
