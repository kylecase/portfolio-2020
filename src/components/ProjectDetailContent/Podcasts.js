import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PodImg from '../../images/podcasts-hd.png'
const PodcastsContent = () => {
  return (
    <div>
      <Typography variant="h1">
        Target Podcasts is a internal website for hosting Podcasts at Target
      </Typography>
      <Grid container justifyContent="center" style={{ margin: '16px' }}>
        <Grid item xs={11}>
          <img
            src={PodImg}
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
