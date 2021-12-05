import React from 'react'
import { Typography, Grid } from '@material-ui/core'
const IncidentCommandContent = () => {
  return (
    <div>
      <Typography variant="h1">
        Incident Command is tool for mobilizing, collaborating, and resolving
        major incidents
      </Typography>
      <Grid
        container
        justifyContent="center"
        style={{ marginTop: '16px', marginBottom: '16px' }}
      >
        <Grid item xs={11}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-2020-6cd16.appspot.com/o/incident-command-ui.png?alt=media&token=8fec8f58-ad76-4293-bfa2-707ed1435ea6"
            alt="Incident Command Screen Shot"
            style={{
              maxWidth: '100%',
              borderRadius: '8px',
              boxShadow:
                '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
            }}
          />
        </Grid>
      </Grid>
      <Typography style={{ marginTop: '12px' }}>
        Users have everything they need to resolve an incident at their
        fingertips. Incident Command tracks important incident details, keeps
        track of tasks, and a timeline of events. It integrates with Zoom and
        Skype for setting up conference bridges. It uses Slack to enable
        conversation from the Slack app or the Incident Command Board. Users can
        also send alerts through Target's internal GoAlert tool.
      </Typography>
      <Typography style={{ marginTop: '12px' }}>
        Incident Command is built on a React/Redux front-end. It uses WebSocket
        events to trigger real time updates to the Incident Command board. The
        web interface has a large test suite using Cypress, Jest, and React
        Testing Library. A Golang backend powers the APIs and 3rd party
        integrations.
      </Typography>
      <Typography style={{ marginTop: '12px' }}>
        Incident Command is currently used in Production for all major incidents
        that occur at Target.
      </Typography>
    </div>
  )
}

export default IncidentCommandContent
