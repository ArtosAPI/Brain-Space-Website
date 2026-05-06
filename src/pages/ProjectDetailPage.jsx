// src/pages/ProjectDetailPage.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();

	// Ищем проект по id
	const project = projects.find(p => p.id === id);

	// Если не найден — покажем сообщение и кнопку «Назад»
	if (!project) {
		return (
			<div className="max-w-6xl mx-auto px-4 py-16 text-center">
				<h1 className="text-4xl font-bold text-[#0B1D3A] mb-4">Проект не найден</h1>
				<p className="text-gray-500 mb-6">Возможно, вы ошиблись адресом</p>
				<button
					onClick={() => navigate(-1)}
					className="bg-[#FF6600] text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
				>
					← Назад
				</button>
			</div>
		);
	}

	// Индексы для навигации
	const currentIndex = projects.indexOf(project);
	const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
	const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

	return (
		<div className="max-w-6xl mx-auto px-4 py-16">
			{/* Кнопка назад */}
			<button
				onClick={() => navigate(-1)}
				className="text-[#0B1D3A] hover:text-[#FF6600] mb-6 flex items-center gap-1 transition-colors"
			>
				← Назад к проектам
			</button>

			{/* Заголовок и мета-информация */}
			<div className="mb-8">
				<h1 className="text-4xl font-bold text-[#0B1D3A] mb-2">{project.title}</h1>
				<div className="flex flex-wrap gap-4 text-sm text-gray-600">
					{project.client && <span>👤 {project.client}</span>}
					{project.year && <span>📅 {project.year}</span>}
					{project.link && (
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#FF6600] hover:underline"
						>
							🔗 Демо
						</a>
					)}
				</div>
			</div>

			{/* Основное изображение */}
			<div className="mb-8 rounded-lg overflow-hidden shadow-md">
				<img
					src={project.image}
					alt={project.title}
					className="w-full h-auto object-cover max-h-96"
				/>
			</div>

			{/* Описание */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-[#0B1D3A] mb-4">О проекте</h2>
				<p className="text-gray-700 leading-relaxed whitespace-pre-line">{project.description}</p>
			</div>

			{/* Технологии */}
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-[#0B1D3A] mb-4">Технологический стек</h2>
				<div className="flex flex-wrap gap-2">
					{project.techStack.map(tech => (
						<span
							key={tech}
							className="bg-[#FF6600] text-white text-sm px-3 py-1 rounded-full"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Галерея скриншотов (если есть) */}
			{project.screenshots && project.screenshots.length > 0 && (
				<div className="mb-8">
					<h2 className="text-2xl font-semibold text-[#0B1D3A] mb-4">Скриншоты</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{project.screenshots.map((src, idx) => (
							<a
								key={idx}
								href={src}
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
							>
								<img
									src={src}
									alt={`Скриншот ${idx + 1}`}
									className="w-full h-48 object-cover"
								/>
							</a>
						))}
					</div>
				</div>
			)}

			{/* Кнопка "Заказать похожий проект" */}
			<div className="mb-12">
				<Link
					to="/contacts"
					className="inline-block bg-[#FF6600] text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors"
				>
					Заказать похожий проект
				</Link>
			</div>

			{/* Навигация по проектам */}
			<div className="flex justify-between items-center border-t pt-8">
				{prevProject ? (
					<Link
						to={`/projects/${prevProject.id}`}
						className="text-[#0B1D3A] hover:text-[#FF6600] transition-colors"
					>
						← {prevProject.title}
					</Link>
				) : (
					<div />
				)}
				{nextProject ? (
					<Link
						to={`/projects/${nextProject.id}`}
						className="text-[#0B1D3A] hover:text-[#FF6600] transition-colors text-right"
					>
						{nextProject.title} →
					</Link>
				) : (
					<div />
				)}
			</div>
		</div>
	);
}