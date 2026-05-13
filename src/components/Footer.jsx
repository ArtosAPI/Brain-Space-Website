// src/components/Footer.jsx
import { NavLink } from 'react-router-dom';
import { siteSettings } from '../data/siteSettings';
import logoPlaceholder from '../assets/logo-placeholder.png'; // ← замени на реальный логотип

const navItems = [
	{ path: "/", label: "Главная" },
	{ path: "/services", label: "Услуги" },
	{ path: "/projects", label: "Проекты" },
	{ path: "/news", label: "Новости" },
	{ path: "/contacts", label: "Контакты" },
];

export default function Footer() {
	return (
		<footer className="bg-[#0B1D3A] text-white mt-auto">
			<div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				{/* Левая колонка — логотип, адрес, контакты */}
				<div className="flex flex-col items-center">
					<div className="flex items-center gap-3 mb-2">
						<img
							src={logoPlaceholder}
							alt={`${siteSettings.companyName} логотип`}
							className="h-8 w-auto"
						/>
						<h3 className="font-bold text-lg">
							{siteSettings.companyName}
						</h3>
					</div>
					<p>{siteSettings.address}</p>
					<p>Тел: {siteSettings.phone}</p>
					<p>Email: {siteSettings.email}</p>
				</div>

				{/* Социальные сети */}
				<div className="flex flex-col items-center">
					<h4 className="font-semibold mb-2">Соцсети</h4>
					<ul className="space-y-1">
						{Object.entries(siteSettings.socialLinks).map(([key, url]) => (
							<li key={key}>
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[#FF6600] capitalize"
								>
									{key}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Навигация (теперь с NavLink) */}
				<div className="flex flex-col items-center">
					<h4 className="font-semibold mb-2">Навигация</h4>
					<nav>
						<ul className="space-y-1">
							{navItems.map(item => (
								<li key={item.path}>
									<NavLink
										to={item.path}
										className={({ isActive }) =>
											`hover:text-[#FF6600] transition ${isActive ? 'text-[#FF6600] font-semibold' : ''
											}`
										}
									>
										{item.label}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>

			{/* Копирайт */}
			<div className="border-t border-gray-700 text-center text-sm text-gray-400 py-4">
				&copy; {new Date().getFullYear()} {siteSettings.companyName}. Все права защищены.
			</div>
		</footer>
	);
}