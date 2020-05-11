const elBody = document.getElementById('body'),
	  elLoad = document.getElementById('preload'),
      date = new Date,
	  search = new URLSearchParams(window.location.search),
	  userName = search.get('username'),
	  userNameMain = 'tytytyw',
	  gtDate = new Promise((resolve, reject) => {
	  setTimeout(() => date ? resolve(date) : reject('error'), 1500)}),
	  getName = new Promise((resolve, reject) => {
	  setTimeout(() => userName ? resolve(userName) : reject('имя не найдено, отображается пользователь по умолчанию'), 3000)}),
	  preload = setTimeout(() => {
      elBody.style.display = 'block';
      elLoad.style.display = 'none';
		}, 2000),
	preloadOpacity = setTimeout(() => {
        elBody.style.opacity = 1;
    	}, 2100);
function UserInfo(Name){let requestfetch = fetch('https://api.github.com/users/'+Name)
		.then(res => res.json())
		.then(json => {
			if (json.bio === null) {json.bio = 'Информация о себе отсутствует'}
			if (json.name === null) {json.name = 'Имя пользователя отсутствует'}
			if (json.message === "Not Found"){
				elBody.innerHTML = "ошибка: информация о пользователе не доступна."
			}
			else {
				elBody.innerHTML = '<h2>' + '<a href="' + json.html_url + '">' +  
					json.name + '</a>' + '</h2>' + '<br>' +
					'<img src="'+json.avatar_url + '">' + '<br>' +
					'<p>' + json.bio + '</p>' +
					'<p>' + date + '</p>'
			}
		})
	Promise.all([gtDate, getName, requestfetch])}
if (search.has('username')) {
	UserInfo(userName);
}
else {
	UserInfo(userNameMain);
};