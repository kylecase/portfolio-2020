import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimateSharedLayout } from 'framer-motion'
import Projects from './pages/Projects'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'
import { Container, Grid } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './config/themeConfig'
import { connect } from 'react-redux'
import { fetchProjects } from './store/Projects/ProjectSlice'
import ReactGA from 'react-ga'

function App({ fetchProjects }) {
  let location = useLocation()

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  useEffect(() => {
    ReactGA.initialize('UA-58895980-5')
  }, [])

  useEffect(() => {
    ReactGA.pageview(location.pathname)
  }, [location.pathname])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <AnimateSharedLayout type="crossfade">
          <Container className="portfolio-container" style={{ padding: '0px' }}>
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route exact path="/projects" element={<Projects />} />
              <Route
                exact
                path="/project-detail/:projectId"
                element={<ProjectDetail />}
              />
              <Route element={<NotFound />} />
            </Routes>
          </Container>
          <Grid container justifyContent="center">
            <Grid item style={{ textAlign: 'center', marginTop: '12px' }}>
              Contact: <br />
              <a href="mailto:kcase@hey.com" style={{ color: '#4a75fb' }}>
                kcase@hey.com
              </a>
            </Grid>
          </Grid>
        </AnimateSharedLayout>
      </CssBaseline>
    </MuiThemeProvider>
  )
}

const mapDispatchToProps = {
  fetchProjects,
}

export default connect(null, mapDispatchToProps)(App)
