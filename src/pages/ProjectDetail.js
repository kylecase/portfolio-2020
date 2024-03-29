import React from 'react'
import { Grid, Typography, Paper, Button } from '@material-ui/core'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import ProjectImage from '../components/ProjectImage'
import ProjectMetadata from '../components/ProjectMetadata'
import BackArrow from '@material-ui/icons/KeyboardBackspaceRounded'
import ProjectDetailContainer from '../components/ProjectDetailContainer'
const ProjectDetail = ({ projects }) => {
  const { projectId } = useParams()
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
      }}
    >
      <motion.div layoutId={id}>
        <Paper
          style={{
            borderRadius: '0px',
            backgroundColor,
          }}
          elevation={0}
        >
          <Grid container justifyContent="center">
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
                  justifyContent="center"
                  alignItems="center"
                  style={{ height: '100%', paddingBottom: '32px' }}
                  spacing={3}
                >
                  <Grid item xs={2} sm={1}>
                    <ProjectImage image={logo} />
                  </Grid>
                  <Grid item>
                    <Grid container justifyContent="center">
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

      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            overflowY: 'auto',
          }}
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
          }}
        >
          <motion.div
            style={{
              height: '100%',
              backgroundColor: '#d8d8d8',
              marginBottom: '-24px',
            }}
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
