import React from 'react'
import { Grid, Typography } from '@material-ui/core'
const PodcastsContent = () => {
  return (
    <div>
      <Typography variant="h1" style={{ fontSize: '2.5em' }}>
        Target Podcasts is a internal website for hosting Podcasts at Target
      </Typography>
      <Grid container justify="center" style={{ margin: '16px' }}>
        <Grid item xs={11}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kyle-portfolio-data.appspot.com/o/podcasts-hd.png?alt=media&token=0fbb72c4-25e7-42fb-ad4d-6b8bb6a46dfd"
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
      <Typography>
        Target Podcasts is an internal podcasting platform that I built at
        Target. This React web application generates podcast landing pages and
        enables users to listen to podcasts from the page. I also helped with
        producing and editing audio for podcast shows.
      </Typography>
    </div>
  )
}

export default PodcastsContent
