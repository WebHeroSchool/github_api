var search = new URLSearchParams(window.location.search);
	if (search.has('username')) {
		var userName = search.get('username');
		fetch('https://api.github.com/users/'+userName)
			.then(res => res.json())
			.then(json => {
				if (json.bio === null) {json.bio = 'Информация о себе отсутствует'}
				if (json.name === null) {json.name = 'Имя пользователя отсутствует'}
				if (json.message === "Not Found"){
					document.body.innerHTML = "ошибка: информация о пользователе не доступна."
				}
				else {
					document.body.innerHTML = '<h2>' + '<a href="' + json.html_url + '">' +  
						json.name + '</a>' + '</h2>' + '<br>' +
						'<img src="'+json.avatar_url + '">' + '<br>' +
						'<p>' + json.bio + '</p>'
				}
			})
	}
	else {
		document.body.innerHTML = "ошибка: не добавлен адрес пользователя";
};