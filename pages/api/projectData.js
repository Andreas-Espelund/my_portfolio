const placeholder_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis scelerisque nibh, eget dignissim sem. Quisque ultrices congue pellentesque. Mauris quis sollicitudin augue. Aenean accumsan libero at porta dapibus. Ut ornare non odio quis fermentum. Ut eget urna nisl. Duis nec orci in nunc consequat tristique. Fusce ultrices sem ex, ut egestas nibh lacinia ac\
Praesent aliquet mauris tortor, in vestibulum magna sagittis in. In ac arcu at mi vestibulum placerat vel et lectus. Vivamus in ipsum id urna tempor sagittis. Sed tristique felis turpis, vel consequat est posuere sit amet. Integer sit amet pharetra mi, eget vulputate augue. In hac habitasse platea dictumst. Curabitur commodo, elit tristique pellentesque scelerisque, mi velit finibus elit, sit amet sagittis nunc augue nec justo. Donec in lorem a tellus varius aliquam vitae vitae quam."

const projects = [
    {
        id : "project_1",
        name: "Utepils",
        description: placeholder_description,
        src: "/utepils.png",
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/Utepils',
        page_url : null,
        tech : ['Kotlin','Android studio', 'Jetpack Compose','Figma','Google Cloud',]
    },
    {
        id : "jackbow_website",
        name: "Jackbow Website",
        description: placeholder_description,
        src: "/jackbow.jpg",
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/jackbow-website',
        page_url : 'https://www.jackbowband.com/',
        tech : ['React','Javascript', 'Css','Tailwind','Html',]
    },
    {
        id : "project_3",
        name: "Munchees",
        description: placeholder_description,
        src: "/munchees.png",
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/munchees',
        page_url : 'munchees.vercel.app',
        tech : ['Kotlin','Android studio', 'Jetpack Compose','Figma','Google Cloud',]
    },
    {
        id : "todo_list",
        name: "Todo list",
        description: placeholder_description,
        src: "/todolist.jpg",
        alt : "project screenshot",
        github_url : 'https://github.com/Andreas-Espelund/todo-list',
        page_url : 'do-list-psi-lac.vercel.app',
        tech : ['Javascript','React', 'Firebase','Tailwind','Html','Css']
    },
]

export function getProjectById(id){
    return projects.find(x => x.id === id)
}

export function getAllProjects(){
    return projects
}