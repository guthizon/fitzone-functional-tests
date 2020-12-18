@test
Feature: Serviços Usuário

Testes dos endpoints do cadastro de usuários

Scenario: Usuário sem autenticação
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/user"
  And não informo o Auth do header
  When realizo a requisição do tipo GET
  
  Then deve retornar o status "403"
  And deve apresentar no corpo da requisição o texto "\"error\":\"you do not have access to this resource\""

Scenario: Parâmetro usuário na requisição
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/user"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  And passo os parâmtros para a requisição '"id": "10", "tenantId": "toia"'
  When realizo a requisição do tipo GET
  Then deve retornar o status "200"
  And deve apresentar no corpo da requisição o texto "Aynara"
  And não deve apresentar no corpo da requisição o texto "Leonardo"

Scenario: Usuário com autenticação
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/user"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  When realizo a requisição do tipo GET
  Then deve retornar o status "200"
  And deve apresentar no corpo da requisição o texto "Leonardo"
  And deve apresentar no corpo da requisição o texto "Aynara"

Scenario: Inserir novo usuário
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/user"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  And envio os valores no body da requisição '{"status": "ACTIVE", "name": "Automação service", "email": "automacao@gmail.com", "tenantId": "toia", "profile": "USER", "id": "7879454545613"}'
  When realizo a requisição do tipo POST
  Then deve retornar o status "200"
  And deve apresentar no corpo da requisição o texto "Automação service"

Scenario: Atualizar usuário
  Given acesso a url "http://localhost:8081"
  And informo o endpoint "/user"
  And informo o valor para o parâmetro "Authorization" "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzlhZDg0MWMwODFkYTk1MzlmNWRkMTUiLCJuYW1lIjoiTGVvbmFyZG8gVGhpem9uIiwidGVuYW50SWQiOiJ0b2lhIiwicHJvZmlsZSI6IkFETUlOIiwiaWF0IjoxNjA3NjIxOTI0LCJleHAiOjE2MTAwNDExMjR9.czHDLHb7B7VQHZiQSpNqOHNj1iaKxwNhHW2JE6MrhIA" no header da requisição
  And envio os valores no body da requisição '{"name": "Atualizadoss","_id": "5caf118cb891cfdbba3f895b"}'
  When realizo a requisição do tipo PUT
  Then deve retornar o status "200"
  And deve apresentar no corpo da requisição o texto "Atualizadoss"

