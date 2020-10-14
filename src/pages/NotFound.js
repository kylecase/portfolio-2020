import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <Grid>
      <Typography>
        Page not found. Return {<Link to="/">home</Link>}.
      </Typography>
    </Grid>
  )
}

export default NotFound
