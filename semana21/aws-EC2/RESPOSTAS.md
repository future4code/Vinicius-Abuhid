### EXERCÍCIO 1
4. O que foi mais difícil para mim foi saber o que eu estava fazendo, pois sentia que estava somente executando comandos quaisqur. O que foi fácil é que o tutorial e o texto do notion foram bem diretos.

### EXERCÍCIO 2
1. Para dar deploy em alguma aplicação nossa na EC2, seria necessário inicializar essa aplicação na nossa EC2, fazer ela rodar, veririficar em qual porta ela está rodando, aí no navegador, digitar o ip da nossa EC2, mais a porta.

3. ssh -i "ec2-intro.pem" ubuntu@ec2-52-6-205-26.compute-1.amazonaws.com

4. <i>no terminal</i><br>
cd keys<br>
ssh -i "ec2-intro.pem" ubuntu@ec2-52-6-205-26.compute-1.amazonaws.com<br>
git clone https://github.com/future4code/4eddit-sagan-9.git<br>
npm i<br>
npm run start<br>
<i>no navegador</i><br>
http://52.6.205.26:3000/

6. <i>no terminal</i><br> 
cd keys<br>
ssh -i "ec2-intro.pem" ubuntu@ec2-52-6-205-26.compute-1.amazonaws.com<br>
git clone https://github.com/future4code/4eddit-sagan-9.git<br>
cd build<br>
sudo apt update<br>
sudo apt install python<br>
sudo python -mSimpleHTTPServer 80<br>
<i>no navegador</i><br>
http://52.6.205.26/