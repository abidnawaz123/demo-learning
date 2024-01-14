import { Badge, Box, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import { ADD_ITEMS } from '../../../utils/constants'
import styles from "./style.module.scss"
import { Favorite, HeartBroken, Image } from '@mui/icons-material'
import { images } from "../../../utils/images"

const AddToCart = () => {
  const itemsList = [
    { name: 'Burger', price: 130, favorite: true, amount: 1, desc: "Juicy, big, loaded with toppings of my choice.", },
    { name: 'Pizza', price: 850, favorite: true, amount: 1, desc: "Pizza is an Italian food that was created in Italy (The Naples area).", },
    { name: 'Apple', price: 50, favorite: false, amount: 1, desc: "An Apple a Day keeps the doctor away", },
    { name: 'Book', price: 460, favorite: false, amount: 1, desc: "Reading books is a good habit as it give knowledge", },
    { name: 'Shoes', price: 2600, favorite: true, amount: 2, desc: "I tie my shoes daily because i have a job", },
    { name: 'Comb', price: 50, favorite: false, amount: 1, desc: "Comb is used to comb the hairs" },
    { name: 'Hair Dryer', price: 1550, favorite: false, amount: 1, desc: "To dry wet hairs we can use hair dryer", },
    { name: 'Laptop', price: 55000, favorite: true, amount: 1, desc: "Laptop is an electronic instrument", },
    { name: 'Cocomo', price: 25, favorite: false, amount: 5, desc: "Cocomo mujhee bhi do" },
  ]
  return (
    <>
      <div className={styles.cartsWrapper}>
        <Typography variant='body1'>
          {ADD_ITEMS}
        </Typography>
      </div>
      <Box style={{ margin: 30 }}>
        <Box flex={1}>
          <Grid container item spacing={3}>
            {
              itemsList.map(item => (
                <>
                  <Grid item xs={12} sm={6} md={3}>
                    <Box className={styles.itemsBox}>
                      <Typography>{item.name}</Typography>
                      <div className={styles.priceLabelWithFavIcon}>
                        {
                          item.favorite ? <Favorite color='error' /> : <HeartBroken color='error' />
                        }
                        <Chip label={`${item.price} $`} color='info' size='small' />
                      </div>
                    </Box>
                    <div>{item.desc}</div>
                  </Grid>
                </>
              ))
            }
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default AddToCart
