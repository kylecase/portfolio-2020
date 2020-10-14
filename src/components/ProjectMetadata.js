import React from 'react'
import { Typography } from '@material-ui/core'
const ProjectMetadata = ({ metadata, textColor }) => {
  console.log(metadata)
  return (
    <div style={{ padding: '24px' }}>
      {Object.keys(metadata).map((keyName, i) => (
        <div style={{ marginTop: i > 0 && '24px' }} key={i}>
          <Typography
            variant="overline"
            style={{ color: textColor, fontWeight: 600 }}
          >
            {keyName}
          </Typography>
          {Array.isArray(metadata[keyName]) ? (
            metadata[keyName]?.length > 0 && (
              <ul style={{ paddingLeft: '28px', marginTop: '0px' }}>
                {metadata[keyName].map((item, index) => {
                  return <li key={index}>{item}</li>
                })}
              </ul>
            )
          ) : (
            <Typography variant="body2">{metadata[keyName]}</Typography>
          )}
        </div>
      ))}
    </div>
  )
}

export default ProjectMetadata
