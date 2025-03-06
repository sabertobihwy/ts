import React, { useState, useEffect } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Image, message, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import type { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import { createImportSpecifier } from 'typescript';


type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
    </button>
);

export interface IUploadParams {
    onSucess: () => void
    url?: string
}

export default function UploadDisplay({ url, onSucess }: IUploadParams) {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>(() =>
        url ? [{ uid: url, name: url, thumbUrl: `http://localhost:3000${url}` }] : []
    );
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
    };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        console.log(newFileList[0].status)
        if (newFileList[0].status === 'done') {
            if (newFileList[0]?.response?.error !== "") {
                error()
            } else {
                success()
                onSucess()
                console.log(newFileList[0]?.response?.data.url)
            }
        }

        setFileList(newFileList);

    }


    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    // const customRequest = async (req: RcCustomRequestOptions<any>) => {
    //     console.log(req)
    //     const form = new FormData()
    //     form.append(req.filename!, req.file)
    //     const request = new Request(req.action, {
    //         method: req.method,
    //         body: form
    //     })
    //     const res = await fetch(request).then(resp => resp.json())
    //     // console.log(res)
    //     if (res.error !== '') {
    //         error()
    //     } else {
    //         success()

    //     }
    // }

    return (
        <>
            <Upload
                name="avatar"
                accept=".jpg,.png"
                action="/upload"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            //customRequest={customRequest}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
            {contextHolder}
        </>
    )
}

