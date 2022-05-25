# Postgresql CRUDL Rest API

Quotes REST API using Node.js and PostgreSQL. Inspired from: [Node.js PostgreSQL tutorial](https://geshan.com.np/blog/2021/01/nodejs-postgresql-tutorial/).

## Example Usage

**(C)REATE**

```shell
curl -i -XPOST "http://localhost:3000/quotes" \
    -H "Content-Type: application/json" \
    --data '{"author":"Internet Troll","quote":"Thats terrible and give me more of it."}'
```

**(R)EAD**

```shell
curl -i -XGET "http://localhost:3000/quotes/1"
```

**(U)PDATE**

**(D)ELETE**


**(L)IST**

```shell
curl -i -XGET "http://localhost:3000/quotes"
```
