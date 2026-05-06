// src/pages/NewsDetailPage.jsx
import { useParams, Link } from 'react-router-dom';
import { news } from '../data/news';

// Простое форматирование даты: «20 апреля 2026»
function formatDate(dateString) {
	const date = new Date(dateString);
	return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsDetailPage() {
	const { slug } = useParams();

	// Ищем новость по slug
	const article = news.find(item => item.slug === slug);

	// Если не найдена
	if (!article) {
		return (
			<div className="max-w-3xl mx-auto px-4 py-16 text-center">
				<h1 className="text-4xl font-bold text-[#0B1D3A] mb-4">Новость не найдена</h1>
				<p className="text-gray-500 mb-6">Возможно, она была удалена или вы ошиблись адресом</p>
				<Link
					to="/news"
					className="inline-block bg-[#FF6600] text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
				>
					Все новости
				</Link>
			</div>
		);
	}

	return (
		<div className="max-w-3xl mx-auto px-4 py-16">
			{/* Навигация назад */}
			<Link
				to="/news"
				className="text-[#0B1D3A] hover:text-[#FF6600] mb-6 inline-flex items-center gap-1 transition-colors"
			>
				← Все новости
			</Link>

			{/* Заголовок */}
			<h1 className="text-3xl md:text-4xl font-bold text-[#0B1D3A] mb-4">{article.title}</h1>

			{/* Мета-информация */}
			<div className="flex flex-wrap items-baseline gap-4 text-sm text-gray-500 mb-8">
				<span>{formatDate(article.publishDate)}</span>
				<span>—</span>
				<span className="font-medium text-gray-700">{article.author}</span>
			</div>

			{/* Теги */}
			{article.tags && article.tags.length > 0 && (
				<div className="flex flex-wrap gap-2 mb-6">
					{article.tags.map(tag => (
						<span
							key={tag}
							className="bg-gray-100 text-[#0B1D3A] text-xs px-3 py-1 rounded-full"
						>
							{tag}
						</span>
					))}
				</div>
			)}

			{/* Основной текст */}
			<div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
				{article.content}
			</div>

			{/* Кнопка возврата */}
			<div className="mt-12">
				<Link
					to="/news"
					className="inline-block bg-[#FF6600] text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
				>
					← Все новости
				</Link>
			</div>
		</div>
	);
}