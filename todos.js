/* const listAllTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then(data =>  console.log(data))
} */

// 1 - Exibir um obj com qtd e data
/* const listAllTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then(data => console.log({
            qtd: data.length,
            data: data
        }))
} */

// 2 - Exibir um obj com qtd e data somente de um usuário específico
/* const listAllTodosByIdUser = (id) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then(data => {
            let dataFiltered = data.filter(i => i.userId === id )
            console.log({
                qtd: dataFiltered.length,
                data: dataFiltered
            })
        })
} */
//listAllTodosByIdUser(10);

// 3 - Exibir um obj com qtd e data somente de um id específico
/* const listAllTodosById = id => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data =>  console.log(data) )
} */


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


// 5 - Atualizar o post com o id 54

fetch('https://jsonplaceholder.typicode.com/posts/54', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        userId: 10,
        title: "Titulo Post atualizado",
        body: "Body post atualizado!"
    })
})
    .then(response => response.json())
    .then(json => console.log(JSON.stringify(json, null, 4) ))    


// 6 - Atualizar o post com o id 54

fetch('hthttp://jsonplaceholder.typicode.com/posts/54', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
   },
   body: JSON.stringify({
    title: "Título Post ataulizado",
   })
})


// 7 - Deletar o post com o id 22

fetch('hthttp://jsonplaceholder.typicode.com/posts/22', {
    method: 'DELETE',
})
.then(response => response.json())
.then(json => console.log(JSON.stringify(json, null, 4)))