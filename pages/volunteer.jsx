import Container from '../components/Container'
import Layout from '../components/Layout'
import FilterDropdown from '../components/filters/FilterDropdown'
import FilterContainer from '../components/filters/FilterContainer'
import SearchContainer from '../components/filters/SearchContainer'
import SearchToggle from '../components/filters/SearchToggle'

export default function VolunteerForm() {
  return (
    <Layout>
      <Container>
        <SearchContainer>
          <SearchToggle/>
          <FilterContainer/>
        </SearchContainer>

        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shr1lbcr3qmkoIbNW?backgroundColor=purpleLight"
          frameBorder="0"
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
