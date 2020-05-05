## Exercícios de Escrita
### Exercício 1
a. VARCHAR = string, conjunto de caracteres
PRIMARY KEY = identificador do item. Nennum outro item pode ter um identificador igual
NOT NULL = indica que aquela coluna não pode receber NOT NULL como valor
DATE = Data no formato YYYY-MM-DD
b. O comando **SHOW** DATABASES, mostrou o meu banco de dados sagan_vinicius_db e o comando **SHOW** TABLES, mostrou a minha tabela actor.
c.O comando **DESCRIBE** actor mostrou as estruturas da minha tabela actor
### Exercício 2
b. O erro que ocorreu foi uma dupla entrada de um mesmo valor para a Primary Key. A razão para tal foi a tentativa de criar um novo elemento para a tabela com o mesmo id do elemento criado anteriormente.
c. Error Code: 1136. Column count doesn't match value count at row 1 - A contagem da coluna não está de acordo com a contagem da linha 1 -  Este erro aconteceu, pois foram passados mais valores do que requisitado
Resposta após correção do erro: "1 row(s) affected"
d.Error Code: 1364. Field 'name' doesn't have a default value - O campo name não aceita null, logo à este campo, é necessário passar um valor.
Resposta após correção do erro: "1 row(s) affected"
e. Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 - O valor passado para a coluna 'birth_date' está incorrero. Isso acontece porque, pois esse campo pede uma data no formato YYYY-MM-DD entre as aspas e a ele foi passado uma data neste formato, mas sem aspas.
Resposta após correção do erro: "1 row(s) affected"
### Exercício 3
c. O resultado foi uma tabela com valores nulos, pois não há nenhum ator cadastrado com o "gender" "invalid".
e. Error Code: 1054. Unknown column 'nome' in 'field list' - Não há coluna cujo nome é 'nome', mas sim, 'name'
Resposta após correção do erro: 1 row(s) returned
### Exercício 4
a. O query deste exercício seleciona atores cujos nomes começam com as letras A ou J, além disso devem ganhar mais de $300 mil
### Exercício 5
a. A querry consiste em um comando de criar uma tabela, no nome da tabela e entre parenteses, os campos da tabele. Estes, por sua vez, recebem um nome, um tipo e regras de restrições.
---
## Exercícios de Código
**USE** sagan_vinicius_db;
**SHOW** DATABASES;
**SHOW** TABLES;
**CREATE TABLE** Actor(id VARCHAR(255) PRIMARY KEY, name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL, birth_date DATE NOT NULL, gender VARCHAR(6) NOT NULL);
**DESCRIBE** Actor;
**INSERT INTO** Actor(id, name, salary, birth_date, gender)
VALUES( "OO1", "Tony Ramos", 400000, "1948-08-25", "male");
**INSERT INTO** Actor(id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963/08/23", "female");
**INSERT INTO** Actor(id, name, salary, birth_date, gender)
VALUES("002", "Lasaro Ramos", 200000, "1963/08/23", "male");
**INSERT INTO** Actor (id, name, salary, birth_date, gender)
VALUES("003","Fernanda Montenegro", 300000, "1929-10-19", "female");
**INSERT INTO** Actor (id, salary, birth_date, gender, name)
VALUES("004", 400000, "1949-04-18", "male", "Serginho Mallandro");
**INSERT INTO** Actor (id, name, salary, birth_date, gender)
VALUES("005","Juliana Paes", 719333.33, "1979-03-26", "female");
**INSERT INTO** Actor (id, name, salary, birth_date, gender)
VALUES("007", "Antônio Fagundes", 400000, "1949-04-18", "male");
**SELECT** * FROM Actor;
**SELECT** id, salary from Actor; 
**SELECT** id, name from Actor WHERE gender = "male";
**SELECT** * from Actor WHERE gender = "female";
**SELECT** salary from Actor WHERE name = "Tony Ramos";
**SELECT** * from Actor WHERE gender = "invalid";
**SELECT** id, name, salary from Actor WHERE salary <= 500000;
**SELECT** id, name from Actor WHERE id = "002";
**SELECT** * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
**SELECT** * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;
**SELECT** * FROM Actor
WHERE name LIKE "%g%";
**SELECT** * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%g%") 
AND salary BETWEEN 350000 AND 900000;
**CREATE TABLE** Movies(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT (255) NOT NULL,
    release_date DATE NOT NULL ,
    rating INT NOT NULL
);
**INSERT INTO** Movies (id, name, synopsis, release_date, rating)
VALUES("001", "Se eu fosse você", "Cláudio e Helena são casados há muitos 
anos e enfrentam a rotina do casamento. Um dia eles são atingidos por 
um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);
**INSERT INTO** Movies (id, name, synopsis, release_date, rating)
VALUES("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos,
 sempre causa grandes confusões. A vida dela e dos seus quatro filhos 
 sofre uma reviravolta depois que Zaida, empregada e amiga de
 Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
 "2012-12-27", 10);
 **INSERT INTO** Movies (id, name, synopsis, release_date, rating)
VALUES("003", "Dona Flor e seus dois maridos", "Dona Flor é uma sedutora
 professora de culinária casada com Vadinho, que só quer saber de farras
 e jogatina nas boates. A vida de abusos acaba por acarretar sua morte 
 precoce.",
 "2017-02-11", 8);
**INSERT INTO** Movies (id, name, synopsis, release_date, rating)
VALUES("004", "Minha mãe é uma peça", "Em Niterói, Dona Hermínia é uma
 mulher de meia idade, divorciada do marido, que a trocou por uma mulher
 mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina
 e Juliano, sem se dar conta que já estão bem grandinhos.",
 "2013-06-21", 9);
**SELECT** * FROM Movies;
**SELECT** id, name, rating FROM Movies WHERE id = "003";
**SELECT** * FROM Movies WHERE name = "Minha mãe é uma peça";
**SELECT** id, name, synopsis FROM Movies WHERE rating >= 7;
**SELECT** * From Movies WHERE name LIKE "%vida%";
**SELECT** * FROM Movies WHERE name LIKE "%filhos%" OR synopsis LIKE
"%filhos%";
**SELECT** * FROM Movies WHERE release_date < "2020-05-04";
**SELECT** * FROM Movies WHERE release_date < CURDATE()
AND (name LIKE "%mãe%" OR synopsis LIKE "%mãe%")
AND rating > 7;