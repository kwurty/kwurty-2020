const cards = document.getElementById("cards");

// Display projects
const projects = [
    
    {
        id: 0,
        name: "PokeVue",
        tools: [
            "sass",
            "vuejs"
        ],
        description: "A basic Pokemon index. View and search for Pokemon to view their details. Built using VueJS, ExpressJS, and the PokeAPI.",
        image: "./img/pokedex.png",
        github: 'https://github.com/kwurty/pokedex',
        url: '#'
    },
    {
        id: 1,
        name: "Steam Game Finder",
        tools: [
            "vuejs",
            "node-js"
        ],
        description: "Simple web application to find what games you and your friends have in common on Steam. Built using VueJS, ExpressJS, and the Steam API",
        image: "./img/steam.png",
        github: 'https://github.com/kwurty/steamfriends',
        url: '#'
    },
    {
        id: 2,
        name: "Spotify Artists",
        tools: [
            "vuejs",
            "node-js"
        ],
        description: "Create playlists based on artists rather than their songs. Keep track of the artists you like based on your mood, genre, or anything you want! Built with VueJS, ExpressJS, MongoDB, and the Spotify API. ",
        image: "./img/spotify.png",
        github: 'https://github.com/kwurty/artist-organizer',
        url: '#'
    },
    {
        id: 3,
        name: "Kwurty Portfolio",
        tools: [
            "js",
            "html5",
            "sass"
        ],
        description: "My portfolio built to house my projects. Built with simple HTML, Javascript, and SASS.",
        image: "./img/portfolio.png",
        github: 'https://github.com/kwurty/kwurty-2020',
        url: 'https://kwurty.com'
    },
    {
        id: 4,
        name: "Stock Trades",
        tools: [
            "vuejs"
        ],
        image: './img/stocks.png',
        description: "A final project done for a VueJS course. A simple stock game where you buy/sell stocks.",
        url: 'https://kwurty.github.io/vuejs-final-project/',
        github: 'https://github.com/kwurty/vuejs-final-project'
    }
]

projects.forEach(project => {
    let tools = ''
    project.tools.forEach(tool => {
        tools += `<i class="fab fa-${tool} fa-3x"></i>`
    })
    let html = `
        <div class="project">
        <div class="project__item project__item--body">
        <h2>${project.name}</h2>
        <p>
            ${project.description}
        </p>
        <p>
        ${tools}
        </p>
        <p>
        <button class="btn github"> GitHub </button>
        <button class="btn demo"> Demo </button>
        </p>
        </div>
        <div class="project__item project__item--figure">
        <img src="${project.image}" alt="">
        </div>
    </div>
    `
    cards.innerHTML += html;
})

const btn = document.getElementById("theme-switch")
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.value == "dark-mode") {
      sun.classList.remove("visible");
      moon.classList.add("visible");
  } else {
      moon.classList.remove("visible");
      sun.classList.add("visible");
  }
  setDimensions();
  animate();
})

const canvas = document.getElementById("header-canvas");
const c = canvas.getContext("2d");
const header = document.getElementById("header");
let width = header.offsetWidth;
let height = header.offsetHeight;
let circles = [];
let stars = [];
let colors = ["255, 255, 255"]


function setDimensions() {
    width = header.offsetWidth;
    height = header.offsetHeight;
    canvas.width = width;
    canvas.height = height;
}

function Star(x, y, radius, opacity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.opacity = opacity;

    this.draw = function() {
        c.beginPath();
        c.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")"; 
        c.lineWidth = Math.random() * 10;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
    }
}

//Circle Prototype
function Circle(x, y, radius, yd, xd, hue) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.yd = yd;
    this.xd = xd;
    this.hue = hue;
    this.outerAlpha = 0;
    this.flying = false;
    this.flyTime = 0;

    this.draw = function () {
        c.beginPath();
        c.fillStyle = `rgba(${this.hue},${this.outerAlpha})`;
        c.lineWidth = 1;
        c.strokeStyle = `rgba(${this.hue},${this.outerAlpha - .4})`;
        c.moveTo(this.x, this.y);
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.lineTo(this.x + this.xd * this.flyTime, this.y - this.yd * this.flyTime);
        c.stroke();
        c.fill();
    };

    // control the circle movement
    this.update = function () {
        let rng = Math.floor(Math.random() * 300)
        if (rng === 0 && !this.flying && this.outerAlpha <= 0) {

            this.flyTime = 0;
            this.flying = true;
            this.y = Math.random() * (height);
            this.x = Math.random() * (width - radius * 2) + radius
        }
        if (this.flying) {
            this.outerAlpha = Math.random() * (.7 - .51) + .51;
            this.x -= this.xd;
            this.y += this.yd;
            this.flyTime++
        }
        if (this.y > height) {
            this.outerAlpha -= .008;
            this.flying = false;
        }
        this.draw();
    };
}

//Generate Circles
function createCircle(count) {
    for (let i = 0; i < count; i++) {
        let radius = Math.random() * 2,
            x = Math.random() * (width - radius * 2) + radius,
            y = 0,
            xd = Math.random() * (10 - 8) + 8,
            yd = Math.random() * (7 - 5) + 5,
            hue = colors[0];
        circles.push(new Circle(x, y, radius, yd, xd, hue));
    }
}

function createStars(count){
    for (let i = 0; i < count; i++) {
        let radius = Math.random() * 3,
            x = Math.random() * (width - radius * 2) + radius,
            y = Math.random() * (height - radius * 2) + radius,
            opacity = Math.random();
            stars.push(new Star(x,y,radius,opacity));
    }
}
function animate() {
    if(document.body.classList.value == "dark-mode") {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, width, height);
        circles.forEach(circle => {
            circle.update();
        });
        stars.forEach(star => {
            star.draw();
        })
    } else {
        c.clearRect(0, 0, width, height);
    }
}

setDimensions();
createCircle(6);
createStars(300);
animate();
window.addEventListener("resize", setDimensions);
