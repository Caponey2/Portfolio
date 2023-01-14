import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = { project: Project; count: number; length: number };

function ProjectCard({ project, count, length }: Props) {
	return (
		<div
			id='Project Card Container'
			className=' w-3/4 flex z-20 rounded-lg h-5/6 flex-col overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80  space-y-1 p-2 bg-[#3b82f6]/10 lg:bg-transparent'>
			<motion.div
				id='Motion Container'
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='flex flex-col lg:flex-col  mx-1 p-5 items-center rounded-lg space-y-1'>
				<Image
					src={urlFor(project?.image).url()}
					width={400}
					height={400}
					alt={`${count}`}
					className='flex flex-shrink-0 h-[150px] w-[170px] md:mb-5 md:w-[300px] md:h-[270px] lg:h-[360px] lg:w-[420px] rounded-lg'
				/>

				<h4 className='font-bold text-center text-md text-blue-400/50 md:text-2xl'>
					<span className='underline decoration-[#3b82f6]/50'>
						Case Study {count + 1} of {length}:
					</span>{' '}
					{project?.title}
				</h4>
				<div
					id='Technologies Container'
					className='flex items-center space-x-2 justify-center'>
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
			</motion.div>
		</div>
	);
}

export default ProjectCard;
