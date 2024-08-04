type User = {
    userName: string,
    userRole: "guest" | "member" | "admin",
}

type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "member"
