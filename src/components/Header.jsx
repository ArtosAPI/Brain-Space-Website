import { Link, NavLink } from 'react-router-dom';
import { siteSettings } from '../data/siteSettings';

const navItems = [
	{ path: "/", label: "Главная" },
	{ path: "/services", label: "Услуги" },
	{ path: "/projects", label: "Проекты" },
	{ path: "/news", label: "Новости" },
	{ path: "/contacts", label: "Контакты" },
];

export default function Header() {
	return (
		<header className="bg-[#0B1D3A] text-white sticky top-0 z-50">
			<div className="max-w-6xl mx-auto flex justify-between items-center p-4">
				<Link to="/" className="text-xl font-bold tracking-wide">
					{siteSettings.companyShort}
				</Link>
				<nav className="hidden md:flex gap-6">
					{navItems.map(item => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								`hover:text-[#FF6600] transition ${isActive ? 'text-[#FF6600] font-semibold' : ''}`
							}
						>
							{item.label}
						</NavLink>
					))}
				</nav>
			</div>
		</header>
	);
}