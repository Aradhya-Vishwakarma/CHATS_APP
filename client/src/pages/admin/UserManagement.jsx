import React, { useEffect ,useState } from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import Table from '../../components/shared/Table'
import Avatar from '@mui/material/Avatar'
import { dashboardData } from '../.././constants/sampleData'
import { transformImage } from '../../libs/features'


const columns = [
  {
  field: 'id',
  
  headerName: 'ID', 
  width:150,
  headerClassName:"Table-header",
  width: 200,  
},
{
  field: 'Avatar',
  
  headerName: 'Avatar',
  width:150,
  headerClassName:"Table-header",
  width: 150,
  renderCell:(params )=> (<Avatar alt={params.row.name} src={ params.row.avatar}/>  )
},
{
  field:"name",
  headerName:"Name",
  headerClassName:"Table-header",
  width:200,
},
{
  field:"username",
  headerName:"Username",
  haederClassName:"Table-header",
  width:200,
   
},
{
field:"friends",
headerName:"Friends",
headerClassName:"Table-header",
width:150,
},
{
  field:"groups",
  headerName:"Groups",
  headerClassName:"Table-header",
  width:200,
},



]
const UserManagement = () => {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(dashboardData.User.map( (i)=>({...i,id:i._id ,avatar:transformImage(i.avatar,50 )  })))
 

  },[])
    return (
    <AdminLayout>
    {
      <Table heading={"All Users"} columns={columns} rows={rows}/>
    }
    </AdminLayout>
    )
  }

export default UserManagement
