import users from './users.js';
const getSortedUniqueSkills = users => {
  return users.reduce((allSkills, user) =>{
    allSkills.push(...user.skills)
    return allSkills
  },[]).reduce((uniqueSkills, skill) =>{
    return uniqueSkills.includes(skill) ? uniqueSkills : [...uniqueSkills, skill]
  },[]).sort()
};
  
  console.log(getSortedUniqueSkills(users));
//   Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
  
  
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]