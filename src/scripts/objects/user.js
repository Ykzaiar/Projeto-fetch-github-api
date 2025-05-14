const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories.map(repo => ({
            name: repo.name,
            html_url: repo.html_url,
            forks: repo.forks_count,
            stars: repo.stargazers_count,
            watchers: repo.watchers_count,
            language: repo.language
        }))
    },
    setEvents(events) {
        this.events = events.map(event => ({
            type: event.type,
            repoName: event.repo.name,
            commits: event.payload.commits || []
    }))
}
}

export { user }