import {writeFileSync,readFileSync} from 'node:fs'

const users = [{name: 'Andrew Myton', email: 'amyton@osu.edu'}]
const usersJson = JSON.stringify(users)

writeFileSync('backend/users.json',usersJson)

const readUsersJson = readFileSync('backend/users.json')
const readUsers = JSON.parse(readUsersJson)

console.log(readUsers)