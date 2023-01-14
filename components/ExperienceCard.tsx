import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
	return (
		<div
			id='Experience Card Container'
			className='flex w-full flex-shrink-0 rounded-lg snap-center justify-center bg-[#292929] 2xl:bg-[#292929] lg:w-4/5 xl:w-3/5 opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80'>
			<motion.div
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{
					duration: 1.2,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
				className='flex flex-col mx-1 p-5 items-center rounded-lg'
				id='Motion Container'>
				<Image
					src={urlFor(experience?.companyImage).url()}
					width={400}
					height={400}
					alt='me'
					className='flex justify-center items-center w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full '
					id='Image'
				/>
				<div></div>

				<h3 className='flex font-light tracking-wide text-blue-400 text-md md:text-2xl'>
					{experience.jobTitle}
				</h3>
				<p className='flex font-bold text-center text-md text-blue-400/50 md:text-2xl'>
					{experience.company}
				</p>
				<div className='flex space-x-2 my-2'>
					{experience.technologies.map((technology) => (
						<Image
							src={urlFor(technology.image).url()}
							alt={technology._id}
							width={100}
							height={100}
							key={technology._id}
							className='rounded-full w-[30px] h-[30px] md:w-[60px] md:h-[60px]'
						/>
					))}
				</div>
				<p className='flex upper-case py-5 text-blue-300 text-md md:text-xl'>
					{new Date(experience.dateStarted).toDateString()} to{' '}
					{experience.isCurrentlyWorkingHere
						? 'Present'
						: new Date(experience.dateEnded).toDateString()}
				</p>
				<ul className='flex flex-col items-start justify-center list-disc space-y-2 ml-5 text-sm md:text-lg'>
					{experience.points.map((point, i) => (
						<li key={i}>{point}</li>
					))}
				</ul>
			</motion.div>
		</div>
	);
}

export default ExperienceCard;
