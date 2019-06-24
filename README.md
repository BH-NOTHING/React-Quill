props
1. content -- 编辑器内容

events

1. onFocus -- 聚焦事件
2. onBlur -- 失焦事件
3. onTextChange -- 内容改变
4. onSelectChange -- 选中改变
    参数
        range，oldRange --
            type: Object
            index: 索引位置
            length: 长度 
        source -- 选中内容
5. onReady -- 初始化完成 
     参数 quill对象
