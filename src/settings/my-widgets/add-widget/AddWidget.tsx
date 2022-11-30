import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWidgetsConfig } from '../../../data-access/hooks/widget.hook';
import { DeparturesConfigure } from '../../../widgets/departures';
import { WidgetType } from '../../model';
import { WidgetTypeSelect } from '../../ui/widget-type-select/WidgetTypeSelect';

interface AddWidgetProps {
	open: boolean;
	onClose: () => void;
}

const StyledDialog = styled.dialog`
	width: 90vw;
	height: 90vh;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding-top: 4em;

	::backdrop {
		background: rgba(255, 0, 0, 0.25);
	}
`;
const CloseButton = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	background: transparent;
	border: 0;
	font-size: 2em;
	cursor: pointer;
`;

export const AddWidget = ({ open, onClose }: AddWidgetProps) => {
	const { addWidgetConfig } = useWidgetsConfig();
	const [dialogOpen, setDialogOpen] = useState(open);
	const [widgetType, setWidgetType] = useState<WidgetType>(
		WidgetType.departure
	);
	const widgetConfigEditComponents: Record<WidgetType, any> = {
		[WidgetType.departure]: (
			<DeparturesConfigure
				data={null}
				onUpdate={(data) => {
					addWidgetConfig({ type: WidgetType.departure, data });
					setDialogOpen(false);
				}}
			/>
		),
	};

	useEffect(() => {
		setDialogOpen(open);
	}, [open]);

	function closeModal() {
		setDialogOpen(false);
		onClose();
	}

	return (
		<StyledDialog id="newWidgetModal" open={dialogOpen}>
			<CloseButton type="button" onClick={closeModal}>
				&times;
			</CloseButton>
			<WidgetTypeSelect onChange={setWidgetType} />
			{`is ${widgetType}`}
			{widgetType !== undefined && widgetConfigEditComponents[widgetType]}
		</StyledDialog>
	);
};
