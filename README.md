### A API deve conter as seguintes funcionalidades:

- [x] Criação de uma task
- [x] Listagem de todas as tasks
- [ ] Atualização de uma task pelo `id`
- [ ] Remover uma task pelo `id`
- [ ] Marcar pelo `id` uma task como completa
- [ ] Importação de tasks em massa por um arquivo CSV

### Validações
- [ ] validar se as propriedades `title` e `description` das rotas `POST` e `PUT` estão presentes no `body` da requisição.
- [ ] Nas rotas que recebem o `/:id`, além de validar se o `id` existe no banco de dados, retornar a requisição com uma mensagem informando que o registro não existe.