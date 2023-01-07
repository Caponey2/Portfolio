import Image from 'next/image';
import React from 'react';
import sanity from '../public/sanity.jpg';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
	return (
		<div
			className='h-screen w-full relative flex overflow-hidden overflow-y-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '
			id='ProjectScreen'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl'>
				Projects
			</h3>

			<div
				className='relative w-full flex overflow-x-scroll   snap-x snap-x-center snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80 h-4/5'
				id='ProjectContainer'>
				{projects.map((project, i) => (
					<div
						key={`${i}`}
						className='flex w-full flex-shrink-0 snap-center  lg:flex-col flex-col space-y-1 items-center justify-center p-20 md:p-44  mx-5 overflow-y-hidden overflow-y-scroll hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80'
						id={`Project ${i + 1}`}>
						<div
							className='flex flex-row w-full p-0 my-0 lg:flex-col'
							id='IphoneFlexRow Option'>
							<motion.div
								initial={{
									y: -200,
									opacity: 0,
								}}
								transition={{ duration: 1.2 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className='flex lg:flex-col w-full mx-1 p-5 items-center rounded-lg'
								id='Motion Container'>
								<Image
									src={urlFor(project?.image).url()}
									width={400}
									height={400}
									alt={`${i}`}
									className='flex flex-shrink-0 h-[150px] w-[170px] md:mb-5 md:w-[300px] md:h-[270px] lg:h-[360px] lg:w-[420px] rounded-lg'
								/>

								<h4 className='text-lg md:text-2xl font-semibold text-center'>
									<span className='underline decoration-[#3b82f6]/50'>
										Case Study {i + 1} of {projects.length}:
									</span>{' '}
									{project?.title}
								</h4>
							</motion.div>
						</div>
						<div className='flex items-center space-x-2 justify-center'>
							{project?.technologies.map((technology) => (
								<Image
									key={technology._id}
									src={urlFor(technology.image).url()}
									width={52}
									height={52}
									alt={technology._id}
									className='h-10 w-10 rounded-full'
								/>
							))}{' '}
						</div>

						<p className='flex text-sm md:text-lg justify-center text-center md:text-left lg:w-3/5'>
							{project?.summary}
						</p>
					</div>
				))}
			</div>
			<div className='w-full absolute top-[30%] bg-[#3b82f6]/10 left-0 h-[500px] -skew-y-12 ' />
		</div>
	);
}

export default Projects;
