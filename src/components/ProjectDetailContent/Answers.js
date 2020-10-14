import React from 'react'
import { Typography, Grid } from '@material-ui/core'
const AnswersContent = () => {
  return (
    <div>
      <Typography variant="h1" style={{ fontSize: '2.5em' }}>
        Target Answers is a self-service tool for solving technology problems
      </Typography>
      <Grid container justify="center" style={{ margin: '16px' }}>
        <Grid item xs={11}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-2020-6cd16.appspot.com/o/answers.png?alt=media&token=51482d14-02a1-46ff-acc0-45232ae6540e"
            alt="Answers Screen Shot"
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow:
                '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)',
            }}
          />
        </Grid>
      </Grid>
      <Typography style={{ marginTop: '12px' }}>
        Target Answers is used by service desk team members, and support teams
        to help resolve issues. Answers integrates with corporate access systems
        and makes it simple to resolve problems. It uses a simple search
        interface and intelligently ranks the most helpful articles. Answers has
        "Wizard" tools for interactive, self-service resolutions to common
        problems.
      </Typography>
      <Typography style={{ marginTop: '12px' }}>
        Target Answers is built with a React/Redux front-end. It has APIs built
        with Golang that integrates with many internal 3rd party services.
      </Typography>
    </div>
  )
}

export default AnswersContent
