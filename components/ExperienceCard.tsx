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
			className='flex w-full flex-shrink-0 rounded-lg snap-center justify-center bg-[#292929] 2xl:bg-[#3b82f6]/10 lg:w-4/5 xl:w-3/5 opacity-100 cursor-pointer transition-opacity duration-200 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80'>
			<motion.div
				id='Motion Container'
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
				className='flex flex-col mx-1 p-5 items-center rounded-lg w-full md:w-3/5'>
				<Image
					src={urlFor(experience?.companyImage).url()}
					width={400}
					height={400}
					alt='me'
					className='flex justify-center items-center w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-full '
					id='Image'
				/>

				<motion.div
					initial={{ x: 200, opacity: 0 }}
					transition={{ duration: 1.2, delay: 1.2 }}
					whileInView={{ opacity: 1, x: 0 }}
					className='flex flex-col justify-center items-center'>
					<h3 className='flex font-light tracking-wide text-blue-400 text-md md:text-2xl'>
						{experience.jobTitle}
					</h3>
					<p className='flex font-bold text-center text-md text-blue-400/50 md:text-2xl'>
						{experience.company}
					</p>
				</motion.div>
				<div
					id='Skills Container'
					className='flex space-x-2 space-y-2 m-2 flex-row flex-wrap items-center justify-center  z-30'>
					{experience?.technologies?.map((technology, i) =>
						i % 2 === 0 ? (
							<motion.div
								id={`Skill ${i + 1}`}
								key={technology._id}
								initial={{ y: -100, opacity: 0 }}
								transition={{ duration: 1.2, delay: 3.2 + i * 0.2 }}
								whileInView={{ opacity: 1, y: 0 }}
								className='flex items-center justify-center w-[30px] h-[30px] md:w-[60px] md:h-[60px]'>
								<Image
									src={urlFor(technology?.image).url()}
									alt={technology._id}
									width={100}
									height={100}
									key={technology._id}
									className='rounded-full w-[30px] h-[30px] md:w-[60px] md:h-[60px] items-center justify-center'
								/>
							</motion.div>
						) : (
							<motion.div
								id={`Skill ${i + 1}`}
								key={technology._id}
								initial={{ y: 100, opacity: 0 }}
								transition={{ duration: 1.2, delay: 3.2 + i * 0.2 }}
								whileInView={{ opacity: 1, y: 0 }}
								className='flex items-center justify-center w-[30px] h-[30px] md:w-[60px] md:h-[60px]'>
								<Image
									src={urlFor(technology?.image).url()}
									alt={technology._id}
									width={100}
									height={100}
									key={technology._id}
									className='rounded-full w-[30px] h-[30px] md:w-[60px] md:h-[60px] items-center justify-center'
								/>
							</motion.div>
						)
					)}
				</div>
				<motion.div
					initial={{ x: -200, opacity: 0 }}
					transition={{ duration: 1.2, delay: 1.7 }}
					whileInView={{ opacity: 1, x: 0 }}>
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
			</motion.div>
		</div>
	);
}

export default ExperienceCard;
