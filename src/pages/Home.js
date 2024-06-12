import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import './Home.css'
import Minnesota from '../svg/Minnesota'
import ProjectList from '../components/ProjectList'

const Home = () => {
  return (
    <div>
      <Grid
        container
        className="home-container"
        justifyContent="space-between"
        style={{ padding: '24px' }}
        alignItems="center"
      >
        <Grid item xs={4}>
          <Typography
            variant="h1"
            style={{ fontSize: '30px' }}
            title="Kyle Case"
          >
            KYLE CASE
          </Typography>
        </Grid>
        <Grid item xs={8} style={{ textAlign: 'right' }}>
          <Typography variant="body1">
            Software Engineer + Product Designer
          </Typography>
          <Typography variant="body1">
            <Minnesota style={{ width: '12px', fill: '#4a75fb' }} />{' '}
            Minneapolis, Minnesota
          </Typography>
        </Grid>
      </Grid>
      <div
        style={{
          paddingTop: '32px',
          backgroundColor: '#fafafa',
          padding: '0px',
        }}
      >
        <ProjectList />
      </div>
    </div>
  )
}

export default Home
