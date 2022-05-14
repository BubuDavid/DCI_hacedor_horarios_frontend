import SectionTitle from '../SectionTitle'
import Paragraph from '../Paragraph'
import UnorderedList from '../UnorderedList'
import LeftSection from './Components/LeftSection'
import RightSection from './Components/RightSection'
import SearchBar from './Components/SearchBar'
import SubjectList from './Components/SubjectList'
import YourSubjectsSection from './Components/YourSubjectsSection'

import './Main.css'

export default function Main() {
	return (
		<div className='Main'>
			<LeftSection>
				<SectionTitle>
					Materias Enero - Junio 2022
				</SectionTitle>
				<Paragraph>
					Pasos para sacar tus horarios:
				</Paragraph>
				<UnorderedList>
					<li>1. Da click sobre las materias que quieras tomar.</li>
					<li>2. Verifica que tus materias se agregaron correctamente en la sección de Tus Materias (En celular, se mostrará cuando presiones la pestaña con los ojos 👀).</li>
					<li>3. Da click en el botón <b>Hacer Horarios</b>.</li>
					<li>4. Espera y ¡Observa la magia! Ahora tienes tus posibles horarios.</li>
				</UnorderedList>
				<SearchBar />
				<SubjectList />
			</LeftSection>
			<RightSection>
				<SectionTitle>
						👇 Tus Materias 👇
				</SectionTitle>
				<UnorderedList disc={true}>
					<li>Tus materias aparecerán mágicamente de este lado cuando las escojas.</li>
					<li>Si vuelves a dar click en ellas se eliminarán de tu lista de materias.</li>
					<li>Nota: Es posible que no no existan horarios para la combinación de materias que escogiste. </li>
					<li>No puedes cargar más de 10 materias, ¿estás loco esponja?</li>
				</UnorderedList>
				<YourSubjectsSection />
			</RightSection>
		</div>
	)
}
