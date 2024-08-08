// 4 - Criar um recurso utilizando o REST API do jsonplaceholder

fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        userID: 2,
        title: "Vamos para a festa de amanhã!",
        body: "Quero ir com a minha família e amigos!"
    })
})

.then(response => response.json())
.then(json => console.log(json))