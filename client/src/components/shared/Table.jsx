import React from 'react'
import {DataGrid} from '@mui/x-data-grid'  
import { Paper, Typography,  Container } from '@mui/material'   

const Table = ({rows , columns , heading , rowHeight=52}) => {
  return (
<Container sx={{
  height: '100vh',
}}> 
<Paper
elevation={3}
sx={{
  padding : '1rem 4rem',
  borderRadius: '1rem',
  margin:"auto",
  width:"100%",
  overflow: 'hidden',
  height: '100%',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',

}}

>
 <Typography
 textAlign={"center"}
variant="h4"
sx={{
  margin: '2rem',
  texttransform: 'uppercase',
}} 
 >{heading} </Typography>
 <DataGrid
 rows={rows}
  columns={columns}
  rowHeight={rowHeight}
  style={{
    height: '80%',
  }}

  sx={{
    border: 'none',
    ".Table-header":{
      backgroundColor: '#bad3de',
      fontWeight: 'bold',
      color : '',
    }
  }}
 />
</Paper>

</Container>
  )
}

export default Table
