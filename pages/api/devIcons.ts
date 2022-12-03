const dev_icons = {
    'Javascript' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    'Html' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    'Css' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    'Tailwind' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    'React' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    'Firebase' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    'Typescript' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    'Java' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    'Python' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    'Psql' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    'Kotlin' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    'Android studio' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
    'C' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    'Vscode' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    'Figma' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    'Webstorm' : "https://upload.wikimedia.org/wikipedia/commons/c/c0/WebStorm_Icon.svg",
    'Google Cloud' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    'Jetpack Compose' : "/jetpack_compose.svg",
    'Next' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    'Jira' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    'Node' : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"


  
  }

export function getIcon(key: string){
    return dev_icons[key]
}