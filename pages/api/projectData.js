const projects = [
    {
        id : "project_1",
        name: "Utepils",
        description: "Lorem ipsum masse bs som ingen bryr seg om egt...",
        src: "/utepils.png",
        alt : "project screenshot",
        url : 'https://github.com/Andreas-Espelund/Utepils',
        tech : ['Kotlin','Android studio', 'Jetpack Compose','Figma','Google Cloud',]
    },
    {
        id : "project_2",
        name: "Jackbow Website",
        description: "Lorem ipsum masse bs som ingen bryr seg om egt...",
        src: "/jackbow.jpg",
        alt : "project screenshot",
        url : 'https://github.com/Andreas-Espelund/Utepils',
        tech : ['React','Javascript', 'Css','Tailwind','Html',]
    },
    {
        id : "project_3",
        name: "Munchees - Web app",
        description: "Lorem ipsum masse bs som ingen bryr seg om egt...",
        src: "/munchees.png",
        alt : "project screenshot",
        url : 'https://github.com/Andreas-Espelund/Utepils',
        tech : ['Kotlin','Android studio', 'Jetpack Compose','Figma','Google Cloud',]
    },
]

export function getProjectById(id){
    return projects.find(x => x.id === id)
}

export function getAllProjects(){
    return projects
}