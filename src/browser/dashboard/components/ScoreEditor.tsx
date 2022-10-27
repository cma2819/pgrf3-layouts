import React, { useContext } from 'react'
import { Grid, TextField } from '@mui/material'
import { ReplicantContext } from '../../ReplicantProvider'

export const ScoreEditor = () => {

  const repScores = useContext(ReplicantContext).scores;

  return (
    <Grid container spacing={2}>
      { repScores.map((score, idx) => (
        <Grid key={score.id} item xs={12}>
          <TextField label={`Score.${idx}`} variant="outlined" type="number" fullWidth onChange={(e) => {
            const val = e.currentTarget.value;
            if (val === '') {
              score.score = null;
            }
            score.score = Number(e.currentTarget.value) || 0;
          }}></TextField>
        </Grid>
      ))}
      
    </Grid>
  )
}