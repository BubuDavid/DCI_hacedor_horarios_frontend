import React from 'react'
import './App.css'
import { HHProvider } from '../HHContext'
import { AppUI } from './AppUI'


function App() {
	return (
		<HHProvider>
			<AppUI />
		</HHProvider>
  );
}

export default App
