function getUsers(){
    var xttp=new XMLHttpRequest();
    xttp.open("GET",'/users');
    xttp.send()

    xttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            console.log(this.responseText)
            var response=JSON.parse(this.responseText)
            var htmlStr = "";
            response.forEach((data, index) => {
                htmlStr += `<tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.age}</td>
                    <td>${data.class}</td>
                    <td>${data.isStudent}</td>
                </tr>`;
            });
    
            document.getElementById('usersTable').innerHTML=htmlStr;

            //<td>${data.movies()}</td> also worked in testing

        }
    }
}

function postUsers(){
    var id = document.getElementById('user_id').value
    var name = document.getElementById('user_name').value
    var age = document.getElementById('user_age').value
    var userClass = document.getElementById('user_class').value
    var isStudent = document.getElementById('isStudent').value

    console.log(id,name,age,userClass)
    

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/users");
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(`name=${name}&age=${age}&Uclass=${userClass}&isStudent=${isStudent}`);
    xhttp.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            console.log('all ok')
            getUsers()
        }
    }
    

}

function getUser(){
    var name = document.getElementById('user_name_searched').value
    var xhttp=new XMLHttpRequest();
    xhttp.open("GET",'/users/'+name);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send(`name=${name}`);
    console.log('searching name');

    xhttp.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            console.log(this.responseText)
            var response=[JSON.parse(this.responseText)]
            var htmlStr = "";

            response.forEach((data, index) => {
                htmlStr += `<tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.age}</td>
                    <td>${data.class}</td>
                    <td>${data.isStudent}</td>
                </tr>`;
            });
            document.getElementById('usersTable').innerHTML=htmlStr;

        } else {
            document.getElementById('usersTable').innerHTML='NOT FOUND'
        }



    }
}
