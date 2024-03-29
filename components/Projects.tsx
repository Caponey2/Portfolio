import Image from 'next/image';
import React, { useState } from 'react';
import sanity from '../public/sanity.jpg';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import ProjectCard from './ProjectCard';

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === projects.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		console.log(currentIndex);
		setCurrentIndex(newIndex);
	};
	return (
		<div
			id='ProjectScreen'
			className='h-screen w-full relative flex overflow-hidden overflow-y-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl'>
				Projects
			</h3>
			<div
				id='ProjectContainer'
				className='h-4/6 w-full  flex py-5 space-x-9   items-center justify-center '>
				<ProjectCard
					project={projects[currentIndex]}
					count={currentIndex}
					length={projects.length}
					key={projects[currentIndex]._id}
				/>
			</div>

			<div
				id='The Stripe'
				className='w-full absolute top-[30%] bg-[#3b82f6]/10 left-0 h-[500px] -skew-y-12 pointer-events-none'
			/>
			<div
				id='ArrowBox'
				className='absolute bottom-5 h-[40px] w-2/3 justify-between lg:top-1/2 lg:-translate-y-1/2 z-20 lg:w-full xl:w-5/6'>
				<div id='ArrowFlexBox' className='flex w-full justify-between'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2.5}
						stroke='#3b82f6'
						className='w-6 h-[40px] lg:w-[100px] lg:h-[100px]'
						onClick={prevSlide}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 19.5L8.25 12l7.5-7.5'
						/>
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2.5}
						stroke='#3b82f6'
						className='w-6 h-[40px] lg:w-[100px] lg:h-[100px]'
						onClick={nextSlide}>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default Projects;
