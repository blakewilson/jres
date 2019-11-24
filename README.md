
[<img width="200px" height="200px" style="display: block; margin-top: 1.25rem; margin-left: auto; margin-right: auto" src="https://jres.dev/logo.svg">](https://jres.dev)

# The Jres Specification

## Introduction

The Jres specification establishes how to format JSON RESTful API responses.

The specification assumes that there is always either a `data` key, or an `error` key. Both can not be present. If the response contains the `data` key, the API request has succeeded. If the `error` key is present, the API request did not succeed. All responses are enveloped.

## Examples

### Successful Responses

| Key | Is Required | Description |
| --- | --- | --- |
| `data` | &#10004; | Holds the API payload |

A successful response is only required to have a `data` key. This will hold the API response's payload. If there is no payload, like in the case of a record deletion, `data` would be set to `null`.

#### GET /users

```json
{
  "data": [
    {
      "id": 1,
      "firstName": "Jane",
      "lastName": "Doe",
      "email": "janedoe@example.com"
    },
    {
      "id": 2,
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com"
    },
    {...},
    {...}
  ]
}
```

#### GET /users/:userId

```json
{
  "data": {
    "id": 1,
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "janedoe@example.com"
  }
}
```

#### DELETE /users/:userId

> `data` can be `null` if the response does not have a payload, like a DELETE endpoint.

```json
{
  "data": null
}
```

### Unsuccessful Responses

| Key | Is Required | Description |
| --- | --- | --- |
| `error` | &#10004; | The `error` object key is used to determine if the response was successful or not. |
| `error.message` | &#10004; | The `error.message` key is a UI friendly message that can be used on the client side to describe the error. | 
| `error.code` | | A code that can be used to describe a specific error within your application. This is different than a [status code](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes). |
| `error.validationErrors` | | If your error is due to incorrect input, use `error.validationErrors`. This key stores an object such that the keys are the [HTML id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the invalid field, and the value is the error message to be displayed on the client side. |

An unsuccessful response will always include an `error` key. That way, you can check if your response succeeds or not by simply checking if the `error` key is in the response. Here is an example in JavaScript:

```js
fetch(`/users/`, {
  method: 'GET'
})
  .then(res => res.json())
  .then(res => {
    // Check for error in response.
    if(res.error) {
      throw error
    }

    // API Request succeeded, use data.
    console.log(data)
  })
  .catch(err => console.log(err))
```

#### GET /users

```json
{
  "error": {
    "message": "There was an issue connecting to the database.",
    "code": "DATABASE_CONNECTION_FAILED"
  }
}
```

#### POST /users

```json
{
  "error": {
    "message": "Some of the inputs you entered are incorrect.",
    "code": "CREATE_USER_VALIDATION_FAILED",
    "validationErrors": {
      "email": "This email has already been used",
      "password": "The password must be at least 8 characters"
    }
  }
}
```

---

The Jres specification was created by [Blake Wilson](https://github.com/blakewilson). The specification and this website are open source, and are released under the [MIT license](https://github.com/blakewilson/jres/blob/master/LICENSE).