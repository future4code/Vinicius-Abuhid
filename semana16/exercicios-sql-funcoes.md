## Exercícios de Escrita

### Exercício 1
a. **ALTER TABLE** Actors DROP COLUMN salary; Extinguiria a coluna salary da tabela Actor

b. **ALTER TABLE** Actors **CHANGE** gender sex VARCHAR(6); Mudaria o nome da coluna gender para sex, definindo-a como um texto de no máx 6 caracteres

c.**ALTER TABLE** Actors **CHANGE** gender gender VARCHAR(255); Manteria o nome na coluna gender e a definiria como um texto de até 255 caracteres.

### Exercício 2
d.0 row(s) affected Rows matched: 0  **Change**d: 0  Warnings: 0 - Ao executar o **UPDATE** de uma informação que não existe, a operação foi dada como bem sucedida, mas nenhuma linha foi alterada


### Exercício 5
a. A querry consiste em um comando de contabilizar todos os itens que tem o mesmo gênero.

### Exercício 6
d. Ao executar o UDATE de um id que não existe, a operação foi dada como bem sucedida, mas nenhuma linha foi alterada

### Exercício 7
a. 2
b. 8.666...
c. 1
d. 0
e. 10
f. 7

---

## Exercícios de Código

**ALTER TABLE** Actor **ADD** Favorite_ice_cream VARCHAR(255);

**ALTER TABLE** Actor **ADD** type VARCHAR(255) DEFAULT "NotDirector";
 
**ALTER TABLE** Actor **CHANGE** gender gender VARCHAR(100);

**UPDATE** Actor
**SET** name = "Lima Duate", birth_date = "1940-05-05"
**WHERE** id = "003";

**UPDATE** Actor
**SET** name = "JULIANA PÃES"
**WHERE** name = "Juliana Paes";

**UPDATE** Actor
**SET** name = "Juliana Paes"
**WHERE** name = "JULIANA PÃES";

**UPDATE** Actor
**SET** name = "Renato Aragão",
id = "011", 
birth_date = "1936/04/04", 
type = "NotDirector", 
gender = "male", 
Favorite_ice_cream = "pistache"
**WHERE** id = "005";

**UPDATE** Actor
**SET** id = "oi"
**WHERE** id = "010";

**DELETE** From Actor
**WHERE** name = "Fernanda Montenegro";

**DELETE** From Actor 
**WHERE** gender = "male" AND salary > 1000000;

**SELECT** **MAX**(salary), gender FROM Actor
**GROUP BY** gender;

**SELECT** **MIN**(salary), gender FROM Actor
**WHERE** gender = "female";

**SELECT** **COUNT**(*) FROM Actor
**WHERE** gender ="female";

**SELECT** SUM(salary) FROM Actor;

**SELECT** **COUNT**(*), gender FROM Actor
**GROUP BY** gender;

**SELECT** name, id FROM Actor
**ORDER BY** name DESC;

**SELECT** * FROM Actor
**ORDER BY** salary;

**SELECT** * FROM Actor
**ORDER BY** salary DESC
**LIMIT** 3;

**SELECT** AVG(salary), gender FROM Actor
**GROUP BY** gender;

**ALTER TABLE** Movies
**ADD** playing_limit_date date;

**ALTER TABLE** Movies
**CHANGE** rating rating float;

**UPDATE** Movies
**SET** playing_limit_date = "2020-05-20"
**WHERE** id = "001";

**UPDATE** Movies
**SET** playing_limit_date = "2020-05-04"
**WHERE** id = "002";

**DELETE** FROM Movies
**WHERE** id = "003";

**UPDATE** Movies 
**SET** synopsis = "Uma aventura muito louca"
**WHERE** id = "003";

**SELECT** **COUNT**(*) FROM Movies 
**WHERE** rating > 7.5;

**SELECT** AVG(rating) FROM Movies;

**SELECT** **COUNT**(*) FROM Movies
**WHERE** playing_limit_date > CURDATE();

**SELECT** **COUNT**(*) FROM Movies
**WHERE** release_date > CURDATE();

**SELECT** **MAX**(rating) FROM Movies;

**SELECT** **MIN**(rating) FROM Movies;

**SELECT** * FROM Movies
**ORDER BY** name;

**INSERT INTO** Movies(name, id, release_date, rating, playing_limit_date, synopsis)
**VALUES** ("Alto da Compadecida", "003", "2020-08-17", 10, "2020-09-17", "Essa turma 
vai aprontar altas confusões, que você nem imagina");

**INSERT INTO** Movies(name, id, release_date, rating, playing_limit_date, synopsis)
**VALUES** ("Tropa de Elite 3", "005", "2012-08-17", 10, "2012-09-17", "Essa turma do barulho
não brinca em serviço");

**INSERT INTO** Movies(name, id, release_date, rating, playing_limit_date, synopsis)
**VALUES** ("Lagoa Azul", "006", "2010-04-06", 10, "2010-05-06", "Esses jovens vão viver altas
emoções num super clima de azaração");

**SELECT** * FROM Movies 
**ORDER BY** name DESC
**LIMIT** 5;

**SELECT** * FROM Movies
**WHERE** release_date < CURDATE()
**ORDER BY** playing_limit_date DESC;

**SELECT** * FROM Movies
**ORDER BY** rating DESC
**LIMIT** 3;

**SELECT** * FROM Movies;
