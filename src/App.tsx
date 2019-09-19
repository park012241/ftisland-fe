import React from 'react';
import {Title} from './title';

enum Unit {
    gram = 'g',
    kilo = 'Kg',
    ton = '톤',
}

interface IAppProps {
    interval: number;
    function: () => (number | Promise<number>);
}

interface IAppState {
    value: number;
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
        this.setState({
            value,
        });
    }

    public render(): React.ReactNode {
        return (
            <div className="App">
                <Title value={this.state.value} unit={this.state.unit}/>
            </div>
        );
    }
}
