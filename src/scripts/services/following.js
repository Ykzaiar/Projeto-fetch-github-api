import { baseUrl } from "../variables.js"

async function getFollowing (userName) {
    const response = await fetch(`${baseUrl}/${userName}/following`)
    return await response.json()
}

export { getFollowing }