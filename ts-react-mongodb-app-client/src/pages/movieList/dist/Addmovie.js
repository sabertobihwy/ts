"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var UploadDisplay_1 = require("../../component/UploadDisplay");
var onFinish = function (values) {
    console.log('Success:', values);
};
var onFinishFailed = function (errorInfo) {
    console.log('Failed:', errorInfo);
};
var types = [
    { label: 'comic', value: '喜剧' },
    { label: 'action', value: '动作' },
    { label: 'love', value: '爱情' },
    { label: 'wenyi', value: '文艺' },
];
var areas = [
    { label: 'USA', value: 'USA' },
    { label: 'UK', value: 'UK' },
    { label: 'AF', value: 'AF' },
    { label: 'INDIA', value: 'INDIA' },
];
// const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (checkedValues) => {
//     console.log('checked = ', checkedValues);
// };
var AddMovie = function () { return (react_1["default"].createElement(antd_1.Form, { name: "basic", labelCol: { span: 8, offset: 0 }, wrapperCol: { span: 10 }, style: { maxWidth: 400, marginTop: 20 }, initialValues: { isHot: true, isClassic: false }, onFinish: onFinish, onFinishFailed: onFinishFailed, autoComplete: "off" },
    react_1["default"].createElement(antd_1.Form.Item, { label: "Username", name: "name", rules: [{ required: true, message: 'Please input your username!' }] },
        react_1["default"].createElement(antd_1.Input, null)),
    react_1["default"].createElement(antd_1.Form.Item, { label: "Upload", valuePropName: "fileList" },
        react_1["default"].createElement(UploadDisplay_1["default"]
        // url={'/static/upload/1741227051797.jpg'} 
        , { 
            // url={'/static/upload/1741227051797.jpg'} 
            onSucess: function () {
                console.log(123);
            } })),
    react_1["default"].createElement(antd_1.Form.Item, { label: "types", name: "types" },
        react_1["default"].createElement(antd_1.Checkbox.Group, { options: types })),
    react_1["default"].createElement(antd_1.Form.Item, { name: "areas", label: "areas" },
        react_1["default"].createElement(antd_1.Checkbox.Group, { options: areas })),
    react_1["default"].createElement(antd_1.Form.Item, { name: "timeLong", label: "timeLong" },
        react_1["default"].createElement(antd_1.InputNumber, null)),
    react_1["default"].createElement(antd_1.Form.Item, { label: "isHot", name: "isHot", valuePropName: 'checked' },
        react_1["default"].createElement(antd_1.Switch, { checked: false })),
    react_1["default"].createElement(antd_1.Form.Item, { label: "isClassic", name: "isClassic", valuePropName: 'checked' },
        react_1["default"].createElement(antd_1.Switch, { checked: false })),
    react_1["default"].createElement(antd_1.Form.Item, { label: null },
        react_1["default"].createElement(antd_1.Button, { type: "primary", htmlType: "submit" }, "Submit")))); };
exports["default"] = AddMovie;
