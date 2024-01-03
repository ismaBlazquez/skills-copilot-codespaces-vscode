function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'list',
    message: 'Select a member',
    choices: [
      {
        name: 'Member 1',
        value: 'member1',
      },
      {
        name: 'Member 2',
        value: 'member2',
      },
    ],
  };
}