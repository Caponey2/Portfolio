import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import sanity from '../public/sanity.jpg';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	directionLeft?: boolean;
	skill: Skill;
};

function Skill({ directionLeft, skill }: Props) {
	return (
		<motion.div
			initial={{
				x: directionLeft ? -100 : 100,
				opacity: 0,
			}}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			className='group relative flex cursor-pointer '>
			<Image
				src={urlFor(skill?.image).url()}
				width={100}
				height={100}
				alt='sanity'
				className='rounded-full border-gray-500 bg-transparent object-cover h-[48px] w-[48px] md:w-[100px] md:h-[100px] filter group-hover:grayscale transition group-click:grayscale   duration-300 ease-in-out'
			/>
			<div className='absolute opacity-0 group-hover:opacity-80 group-click:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-200 h-[48px] w-[48px] md:w-[100px] md:h-[100px] rounded-full '>
				<div className='flex items-center justify-center h-full'>
					<p className='text-xl font-bold text-gray-700 opacity-100% md:text-3xl'>
						{' '}
						{skill.progress}%
					</p>
				</div>
			</div>
		</motion.div>
	);
}

export default Skill;
