import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const TechAtTargetContent = () => {
  return (
    <div>
      <Typography variant="h1" style={{ fontSize: '2.5em' }}>
        Tech@Target is Target's externally facing blog about our tech
      </Typography>
      <Grid container justify="center" style={{ margin: '16px' }}>
        <Grid item xs={11}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kyle-portfolio-data.appspot.com/o/techAtTarget2-hd.png?alt=media&token=7c509f25-157e-47b7-8a87-b88e352aeb76"
            alt="Tech at Target Screen Shot"
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow:
                '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default TechAtTargetContent
