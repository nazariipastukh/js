// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки.

const sessions=[];
sessions.push(new Date());
localStorage.setItem('time',JSON.stringify(sessions));




