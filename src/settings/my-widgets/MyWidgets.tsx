import { useState } from 'react';
import styled from 'styled-components';
import { AddWidget } from './add-widget/AddWidget';
import { MyWidgetsList } from './MyWidgetsList';

const SettingsWrapper = styled.div`
	display: grid;
	grid-template: 'header' auto 'actions' auto 'list' 1fr;
	height: 100vh;
`;
const SettingsHeader = styled.header`
	grid-area: header;
`;
const SettingsActions = styled.header`
	grid-area: actions;
`;
const List = styled.div`
	grid-area: list;
`;
export const MyWidgets = () => {
	const [addNew, setAddNew] = useState(false);

	return (
		<SettingsWrapper>
			<SettingsHeader>
				<h1>Ustawienia</h1>
			</SettingsHeader>
			<List>
				<MyWidgetsList />
			</List>
			<SettingsActions>
				<button onClick={() => setAddNew(true)}>Dodaj</button>
				<AddWidget open={addNew} onClose={() => setAddNew(false)} />
			</SettingsActions>
		</SettingsWrapper>
	);
};
