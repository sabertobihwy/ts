import React from "react"

interface IState {
    msg: number,
    des: string
}

interface IProps {
    num: number,
    onChange: (n: number) => void
}

export class CountComp extends React.Component<IProps, IState> {
    state: IState = {
        msg: 1,
        des: "test",
    }
    render() {
        return (
            <div>
                {this.props.num}
                <button onClick={() => {
                    this.props.onChange(this.props.num + 1)
                }}></button>
            </div>
        )
    }
}