import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const TechAtTargetContent = () => {
  return (
    <div>
      <Typography variant="h1">
        Tech@Target is Target's externally facing blog about our tech
      </Typography>
      <Grid container justifyContent="center" style={{ margin: '16px' }}>
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
      <Typography>
        The Tech@Target blog is a site that allows Target engineers to share
        stories about the engineering experience and culture at Target. I
        created initial designs for the site, and I developed the layouts for
        several areas of the site. The site is built using a Jekyll static site
        generator. For the front-end, we used Target's design system framework.
      </Typography>
    </div>
  )
}

export default TechAtTargetContent
