import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";

let response = undefined;
let url = '';
let headerKey = 'Authorization';
let headerValue = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA';
let params = '';
let values = undefined;

beforeEach(() => {
  url = '';
  params = '';
})

Given ('acesso a url {string}', uri => {
  url = uri;
})
And ('informo o endpoint {string}', endpoint => {
  url += endpoint;
})
And('informo o valor para o parâmetro {string} {string} no header da requisição', function(key, value) {
  headerKey = key;
  headerValue = value;
})
And('não informo o Auth do header', () => {
  headerValue = '';
})
And('passo os parâmtros para a requisição {string}', param => {
  params = param;
})
When('realizo a requisição do tipo GET', () => {
  cy.request({
    method: 'GET',
    form: true,
    url: url,
    headers: {
      [headerKey] : headerValue
    },
    failOnStatusCode: false,
    qs: {
      search: `{${params}}`
    }
  })
  .then((res) => {
    response = res;
  })
})
When('realizo a requisição do tipo POST', () => {
  cy.request({
    method: 'POST',
    url: url,
    headers: {
      [headerKey] : headerValue,
      'Content-type': 'application/json'
    },
    failOnStatusCode: false,
    body: 
      values
    })
  .then((res) => {
    response = res;
  })
})
When('realizo a requisição do tipo PUT', () => {
  cy.request({
    method: 'PUT',
    url: url,
    headers: {
      [headerKey] : headerValue,
      'Content-type': 'application/json'
    },
    failOnStatusCode: false,
    body: 
      values
    })
  .then((res) => {
    response = res;
  })
})
When('realizo a requisição do tipo DELETE', () => {
  cy.request({
    method: 'DELETE',
    url: url,
    headers: {
      [headerKey] : headerValue,
      'Content-type': 'application/json'
    },
    failOnStatusCode: false,
    })
  .then((res) => {
    response = res;
  })
})
Then('deve retornar o status {string}', status => {
  expect(response.status).to.eq(+status);
})
Then('deve apresentar no corpo da requisição o texto {string}', string => {
  expect(JSON.stringify(response.body)).to.have.string(string);
})
Then('não deve apresentar no corpo da requisição o texto {string}', string => {
  assert.notInclude(JSON.stringify(response.body), string);
})
And('envio os valores no body da requisição {string}', bodyValue => {
  values = bodyValue;
})











Given('teste usuário', () => {
  cy.request({
      url: 'http://localhost:8081/user', 
      headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA'
      }
  })
  .then((res) => {
      response = res;
      // expect(res.status).to.eq(200)
      // expect(JSON.stringify(res.body)).to.have.string('Leonardo')
  })
});

Given('teste usuário', () => {
  cy.request({
      url: 'http://localhost:8081/user', 
  })
  .then((res) => {
      expect(res.status).to.eq(403)
      expect(JSON.stringify(res.body)).to.have.string('\"error\": \"you do not have access to this resource\"')
  })
});