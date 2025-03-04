import React, { Component } from 'react'
import { Space, Table, Tag, Switch } from 'antd';
import { IMovieState } from '../redux/reducer/MovieReducer';
import { SwtichTypes } from '../interface/CommonTypes';
import { IMovie } from '../interface/IMovie';

const { Column } = Table;

export interface EventState {
    onLoading: () => void,
    onSwitchChange: (checked: boolean, type: SwtichTypes, id: string) => void
}

export default class MovieDisplay extends Component<IMovieState & EventState> {

    componentDidMount(): void {
        this.props.onLoading()
    }

    render() {
        if (this.props.isLoading) {
            return <p>数据加载中...</p>;
        }
        return (
            <Table dataSource={this.props.data}>
                <Column title="Name" dataIndex="name" key="name"

                />
                <Column title="areas" dataIndex="areas" key="areas"
                    render={(tags: string[]) => (
                        <>{tags.join(',')}</>
                    )}
                />
                <Column title="timeLong" dataIndex="timeLong" key="timeLong" />
                <Column title="isHot" dataIndex="isHot" key="isHot"
                    render={(tags: boolean, record: IMovie) => (
                        <Switch checked={tags} onChange={(checked) => {
                            this.props.onSwitchChange(checked, SwtichTypes.isHot, record._id!)
                        }} />
                    )}
                />
                <Column title="isClassic" dataIndex="isClassic" key="isClassic"
                    render={(tags: boolean, record: IMovie) => (
                        <Switch checked={tags} onChange={(checked) => {
                            this.props.onSwitchChange(checked, SwtichTypes.isClassic, record._id!)
                        }} />
                    )}
                />
                {/* <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(tags) => (
                        <>
                            {tags.map((tag) => {
                                let color = tag.length > 5 ? 'geekblue' : 'green';
                                if (tag === 'loser') {
                                    color = 'volcano';
                                }
                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                        </Space>
                    )}
                /> */}
            </Table>
        );
    }
}
