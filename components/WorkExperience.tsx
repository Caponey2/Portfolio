import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';
import { useRef, useEffect, useState } from 'react';
import { setRevalidateHeaders } from 'next/dist/server/send-payload';

type Props = { experiences: Experience[] };

function WorkExperience({ experiences }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide
			? setRevalidateHeaders.length - 1
			: currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === experiences.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const sortedExperiences = experiences.sort((e1, e2) =>
		e1.order < e2.order ? -1 : e1.order > e2.order ? 1 : 0
	);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			id='Experience Screen'
			className='h-screen mx-30 flex relative overflow-hidden flex-col text-left  max-w-full px-10 justify-evenly mx-auto  items-center'>
			<h3
				id='Experience Header Title'
				className='absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl'>
				Experience
			</h3>
			<div
				id='Experience Container'
				className=' h-4/6 w-full relative flex py-5 space-x-9 justify-center  '>
				<ExperienceCard
					key={sortedExperiences[currentIndex]._id}
					experience={sortedExperiences[currentIndex]}
				/>
			</div>
			<div
				id='The Stripe'
				className='w-full absolute top-[30%] bg-[#3b82f6]/10 right-0 h-[500px] skew-y-12 pointer-events-none'
			/>
			<div
				id='ArrowBox'
				className='absolute bottom-5 h-[40px] w-2/3 justify-between lg:top-1/2 lg:-translate-y-1/2 lg:w-full xl:w-5/6'>
				<div id='ArrowFlexBox' className='flex w-full justify-between '>
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
		</motion.div>
	);
}

export default WorkExperience;
