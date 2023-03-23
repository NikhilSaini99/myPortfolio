import html from '../images/SkillsImg/html-5.svg'
import css from '../images/SkillsImg/css3.svg'
import javascript from '../images/SkillsImg/javascript.svg'
import react from '../images/SkillsImg/react.svg'
import git from '../images/SkillsImg/git.svg'
import mui from '../images/SkillsImg/material-ui.svg'
import redux from '../images/SkillsImg/redux.svg'


 
import youtube_img from '../images/ProjectImg/Youtube_Clone.webp'
import netflix_img from '../images/ProjectImg/Netflix_Clone.webp'
import eCommerce_img from '../images/ProjectImg/eCommerce.png'

import linkedin from '../images/Socials/linkedin.svg'
import github from '../images/Socials/github.svg'
import twitter from '../images/Socials/twitter.svg'

export const skillsImg = [
    {
        name: 'Html',
        icon: html
    },
    {
        name: 'CSS',
        icon: css
    },
    {
        name: 'Javascript',
        icon: javascript
    },
    {
        name: 'React',
        icon: react
    },
    {
        name: 'Material UI',
        icon: mui
    },
    {
        name: 'Git Version Control',
        icon: git
    },
    {
        name: 'Redux Toolkit',
        icon: redux
    },
]


export const projects_data = [
    {
        name:'Youtube Clone',
        img : youtube_img,
        description:'Youtube Clone App using React.js,MUI,React-Router. Used Youtube v3(API) for fetching all the data and more..',
        sourceCode:"https://github.com/NikhilSaini99/Youtube_Clone",
        liveDemo:'https://youtubeclone9.netlify.app/'
    },

    {
        name:'Netflix Clone',
        img : netflix_img,
        description:'Netflix Clone App using React.js,MUI,React-Router,Google authentication to login and Used TMDB Api database to fetch all the movie details and video ID and more..',
        sourceCode:"https://github.com/NikhilSaini99/netflixclone",
        liveDemo:"https://netflixclone-application.netlify.app/",
    },

    {
        name:'eCommerce Site',
        img : eCommerce_img,
        description:'Build an Ecommerce using React, MUI, React-router-DOM, used Redux Toolkit to manage the overall state flow, added Google login authentication using (OAuth2 - client Id to authenticate)',
        sourceCode:"https://github.com/NikhilSaini99/TechShop",
        liveDemo:"https://techshop9.netlify.app/",
    },
]


export const socials=[
    {
        name:'Linkedin',
        icon:linkedin,
        url:"https://www.linkedin.com/in/nikhilsaini99/"
    },
    {
        name:'Git-Hub',
        icon:github,
        url:'https://github.com/NikhilSaini99'
    },
    {
        name:'Twitter',
        icon:twitter
    }

]