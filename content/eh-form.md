
## EhForm
平台表单组件
#### 调用方式

```
<eh-form></eh-form>
```
#### 传入属性
##### item-list (Array)
表单项配置列表。

FormItem的属性如下：

- tag : 组件或者标签的名称。默认：el-input
- name : 表单输入项的name属性。


示例：
```
<eh-form :item-list="formList"></eh-form>
...
data(){
    return {
        value: "", 
        formList:[{
            
        }],
    }
}
```
#### 传入方法
##### changeOption
当选择框选中的值发生变化时，调用此方法，返回的参数为新选中的选项。
```

<eh-select keyName="label" valueName="value" @changeOption="change" ></eh-select>
...
methods: {
    change(option) {
        console.log(option) // option为选中的选项
    },
}
```