import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};
type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

function Contact({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) =>
		(window.location.href = `mailto:tannerhebert20xx@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`);

	return (
		<div
			className='h-screen flex relative flex-col justify-center text-center px-10 mx-auto items-center'
			id='ContactScreen'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-blue-200 text-2xl'>
				Contact
			</h3>
			<div
				className='flex flex-col w-full  h-3/5  items-center justify-end  mx-auto '
				id='ContactContainer'>
				<div className='flex flex-col items-center py-10'>
					<h4
						className='flex items-center  text-sm md:text-base lg:text-3xl font-semibold text-center'
						id='TopText'>
						I have got what you need.{' '}
					</h4>
					<span className='flex  items-center text-sm md:text-base lg:text-lg decoration-[#3b82f6]/50 underline'>
						Lets Chat about it!
					</span>
				</div>
				<div
					className='flex flex-col items-start text-sm w-4/5 md:items-center md:text-md '
					id='ContactInfo'>
					<div className='flex items-center space-x-2 text-md'>
						<PhoneIcon className='text-[#3b82f6] h-5 w-5 animate-pulse' />
						<p className='text-sm md:text-base lg:text-lg'>
							+541-531-9205
						</p>{' '}
					</div>
					<div className='flex items-center space-x-2'>
						<EnvelopeIcon className='text-[#3b82f6] h-5 w-5 animate-pulse' />
						<p className='text-sm md:text-base lg:text-lg'>
							tannerhebert20xx@gmail.com
						</p>{' '}
					</div>
					<div className='flex items-center space-x-2'>
						<MapPinIcon className='text-[#3b82f6] h-5 w-5 animate-pulse' />
						<p className='text-sm md:text-base lg:text-lg'>Portland, OR</p>{' '}
					</div>
				</div>
				{/* <div id='Absolute Lock' className='absolute bottom-16'> */}
				<form
					id='ContactForm'
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col w-full py-2 my-1 space-y-1 h-3/5 items-center md:w-[500px] md:pt-20 md:h-full'>
					<input
						{...register('name')}
						type='text'
						className='contactInput w-4/5'
						placeholder='Name'
					/>
					<input
						{...register('email')}
						type='email'
						className='contactInput w-4/5'
						placeholder='Email'
					/>

					<input
						{...register('subject')}
						type='text '
						className='contactInput w-4/5'
						placeholder='Subject'
					/>
					<textarea
						{...register('message')}
						className='contactInput w-4/5'
						placeholder='Message'
					/>
					<button
						type='submit'
						className='bg-[#3b82f6] py-4 px-10 rounded-md text-black font-bold text-lg w-4/5'>
						Submit
					</button>
				</form>
				{/* </div> */}
			</div>
		</div>
	);
}

export default Contact;
