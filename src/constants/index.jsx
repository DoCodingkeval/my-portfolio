import {
    IconBrandSass,
} from '@tabler/icons-react';

const navLinks = [
    {
        id: 1,
        name: 'home',
        href: 'hero',
    },
    {
        id: 2,
        name: 'skills',
        href: 'skill',

    },
    {
        id: 3,
        name: 'about',
        href: 'about',
    },
    {
        id: 4,
        name: 'projects',
        href: 'project',
    },
    {
        id: 5,
        name: 'contact',
        href: 'contact',
    },
];

const socialLinks = [
    {
        id: 1,
        href: 'https://github.com/DoCodingkeval',
        title: 'Github',
        icon: (
            <svg className='group-hover:stroke-black transition duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#fff" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" />
                <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" />
            </svg>
        )
    },
    {
        id: 2,
        href: 'https://www.linkedin.com/in/keval-gohel-599b28310',
        title: 'Linkedin',
        icon: (
            <svg className='group-hover:stroke-black transition duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#fff" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" />
                <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" />
                <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" />
            </svg>
        )
    },
    {
        id: 3,
        href: 'mailto:gohelkeval7@gmail.com',
        title: 'Mail',
        icon: (
            <svg className='group-hover:stroke-black transition duration-300 ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#fff" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5" />
                <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" />
            </svg>
        )
    }
];

const coreSkills = [
    {
        id: 1,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#323232" fill="none" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.7685 3H8.23147C6.06757 3 4.98562 3 4.39152 3.70888C3.79742 4.41777 3.9697 5.50319 4.31426 7.67402L5.68897 16.3351C5.98587 18.2056 6.416 18.7661 8.18181 19.4563L11.0756 20.5873C11.7796 20.8624 12.1316 21 12.5 21C12.8684 21 13.2204 20.8624 13.9244 20.5873L16.8182 19.4563C18.584 18.7661 19.0141 18.2056 19.311 16.3351L20.6857 7.67402C21.0303 5.50319 21.2026 4.41777 20.6085 3.70888C20.0144 3 18.9324 3 16.7685 3Z" />
                <path d="M15.5 8H10.5269C9.61889 8 9.43592 8.18899 9.51742 9.09276L9.69841 11.0998C9.76714 11.862 9.94159 12.0141 10.7079 12.0141H13.8631C14.788 12.0141 14.9719 12.2076 14.8706 13.1264L14.7013 14.6624C14.6333 15.2803 14.6139 15.3041 14.0195 15.5038L12.7852 15.9187C12.4624 16.0271 12.4565 16.0271 12.1337 15.9187L10.7602 15.4571C10.3907 15.3329 10.2668 15.1818 10.2007 14.8117" />
            </svg>
        ),
        item: "html5",
        bg: "#E34F26",
    },
    {
        id: 2,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#323232" fill="none" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19.75 2.50024H4.75C4.19772 2.50024 3.75 2.94796 3.75 3.50024L5.60753 17.8961C5.69611 18.5826 6.13335 19.1745 6.76348 19.4609L10.7598 21.2774C11.0829 21.4243 11.4336 21.5002 11.7884 21.5002C12.0935 21.5002 12.396 21.4441 12.6808 21.3346L17.637 19.4283C18.3227 19.1646 18.8086 18.5462 18.9026 17.8176L20.75 3.50024C20.75 2.94796 20.3023 2.50024 19.75 2.50024Z" />
                <path d="M7.5 6.5H16.5L8 11H16L15.5 16L12 17L8.5 16L8.3 14" />
            </svg>
        ),
        item: "css3",
        bg: "#1572B6",
    },
    {
        id: 3,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#323232" fill="none" stroke="#323232" strokeWidth="2">
                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                <path d="M11.7324 12V16C11.7324 17.1046 10.837 18 9.73244 18C8.99215 18 8.34581 17.5978 8 17" />
                <path d="M18.4668 13C18.121 12.4022 17.4747 12 16.7344 12H16.2344C15.4059 12 14.7344 12.6716 14.7344 13.5C14.7344 14.3284 15.4059 15 16.2344 15H17.2344C18.0628 15 18.7344 15.6716 18.7344 16.5C18.7344 17.3284 18.0628 18 17.2344 18H16.7344C15.9941 18 15.3477 17.5978 15.0019 17" />
            </svg>
        ),
        item: "javascript",
        bg: "#F7DF1E",
    },
    {
        id: 4,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#323232" fill="none" stroke="#323232" strokeWidth="2">
                <path d="M8.00002 12C8.00002 6.47715 9.79088 2 12 2C14.2092 2 16 6.47715 16 12C16 17.5228 14.2092 22 12 22C9.79088 22 8.00002 17.5228 8.00002 12Z" />
                <path d="M9.97531 8.61921C14.8173 5.85779 19.649 5.17014 20.7673 7.08331C21.8855 8.99648 18.8667 12.786 14.0247 15.5474C9.18271 18.3088 4.35098 18.9965 3.23277 17.0833C2.11455 15.1701 5.13329 11.3806 9.97531 8.61921Z" />
                <path d="M14.0247 8.61921C18.8667 11.3806 21.8855 15.1701 20.7673 17.0833C19.649 18.9965 14.8173 18.3088 9.97531 15.5474C5.13329 12.786 2.11455 8.99648 3.23277 7.08331C4.35098 5.17014 9.18271 5.85779 14.0247 8.61921Z" />
                <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" />
            </svg>
        ),
        item: "reactjs",
        bg: "#61DAFB",
    },
]

