let givenProfile = ""
let profileName = ""
let profileId = ""
let profileLink = ""
let profileRepos = ""

let fetchProfile = async () => {
    try {
        let fetchedData
        if (profileName != "") {
            await fetch(`https://api.github.com/users/${profileName}`)
            .then((response)=>response.json())
            .then((data) => (fetchData = data))
            profileName = fetchData.login
            profileId = fetchData.profileId
            profileLink = fetchData.profileLink
            profileRepos = fetchData.public_repos
        }
    } catch (error) {
        console.error
    }
}
function renderPage() {
    document.getElementById("gitdata").innerHTML = `
    
    `
}