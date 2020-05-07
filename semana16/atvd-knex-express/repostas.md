### Exercício 1
a. Quando usamos o raw, o banco de dados volta pra gente não só as informações específica que queremos, mas também várias outras inforcações complementares a respeito da nossa requisição. A resposta vem dentro de um array com 2 elementos: as respostas específicas e as respostas complementares.

### Exercício 3
a. req.params.id = req representa as informações que chegam até o end point. Nesse caso, está chegando uma informação por path param, que tem uma propriedade que chama id.
b. res.status(200).send(actor)) e res.status(400).send({...} são respostas que enviamos ao usuário que bateu no nosso endpoint. Status é código http correspondente ao sucesso da requisição e send é a mensagem em si que enviaremos ao usuário