const skills = [
    {
        id: 1,
        icon: <IconBrandSass size={40} color='#323232' />,
        item: "sass",
        bg: "#CC6699",
    },
    {
        id: 2,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#323232" fill="none" stroke="#323232" strokeWidth="2" strokeLinejoin="round">
                <path d="M12 6C8.4 6 7.16667 8.66667 7 10C7 10 7.81901 8.41169 9.86274 8.41169C12.3627 8.41169 12.5667 12 17.0667 12C20.7116 12 21.8333 9.51702 22 8.27554C22 8.27554 21.2198 9.67872 19.2198 9.67872C16.7296 9.67872 16.4134 6 12 6Z" />
                <path d="M7 12C3.4 12 2.16667 14.6667 2 16C2 16 2.81901 14.4117 4.86274 14.4117C7.36274 14.4117 7.56671 18 12.0667 18C15.7116 18 16.8333 15.517 17 14.2755C17 14.2755 16.2198 15.6787 14.2198 15.6787C11.7296 15.6787 11.4134 12 7 12Z" />
            </svg>
        ),
        item: "tailwindcss",
        bg: "#38BDF8",
    },
    {
        id: 3,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#323232" fill="none" stroke="#323232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.8824 12C14.0519 12 15 12.8954 15 14C15 15.1046 14.0519 16 12.8824 16H10.6C9.84575 16 9.46863 16 9.23431 15.7657C9 15.5314 9 15.1542 9 14.4V12M12.8824 12C14.0519 12 15 11.1046 15 10C15 8.89543 14.0519 8 12.8824 8H10.6C9.84575 8 9.46863 8 9.23431 8.23431C9 8.46863 9 8.84575 9 9.6V12M12.8824 12H9" />
                <path d="M22 12C20.8954 12 20 11.1046 20 10V8C20 4.69067 19.3093 4 16 4H8C4.69067 4 4 4.69067 4 8V10C4 11.1046 3.10457 12 2 12" />
                <path d="M2 12C3.10457 12 4 12.8954 4 14L4 16C4 19.3093 4.69067 20 8 20H16C19.3093 20 20 19.3093 20 16V14C20 12.8954 20.8954 12 22 12" />
            </svg>
        ),
        item: "bootstrap",
        bg: "#7952B3",
    },
];
const projects = [
    {
        id: 4,
        projectName: 'WizardZ Landing Page',
        description:
            'A sleek agency landing page with bold visuals and smooth animations.',
        image: 'https://res.cloudinary.com/dauwqhba6/image/upload/c_fill,w_435,e_improve,e_sharpen/v1768734096/wizardZ_y27h64.webp',
        liveLink: 'https://docodingkeval.github.io/WizardZ',
        githubLink: 'https://github.com/DoCodingkeval/WizardZ',
        siteTitle: 'Live Demo',
        githubTitle: 'Live Code',
        bg: "bg-[#FEE685]",
        class: "project-card4 rotate-[30deg]"
    },
    {
        id: 3,
        projectName: 'Pokemon Finder App',
        description:
            'A Pokémon search app with API-powered data and engaging visual cards.',
        image: 'https://res.cloudinary.com/dauwqhba6/image/upload/c_fill,w_435,e_improve,e_sharpen/v1768734096/pokemon_wyp7qc.webp',
        liveLink: 'https://pokemondataapi.netlify.app',
        githubLink: '',
        siteTitle: 'Live Demo',
        githubTitle: 'Live Code',
        bg: "bg-[#B8E6FE]",
        class: "project-card3 rotate-[20deg]"
    },
    {
        id: 2,
        projectName: 'Blueleads Landing Page',
        description:
            'Modern responsive landing page with smooth animations and clean layout for lead capture.',
        image: 'https://res.cloudinary.com/dauwqhba6/image/upload/c_fill,w_435,e_improve,e_sharpen/v1768734096/blueleads_ace84g.webp',
        liveLink: 'https://blueleads.netlify.app',
        githubLink: 'https://github.com/DoCodingkeval/BlueLeads',
        siteTitle: 'Live Demo',
        githubTitle: 'Live Code',
        bg: "bg-[#A4F4CF]",
        class: "project-card2 rotate-[10deg]"
    },
    {
        id: 1,
        projectName: 'Weather Application',
        description:
            'A real-time weather dashboard with an intuitive UI and vibrant, data-driven design.',
        image: 'https://res.cloudinary.com/dauwqhba6/image/upload/c_fill,w_435,e_improve,e_sharpen/v1768734097/weather_xsxtw4.webp',
        liveLink: 'https://weather-apiappp.netlify.app',
        githubLink: 'https://github.com/DoCodingkeval/weather-app',
        siteTitle: 'Live Demo',
        githubTitle: 'Live Code',
        bg: "bg-[#FFCCD3]",
        class: "project-card1"
    },
];

export { navLinks, socialLinks, skills, coreSkills, projects };
