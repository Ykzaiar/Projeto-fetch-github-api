const screen = {
userProfile: document.querySelector('.profile-data'),
renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="User Avatar" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                                            <p>👥 ${user.followers} seguidores</p>
                                            <p>👥 ${user.following} seguindo</p>
                                        </div>
                                    </div>`
    let repositoriesItens = ''
    user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
         <div class="repo-stats">
                 <span>🍴 ${repo.forks}</span>
                 <span>⭐ ${repo.stars}</span>
                 <span>👀 ${repo.watchers}</span>
                 <span>👩‍💻 ${repo.language ?? 'N/A'}</span>
             </div>
         </a></li>`)
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                           <h2>Repositórios</h2>
                                           <ul>${repositoriesItens}</ul>
                                           </div>`
        }
        if (user.events.length > 0) {
            let eventsItens = ''
            user.events.forEach(event => {
                if (event.type === 'PushEvent'){
                    const commitMessage = event.commits.length > 0 ? event.commits [0].message : 'Sem mensagem de commit';
                    eventsItens += `<li>${event.repoName} - Commit: "${commitMessage}"</li>`;
                }
                else if (event.type === 'CreateEvent'){
                    eventsItens += `<li>${event.repoName} - Não possui commits</li>`;
                }
            });
            this.userProfile.innerHTML += `<div class="events section">
                                           <h2>Eventos</h2>
                                           <ul>${eventsItens}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }