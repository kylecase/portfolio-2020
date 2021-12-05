import React from 'react'
import { Typography, Grid } from '@material-ui/core'
const HiTechContent = () => {
  return (
    <div>
      <Typography variant="h1">
        HiTech is a tool for scheduling appointments at Target's internal
        "Genius Bar"
      </Typography>
      <Grid container justifyContent="center" style={{ margin: '16px' }}>
        <Grid item xs={11}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kyle-portfolio-data.appspot.com/o/hitech-lg.png?alt=media&token=a511c7ad-fd07-40b9-9dcf-feec1d514585"
            alt="Hi Tech Screen Shot"
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow:
                '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
            }}
          />
        </Grid>
      </Grid>
      <Typography style={{ marginTop: '12px' }}>
        HiTech is a simple scheduling tool that allows team members all around
        the world to make appointments at Target's internal "Genius Bar", called
        HiTech. The HiTech system handles scheduling, sending invites, and
        modifying appointments. HiTech includes an admin dashboard for
        configuring capacity and employee schedules for the HiTech team.
      </Typography>
      <Typography style={{ marginTop: '12px' }}>
        HiTech is built with React and Redux front-end. It uses ExpressJS,
        Postgres, and Sequelize for keeping track of the appointment data.
      </Typography>
    </div>
  )
}

export default HiTechContent
