// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

import users from './users.js';
const getNamesSortedByFriendsCount = users => {
  return users.map(user => user.name).sort((prevUser, nextUser) => prevUser.friends - nextUser.friends)
};

console.log(getNamesSortedByFriendsCount(users));

