/**
 *  实现一个User类，添加decorator，能够为class添加注释，props也添加注释
 *  print()方法：输出class注释，props注释，没有的就输出name
 */

import { classDescriptor, printAll, propDescriptor } from "./Descriptor";

@classDescriptor("user_class_comment")
class User {

    @propDescriptor("pwd_ comment")
    pwd: string = ""

    id: string = ""
}

const u = new User()
printAll(u)

