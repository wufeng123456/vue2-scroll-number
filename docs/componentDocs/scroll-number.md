# ScrollNumber

数字滚动组件

### 示例

  1. 整数

  <ScrollNumber :number="9999999"></ScrollNumber>

  2. 小数

  <ScrollNumber :number="99999.99"></ScrollNumber>

  3. %

  <ScrollNumber :number="'99999.99%'"></ScrollNumber>

  4. 不使用千分位

  <ScrollNumber :number="'99999.99%'" :thousands="false"></ScrollNumber>

  5. demo

  <App />

### 代码

```html
  <ScrollNumber :number="9999999"></ScrollNumber>

  <ScrollNumber :number="99999.99"></ScrollNumber>

  <ScrollNumber :number="'99999.99%'"></ScrollNumber>

  <ScrollNumber :number="'99999.99%'" :thousands="false"></ScrollNumber>
```

### Attributes

| 参数        | 说明           | 类型  |  可选值  |  默认值  |
| ------------- |-------------| -----:| -------------| -----|
| number      | 展示的值 | number/string | 整数/小数/百分比 | 0 |
| thousands   | 是否显示千分位 | boolean | true/false | true |