import React from 'react'
import { Grid, Typography, Paper, Button } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ProjectImage from '../components/ProjectImage'
import ProjectMetadata from '../components/ProjectMetadata'
import BackArrow from '@material-ui/icons/KeyboardBackspaceRounded'
import ProjectDetailContainer from '../components/ProjectDetailContainer'
const ProjectDetail = ({ match, projects }) => {
  const { projectId } = match.params
  const project = projects.find((project) => project.id === projectId)
  const { backgroundColor, id, logo, metadata, projectTitle } = project || {}

  const buttonColor = () => {
    if (logo === 'target-podcasts') {
      return '#D60517'
    }
    return backgroundColor
  }

  const textColor = () => {
    if (logo === 'target-podcasts') {
      return '#282828'
    }
    return 'white'
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        height: 'inherit',
        overflow: 'hidden',
      }}
    >
      <motion.div layoutId={id} style={{ height: '20%' }}>
        <Paper
          style={{
            height: '100%',
            borderRadius: '0px',
            backgroundColor,
          }}
          elevation={0}
        >
          <Grid container justify="center">
            <Grid item xs={12}>
              <div style={{ padding: '16px 0px 0px 16px', backgroundColor }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: buttonColor(),
                  }}
                >
                  <Grid container alignItems="center" spacing={2}>
                    <Button
                      style={{
                        color: textColor(),
                        textTransform: 'none',
                        borderRadius: '50px',
                      }}
                      startIcon={
                        <BackArrow
                          style={{
                            marginRight: '8px',
                            color: textColor(),
                          }}
                        />
                      }
                    >
                      Back to Home
                    </Button>
                  </Grid>
                </Link>
              </div>
              <AnimatePresence
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  style={{ minHeight: '100%' }}
                >
                  <Grid item xs={2} sm={1} style={{ paddingRight: '32px' }}>
                    <ProjectImage image={logo} />
                  </Grid>
                  <Grid item>
                    <Grid container justify="center">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Typography
                          variant="h2"
                          style={{ color: textColor() }}
                          className="project-detail-title"
                        >
                          {projectTitle}
                        </Typography>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Grid>
              </AnimatePresence>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>

      <Grid container style={{ height: '80%' }}>
        <Grid
          item
          xs={12}
          md={8}
          style={{ paddingTop: '0px', maxHeight: '100%', overflowY: 'auto' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ height: 'inherit', overflowY: 'auto' }}
          >
            {project && <ProjectDetailContainer project={project} />}
          </motion.div>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{
            paddingTop: '0px',
            height: '100%',
          }}
        >
          <motion.div
            style={{ height: '100%', backgroundColor: '#d8d8d8' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {metadata && (
              <ProjectMetadata metadata={metadata} textColor={buttonColor()} />
            )}
          </motion.div>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
  }
}
export default connect(mapStateToProps)(ProjectDetail)
