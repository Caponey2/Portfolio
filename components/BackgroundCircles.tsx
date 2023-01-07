import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function BackgroundCircles({}: Props) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				scale: [1, 1.2, 1.5, 2, 1],
				opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
				borderRadius: ['20%', '20%', '50%', '80%', '20%'],
			}}
			transition={{
				duration: 2.5,
			}}
			id='BackgroundCircles Top'
			className='relative flex justify-center items-center'>
			<div className='absolute  border-blue-100 border rounded-lg h-[150px] w-[150px] mt-52  animate-squarePing1 md:invisible' />
			<div className='absolute  border-blue-100 border rounded-lg h-[150px] w-[150px] mt-52   animate-squarePing1Rev ' />
			<div className='absolute border border-blue-200 rounded-lg h-[300px] w-[300px] mt-52 animate-squarePing2 invisible md:visible' />
			<div className='absolute border border-blue-300 rounded-lg h-[450px] w-[450px] mt-52 animate-squarePing3 invisible lg:visible' />
			<div className='absolute border border-blue-400 rounded-lg h-[600px] w-[600px] mt-52 animate-squarePing4 invisible 3xl:visible' />
			<div
				className='absolute border border-blue-300 rounded-lg h-[300px] w-[300px] mt-52 
			animate-pulse '
			/>
			<div
				className='absolute border border-blue-400 rounded-lg h-[450px] w-[450px] mt-52 
			animate-pulse invisible md:visible'
			/>
			<div className='absolute border border-blue-500 rounded-lg h-[600px] w-[600px] mt-52 animate-pulse invisible lg:visible' />
			<div className='absolute border border-blue-600 rounded-lg h-[750px] w-[750px] mt-52 invisible lg:visible' />
		</motion.div>
	);
}

export default BackgroundCircles;
