
// // Async - Await

console.log("start");

const serverStatus = true;

const login = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(serverStatus) {
                resolve( { username: username, email: "info@wediacorp.com" } )
            } else {
                reject("Server is offline");
            }
        },1000);
    })            
}

const getPostsByUsername = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["post 1","post 2","post 3"]);
        }, 2000)
    })
}

const getPostDetails = (post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("post details");
        }, 1000)
    })           
}


async function displayUser() {
    try {
        const user = await login("Tooxty", "12345");
        console.log(user);

        const posts = await getPostsByUsername(user.username);
        console.log(posts);

        const details = await getPostDetails(posts[0]);
        console.log(details);
    }
    catch(err) {
        console.log(err);
    }

}

displayUser();

console.log("end");


