export default function Map() {
	return (
		<div style={{ position: 'relative', overflow: 'hidden' }}>
			<a href="https://yandex.com/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
				style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}>Москва</a>
			<a href="https://yandex.com/maps/213/moscow/house/ulitsa_aviakonstruktora_mikoyana_12/Z04YcwVnT0QCQFtvfXt4c39lZQ==/?indoorLevel=1&ll=37.531647%2C55.791930&utm_medium=mapframe&utm_source=maps&z=16.64"
				style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}>
				Улица Авиаконструктора Микояна, 12 на карте Москвы, ближайшее метро ЦСКА — Яндекс Карты
			</a>
			<iframe
				src="https://yandex.com/map-widget/v1/?indoorLevel=1&ll=37.531647%2C55.791930&mode=whatshere&whatshere%5Bpoint%5D=37.527615%2C55.792361&whatshere%5Bzoom%5D=17&z=16.64"
				width="100%" height="400" frameBorder="1" allowFullScreen style={{ position: 'relative' }} title="Яндекс Карта" />
		</div>
	);
}