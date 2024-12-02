# backend-test

## Setup project

1. Create `.env` config file, you can copy contents from `.env.example` but have to use your own credentials

2. In the repo root directory, run `npm install` to gather all dependencies.

## Endpoints

`POST /card/token`

```
curl --location 'http://locahost:3001/card/getToken' \
--data '{
    "project":"d7d86391b36b4543bc1cf87cbd2ee6c9",
    "number":"4244491609788988",
    "expiration_month":"06",
    "expiration_year":"2028",
    "security_code":"501"
}'
```

`POST /transaction/process`

```
curl --location 'http//localhost:3001/transaction/process' \
--data-raw '{
  "project": "d7d86391b36b4543bc1cf87cbd2ee6c9",
  "card_token": "e649942562adf9adb9d7ad4a67faa39310816fe4b0b54d1ee4496f4c0a7a8305",
  "user_contact_email": "example@gmail.com",
  "user_name": "john doe",
  "description": "live test payment",
  "price": "1.00",
  "currency": "USD",
  "order_id": "1233213123213",
  "user_phone": "55555555555",
  "result_url": "https://example.com/result",
  "success_url": "https://example.com/success",
  "failure_url": "https://example.com/failure",
  "ip": "1.1.1.1",
  "user_country": "PL",
  "user_city": "Krakow",
  "user_address": "Grodzka 26",
  "user_state": "Krakow",
  "user_postal_code": "31-044",
  "user_nationality": "PL",
}'
```

`POST /transaction/status`

```
curl --location 'https://localhost:3001/dev/transaction/status' \
--data '{
  "project": "d7d86391b36b4543bc1cf87cbd2ee6c9",
  "payment_id": "1692864583247_GCAaCTitYHWnyeQBjyguEiOt",
}'
```
