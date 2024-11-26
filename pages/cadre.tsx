/*
 * @2024 Digital Aid Seattle
 */
import { useContext, useEffect, useState } from 'react'

import {
  Box,
  Stack,
  useTheme
} from '@mui/material'

import SectionContainer from 'components/layout/SectionContainer'
import { dasProjectsService, sanityProjectsService } from './api/ProjectsService'
import { BlockComponent, LoadingContext, withBasicLayout } from 'components/layouts'
import {
  ProjectBodyTextSection,
  ProjectContactUsSection,
  ProjectFooterSection,
  ProjectHeaderSection,
  ProjectLabels,
  ProjectTeamSection
} from 'components/ProjectComponents'
import RolesSection from 'components/RolesSection'
import { DASProject, DASVolunteerRoleBasicInfo, TeamMember } from 'types'
import { dasVolunteerRoleService } from './api/VolunteerRoleService'

const TheCadrePage = () => {
  const [project, setProject] = useState<DASProject>()
  const [volunteerRoles, setVolunteerRoles] = useState<DASVolunteerRoleBasicInfo[]>([])
  const { setLoading } = useContext(LoadingContext)
  const [members, setMembers] = useState<TeamMember[]>([])


  useEffect(() => {
    setLoading(true);
    Promise.all([
      dasVolunteerRoleService.getAllActiveRoles(),
      sanityProjectsService.getOne('the-cadre'),
      dasProjectsService.getPeople('Cadre')
    ])
      .then(resps => {
        setVolunteerRoles(resps[0]);
        setProject(resps[1]);
        setMembers(resps[2].sort((r1, r2) => r1.name.localeCompare(r2.name)));
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [setLoading])

  const theme = useTheme()

  function getBody() {
    return (
      <SectionContainer backgroundColor={theme.palette.background.default}>
        <Stack
          gap={{ xs: '64px', lg: '80px' }}
          maxWidth="880px"
          margin="0 auto"
        >
          <ProjectBodyTextSection title={ProjectLabels.problem} texts={project!.problem as unknown as string[]} />
          <ProjectBodyTextSection title={ProjectLabels.solution} texts={project!.solution as unknown as string[]} />
          <ProjectBodyTextSection title={ProjectLabels.impact} texts={project!.impact as unknown as string[]} />
          <ProjectTeamSection title={ProjectLabels.current_team} members={members} />
          <RolesSection showLink={true} title={ProjectLabels.roles_needed} roles={volunteerRoles} />
          <ProjectContactUsSection />
        </Stack>
      </SectionContainer>
    )
  }

  return (
    <BlockComponent block={!project}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default
        }}>
        <ProjectHeaderSection project={project!} hideStatus={true} />
        {project ? getBody() : <></>}
        <ProjectFooterSection />
      </Box>
    </ BlockComponent>
  )
}

export default withBasicLayout(TheCadrePage)
