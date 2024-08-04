type UserRole = "guest" | "member" | "admin"

type User = {
    id: number,
    username: string,
    role: "member" | "contributor" | "admin",
}

type UpdatedUser = Partial<User> // This will make all properties of User optional

let nextUserId = 1

const users: User[] = [
    { id: 1, username: "john_doe", role: "member" },
    { id: 2, username: "jane_doe", role: "admin" },
    { id: 3, username: "guest_user", role: "guest" },
];


function fetchUserDetails(username: string): User | undefined {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

function updateUser(id: number, updates: UpdatedUser) {
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        console.error("User not found!")
        return
    }
    Object.assign(foundUser, updates)
}

function addNewUser(newUser: Omit<User, "id" | "user">): User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user
}

addNewUser({ username: "joe_schmoe", role: "member" })

console.log(users)

updateUser(1, { username: "new_john_doe" });
updateUser(4, { role: "contributor" });

console.log(users)
