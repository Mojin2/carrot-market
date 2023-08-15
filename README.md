Prisma

scheme.prisma

> data에 대한 scheme를 정리해 model로 생성
> secure tunnel : pscale connect [db]를 통해 planet scale과 연결
> 받은 url을 env파일에 입력
> "npx prisma db push" : data형태를 planet scale로 보냄
> Admin pannel : npx prisma studio를 통해 관리
> "npx prisma generate" : code로 db와 소통하는 client생성

> front에서는 client 이용불가 : 보안 이슈
> nextjs의 api를 이용

Error

```
Unhandled Runtime Error
TypeError: __webpack_require__.n is not a function. (In '__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__)', '__webpack_require__.n' is undefined)
```
