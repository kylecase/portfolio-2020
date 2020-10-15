import React from 'react'
import { Typography, Grid } from '@material-ui/core'
import ValuableslistUI from '../../svg/valuableslist-ui'
const ValaubleslistContent = () => {
  return (
    <div>
      <Typography variant="h1">
        Valuableslist is the easiest way to keep an inventory of all your
        belongings
      </Typography>
      <Grid container justify="center" style={{ margin: '16px' }}>
        <Grid item xs={11}>
          <div
            style={{
              borderRadius: '8px',
              boxShadow:
                '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
              padding: '0px',
            }}
          >
            <ValuableslistUI
              style={{
                width: '100%',
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Typography style={{ marginTop: '12px' }}>
        Valuableslist is a home inventory application, that I built to scratch
        my own itch. When I first moved into my home, I wanted to be able to
        keep track of all of my valuables, just in case I ever need to make an
        insurance claim. I built the app and have used it personally, but it has
        not been publically released. If you're interested in a product like
        this, shoot me an email, I'd love to hear from you.
      </Typography>
      <Typography style={{ marginTop: '12px' }}>
        Valuableslist is an application that I use frequently for learning. When
        I have a new framework or langauge I want to try out, I'll build and
        rebuild this application. The API has been built using Firebase,
        ExpressJS, Ruby on Rails, just to name a few. The Front-end is built
        with ReactJS for web, and I've experimented with React Native for a
        mobile app experience.
      </Typography>
    </div>
  )
}

export default ValaubleslistContent
