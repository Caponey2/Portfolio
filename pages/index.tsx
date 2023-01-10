/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Image from 'next/image';
import Link from 'next/link';
// import dynamic from 'next/dynamic';
// import photo from '../public/me.jpg';
// import { GetStaticProps, NextPage } from 'next';
import { GetServerSideProps, NextPage } from 'next';
import { PageInfo, Experience, Skill, Project, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocials } from '../utils/fetchSocials';
import { urlFor } from '../sanity';

type Props = {
	pageInfo: PageInfo;
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
};
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
	return (
		<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80'>
			<Head>
				<title>Tanner's Portfolio</title>
			</Head>

			{/* Header */}
			<Header socials={socials} />

			{/* Hero */}
			<section id='hero' className='snap-start'>
				<Hero pageInfo={pageInfo} />
			</section>

			{/* About */}
			<section id='about' className='snap-center'>
				<About pageInfo={pageInfo} />
			</section>

			{/* Experience		 */}
			<section id='experience' className='snap-center'>
				<WorkExperience experiences={experiences} />
			</section>
			{/* Skills */}
			<section id='skills' className='snap-start'>
				<Skills skills={skills} />
			</section>
			{/* Projects  */}
			<section id='projects' className='snap-start'>
				<Projects projects={projects} />
			</section>

			{/* Contact Me */}
			<section id='contact' className='snap-start'>
				<Contact />
			</section>
			<Link href='#hero'>
				<footer className='sticky bottom-5 w-full cursor-pointer'>
					<div className='flex items-center justify-center'>
						<Image
							className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
							src={urlFor(pageInfo.heroImage).url()}
							width={100}
							height={100}
							alt='imgur'
						/>
					</div>
				</footer>
			</Link>
		</div>
	);
};
export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
// 	const pageInfo: PageInfo = await fetchPageInfo();
// 	const experiences: Experience[] = await fetchExperiences();
// 	const skills: Skill[] = await fetchSkills();
// 	const projects: Project[] = await fetchProjects();
// 	const socials: Social[] = await fetchSocials();

// 	return {
// 		props: {
// 			pageInfo,
// 			skills,
// 			projects,
// 			experiences,
// 			socials,
// 		},
// 		revalidate: 30,
// 	};
// };
export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo();
	const experiences: Experience[] = await fetchExperiences();
	const skills: Skill[] = await fetchSkills();
	const projects: Project[] = await fetchProjects();
	const socials: Social[] = await fetchSocials();

	return {
		props: {
			pageInfo,
			skills,
			projects,
			experiences,
			socials,
		},
		revalidate: 30,
	};
};
