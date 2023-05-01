const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Suman",
        email: "suman@example.com",
      },
      {
        name: "Soumik",
        email: "soumik@example.com",
      },
    ],
    _id: "1",
    chatName: "Soumik",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "Suman",
        email: "suman@example.com",
      },
    ],
    _id: "2",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Sukumar",
        email: "sukumar@example.com",
      },
      {
        name: "Suman",
        email: "suman@example.com",
      },
    ],
    _id: "3",
    chatName: "Sukumar",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Soumik",
        email: "soumik@example.com",
      },
      {
        name: "Suman",
        email: "suman@example.com",
      },
      {
        name: "Arnab",
        email: "arnab@example.com",
      },
    ],
    _id: "4",
    chatName: "Friends",
    groupAdmin: {
      name: "Suman",
      email: "suman@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Arnab",
        email: "arnab@example.com",
      },
      {
        name: "Suman",
        email: "suman@example.com",
      },
    ],
    _id: "5",
    chatName: "Arnab",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Sukumar",
        email: "sukumar@example.com",
      },
      {
        name: "Suman",
        email: "suman@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "6",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];
