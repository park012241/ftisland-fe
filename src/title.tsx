import React, {Component, ReactNode} from 'react';

export interface ITitleProps {
    value: number | string;
    unit: string;
}

export class Title extends Component<ITitleProps> {
    public render(): ReactNode {
        return <div className="Title">{this.props.value.toString()}{this.props.unit}의 쓰레기가 버려졌어요!</div>;
    }
}
