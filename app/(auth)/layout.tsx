import BackgroundImage from '@/public/login_background.jpg';
import NetflixLogo from '@/public/netflix_logo.svg';
import Image from 'next/image';
import { ReactNode } from 'react';

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className='relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent'>
			<Image
				src={BackgroundImage}
				alt='background image'
				priority
				fill
				className='hidden sm:flex sm:object-cover -z-10 brightness-50'
			/>
			<Image
				src={NetflixLogo}
				alt='Logo'
				width={120}
				height={120}
				priority
				className='absolute left-4 top-4 object-contain md:left-10 md:top-6'
			/>

			{children}
		</div>
	);
};

export default AuthLayout;
