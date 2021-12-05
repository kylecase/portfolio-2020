import React from 'react'
import { Grid } from '@material-ui/core'
import IncidentCommandContent from './ProjectDetailContent/IncidentCommand'
import AnswersContent from './ProjectDetailContent/Answers'
import HiTechContent from './ProjectDetailContent/HiTech'
import PodcastsContent from './ProjectDetailContent/Podcasts'
import TechAtTargetContent from './ProjectDetailContent/TechAtTarget'
import ValuableslistContent from './ProjectDetailContent/Valuableslist'
const ProjectDetailContainer = ({ project }) => {
  const { logo } = project
  const renderContent = () => {
    if (logo === 'incident-command') {
      return <IncidentCommandContent />
    }
    if (logo === 'answers') {
      return <AnswersContent />
    }
    if (logo === 'hi-tech') {
      return <HiTechContent />
    }
    if (logo === 'target-podcasts') {
      return <PodcastsContent />
    }
    if (logo === 'tech-at-target') {
      return <TechAtTargetContent />
    }
    if (logo === 'valuableslist') {
      return <ValuableslistContent />
    }
  }
  return (
    <Grid
      container
      justifyContent="center"
      style={{ overflowY: 'auto', height: '100%' }}
    >
      <Grid item xs={11} lg={10}>
        <div style={{ paddingTop: '24px', paddingBottom: '50px' }}>
          {renderContent()}
        </div>
      </Grid>
    </Grid>
  )
}

export default ProjectDetailContainer
