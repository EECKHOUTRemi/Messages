export const mockConversations = [
    {
      id: 1,
      messages: [
        { id: 1, text: 'Hello, how are you?', sender: 'John Doe', timestamp: '09:00 AM', read: true },
        { id: 2, text: 'I am good, thanks! How about you?', sender: 'You', timestamp: '09:05 AM', read: true },
        { id: 3, text: 'Doing well, just working on a project.', sender: 'John Doe', timestamp: '09:10 AM', read: false },
      ],
    },
    {
      id: 2,
      messages: [
        { id: 1, text: 'See you tomorrow!', sender: 'Jane Smith', timestamp: '10:30 AM', read: true },
        { id: 2, text: 'Looking forward to it!', sender: 'You', timestamp: '10:35 AM', read: true },
      ],
    },
    {
      id: 3,
      messages: [
        { id: 1, text: 'Thanks for your help.', sender: 'Bob Johnson', timestamp: '09:15 AM', read: true },
        { id: 2, text: 'No problem, happy to help!', sender: 'You', timestamp: '09:20 AM', read: true },
      ],
    },
];