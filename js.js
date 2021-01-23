const cards = document.getElementById("cards");
console.log(cards);

// Display projects
const projects = [
    {
        id: 0,
        name: "Kwurty Portfolio",
        tools: [
            "js",
            "html",
            "sass"
        ],
        description: "This website. Developed using JS, HTML, CSS",
        imageActive: "https://via.placeholder.com/300x500",
        image: "https://via.placeholder.com/300x500",
        github: 'https://github.com',
        url: '#'
    },
    {
        id: 1,
        name: "PokeVue",
        tools: [
            "html",
            "css",
            "vuejs"
        ],
        description: "A PokeDex style web application making API calls to the PokeAPI.",
        image: "https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg",
        imageActive: "https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg",
        github: 'https://github.com',
        url: '#'
    },
    {
        id: 2,
        name: "Steam Game Finder",
        tools: [
            "js",
            "vue",
            "node"
        ],
        description: "Simple web application to find what games you and your friends have in common.",
        image: "https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg",
        imageActive: "https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg",
        github: 'https://github.com',
        url: '#'
    },
    {
        id: 3,
        name: "CodeWars",
        tools: [
            "js"
        ],
        description: "My collection of solved CodeWars",
        image: "https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg",
        imageActive: "https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg",
        github: 'https://github.com',
        url: '#'
    },
    {
        id: 1,
        name: "Some Example",
        tools: [
            "js",
            "vue",
            "node"
        ],
        description: "Some example application",
        image: "https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg",
        imageActive: "https://johannlurf.net/%E2%98%85/johann_lurf_starfilm08.jpg",
        github: 'https://github.com',
        url: '#'
    }
]

projects.forEach(project => {
    let tools = ''
    project.tools.forEach(tool => {
        tools += `<i class="fab fa-${tool} fa-3x"></i>`
    })
    let html = `
        <div class="card" style="background-image: url(${project.image})">
            <div class="card-overlay-text">
            ${project.name} 
            </div>
            <div class="card-overlay-subtext">
            ${project.description}
            </div>
            <div class="card-overlay-tools">
            <ul>
            ${tools}
            </ul>
            <br>
            <div class="card-overlay-buttons">
            <a class="button-large href=${project.url}> View </a>
            <a class="button-large href=${project.github}> GitHub </a>
            </div>
            </div>
        </div>
    `
    cards.innerHTML += html;
})