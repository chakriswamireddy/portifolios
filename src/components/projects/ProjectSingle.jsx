import { motion } from 'framer-motion';
import { FiLink, FiLink2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, url }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>

			<div className="rounded-xl shadow-lg hover:shadow-xl  mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
				<div>
					<img
						src={image}
						className="rounded-t-xl border-none"
						alt="Single Project"
					/>
				</div>
				<div className="text-center px-4 py-6">
					<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
						{title}

						<button type='button' className='btn btn-success border ml-1  w-2 h-2 p-1 border rounded-md'  >
							<a href={url} aria-label="Single Project" target='_blank' >
								<FiLink className="text-ternary-dark dark:text-ternary-light " />
								{/* <span className="text-ternary-dark dark:text-ternary-light ">Visit Live Website </span> */}
							</a>
						</button>
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>

				</div>
				<div>

				</div>
			</div>

		</motion.div>
	);
};

export default ProjectSingle;
