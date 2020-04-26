import users from './users.js';
const getInactiveUsers = users => {
  const user = users.filter(user => user.isActive === false)
  return user
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]