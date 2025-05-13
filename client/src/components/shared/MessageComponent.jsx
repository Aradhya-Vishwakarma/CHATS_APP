import { Typography, Box } from "@mui/material";
import moment from "moment";
import React, { memo } from "react";
import { voilet } from "../../constants/color";
import { fileFormat } from "../../libs/features";
import RenderAttachment from "./RenderAttachment";

const MessageComponent = ({ message, user }) => {
  console.log("Message:", message); // Debug message prop
  console.log("User:", user);       // Debug user prop

  const { sender, content, attachments = [], createdAt } = message || {};
  const sameSender = sender?._id === user?._id;

  const timeago = moment(createdAt).fromNow();

  return (
    <div
      style={{
        alignSelf: sameSender ? "flex-end" : "flex-start",
        backgroundColor: sameSender ? "#618bc2" : "#faf7ff",
        color: sameSender ? "white" : "black",
        borderRadius: "5px",
        padding: "0.5rem",
        width: "fit-content",
      }}>
      {!sameSender && (
        <Typography color={voilet} fontWeight={"100"}>
          {sender?.name}
        </Typography>
      )}

      {content && <Typography>{content}</Typography>}

      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download={url.split("/").pop()}
                style={{
                  color: "black",
                }}>
                  
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color="text.secondary">
        {timeago}
      </Typography>
    </div>
  );
};

export default memo(MessageComponent);
