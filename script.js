users = JSON.parse(localStorage.getItem('users'))
if(users == null || users == undefined){
    users =[]
}        
        function displayUsers(){
            usersPlaceholder = ''

            if(users == null || users == undefined){
                users = []
            }

            for (i=0;i <users.length;i++){
                usersPlaceholder +=`<div class="user-card">
                <img src="./images/${users[i].pics}.jpg" style="max-width:100px;"/><br>
                <strong>Full Name</strong>: ${users[i].fullName}<br>
                <strong>Email</strong>: ${users[i].email}<br>
                <strong>Phone</strong>:${users[i].phone}<br>
                <button onClick = "editUser(${i})">Edit</button><button onClick = "deleteUser(${i})">Delete</button>
                </div>`
                }

                document.getElementById('users').innerHTML = usersPlaceholder
        }

        function addNewUser(){
            let newUser = {
                fullName: document.getElementById('fullname').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                pics: document.getElementById('pics').value
            }

            if(document.getElementById('index').value !="" || newUser.fullName=='' || newUser.email=='' || newUser.phone =='' || newUser.pics==''){
                console.log('Empty')
            }else{
                console.log('new user',newUser)
                users.push(newUser)
                localStorage.setItem('users', JSON.stringify(users))
                document.getElementById('index').value=""
                document.getElementById('fullname').value =""
                document.getElementById('email').value =""
                document.getElementById('phone').value =""
                document.getElementById('pics').value =""

                displayUsers()
            }
        } 

        function deleteUser(id){
            users = JSON.parse(localStorage.getItem('users'))
            users.splice(id,1)
            localStorage.setItem('users',JSON.stringify(users))
            displayUsers()
        }

        function editUser(id){
            users = JSON.parse(localStorage.getItem('users'))

            document.getElementById('index').value = id
            document.getElementById('fullname').value = users[id].fullName
            document.getElementById('email').value = users[id].email
            document.getElementById('phone').value = users[id].phone
            document.getElementById('pics').value = users[id].pics

            // document.getElementById('update').classList.remove('invisible')
            // document.getElementById('add-todo').classList.add('invisible')
        }

        function updateUser(){
            let edittedUser = {
                fullName: document.getElementById('fullname').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                pics: document.getElementById('pics').value
            }

            if(document.getElementById('index').value == "" || edittedUser.fullName== '' || edittedUser.email== '' || edittedUser.phone == '' || edittedUser.pics== '' ){
                console.log('Empty')
            }else{
                // document.getElementById('update').classList.add('invisible')
                // document.getElementById('add-todo').classList.remove('invisible')
                            
            
                users = JSON.parse(localStorage.getItem('users'))
                users[document.getElementById('index').value] = edittedUser
                localStorage.setItem('users', JSON.stringify(users))

                document.getElementById('index').value=""
                document.getElementById('fullname').value =""
                document.getElementById('email').value =""
                document.getElementById('phone').value =""
                document.getElementById('pics').value =""
                
                displayUsers()
            }
        }

        // ##############[   SEARCH   ]#####################################

        function search() {
            param = document.getElementById('searchItems').value;
            document.getElementById('searchItems').value = "";

            usersObject = users.find( user => user.fullName.toLowerCase() === param.toLowerCase());
            if (usersObject == undefined || usersObject == null) {
            alert(`No record found for ${param}`);
            } else {
                users = [usersObject]

                displayUsers();
            }
        }

        function searchAll() {
            param = document.getElementById('searchItems').value;
            document.getElementById('searchItems').value = "";
            usersObject = users.filter(x => x.fullName.toLowerCase() === param.toLowerCase());
            if (usersObject == undefined || usersObject == null) {
                alert(`No record found for ${param}`);
            } else {
                users = usersObject

                displayUsers();
            }
        }

        function searchPartMatch() {
            param = document.getElementById('searchItems').value;
            usersObject = users.filter(x => x.fullName.toLowerCase().includes(param.toLowerCase()));
            if (usersObject == undefined || usersObject == null) {
                alert(`No record found for ${param}`);
            } else {
                users = usersObject

                displayUsers();
            }
        }

        // console.log(localStorage.getItem('users'))
        // // with localstorage,
        
        // delete item, delete all

        // addEventListener('DOMContentLoaded', displayUsers)
        displayUsers()