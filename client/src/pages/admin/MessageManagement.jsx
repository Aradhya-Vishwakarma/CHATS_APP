import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import moment from "moment";
import { dashboardData } from "../../constants/sampleData";
import { fileFormat, transformImage } from "../../libs/features";
import { Stack, Typography, Box } from "@mui/material";
import RenderAttachment from "../../components/shared/RenderAttachment"; // Adjust the path as necessary
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 200,
    headerClassName: "Table-header",
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "Table-header",
    width: 200,
    renderCell: (params) => {
      const { attachments } = params.row; // Corrected field name
      return attachments && attachments.length > 0
        ? attachments.map((i, index) => {
            const url = i.url;
            const file = fileFormat(url);
            return (
              <Box key={index}>
                <a
                  href={url}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "black",
                  }}>

                  {RenderAttachment(file,url)}
                </a>
              </Box>
            );
          })
        : "No Attachments"; // Add fallback
    },
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "Table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassName: "Table-header",
    width: 200,
    renderCell: (params) => {
      const sender = params.row.sender || { name: "Unknown", avatar: "" }; // Add fallback
      return (
        <Stack direction="row" alignItems="center" spacing={"1rem"}>
          <Avatar alt={sender.name} src={sender.avatar} />
          <span>{sender.name}</span>
        </Stack>
      );
    },
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "Table-header",
    width: 220,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassName: "Table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "Table-header",
    width: 250,
  },
];

const MessageManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      dashboardData.messages.map((i) => ({
        ...i,
        id: i._id,
        sender: {
          name: i.sender.name,
          avatar: transformImage(i.sender.avatar || "", 50), // Transform sender avatar
        },
        createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All MESSAGES"} columns={columns} rows={rows}
      rowHeight={200} />
    </AdminLayout>
  );
};

export default MessageManagement;
