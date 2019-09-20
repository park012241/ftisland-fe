import React from 'react';
import {Title} from './title';

enum Unit {
    gram = 'g',
    kilo = 'Kg',
    ton = 't',
    kiloTon = 'Kt'
}

const units: Unit[] = [
    Unit.gram,
    Unit.kilo,
    Unit.ton,
    Unit.kiloTon,
];

interface IAppProps {
    interval: number;
    function: () => (number | Promise<number>);
}

interface IAppState {
    value: number | string;
    unit: Unit;
}

export class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            value: 0,
            unit: Unit.gram,
        };

        this.update().then(() => {
            setInterval(this.update.bind(this) as () => void, this.props.interval);
        });
    }

    private async update(): Promise<void> {
        const value = await this.props.function();
        let index = 0;
        for (let i = value; i > 1000; i /= 1000) {
            index++;
        }
        this.setState(() => ({
            value: (value / (1000 ** index)).toFixed(index === 0 ? 0 : 2),
            unit: units[index],
        }));
    }

    public render(): React.ReactNode {
        return (
            <div className="App">
                <Title value={this.state.value} unit={this.state.unit}/>
            </div>
        );
    }
}
