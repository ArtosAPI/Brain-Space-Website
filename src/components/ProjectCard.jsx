import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
	return (
		<Link to={`/projects/${project.id}`} className="block group">
			<div className="bg-white rounded-lg overflow-hidden shadow-md">
				<img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
				<div className="p-4">
					<h3 className="font-bold text-[#0B1D3A] text-lg">{project.title}</h3>
					<p className="text-sm text-gray-500 mt-1">{project.description.slice(0, 100)}...</p>
					<div className="flex flex-wrap gap-2 mt-2">
						{project.techStack.map(tech => (
							<span key={tech} className="bg-[#FF6600] text-white text-xs px-2 py-1 rounded">{tech}</span>
						))}
					</div>
				</div>
			</div>
		</Link>
	);
}