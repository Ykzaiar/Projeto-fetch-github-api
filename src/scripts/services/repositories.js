import { baseUrl, repositoriesQuantity} from '../variables.js'

async function getRepos(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return response.json();
}


export { getRepos }