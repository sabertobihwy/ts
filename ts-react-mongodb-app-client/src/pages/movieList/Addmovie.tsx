import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, InputNumber, Switch, message } from 'antd';
import { IMovie } from '../../interface/IMovie';
import UploadDisplay from '../../component/UploadDisplay';
import { MovieService } from '../../service/MovieService';
import { IResponseData, IResponseError } from '../../interface/CommonTypes'


const types = [
    { label: 'comic', value: '喜剧' },
    { label: 'action', value: '动作' },
    { label: 'love', value: '爱情' },
    { label: 'wenyi', value: '文艺' },
];

const areas = [
    { label: 'USA', value: 'USA' },
    { label: 'UK', value: 'UK' },
    { label: 'AF', value: 'AF' },
    { label: 'INDIA', value: 'INDIA' },
]

// const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
//     console.log('checked = ', checkedValues);
// };

const AddMovie: React.FC = ({ }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = (msg: string) => {
        messageApi.open({
            type: 'success',
            content: msg,
        });
    };

    const error = (msg: string) => {
        messageApi.open({
            type: 'error',
            content: msg,
        });
    };

    const onFinish: FormProps<IMovie>['onFinish'] = async (values) => {
        console.log('Success:', values);
        const res: IResponseError | IResponseData<IMovie> = await MovieService.addMovie(values)
        console.log(res)
        if (res.error !== "") {
            error(res.error)
        } else {
            success("add success")
        }
    };

    const onFinishFailed: FormProps<IMovie>['onFinishFailed'] = (errorInfo) => {
        error('Failed:' + errorInfo)
    };

    return (

        <Form
            name="basic"
            labelCol={{ span: 8, offset: 0 }}
            wrapperCol={{ span: 10 }}
            style={{ maxWidth: 400, marginTop: 20 }}
            initialValues={{ isHot: true, isClassic: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<IMovie>
                label="Username"
                name="name"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Avatar" name="imgUrl" >
                <UploadDisplay></UploadDisplay>
            </Form.Item>

            <Form.Item<IMovie> label="types" name="types" >
                <Checkbox.Group
                    options={types}
                // onChange={onChange}
                />
            </Form.Item>

            <Form.Item<IMovie> name="areas" label="areas" >
                <Checkbox.Group
                    options={areas}
                //  onChange={onChange}
                />
            </Form.Item>

            <Form.Item<IMovie> name="timeLong" label="timeLong">
                <InputNumber />
            </Form.Item>

            <Form.Item label="isHot" name="isHot" valuePropName='checked'>
                <Switch checked={false} />
            </Form.Item>

            <Form.Item label="isClassic" name="isClassic" valuePropName='checked'>
                <Switch checked={false} />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit" >
                    Submit
                </Button>
            </Form.Item>
            {contextHolder}
        </Form>
    )
};

export default AddMovie;