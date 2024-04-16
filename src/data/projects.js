// Import images

import FSImg1 from '../images/FullStackImg1.png';
import RomiImg from '../images/RomiImg.png';
import unsplashImg from '../images/unsplashImg.png';
import Quizimg from '../images/Quizimg.png';
import TodoImg from '../images/TodoImg.png';
import LoginImg from '../images/LoginImg.jpg';

export const projectsData = [
	{
		id: 1,
		title: ' Users & Teams MERN App',
		category: 'Full Stack App',
		img: FSImg1,
		url:'https://users-and-teams.vercel.app/',
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Nov 2023',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'TODO APP',
		category: 'Full Stack App',
		img: TodoImg,
		url:'https://cool-belekoy-c864ce.netlify.app/',
	},
	{
		id: 3,
		title: ' Quiz App',
		category: 'Web Application',
		url:'https://quiz-app-kappa-cyan.vercel.app/',
		img: Quizimg,
	},
	{
		id: 4,
		title: 'Unsplash Clone',
		category: 'UI/UX Design',
		url:'https://unsplash-clone-hazel.vercel.app/',
		img: unsplashImg,
	},
	{
		id: 5,
		title: 'Authentication UI',
		category: 'Full Stack App',
		url:'https://magenta-lollipop-eec8c4.netlify.app/',
		img: LoginImg,
	},
	{
		id: 6,
		title: 'Romi Finance',
		category: 'Web Application',
		url:'https://spectacular-hamster-b8608e.netlify.app/',
		img: RomiImg,
	},
];
