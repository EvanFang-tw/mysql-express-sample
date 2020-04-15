
### APIs

#### Create a product
```sh
curl -H "Content-Type: application/json" -X POST \
--data '{"name":"Book1","remark":"This is a book.", "price":1000}' \
localhost:3000/product
```

Response example
```json
{
  "fieldCount":0,
  "affectedRows":1,
  "insertId":5,
  "serverStatus":2,
  "warningCount":0,
  "message":"",
  "protocol41":true,
  "changedRows":0
}
```

#### Update a product
```sh
curl -H "Content-Type: application/json" -X PUT \
--data '{"name":"Book_Update","remark":"Book_Remark_Update", "price":9}' \
localhost:3000/product/1
```

#### Delete a product
```sh
curl -H "Content-Type: application/json" -X DELETE localhost:3000/product/1
```

#### Get all products
```sh
curl localhost:3000/products
```

#### Get a product
```sh
curl localhost:3000/product/1
```

