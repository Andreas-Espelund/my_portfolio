const placeholder_description = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis scelerisque nibh, eget dignissim sem. Quisque ultrices congue pellentesque. Mauris quis sollicitudin augue. Aenean accumsan libero at porta dapibus. Ut ornare non odio quis fermentum. Ut eget urna nisl. Duis nec orci in nunc consequat tristique. Fusce ultrices sem ex, ut egestas nibh lacinia ac\
Praesent aliquet mauris tortor, in vestibulum magna sagittis in. In ac arcu at mi vestibulum placerat vel et lectus. Vivamus in ipsum id urna tempor sagittis. Sed tristique felis turpis, vel consequat est posuere sit amet. Integer sit amet pharetra mi, eget vulputate augue. In hac habitasse platea dictumst. Curabitur commodo, elit tristique pellentesque scelerisque, mi velit finibus elit, sit amet sagittis nunc augue nec justo. Donec in lorem a tellus varius aliquam vitae vitae quam."]

const projects = [
    {
        id : "project_1",
        name: "Utepils",
        description: [
            "Utepils is an android app that has a few different features, all centered around Utepils. It shows you nearby bars, resturants and nightclubs where you can get a beer. To achive this we used the Google Places API. The app also reccomends drinks and beers based on the current weather. The weather data is from the MET api.",
            "The app was made in the software engineering course IN2000 at UiO. The group consisted of three developers and three designers and the project lasted for one semester where we learned about software engineering generally and android developement. We got to try agile software developement and got some valueable experience.",
            "During this project i learned how to make android apps, the 'old' way, and using Jetpack Compose. I also learned how to fetch data from APIs parse it to objects. Working together with developers and designers on a larger project also improved my teamworking skills and communication skills.",
        ],
        oneliner : 'Beer based on the weather',
        src: "/utepils.png",
        type : 'android',
        color: '#92ad89',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/Utepils',
        page_url : null,
        tech : ['Kotlin','Android studio', 'Jetpack Compose','Figma','Google Cloud', 'Jira'],
        lessons: ['Android developement', 'Jetpack compose', 'Using design patterns', 'Unit & integration-testing']
    },
    {
        id : "invoice",
        name: "Cash in",
        description: [
            "I needed to send an invoice, but didnt like any of the free invoicing services i could find online, so i decided to make my own."
        ],
        oneliner : 'Ca ching',
        src: "/cashin.png",
        type : 'web',
        color: '#377AA4',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/todo-list',
        page_url : 'https://todo-list-psi-lac.vercel.app/',
        tech : ['Javascript','React', 'Firebase', 'Next','Tailwind','Html','Css', 'Fleet'],
        lessons: ['Using firebase for authentication', 'Persistent storage with firestore', 'More advanced API usage']
    },
    {
        id : "jackbow_website",
        name: "Jackbow",
        description: [
            "This is a landing page for the band jackbow with the main goal of gathering all important information for their fans in one place. Such as links to social media, streaming services, their merch shop and it also has a lot of images from live shows. There is also a form that uses email-js to allows booking agencies, venues or festivals to get in touch with the band.    ",
            "I learned more about react and react-hooks as well as navigation using Next.js. I also switched to Typescript for this procjet to expand my arsenal of programming languages. This is the first time i have made a form or handeled any user input on a webpage, wich was very useful. I also used tailwind to style the page, wich i'm liking more and more."
        ],
        oneliner : 'Landing page for a band',
        src: "/jackbow.jpg",
        type : 'web',
        color: '#18181B',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/jackbow-website',
        page_url : 'https://www.jackbowband.com/',
        tech : ['React','Javascript', 'Typescript', 'Css','Next','Tailwind','Html', 'Vscode'],
        lessons: ['Page navigation', 'Making forms', 'Styling with tailwind CSS', 'Next.js']
    },
    {
        id : "skaara",
        name: "Skaara living",
        description: [
            "Munchees was made in a couple of hours as a 'test'-project for making a simple web app. It's my first proper working web-app built with react and javascript. It was also the first website i made with API fetching.",
            "I learned how to make, build and deploy a site made with react. I also improved my css skills and made the site responsive."
        ],
        oneliner : 'Cabin rental webpage',
        src: "/skaara.jpg",
        type : 'web',
        color: '#EF9068',
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/munchees',
        page_url : 'https://skaara-living.vercel.app/',
        tech : ['React','Javascript', 'Css', 'Node','Html', 'Webstorm'],
        lessons: ['Fetching from API in javascript', 'Simple styling with css', 'Publishing a webpage']
    },
    
]

function getProjectById(id){
    return projects.find(x => x.id === id)
}

export { projects, getProjectById}