// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await response.json();
        const newUsers = data.map(user => user.name);
        console.log(newUsers);
    } catch (error) {
        console.log(error);
    }
}
getUser();