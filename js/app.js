function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
}


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //...> json a convert kortasa
    .then(data => displayUsers(data)); //...> data ta pacchi sei ta display users ka pathasse 
}

function displayUsers(data){
        console.log(data);
}
