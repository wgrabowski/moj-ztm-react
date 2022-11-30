import { useState } from 'react';
import { WidgetConfigureProps } from '../../settings/model';
import { SelectStop } from '../../settings/ui/select-stop/SelectStop';
import { DeparturesConfig } from './model';

export const DeparturesConfigure = ({
	data,
	onUpdate,
}: WidgetConfigureProps<DeparturesConfig>) => {
	const { stopId, stopLabel, amount } = data || {
		stopId: null,
		amount: 5,
		stopLabel: 'Nazwa przystanku',
	};
	const [stopIdValue, setStopIdValue] = useState<number | null>(stopId);
	const [amountValue, setAmountValue] = useState<number>(amount);
	const [stopLabelValue, setStopLabelValue] = useState<string>(stopLabel);
	const reset = () => {
		setStopIdValue(stopId as number);
		setAmountValue(amount);
		setStopLabelValue(stopLabel);
	};
	const update = () => {
		onUpdate({
			stopLabel: stopLabelValue,
			stopId: stopIdValue as number,
			amount: amountValue,
		});
	};

	return (
		<fieldset>
			<legend>Odjazdy z przystanku</legend>
			<label>
				Nazwa przystanku
				<input
					type="text"
					value={stopLabelValue}
					onChange={(event) => setStopLabelValue(event.target.value)}
				/>
			</label>
			<br />
			<label>
				Wybierz przystanek
				<SelectStop onChange={setStopIdValue} value={stopIdValue} />
			</label>
			<br />
			<label>
				Ile odjazdów pokazać
				<input
					min={1}
					max={10}
					type="range"
					value={amountValue}
					onChange={(event) => setAmountValue(parseInt(event.target.value))}
				/>
			</label>
			<br />
			<footer>
				<button type="button" onClick={reset}>
					Reset
				</button>
				<button type="button" onClick={update}>
					Save
				</button>
			</footer>
		</fieldset>
	);
};
