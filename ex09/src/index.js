 //Only change code belowe this line
    //user nested array with four objects start here
    var users = [
        { id:1,firstName: "John", lastName: "Doe", age: 24, gender: "male " },
        { id:2,firstName: "Jane", lastName: "Doe", age: 5, gender: "female " },
        { id:3,firstName: "Jim", lastName: "Carrey", age: 54, gender: "male " },
        { id:4,firstName: "Kate", lastName: "Winslet", age: 40, gender: "female " },
    ]
    //user nested array with four objects ends here
    //getUser function - list of users starts here
    function getUsers(){
        var output = [];
        for (let i = 0; i < users.length; i++) {
            output += (`${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`+"\n");
            
        }
        return output;
    }
    //getUser function - list of users ends here
    //findUserById(id) function start here
    function findUser(lastname, gender){
       var user ="";
       var laName="" ;
       var gen="";
        try {
            for (let i = 0; i < users.length; i++) { 
                laName = `${users[i].lastName}`;
                gen = `${users[i].gender}`;  
                if (laName == lastname && gen == gender) {
                    console.log("u ifu"+user)
                    user = `${users[i].firstName} ${users[i].lastName} is ${users[i].age}, ${users[i].gender}`;
                  
                 }              
               
            }           
                      
            //br
        } catch (error) {
            return "Cannot read property 'firstName' of undefined";
        }
        return "user je"+user;
    }
    //findUserById(id) function ends here    
//Only change code belowe this line
getUsers();
console.log(findUser("Doe","male"));


//findUSerById();//Change this line    
module.exsports = findUser;
