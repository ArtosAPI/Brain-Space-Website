// src/pages/ProjectsPage.jsx
import { useState, useMemo } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
	// Активный фильтр (null – показывать все)
	const [activeTech, setActiveTech] = useState(null);

	// Собираем уникальный список технологий из всех проектов
	const allTechs = useMemo(() => {
		const techSet = new Set();
		projects.forEach(project => {
			project.techStack.forEach(tech => techSet.add(tech));
		});
		return Array.from(techSet).sort();
	}, []);

	// Фильтруем проекты по активной технологии
	const filteredProjects = activeTech
		? projects.filter(project => project.techStack.includes(activeTech))
		: projects;

	return (
		<div className="max-w-6xl mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-[#0B1D3A] mb-8 text-center">Наши проекты</h1>

			{/* Фильтры */}
			<div className="flex flex-wrap justify-center gap-3 mb-10">
				<button
					onClick={() => setActiveTech(null)}
					className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTech === null
							? 'bg-[#FF6600] text-white'
							: 'bg-gray-100 text-[#0B1D3A] hover:bg-gray-200'
						}`}
				>
					Все проекты
				</button>
				{allTechs.map(tech => (
					<button
						key={tech}
						onClick={() => setActiveTech(tech)}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTech === tech
								? 'bg-[#FF6600] text-white'
								: 'bg-gray-100 text-[#0B1D3A] hover:bg-gray-200'
							}`}
					>
						{tech}
					</button>
				))}
			</div>

			{/* Сетка проектов */}
			{filteredProjects.length === 0 ? (
				<p className="text-center text-gray-500">Нет проектов с выбранной технологией</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProjects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			)}
		</div>
	);
}