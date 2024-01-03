# ScrollNumber

数字滚动组件

### 示例

  #### 整数

  <ScrollNumber :number="9999999"></ScrollNumber>

  #### 小数

  <ScrollNumber :number="99999.99"></ScrollNumber>

  #### %

  <ScrollNumber :number="'99999.99%'"></ScrollNumber>

### 代码

```html
  <ScrollNumber :number="9999999"></ScrollNumber>

  <ScrollNumber :number="99999.99"></ScrollNumber>

  <ScrollNumber :number="'99999.99%'"></ScrollNumber>
```

### Attributes

| 参数        | 说明           | 类型  |  可选值  |  默认值  |
| ------------- |-------------| -----:| -------------| -----|
| number      | 展示的值 | number/string | 整数/小数/百分比 | 0 |
