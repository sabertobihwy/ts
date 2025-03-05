import React, { Component } from 'react'
import { Space, Table, Input, Switch, TablePaginationConfig, Button, Flex, Popconfirm, message } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import { FileSearchOutlined, SearchOutlined } from '@ant-design/icons';
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
    onKeyChange: (key: string) => void
    onSearch: () => void
    onReset: () => void
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

    private getFilterDropDown({ close }: FilterDropdownProps) {
        return (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    value={this.props.searchCondition.key}
                    onChange={(e) => { this.props.onKeyChange(e.target.value) }}
                    onPressEnter={() => { }}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={this.props.onSearch.bind(this)}
                        icon={<FileSearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={this.props.onReset.bind(this)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        )
    }


    render() {
        return (
            <Table rowKey={"_id"}
                dataSource={this.props.data}
                loading={this.props.isLoading}
                pagination={this.getPagination()}
            >
                <Column title="Name" dataIndex="name" key="name"
                    filterDropdown={this.getFilterDropDown.bind(this)}
                    filterIcon={<SearchOutlined />}
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
