import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';
type Props = { experiences: Experience[] };

function WorkExperience({ experiences }: Props) {
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
				className=' h-4/6 w-full relative flex py-5 space-x-9 overflow-x-scroll overflow-y-hidden  snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#3b82f6]/80'>
				{experiences?.map((experience) => (
					<ExperienceCard key={experience._id} experience={experience} />
				))}
			</div>
		</motion.div>
	);
}

export default WorkExperience;
