// src/components/NewsCard.jsx
import { Link } from 'react-router-dom';

// Функция для получения короткого анонса (первые 150 символов текста)
function getExcerpt(text, maxLength = 150) {
	if (!text) return '';
	return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '...' : text;
}

// Простое форматирование даты: «20 апреля 2026»
function formatDate(dateString) {
	const date = new Date(dateString);
	return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsCard({ news }) {
	return (
		<Link
			to={`/news/${news.slug}`}
			className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
		>
			<div className="p-5">
				<div className="flex items-baseline justify-between mb-2">
					<h3 className="text-xl font-bold text-[#0B1D3A] group-hover:text-[#FF6600] transition-colors">
						{news.title}
					</h3>
					<span className="text-sm text-gray-400 ml-4 whitespace-nowrap">
						{formatDate(news.publishDate)}
					</span>
				</div>
				<p className="text-gray-600 mb-3">{getExcerpt(news.content)}</p>
				<div className="flex items-center justify-between">
					<span className="text-xs text-gray-500">{news.author}</span>
					{news.tags && news.tags.length > 0 && (
						<div className="flex gap-1">
							{news.tags.map(tag => (
								<span
									key={tag}
									className="bg-gray-100 text-[#0B1D3A] text-xs px-2 py-0.5 rounded-full"
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</Link>
	);
}