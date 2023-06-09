import ColorNav from './ColorNav';
import ColorList from './ColorList';
import Color from './Color';
import ColorForm from './ColorForm';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
	const [colors, setColors] = useState({
		red: '#FF0000',
		green: '#00FF00',
		blue: '#0000FF',
	});
	const addColor = (color) => {
		setColors((colors) => ({ ...colors, ...color }));
	};

	return (
		<div className='App'>
			<BrowserRouter>
				<ColorNav />
				<Routes>
					<Route
						exact
						path='/colors'
						element={
							<ColorList
								addColor={addColor}
								colors={colors}
							/>
						}
					/>
					<Route
						exact
						path='/colors/new'
						element={<ColorForm addColor={addColor} />}
					/>
					<Route
						exact
						path='/colors/:color'
						element={<Color colors={colors} />}
					/>
					<Route
						path='*'
						element={<Navigate to='/colors' />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
