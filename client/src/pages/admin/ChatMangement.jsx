import { Stack, Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { dashboardData } from "../.././constants/sampleData";
import AdminLayout from "../../components/layout/AdminLayout";
import { AvatarCard } from "../../components/shared/AvatarCard";
import Table from "../../components/shared/Table";
import { transformImage } from "../../libs/features";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    headerClassName: "Table-header",
  },
  {
    field: "Avatar",
    headerName: "Avatar",
    width: 150,
    headerClassName: "Table-header",
    renderCell: (params) => <AvatarCard avatar={params.row.avatar} />,
  },
  {
    field: "name",
    headerName: "Name",
    headerClassName: "Table-header",
    width: 300,
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    headerClassName: "Table-header", // Fixed typo
    width: 120,
  },
  {
    field: "members",
    headerName: "Members",
    headerClassName: "Table-header",
    width: 400,
    renderCell: (params) => (
      <AvatarCard max={100} avatar={params.row.members} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    headerClassName: "Table-header",
    width: 200,
  },
  {
    field: "creater",
    headerName: "Created By",
    headerClassName: "Table-header",
    width: 250,
    renderCell: (params) => {
      const creater = params.row.creater || { name: "Unknown", avatar: "" }; // Add fallback
      return (
        <Stack direction="row" alignItems="center" spacing={"1rem"}>
          <Avatar alt={creater.name} src={creater.avatar} />
          <span>{creater.name}</span>
        </Stack>
      );
    },
  },
];

const ChatMangement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: i.avatar.map((img) => transformImage(img, 50)), // Transform avatar
        members: i.members.map((member) => ({
          ...member,
          avatar: transformImage(member.avatar, 50), 
        })),
        creater: i.creater
          ? {
              name: i.creater.name,
              avatar: transformImage(i.creater.avatar, 50), // Transform creater avatar
            }
          : { name: "Unknown", avatar: "" }, // Fallback for undefined creater
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Chats"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default ChatMangement;
