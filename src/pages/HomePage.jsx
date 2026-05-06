import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { news } from '../data/news';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import NewsCard from '../components/NewsCard';

export default function HomePage() {
	const featuredProjects = projects.slice(0, 3);
	const latestNews = news.slice(0, 2);

	return (
		<div>
			{/* Hero */}
			<section className="bg-[#0B1D3A] text-white py-20">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Создаём технологии для вашего бизнеса</h1>
					<p className="text-lg mb-8 text-gray-300">Разработка ПО, мобильных приложений, консалтинг</p>
					<Link to="/contacts" className="bg-[#FF6600] text-white px-8 py-3 rounded-md hover:bg-orange-600 transition">
						Обсудить проект
					</Link>
				</div>
			</section>

			{/* Услуги */}
			<section className="py-16 max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-[#0B1D3A] mb-8 text-center">Наши услуги</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{services.map(service => <ServiceCard key={service.id} service={service} />)}
				</div>
			</section>

			{/* Портфолио */}
			<section className="py-16 bg-gray-100">
				<div className="max-w-6xl mx-auto px-4">
					<h2 className="text-3xl font-bold text-[#0B1D3A] mb-8 text-center">Избранные проекты</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{featuredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
					</div>
					<div className="text-center mt-8">
						<Link to="/projects" className="text-[#FF6600] hover:underline font-semibold">Все проекты →</Link>
					</div>
				</div>
			</section>

			{/* Новости */}
			<section className="py-16 max-w-6xl mx-auto px-4">
				<h2 className="text-3xl font-bold text-[#0B1D3A] mb-8 text-center">Последние новости</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{latestNews.map(item => <NewsCard key={item.slug} news={item} />)}
				</div>
				<div className="text-center mt-8">
					<Link to="/news" className="text-[#FF6600] hover:underline font-semibold">Все новости →</Link>
				</div>
			</section>
		</div>
	);
}