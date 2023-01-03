import React from 'react';

export const Slideshow = () => {
	return (
		<div className="flex h-24 mt-12 mx-24 border-2">
			<div className="flex w-full h-full">
				<p className="bg-white">&lt;</p>
				<div className="w-full border-2 bg-white">slide 1</div>
				<div className="w-full border-2 bg-white">slide 2</div>
				<div className="w-full border-2 bg-white">slide 3</div>
				<div className="w-full border-2 bg-white">slide 4</div>
				<div className="w-full border-2 bg-white">slide 5</div>
				<p className="bg-white">&gt;</p>
			</div>
		</div>
	);
};
