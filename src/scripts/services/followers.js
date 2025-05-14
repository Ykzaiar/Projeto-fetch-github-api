import { baseUrl } from "../variables.js"

async function getFollowers (userName) {
    const response = await fetch(`${baseUrl}/${userName}/followers`)
    return await response.json()
}

export { getFollowers }