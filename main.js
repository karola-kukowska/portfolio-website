//Hero animation
const typedTextElement = document.getElementById('typed-text');
const textToType = "Hi, I'm Karola!";
let charIndex = 0;

function type() {
    if (charIndex < textToType.length) {
        typedTextElement.innerHTML = textToType.substring(0, charIndex + 1) + '<span class="typed-cursor">|</span>';
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteText, 3000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typedTextElement.innerHTML = textToType.substring(0, charIndex - 1) + '<span class="typed-cursor">|</span>';
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        typedTextElement.innerHTML = '<span class="typed-cursor">|</span>';
        setTimeout(type, 1000);
    }
}

type();

//Menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinksMobile = document.getElementById('nav-links-mobile');

menuToggle.addEventListener('click', () => {
    navLinksMobile.classList.toggle('hidden');
    navLinksMobile.classList.toggle('flex');
});

// Hide the mobile menu on resize if the screen is large enough
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) { // Assuming 768px is your md breakpoint
        navLinksMobile.classList.add('hidden');
        navLinksMobile.classList.remove('flex');
    }
});

//Project list

const projects = [
    {
        name: 'flixx',
        img: '/img/project1.webp',
        description: 'A searchable movie database using IMBD Web API.',
        link: "https://melodic-pegasus-d2137a.netlify.app/"
    },
    {
        name: 'solidana',
        img: '/img/project3.webp',
        description: 'Accounting business website with Tailwind',
        link: 'https://solidana.co.uk/'
    },
    {
        name: 'tours',
        img: '/img/project5.webp',
        description: 'Travel agency example site with React',
        link: 'https://tours-backroads-preview.netlify.app/'
    },
    {
        name: 'Say-it',
        img: '/img/project2.webp',
        description: 'For ESL learners with Web Speech API',
        link: 'https://say-it-app.netlify.app/'
    },
    {
        name: 'E-Commerce',
        img: '/img/project4.webp',
        description: 'Online store with shopping cart in React',
        link: 'https://react-store-preview.netlify.app/'
    },
    {
        name: 'Pizza',
        img: '/img/project6.webp',
        description: 'Order form for a pizza joint',
        link: 'https://pizzeria-za-rogiem.netlify.app/'
    },
    {
        name: 'Color Generator',
        img: '/img/project7.webp',
        description: 'Generate all shades of any chosen color',
        link: 'https://color-generator-preview.netlify.app/'
    },
    {
        name: 'Sliding menu',
        img: '/img/project10.webp',
        description: 'Smooth animated sliding menu',
        link: 'https://cool-submenus-preview.netlify.app/'
    },
    {
        name: 'CMS',
        img: '/img/project9.webp',
        description: 'Aggregate site for smaller projects',
        link: 'https://grand-gumption-71759f.netlify.app/'
    },
    {
        name: 'Clock',
        img: '/img/project11.webp',
        description: 'Analog clock animated with iFrames',
        link: 'https://serene-rolypoly-a68042.netlify.app/'
    },

    {
        name: 'Cafe Menu',
        img: '/img/project8.webp',
        description: 'Filtered menu in React with custom API',
        link: 'https://cafe-menu-preview.netlify.app/'
    },
]
const projectList = document.getElementById('project_list');
projects.forEach(project => {
    const item = document.createElement('div');
    item.innerHTML =
        `
                <a href="${project.link}" class="block h-full flex-auto border border-white border-2 backdrop-blur-md backdrop-brightness-80 transition transform hover:scale-105 hover:brightness-110" target="_blank">
                    <div class="mb-0">
                        <img src=${project.img} alt="project image" class="w-full object-cover aspect-video">
                    </div>
                    <div class="px-6 py-4">
                        <h3 class="text-2xl font-semibold text-white uppercase">${project.name}</h3>
                        <p class="mt-4 text-lg">${project.description}</p>
                    </div>
                </a>
            `
    projectList.appendChild(item);
})

//Insert current year
document.getElementById("year").innerText = new Date().getFullYear();