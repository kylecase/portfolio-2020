import React from 'react'
import { Grid, Paper, Typography, CircularProgress } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './ProjectList.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { connect } from 'react-redux'
import ProjectImage from './ProjectImage'
import Hover from 'react-hover-observer'
const ProjectList = ({ projects }) => {
  return (
    <div style={{ padding: '24px' }} className="project-list-container">
      <Typography variant="h6">Recent Projects</Typography>
      <Grid container style={{ marginTop: '24px' }} spacing={2}>
        {projects?.length > 0 ? (
          projects.map((project) => {
            const { backgroundColor, logo, id, projectTitle } = project
            return (
              <Grid item xs={6} sm={4} key={id}>
                <motion.div layoutId={id}>
                  <Link
                    to={`/project-detail/${id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Hover>
                      {({ isHovering }) => (
                        <Paper
                          style={{
                            padding: '24px',
                            height: 200,
                            backgroundColor: backgroundColor,
                            minHeight: '100%',
                            position: 'relative',
                            transform: isHovering && 'scale(1.05)',
                            transition: '0.3s ease-out',
                          }}
                          elevation={isHovering ? 10 : 0}
                        >
                          <AnimatePresence
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                              style={{ minHeight: '100%', textAlign: 'center' }}
                            >
                              <Grid item xs={6}>
                                <ProjectImage image={logo} />
                              </Grid>
                            </Grid>
                          </AnimatePresence>
                          {isHovering && (
                            <motion.div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                background: 'rgba(95,95,95,0.30)',
                                minWidth: '100%',
                                minHeight: '100%',
                                borderRadius: '4px',
                              }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              <motion.div
                                initial={{ y: '24px' }}
                                animate={{ y: '0px' }}
                                exit={{ opacity: 0, y: '24px' }}
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  bottom: 0,
                                  padding: '16px',
                                }}
                                transition={{ ease: 'easeOut' }}
                              >
                                <Typography
                                  variant="h2"
                                  style={{
                                    color: 'white',
                                    fontSize: '1.5em',
                                  }}
                                >
                                  {projectTitle}
                                </Typography>
                              </motion.div>
                            </motion.div>
                          )}
                        </Paper>
                      )}
                    </Hover>
                  </Link>
                </motion.div>
              </Grid>
            )
          })
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.projects,
  }
}

export default connect(mapStateToProps)(ProjectList)
