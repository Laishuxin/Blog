# api document

## 1. design philosophy

+ Use `Typescript` as my blog api design language

  Why? Because my backend server is write by `javascript/typescript` and using `Typescript` as api design language can be easy to translate to backend codes. Second, `Typescript` provide useful type representation, which help us easy to understand the intension of  the api.

+ Use `RESTful Api` design pattern.



## 2. Type definition



## 3. Apis

### 3.1 Articles

#### 3.1.1 API PROTOTYPE

|          |                       |
| :------: | :-------------------: |
|  method  |          GET          |
|   path   | /api/v1/blog/articles |
| protocol |         HTTP          |

#### 3.1.2 PARAMS

|   parameter    | required |  type   | position |                         description                          |
| :------------: | :------: | :-----: | :------: | :----------------------------------------------------------: |
| X-Access-Token |  false   | string  |  header  |           authority token.<br>**nul**l by default            |
|     offset     |  false   | Integer |  query   |         offset from start page.<br>**0** by default.         |
|     limit      |  false   | Integer |  query   |             limit per page.<br>**10** by default             |
|   sortField    |  false   | string  |  query   | indicating sorting field.<br>options: createAt/updateAt/views/type/commentCount/<br>**updateAt** by default |
|     isAsc      |  false   | boolean |  query   |           ascending sort?<br>**false** by default.           |
|    category    |  false   | string  |  query   | get articles by category.<br>options: `Category.name`<br>**null** by default, this means that query all categories. |

#### 3.1.3 RESPONSE

##### 3.1.3.1 Response Api

```ts
ArticlesApi extends RestfulApi {
    data: {
        data: ArticleList,
        count: number,
		offset: number,
		limit: number
    }
}
```

| parameter |     type      |             description              |
| :-------: | :-----------: | :----------------------------------: |
|   data    | `ArticleList` | All the articles that has been found |
|   count   |    Integer    |        the number of articles        |
|  offset   |    Integer    |                                      |
|   limit   |    Integer    |                                      |

##### 3.1.3.2 Status

| status | description  |
| :----: | :----------: |
|  200   |      ok      |
|  400   | bad request  |
|  401   | unauthorized |
|  404   |  not found   |
|  500   | server error |

##### 3.1.3.3 Message

|         message         | status |                         description                          |
| :---------------------: | :----: | :----------------------------------------------------------: |
|         success         |  200   |                      query successfully                      |
|         no more         |  200   |            `offset + limit > articleList.length`             |
| unrecognized sort field |  200   | unrecognized sort field when sortField is not in the \<options\>,<br> using default sort rule instead. |
|   authorization error   |  401   |                        expired token                         |
|      server error       |  500   |               error occur when executing query               |



### 3.2 Articles/:id

####  3.2.1 API PROTOTYPE

|          |                           |
| :------: | :-----------------------: |
|  method  |            GET            |
|   path   | /api/v1/blog/articles/:id |
| protocol |           HTTP            |

#### 3.2.2 PARAMS

|    parameter    | required |  type   | position |               description               |
| :-------------: | :------: | :-----: | :------: | :-------------------------------------: |
| X-Access-Token  |  false   | string  |  header  | authority token.<br>**nul**l by default |
| Accept-Language |  false   | string  |  header  |          **zh-CN** by default           |
|       id        |   true   | Integer |   path   |             the article id              |



#### 3.2.3 RESPONSE

##### 3.2.3.1 Response Api

```ts
ArticlesItemApi extends RestfulApi {
    data: ArticleItem
}
```

| parameter |     type      |          description           |
| :-------: | :-----------: | :----------------------------: |
|   data    | `ArticleItem` | The article with indicating id |

##### 3.2.3.2 Status

| status | description  |
| :----: | :----------: |
|  200   |      ok      |
|  400   | bad request  |
|  403   |  forbidden   |
|  404   |  not found   |
|  500   | server error |

##### 3.2.3.3 Message

|    message     | status |               description                |
| :------------: | :----: | :--------------------------------------: |
|    success     |  200   |            query successfully            |
|  require id  |  400   |             id is not passed             |
| unauthorized | 401 | expired token |
|   not allow    |  403   |    the article has not been published    |
|   not found    |  404   | not found the article with indicating id |
|      server error       |  500   |               error occur when executing query |



### 3.3 Comments

#### 3.3.1 API PROTOTYPE

|          |                       |
| :------: | :-------------------: |
|  method  |          GET          |
|   path   | /api/v1/blog/comments |
| protocol |         HTTP          |

#### 3.3.2 PARAMS

|    parameter    | required |  type   | position |                         description                          |
| :-------------: | :------: | :-----: | :------: | :----------------------------------------------------------: |
| X-Access-Token  |  false   | string  |  header  |           authority token.<br>**nul**l by default            |
| Accept-Language |  false   | string  |  header  |                     **zh-CN** by default                     |
|    sortField    |  false   | string  |  query   | indicating sorting field.<br/>options: createAt/updateAt/count<br/>**updateAt** by default |
|       id        |   true   | Integer |  query   |                        the article id                        |

