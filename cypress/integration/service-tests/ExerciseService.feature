@analise
Feature: Serviços Exercícios

Testes dos endpoints do cadastro de exercícios

Scenario: Acesso exercício sem autenticação
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/exercise"
  And não informo o Auth do header
  When realizo a requisição do tipo GET
  Then deve retornar o status "403"
  And deve apresentar no corpo da requisição o texto "\"error\":\"you do not have access to this resource\""

Scenario: Parâmetro exercício na requisição
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/exercise"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  And passo os parâmtros para a requisição '"_id": "5c9ad8b6c081da9539f5dd18", "tenantId": "toia"'
  When realizo a requisição do tipo GET
  Then deve retornar o status "200"
  And deve apresentar no corpo da requisição o texto "Levantamento Terra Barra"
  And não deve apresentar no corpo da requisição o texto "Salto"

Scenario: Acesso exercício com autenticação
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/exercise"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  When realizo a requisição do tipo GET
  Then deve retornar o status "200"
  And deve apresentar no corpo da requisição o texto "Levantamento Terra Barra"
  And deve apresentar no corpo da requisição o texto "Escada Salto Agacha"

Scenario: Adicionar novo exercício
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/exercise"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  And envio os valores no body da requisição '{"name": "Exercício automação", "tenantId": "toia"}'
  When realizo a requisição do tipo POST
  Then deve retornar o status "200"
  And deve apresentar no corpo da requisição o texto "Exercício automação"

Scenario: Atualizar exercício
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/exercise/5f10bbe7f45fe6b0997591fa"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  And envio os valores no body da requisição '{"name": "Exercício Atualizado", "tenantId": "core", "exerciseId": "5f10bbe7f45fe6b0997591fa"}'
  When realizo a requisição do tipo PUT
  Then deve retornar o status "200"
  And deve apresentar no corpo da requisição o texto "Exercício Atualizado"
  And deve apresentar no corpo da requisição o texto "core"

@ignore
Scenario: Excluir exercício
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/exercise/5f39ca48f45fe6b09975981b"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  When realizo a requisição do tipo DELETE
  Then deve retornar o status "200"  