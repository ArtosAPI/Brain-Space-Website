import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NewsListPage from './pages/NewsListPage';
import NewsDetailPage from './pages/NewsDetailPage';
import ContactsPage from './pages/ContactsPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
	return (
		<HashRouter>
			<div className="flex flex-col min-h-screen">
				<Header />
				<main className="flex-grow">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/services" element={<ServicesPage />} />
						<Route path="/projects" element={<ProjectsPage />} />
						<Route path="/projects/:id" element={<ProjectDetailPage />} />
						<Route path="/news" element={<NewsListPage />} />
						<Route path="/news/:slug" element={<NewsDetailPage />} />
						<Route path="/contacts" element={<ContactsPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</HashRouter>
	);
}