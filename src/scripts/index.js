import { getUser} from './services/user.js'
import { getRepos} from './services/repositories.js'
import { getEvents} from './services/events.js'
import { getFollowers} from './services/followers.js'
import { getFollowing} from './services/following.js'
import { user} from './objects/user.js'
import { screen } from './objects/screen.js'


document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName);
   
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13
    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return
        getUserData(userName);
    }
})

function validateEmptyInput(userName) {
     if (userName.length === 0) {
            alert('Preencha o campo com o nome do usuário')
            return true
        }
}

async function getUserData(userName) {
     const userResponse = await getUser(userName)
     if (userResponse.message === 'Not Found') {
         alert('Usuário não encontrado')
         return
     }
     const repositoriesResponse = await getRepos(userName)
     const eventsResponse = await getEvents(userName)
     const filteredEvents = eventsResponse.filter(event=>
        event.type === 'PushEvent' || event.type ==='CreateEvent'
    );
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

     screen.renderUser(user)
}