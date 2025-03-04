import React, { Component } from 'react'
import { Space, Table, Tag, Switch, TablePaginationConfig, Button, Flex, Popconfirm, message } from 'antd';
import { IMovieState } from '../redux/reducer/MovieReducer';
import { SwtichTypes } from '../interface/CommonTypes';
import { IMovie } from '../interface/IMovie';
import { NavLink } from 'react-router';

const { Column } = Table;

export interface EventState {
    onLoading: () => void,
    onSwitchChange: (checked: boolean, type: SwtichTypes, id: string) => void
    onPageChange: (page: number, pageSize: number) => void
    onDelete: (id: string) => Promise<void>
}

export default class MovieDisplay extends Component<IMovieState & EventState> {

    componentDidMount(): void {
        this.props.onLoading()
    }

    getPagination(): false | TablePaginationConfig {
        if (this.props.total === 0) {
            return false
        }
        return {
            position: ['bottomRight'],
            onChange: this.props.onPageChange,
            total: this.props.total,
            current: this.props.searchCondition.page,
            pageSize: this.props.searchCondition.limit
        }
    }
    async onDelete(id: string) {
        await this.props.onDelete(id)
        message.error('delete success');
    }

    render() {
        return (
            <Table rowKey={"_id"}
                dataSource={this.props.data}
                loading={this.props.isLoading}
                pagination={this.getPagination()}
            //  onChange={this.props.onPageChange}
            >
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
                <Column title="Operation" dataIndex="Operation" key="Operation"
                    render={(_, record: IMovie) => (
                        <Flex gap="small" wrap>
                            <NavLink to={'/movie/edit/' + record._id} >
                                <Button type="primary" size={'small'}>
                                    edit
                                </Button>
                            </NavLink>
                            <Popconfirm
                                title="Delete the task"
                                description="Are you sure to delete this task?"
                                onConfirm={this.onDelete.bind(this, record._id!)}
                                onCancel={() => { }}
                                okText="Yes"
                                cancelText="No"


                            >
                                <Button type="default" danger size={'small'}
                                >
                                    del
                                </Button>
                            </Popconfirm>

                        </Flex>
                    )
                    }
                />

            </Table >
        );
    }
}
