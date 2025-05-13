import { Grid , Skeleton, Stack } from '@mui/material'
import React from 'react'


export const   LayoutLoader = ()=> {
  return (
    <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
    <Grid
      item
      sm={4}
      md={3}
      sx={{ display: { xs: "none", sm: "block " },
    paddingLeft:"2rem" }}
      height={"100vh"}>
      
     <Skeleton variant='rectangular' height={"100vh"}/>
    </Grid>
    <Grid
      item
      xs={12}
      sm={3}
      md={5}
      lg={5 }
      height={"100vh"}>
        <Stack spacing={"1rem"}>
        {Array.from({ length:10 }).map((_, index) => (
        <Skeleton key={index} variant='round' height={"5rem"}/>
        ))}
        </Stack>
      
      <Skeleton variant=' rectangular' height={100}/>
    </Grid>
    <Grid
     item marginInlineStart={"7rem"} md={4} lg={3} xs={4}  height={"100vh"}
     sx={{  display:{xs:"none" , md:"block"},
    //  bgcolor:"rgba(255, 165, 0, 1)",
    
}}>
  
  <Skeleton variant=' rectangular' height={"100vh"}/>
    </Grid>
  </Grid>
  )
}