#### 3.3.3 RESPONSE

##### 3.3.3.1 Response Api

```ts
CommentsApi extends RestfulApi {
  data: {
    data: CommentList,
    count: number
  }
}
```

| parameter |     type      |             description              |
| :-------: | :-----------: | :----------------------------------: |
|   data    | `CommentList` | All the comments that has been found |

##### 3.3.3.2 Status

| status | description  |
| :----: | :----------: |
|  200   |      ok      |
|  400   | bad request  |
|  404   |  not found   |
|  500   | server error |

##### 3.3.3.3 Message

|   message    | status |                 description                 |
| :----------: | :----: | :-----------------------------------------: |
|   success    |  200   |             query successfully              |
|  not allow   |  403   | the article has not been publishednot allow |
|  not found   |  404   |  not found the article with indicating id   |
| server error |  500   |      error occur when executing query       |





### 3.4 Categories

#### 3.4.1 API PROTOTYPE

|          |                         |
| :------: | :---------------------: |
|  method  |           GET           |
|   path   | /api/v1/blog/categories |
| protocol |          HTTP           |

#### 3.4.2 PARAMS

|   parameter    | required |  type   | position |                         description                          |
| :------------: | :------: | :-----: | :------: | :----------------------------------------------------------: |
| X-Access-Token |  false   | string  |  header  |           authority token.<br>**nul**l by default            |
|   sortField    |  false   | string  |  query   | indicating sorting field.<br>options: createAt/updateAt/articleCount/<br>**articleCount** by default |
|     isAsc      |  false   | boolean |  query   |           ascending sort?<br>**false** by default.           |

#### 3.4.3 RESPONSE

##### 3.4.3.1 Response Api

```ts
CategoriesApi extends RestfulApi {
  data: {
    category: string,
    count: number
  }[]
}
```

|    parameter     |  type   |               description                |
| :--------------: | :-----: | :--------------------------------------: |
|       data       |  Array  |                Categories                |
| data[i].category | String  |              Category name               |
|  data[i].count   | Integer | the number of article with category name |

##### 3.4.3.2 Status

| status | description  |
| :----: | :----------: |
|  200   |      ok      |
|  400   | bad request  |
|  401   | unauthorized |
|  404   |  not found   |
|  500   | server error |

##### 3.4.3.3 Message

|         message         | status |                         description                          |
| :---------------------: | :----: | :----------------------------------------------------------: |
|         success         |  200   |                      query successfully                      |
| unrecognized sort field |  200   | unrecognized sort field when sortField is not in the \<options\>,<br> using default sort rule instead. |
|   authorization error   |  401   |                        expired token                         |
|      server error       |  500   |               error occur when executing query               |



### 3.4 Tags

#### 3.4.1 API PROTOTYPE

|          |                   |
| :------: | :---------------: |
|  method  |        GET        |
|   path   | /api/v1/blog/tags |
| protocol |       HTTP        |

#### 3.4.2 PARAMS

|   parameter    | required |  type   | position |                         description                          |
| :------------: | :------: | :-----: | :------: | :----------------------------------------------------------: |
| X-Access-Token |  false   | string  |  header  |           authority token.<br>**nul**l by default            |
|   sortField    |  false   | string  |  query   | indicating sorting field.<br>options: createAt/updateAt/articleCount/<br>**articleCount** by default |
|     isAsc      |  false   | boolean |  query   |           ascending sort?<br>**false** by default.           |

#### 3.4.3 RESPONSE

##### 3.4.3.1 Response Api

```ts
CategoriesApi extends RestfulApi {
  data: {
    tag: string
    count: number
  }[]
}
```

|   parameter   |  type   |             description             |
| :-----------: | :-----: | :---------------------------------: |
|     data      |  Array  |                Tags                 |
|  data[i].tag  | String  |              Tag name               |
| data[i].count | Integer | the number of article with tag name |

##### 3.4.3.2 Status

| status | description  |
| :----: | :----------: |
|  200   |      ok      |
|  400   | bad request  |
|  401   | unauthorized |
|  404   |  not found   |
|  500   | server error |

##### 3.4.3.3 Message

|         message         | status |                         description                          |
| :---------------------: | :----: | :----------------------------------------------------------: |
|         success         |  200   |                      query successfully                      |
| unrecognized sort field |  200   | unrecognized sort field when sortField is not in the \<options\>,<br> using default sort rule instead. |
|   authorization error   |  401   |                        expired token                         |
|      server error       |  500   |               error occur when executing query               |









## Reference

### Api document

[huawei cloud meeting-api](https://support.huaweicloud.com/api-meeting/meeting_21_0071.html)



### RESTful api

[koa-blog: insert data](https://github.com/YuQian2015/koa-blog/blob/master/docs/chapter-7/chapter-7.md)

[restful api best practices](http://www.ruanyifeng.com/blog/2018/10/restful-api-best-practices.html)

