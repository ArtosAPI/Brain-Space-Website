// src/pages/NewsListPage.jsx
import { news } from '../data/news';
import NewsCard from '../components/NewsCard';

// Сортируем новости от новых к старым
const sortedNews = [...news].sort(
	(a, b) => new Date(b.publishDate) - new Date(a.publishDate)
);

export default function NewsListPage() {
	return (
		<div className="max-w-6xl mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold text-[#0B1D3A] mb-8 text-center">Новости</h1>

			{sortedNews.length === 0 ? (
				<p className="text-center text-gray-500">Новостей пока нет</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{sortedNews.map(item => (
						<NewsCard key={item.slug} news={item} />
					))}
				</div>
			)}
		</div>
	);
}