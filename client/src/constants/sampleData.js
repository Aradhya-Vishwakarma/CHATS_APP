export const sampleChats = [{
  avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  name: "Aaru",
  _id: "1",
  groupChat: false,
  members: ["1", "2"],
},

{
  avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  name: "Shivansh",
  _id: "2",
  groupChat: false,
  members: ["1", "2"],
},

{
  avatar: ["https://www.w3schools.com/howto/img_avatar.png",
  ],
  name: "Rajani",
  _id: "3",
  groupChat: true,
  members: ["1", "2"],
}]

export const sampleUsers = [{


  avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  name: "Aaru",
  _id: "1",
},

{
  avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  name: "Shivansh",
  _id: "2",
},
{
  avatar: ["https://www.w3schools.com/howto/img_avatar.png",
  ],
  name: "Rajani",
  _id: "3",

}];

export const sampleNotifications = [{
  sender: {
    name: "Aaru",
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  },
  _id: "1"
},
{
  sender: {
    name: "Shivansh",
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  },
  _id: "2"
},
{
  sender: {
    name: "Rajani",
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
  },
  _id: "3"
}]






export const sampleMessages = [
  {
    attachment: [{
      public_id: "aaru",
      url: "https://www.w3schools.com/howto/img_avatar.png"
    },
    ],
    content: "AASHVI KA MESSAGE",
    _id: "hdkknk",
    sender: {
      _id: "1",
      name: "Aaru",
    },
    chat: "chatId",
    createdAt: "2023-10-10T10:00:00.000Z",
  },

  {
    attachment: [{
      public_id: "aaru_2",
      url: "https://www.w3schools.com/howto/img_avatar.png"
    },
    ],
    content: "AASHVI KA MESSAGE 2th",
    _id: "hdkknjhk",
    sender: {
      _id: "2",
      name: "shivansh",
    },
    chat: "chatId",
    createdAt: "2023-10-10T10:00:00.000Z",
  },
]

export const dashboardData = {
  User: [
    {
      name: "Aaru",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      username: "AARU",
      friends: 6,
      groups: 1,


    },
    {
      name: "Shivansh",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      username: "SHIVANSH",
      friends: 90,
      groups: 20,
    },
    {
      name: "Rajani",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "3",
      username: "RAJANI",
      friends: 10,
      groups: 2,
    },
  ],
  chats: [{
    name: "special group",
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    _id: "1",
    groupChat: false,
    members: [{ _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
    { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
    {
      _id: "3", avatar: "https://www.w3schools.com/howto/img_avatar.png"
    }
    ],
    totalMembers: 2,
    totalMessages: 100,
    creater: {
      name: "Aradhya",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  },

  {
    name: "taj group",
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    _id: "2",
    groupChat: true,
    members: [{ _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
    { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
    {
      _id: "3", avatar: "https://www.w3schools.com/howto/img_avatar.png"
    }],
    totalMembers: 2,
    totalMessages: 100,
    creater: {
      name: "Shivansh",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    },
  },

  {
    name: "Raj grpup",
    avatar: ["https://www.w3schools.com/howto/img_avatar.png",
    ],
    _id: "3",
    groupChat: true,
    members: [{ _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
    { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
    {
      _id: "3", avatar: "https://www.w3schools.com/howto/img_avatar.png"
    }],
    totalMembers: 2,
    totalMessages: 100,
    creater: {
      name: "Rajani",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
    },
  }],
  messages: [{
    attachments: [
      {
        public_id: "apj1",
        url: "https://www.w3schools.com/howto/img_avatar.png"
      },],
    content: "pagal ladki",
    _id: "ajddds",
    sender: {
     avatar:"https://www.w3schools.com/howto/img_avatar.png",
      name: "Jiya",
    },
    chat: "chatId", groupChat: false,
    createdAt: "2023-10-10T10:00:00.000Z",
  },

  {
    attachments: [
      {
        public_id: "apj2",
        url: "https://www.w3schools.com/howto/img_avatar.png"
      },],
    content: " dimag khrab",
    _id: "ajddd",
    sender: {
      avatar:"https://www.w3schools.com/howto/img_avatar.png",
      name: "Jyoti",
    },
    chat: "chatId",groupChat: true,
    createdAt: "2023-10-10T10:00:00.000Z",
  }
  ],



}
