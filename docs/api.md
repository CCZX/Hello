## 接口基本格式

```json
{
  code: number,
  message: string,
  data: any
}
```

自定义状态码表示的信息如下：

|  code   | 意义       |
|  ----   | ----      |
| -200    | 失败      |
| 200     | 成功        |
| 401     | 没有登录状态 |
