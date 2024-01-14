import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./style.module.scss"
import { ADD_TO_CART_SECTION, CHOICE, TODO_SECTION } from '../../../utils/constants'
import AppleImage from "../../../assets/book.png"

const HomeComponent = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.homeWrapper}>
      <Grid item>
        <Box className={styles.homesubWrapper}>
          <Typography variant='h4'>{CHOICE}</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid container item spacing={3}>
              <>
                <Grid item xs={12} sm={6}>
                  <Box onClick={() => { navigate("/todo") }}
                    className={styles.boxes}>
                    <Typography>{TODO_SECTION}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box onClick={() => { navigate("/cart") }}
                    className={styles.boxes}>
                    <Typography>{ADD_TO_CART_SECTION}</Typography>
                  </Box>
                </Grid>
              </>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <p>apple image start</p>
      <image
        src={AppleImage}
        height={300}
        width={300}
        alt="appleimg"
      />
      <p>apple image end</p>
    </div>
  )
}

export default HomeComponent
