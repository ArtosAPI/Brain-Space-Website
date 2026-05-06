// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<div className="max-w-6xl mx-auto px-4 py-32 text-center">
			<h1 className="text-6xl md:text-8xl font-bold text-[#FF6600] mb-4">404</h1>
			<h2 className="text-2xl md:text-3xl font-semibold text-[#0B1D3A] mb-4">
				Страница не найдена
			</h2>
			<p className="text-gray-600 mb-8 max-w-md mx-auto">
				Возможно, вы ошиблись адресом или страница была перемещена.
			</p>
			<Link
				to="/"
				className="inline-block bg-[#FF6600] text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors"
			>
				На главную
			</Link>
		</div>
	);
}