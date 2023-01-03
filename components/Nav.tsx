import React from 'react';

export const Nav = () => {
	return (
		<div className="flex absolute w-full px-10 h-14 items-center justify-between border-2 border-red-600 bg-white">
			<div className="object-cover border-2 border-blue-400">logo</div>
			<div className="flex h-full w-4/6 border-2 border-green-800">
				<div className="flex bg-orange-400 w-full h-full items-center justify-center">
					<header>petra</header>
				</div>
				<div className="flex bg-pink-300 w-full h-full items-center justify-center">
					<header>rosemi</header>
				</div>
				<div className="flex bg-purple-400 w-full h-full items-center justify-center">
					<header>selen</header>
				</div>
			</div>
			<div>
				<div className="flex border-2 border-red-500">account</div>
			</div>
		</div>
	);
};
