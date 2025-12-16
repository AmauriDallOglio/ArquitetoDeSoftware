
<img width="1653" height="930" alt="image" src="https://github.com/user-attachments/assets/e4320098-309d-49b4-87ef-d0c6789a82d3" />


<img width="1435" height="810" alt="image" src="https://github.com/user-attachments/assets/998b4c8a-3b21-4c49-ad0b-736c9535c525" />

<img width="1426" height="787" alt="image" src="https://github.com/user-attachments/assets/bfadb715-1818-43c6-8d1a-0ee7d37f6a0b" />



#  Trabalho de Conclusão de Pós-Graduação em Arquitetura de Software


## https://github.com/AmauriDallOglio/GestaoPedido



## 1. Introdução

O presente trabalho de conclusão de curso de pós-graduação em **Arquitetura de Software** tem como objetivo apresentar uma solução completa e integrada para um sistema de vendas online, abordando desde a concepção da arquitetura de software até a sua implementação e *deployment* em um ambiente de nuvem de alta disponibilidade.  

A crescente demanda por serviços online, impulsionada pela transformação digital, exige que as aplicações sejam não apenas funcionais, mas também **robustas, escaláveis e resilientes**, capazes de operar ininterruptamente e de se adaptar dinamicamente às flutuações de carga.  

Neste contexto, a arquitetura de software assume um papel fundamental, definindo a estrutura, os componentes e as interações que garantem a qualidade e a sustentabilidade de um sistema.  

---

## 2. Fundamentos de Arquitetura de Software

A arquitetura de software é a estrutura fundamental de um sistema, englobando seus componentes, as relações entre eles e os princípios e diretrizes que governam seu design e evolução.  

### 2.1 Conceitos de Arquitetura de Software

- **Fundamentos de Arquitetura de Software**: Princípios básicos que guiam a construção de sistemas robustos.  
- **Requisitos Arquiteturais**: Desempenho, segurança e escalabilidade.  
- **Modelagem Arquitetural**: Representação visual da arquitetura com notações padronizadas.  
- **Design Patterns e Estilos Arquiteturais**: Soluções comprovadas para problemas recorrentes.  
- **Arquiteturas de Software da Atualidade**: Estudo das principais abordagens modernas.  

### 2.2 Modelagem Arquitetural: 

**Metodologias Utilizadas:**
O **C4 Model** permite descrever a arquitetura em diferentes níveis de abstração:

1. **C4 Model Diagrama de Contexto**: Mostra como o sistema interage com usuários e sistemas externos.  
2. **C4 Model Diagrama de Contêineres**: Detalha os principais componentes internos do sistema (Web, API, Banco de Dados).  
3. **C4 Model Diagrama de Componentes**: Aprofunda a visão de cada contêiner, destacando responsabilidades.  
4. **C4 Model Diagrama de Código (opcional)**: Mostra a estrutura detalhada do código.  
5. **5W2H**: Definições claras de escopo, motivos, locais, responsáveis, formas e custos.
6. **SWOT**: Pontos fortes, fracos, oportunidades e ameaças para a arquitetura.
7. **Design Thinking**: Empatia, definição de problema, ideação, prototipação e teste.


### 2.3 Padrão MVC (Model-View-Controller)

O padrão **MVC** organiza o sistema em três camadas:

- **Model**: Responsável pelos dados e regras de negócio.  
- **View**: Camada de apresentação (interface do usuário).  
- **Controller**: Intermediário entre Model e View, controlando o fluxo da aplicação.  

Vantagens:  
✅ Isolamento das camadas  
✅ Facilidade de testes  
✅ Reuso de componentes  
✅ Portabilidade de Views  

---

## 3. Arquitetura da Solução em Nuvem (Microsoft Azure)

A solução foi projetada para garantir **alta disponibilidade, resiliência e escalabilidade** utilizando a plataforma **Microsoft Azure**.  

### 3.1 Diagramas da Arquitetura em Nuvem

- **Diagrama de Contexto**: Interação entre usuário, navegador, rede e sistema.  
- **Diagrama de Contêineres**: Mostra VNets, Balanceador de Carga, VMs, IAM e Banco SQL.  
- **Diagrama de Componentes**: Detalha grupos de recursos, redes virtuais, balanceamento e comunicação entre backend e banco de dados.  

### 3.2 Componentes de Arquitetura do Azure

- **Resource Groups**   
- **Virtual Networks (VNets)** com segmentação por sub-redes  
- **Load Balancer** para distribuir tráfego entre VMs  
- **Storage Accounts** e **Azure Disks**  
- **Virtual Machines (VMs)** Linux com escalonamento automático (3 a 6 instâncias)  
- **SQL Database (PaaS)** com backup automático e replicação multi-regional  
- **Monitoramento)** Application Insights
- **App Service** API Backend: ASP.NET Core MVC
---

## 4. Projeto e Implementação da API RESTful

### 4.1 Organização do Projeto

Estrutura modular do sistema:

### 4.2 Modelo de Dados (DER)

Tabelas principais:  

- **Cliente**: (Id, Nome, Email, Ativo)  
- **Produto**: (Id, Nome, Descricao, Preco, Quantidade, Ativo, DataCadastro)  
- **Pedido**: (Id, Id_Cliente, DataPedido, ValorTotal)  
- **PedidoProduto**: (Id, Id_Pedido, Id_Produto, Quantidade, PrecoUnitario, Total)

### 4.3 Documentação da API com Swagger

Benefícios do Swagger:
Clareza e entendimento
Facilidade de integração
Manutenção e evolução
Automação de documentação
Exemplo de endpoints:
GET /api/Cliente/ObterTodos
POST /api/Produto/Inserir
DELETE /api/Pedido/Excluir/{id}

## 5. Conclusão

Estes trabalhos demonstrou a importância da integração entre arquitetura de software e computação em nuvem para o desenvolvimento de sistemas robustos e escaláveis.
Principais pontos:
Aplicação prática do MVC e do C4 Model
Implementação de uma API RESTful documentada com Swagger
Uso do Microsoft Azure para alta disponibilidade, resiliência e escalabilidade
Combinação de teoria e prática, resultando em uma solução completa e moderna
A combinação de uma arquitetura bem definida com infraestrutura de nuvem robusta é essencial para sistemas que precisam garantir alta disponibilidade, desempenho e segurança em um mercado cada vez mais dinâmico.


Trabalho final do bootcamp Arquiteto(a) de Software:
[1 - Projetar uma API REST seguindo o padrão arquitetural MVC.pdf](https://github.com/user-attachments/files/21873642/1.-.Projetar.uma.API.REST.seguindo.o.padrao.arquitetural.MVC.pdf)

Trabalho final do bootcamp Arquiteto(a) de Soluções:
[2 - Trabalho de Arquitetura em Nuvem Solução Escalável e Resiliente na Microsoft Azure.pdf](https://github.com/user-attachments/files/21873645/2.-.Trabalho.de.Arquitetura.em.Nuvem.Solucao.Escalavel.e.Resiliente.na.Microsoft.Azure.pdf)


Trabalho final do projeto Aplicado - Arquitetura de Software e Soluções
[Projeto Aplicado - Modernização de ambientes On Premises para serviços PaaS com Microsoft Azure.pdf](https://github.com/user-attachments/files/21915535/Projeto.Aplicado.-.Modernizacao.de.ambientes.On.Premises.para.servicos.PaaS.com.Microsoft.Azure.pdf)



 
 
![fff](https://github.com/user-attachments/assets/3c7fc314-a4d9-4660-a7fc-793438dc8f8e)

![nova2](https://github.com/user-attachments/assets/6dafbd78-1cb3-4031-af3a-d673ed27695e)



<img width="607" height="867" alt="image" src="https://github.com/user-attachments/assets/a776e905-523f-422b-ba67-440bf70d1634" />





<img width="1916" height="866" alt="image" src="https://github.com/user-attachments/assets/b0bf7f5e-9b9a-4158-b429-f1ff4bcfb7ce" />


 <img width="1914" height="862" alt="image" src="https://github.com/user-attachments/assets/6a28dcad-84a0-447a-ad4e-f0758943dfed" />

 <img width="1891" height="864" alt="image" src="https://github.com/user-attachments/assets/57d69f70-a78e-4334-adca-fa9e628ff733" />

<img width="1912" height="859" alt="image" src="https://github.com/user-attachments/assets/66bb19ac-7a97-4650-a198-5b37623a20dc" />

<img width="1914" height="862" alt="image" src="https://github.com/user-attachments/assets/b0bebb09-3079-4f1a-90b4-804c9f858739" />

<img width="1912" height="854" alt="image" src="https://github.com/user-attachments/assets/05a25ecd-a2c3-4d7a-b3cc-764ae50b9787" />

<img width="1915" height="863" alt="image" src="https://github.com/user-attachments/assets/96ceb0e7-afbd-4304-9f44-e935674778e6" />




# Arquitetura de Software

A arquitetura de software é fundamental para o desenvolvimento de sistemas, a arquitetura de software foca na estrutura interna dos sistemas e na organização dos componentes, para garantir desempenho e manutenibilidade. A Arquitetura de soluções que trata da integração de múltiplos sistemas e aplicações dentro de uma organização para resolver problemas específicos. A arquitetura corporativa que alinha a tecnologia, aos objetivos estratégicos de longo prazo da empresa.

O arquiteto de softwares deve ter uma combinação de hard skills, como design patterns e clean cold e soft skills, como comunicação e liderança. Além disso, atua como um elo de comunicação entre diferentes equipes garantindo que as soluções atendam tanto as necessidades técnicas quanto empresariais.

O termo "arquitetura de software" é relativamente recente, seus princípios foram aplicados esporadicamente a partir dos anos 80 e tornaram-se mais difundidos nos anos 90. No entanto, o conceito remonta às pesquisas de Edsger Dijkstra (1968) e David Parnas (anos 90), que já compreendiam a importância da estrutura do software.

O arquiteto de software é o profissional responsável por projetar a estrutura de todo o sistema, considerando escalabilidade, performance, disponibilidade e a experiência da equipe que trabalhará no código posteriormente. Além disso, define padrões arquiteturais, escolhe tecnologias e negocia com a equipe de produto, trata-se da modelagem do produto, o estudo do fluxo dos dados, especificação das atribuições dos módulos e composição de alto nível. Apenas elementos extremamente importantes são detalhados, evitando decisões prematuras que possam demandar mudanças arquiteturais futuras, a arquitetura é um design de sistema, difícil de modificar e baseada em padrões, a arquitetura de software refere-se à estrutura fundamental de um software, cada estrutura compreende elementos, suas relações e propriedades, é essencial planejar a arquitetura desde o início do projeto, pois cada escolha impacta diretamente no crescimento, nos custos e na manutenção do software. O trabalho do arquiteto é construir um design de sistema. O cliente pode passar horas explicando o que deseja, e o papel do arquiteto é transformar essa informação em um modelo compreensível para os desenvolvedores. Se colocarmos o cliente para conversar diretamente com os programadores, pode haver uma desconexão, pois falam linguagens diferentes. O arquiteto atua como um intermediário técnico, traduzindo requisitos em um desenho que a equipe possa seguir.



## 1. Fundamentos em Arquitetura de Software


O principal objetivo da arquitetura de software é assegurar que o sistema atenda tanto os requisitos funcionais quanto os não funcionais, além disso, deve ser fácil de manter e expandir, criar uma arquitetura é semelhante a elaborar um diagrama arquitetural, onde visualizamos o fluxo de dados, assim como no futebol analisamos a sequência de uma jogada, o diagrama representa módulos, responsabilidades e atribuições. A arquitetura de software estrutura sistemas, definindo componentes tecnológicos e suas interações para formar um sistema coeso. Decisões de alto nível garantem escalabilidade, disponibilidade, confiabilidade, manutenibilidade, portabilidade e segurança.

Estude sobre:

1. Dominar os fundamentos: Antes de tomar decisões complexas, é essencial entender os princípios do desenvolvimento de software: programação orientada a objetos, boas práticas de código, padrões de projeto e arquitetura em camadas.
2. Entender modelos arquiteturais: Compreender como sistemas modernos suportam milhões de usuários, isso inclui:
Microserviços: Arquitetura onde uma aplicação é dividida em vários serviços independentes, que se comunicam entre si geralmente via APIs. Cada serviço tem sua própria lógica de negócio e pode ser desenvolvido, implantado e escalado de forma independente.
Arquitetura orientada a eventos: Modelo onde os componentes do sistema se comunicam por meio de eventos em vez de chamadas diretas. Um serviço emite eventos quando algo acontece, e outros serviços podem reagir a esses eventos. Isso ajuda a criar sistemas desacoplados, escaláveis e assíncronos.
Arquiteturas monolíticas: Estrutura tradicional onde toda a aplicação é construída como um único bloco coeso. Embora seja mais simples de desenvolver no início, pode se tornar difícil de escalar e manter à medida que cresce.
Filas de mensagens Sistemas de mensageria: permitem comunicação assíncrona entre serviços, garantindo que mensagens sejam entregues mesmo se o sistema receptor estiver temporariamente indisponível.
Consultas em bancos de dados: Refere-se às instruções SQL (para bancos relacionais) ou consultas específicas para bancos NoSQL, usadas para recuperar, inserir, atualizar ou excluir dados de um banco de dados.
Algoritmos de balanceamento de carga: Métodos usados para distribuir o tráfego de usuários entre vários servidores, garantindo que nenhum deles fique sobrecarregado. Exemplos incluem Round Robin, Least Connections e Hashing Consistente.
Bancos de dados relacionais (SQL): Organizam dados em tabelas com relações estruturadas e utilizam SQL para consultas (ex.: MySQL, PostgreSQL, SQL Server).
Bancos de dados não relacionais: Armazenam dados de maneira mais flexível, podendo ser em formato de documentos (MongoDB), chave-valor (Redis), colunar (Cassandra) ou grafos (Neo4j).
HTTP (Hypertext Transfer Protocol): Protocolo de comunicação usado na web para troca de dados entre clientes e servidores.
REST (Representational State Transfer): Padrão de arquitetura para APIs que utiliza requisições HTTP (GET, POST, PUT, DELETE) para comunicação entre serviços.
GraphQL: Alternativa ao REST, permitindo que clientes consultem exatamente os dados que precisam, reduzindo a sobrecarga de múltiplas requisições e retornos desnecessários.
3. Dominar a nuvem: Agora que você estudou as arquiteturas, o próximo passo é aprender como mantê-las operando na nuvem, prepare-se para investir tempo tirando certificações em provedores de nuvem como AWS, Azure e Google Cloud. Isso te ajudará a entender conceitos como: Escalabilidade (vertical e horizontal) / Elasticidade / Alta disponibilidade e resiliência / Provisionamento de recursos de forma otimizada. Os provedores de nuvem oferecem todos os recursos necessários para hospedar aplicações modernas de forma eficiente, e o melhor: você paga apenas pelo que utiliza. A nuvem também força o desenvolvimento de sistemas distribuídos, algo essencial para arquitetos de software nos dias de hoje. Aprender sobre AWS, Azure e Google Cloud, incluindo escalabilidade, resiliência e provisionamento otimizado.
4. Criar diagramas: Aprenda a Criar Diagramas, ser arquiteto de software significa transformar ideias complexas em representações visuais claras e organizadas. Os diagramas são essenciais para comunicar a visão do sistema não apenas para desenvolvedores, mas também para gerentes, equipes de produto e outros stakeholders. Ferramentas como Diagrams.net (Draw.io), Lucidchart e PlantUML ajudam na criação desses diagramas, tornando-os uma verdadeira documentação do sistema. Pense nos diagramas como um "mapa do tesouro": sem eles, você pode até chegar ao objetivo, mas levará mais tempo e encontrará mais dificuldades pelo caminho.
5. Desenvolver habilidades de comunicação: Sem isso, sua carreira como arquiteto de software pode ser comprometida. O foco aqui é desenvolver habilidades interpessoais, especialmente comunicação e liderança. Como arquiteto, você precisará: Negociar com a equipe de produto / Explicar conceitos técnicos de forma clara para diferentes públicos / Liderar e orientar outros desenvolvedores. O Dale Carnegie Institute realizou uma pesquisa que revelou que 85% do sucesso profissional e financeiro está ligado à capacidade de lidar com pessoas, enquanto apenas 15% depende do conhecimento técnico. Provavelmente, você já trabalhou com alguém que se destacou mais pelo jeito "desenrolado" do que pela habilidade técnica, certo? Isso não é puxar saco – é saber se comunicar de forma eficiente. O próprio John D. Rockefeller afirmou que a capacidade de lidar com pessoas é um dos bens mais valiosos que existem. Portanto, invista tempo no aprendizado de: Comunicação assertiva / Oratória / Persuasão. Como arquiteto, você precisará persuadir lideranças a investir em tecnologia e infraestrutura. Sem essa habilidade, será difícil garantir que suas decisões estratégicas sejam implementadas. Comunicação e liderança são fundamentais para negociar com a equipe de produto, explicar conceitos técnicos e persuadir lideranças.
Arquitetura de Software x Design de Código x Engenharia de Software

O design de código é frequentemente considerado parte da arquitetura de software, mas ele se concentra mais nos detalhes de implementação dos módulos e componentes do sistema. O design de código envolve a organização do código-fonte, escolha de padrões de codificação e uso de boas práticas, como design patterns.

A qualidade do design de código afeta diretamente a legibilidade, reutilização e testabilidade do software. Por isso, a arquitetura e o design estão profundamente interligados.

Já a engenharia de software é um conceito mais amplo, englobando tanto a arquitetura quanto o design de código. Ela abrange todo o processo de desenvolvimento de software, desde a concepção e definição de requisitos até a manutenção e evolução contínua do sistema. Entre suas práticas estão a gestão de projetos, análise de requisitos, desenvolvimento, testes e suporte. Agora que esclarecemos esses conceitos, vamos entender o que um arquiteto de software faz no dia a dia.

O Papel do Arquiteto de Software na Prática

Um bom arquiteto de software precisa ser, antes de tudo, um desenvolvedor experiente. Ele deve ter profundo conhecimento do código, mesmo que sua principal função não seja programar diariamente. Suas decisões arquiteturais impactam diretamente a implementação do código, e é comum que um arquiteto revise e refatore trechos para garantir sua conformidade com as diretrizes estabelecidas.

Se você quer evoluir na carreira de desenvolvimento, estudar arquitetura de software é essencial. Conceitos como SOLID, DRY, YAGNI, orientação a objetos e práticas de DevOps são fundamentais para o crescimento profissional. Grandes projetos exigem uma cultura forte de testes e refatoração constante, e entender arquitetura é imprescindível para atuar com eficiência.

Em times grandes, pode não haver um arquiteto formalmente designado. Nesses casos, esse papel pode ser assumido por um desenvolvedor sênior ou um tech lead. Ainda assim, todos os membros da equipe devem ter um bom entendimento sobre arquitetura para garantir o sucesso do projeto.

Responsabilidades do Arquiteto de Software:

Definir a arquitetura e os padrões de codificação: garantindo que a estrutura do sistema atenda às necessidades do negócio e seja escalável.
Mentoria e orientação técnica: ajudando desenvolvedores a aprimorarem suas habilidades em padrões de design, melhores práticas e técnicas avançadas de programação.
Facilitar a colaboração entre equipes: promovendo alinhamento entre desenvolvedores, engenheiros, DevOps e stakeholders.
Conduzir revisões de código: assegurando que as implementações estejam de acordo com a arquitetura planejada.
Gerenciar riscos técnicos: identificando e mitigando problemas que possam afetar a qualidade e entrega do software.
Garantir a cobertura de testes: implementando testes de unidade, integração e desempenho para evitar regressões e problemas futuros.
Promover inovação: explorando novas tecnologias e metodologias para melhorar a eficiência do desenvolvimento.
Planejar e documentar o sistema: criando e atualizando documentações acessíveis, essenciais para a continuidade do projeto e integração de novos membros.
O arquiteto de software desempenha um papel fundamental na concepção, evolução e manutenção dos sistemas. Suas decisões têm um impacto direto na qualidade do software e na eficiência da equipe, tornando essa posição uma das mais valorizadas e bem remuneradas no mercado de tecnologia.

Principais componentes da arquitetura:

Componentes do sistema: São as partes que compõem um sistema de software, como módulos, serviços, bibliotecas, bancos de dados e APIs. Eles definem as responsabilidades individuais dentro do sistema e como essas partes interagem. Exemplo: Em uma aplicação e-commerce, componentes podem incluir o serviço de pagamento, o catálogo de produtos e o sistema de recomendação.
Camadas: Estruturam o sistema separando responsabilidades em diferentes níveis, melhorando a organização e a manutenção do código. Arquiteturas comuns incluem: Camada de Apresentação (Frontend): Interface do usuário, Camada de Aplicação (Backend): Regras de negócio. Camada de Persistência (Banco de Dados): Gerenciamento dos dados. Exemplo: Em um sistema MVC (Model-View-Controller), cada camada tem um papel bem definido para separar dados, lógica e exibição.
Comunicação: Define como os componentes do sistema interagem entre si e com sistemas externos. Pode ocorrer de diferentes formas, como: APIs REST ou GraphQL para comunicação entre serviços. Mensageria assíncrona (RabbitMQ, Kafka) para troca de mensagens entre componentes. Protocolos de rede (HTTP, WebSockets, gRPC) para conectar diferentes partes do sistema. Exemplo: Em um sistema de pedidos, o serviço de pagamentos pode se comunicar com o serviço de faturamento via uma fila de mensagens.
Tecnologias: São as ferramentas e plataformas utilizadas para construir e executar o sistema. Inclui linguagens de programação (C#, Java, JavaScript), frameworks (ASP.NET Core, Spring Boot, React), bancos de dados (SQL Server, MongoDB), infraestrutura na nuvem (AWS, Azure) e sistemas de controle de versão (Git). Exemplo: Um sistema pode usar React para frontend, ASP.NET Core para backend e SQL Server como banco de dados.
Práticas de desenvolvimento: São metodologias e padrões utilizados para garantir qualidade, eficiência e segurança no desenvolvimento de software. Algumas práticas incluem: Clean Code e SOLID para código bem estruturado. CI/CD (Integração e Entrega Contínua) para automação de deploys. Testes automatizados (Unitários, Integração, End-to-End) para evitar falhas. Monitoramento e observabilidade para identificar problemas em tempo real. Exemplo: Utilizar TDD (Test-Driven Development) para garantir que todas as funcionalidades sejam testadas antes da implementação final.
Decisões arquiteturais:

Decisões estratégicas: São escolhas de alto nível que determinam a direção geral do sistema e como ele será estruturado. Definem padrões, tecnologias e práticas que guiarão o desenvolvimento. Exemplo: Escolher entre uma arquitetura monolítica ou baseada em microserviços afeta a escalabilidade e manutenção do sistema.
Monólito: Modelo onde toda a aplicação é desenvolvida e implantada como um único bloco de código. Vantagens: Simplicidade na implementação e deploy. Menor complexidade inicial. Desvantagens: Dificuldade de escalar partes específicas do sistema. Manutenção complexa à medida que o projeto cresce. Exemplo: Um sistema ERP onde todas as funcionalidades (estoque, vendas, financeiro) estão integradas no mesmo código e banco de dados.
Microserviços: Arquitetura onde o sistema é dividido em pequenos serviços independentes, cada um responsável por uma parte específica da aplicação. Vantagens: Escalabilidade granular (cada serviço pode ser escalado separadamente). Maior flexibilidade na escolha de tecnologias. Desvantagens: Aumento da complexidade operacional. Necessidade de comunicação eficiente entre serviços. Exemplo: Um e-commerce com serviços separados para autenticação, catálogo de produtos e pagamentos, cada um rodando de forma independente.
Decisões de longo prazo: São escolhas que terão impacto duradouro no sistema, influenciando sua evolução, manutenção e custos futuros. Exemplo: Optar por um banco de dados relacional (SQL Server) em vez de um NoSQL (MongoDB) pode afetar desempenho e flexibilidade à medida que o sistema cresce.
Mostram quais características estarão presentes ou ausentes na solução: Cada decisão arquitetural define o que o sistema será capaz de fazer e suas limitações. Exemplo: Se a arquitetura escolhida não suporta alta disponibilidade, pode haver períodos de inatividade em caso de falha.
Impactada pela disponibilidade de recursos: As decisões arquiteturais são influenciadas pelos recursos disponíveis, como orçamento, equipe, infraestrutura e tempo. Exemplo: Se a empresa não tem um time especializado em Kubernetes, pode ser mais viável iniciar com um monólito do que com microserviços.
A arquitetura de software é fundamental para o desenvolvimento de sistemas robustos e escaláveis, neste capítulo exploramos três níveis principais. A arquitetura de software que foca na estrutura interna dos sistemas e na organização dos componentes, para garantir desempenho e manutenibilidade.

A arquitetura de soluções que trata da integração de múltiplos sistemas e aplicações dentro de uma organização para resolver problemas específicos. A arquitetura corporativa que alinha a tecnologia, aos objetivos estratégicos de longo prazo da empresa.

O arquiteto de softwares deve ter uma combinação de hard skills, como design patterns e clean cold e soft skills, como comunicação e liderança. Além disso, atua como um elo de comunicação entre diferentes equipes garantindo que as soluções atendam tanto as necessidades técnicas quanto empresariais.

1.2. Princípios Gerais de uma boa Arquitetura
Vamos dar sequência à nossa disciplina de Fundamentos de Arquitetura de Software. Nesta , falaremos sobre os princípios gerais aplicados para construir boas arquiteturas, garantindo sistemas e produtos de qualidade.

Quais serão nossos tópicos? Vamos abordar alguns princípios fundamentais que devem ser utilizados. Embora essa seja uma teórica, talvez seja uma das mais importantes do curso. Esses conceitos básicos, quando bem aplicados, resultam em um produto de qualidade. Não significa que apenas isso seja suficiente, mas é o essencial.

Falando sobre princípios, naturalmente, não trataremos de outra coisa senão princípios. Ao estabelecer uma arquitetura, alguns princípios gerais devem estar presentes. Por exemplo, modularizar os componentes é essencial. Quando falamos em modularização, significa que não construímos um sistema inteiro como um grande bloco, mas sim dividimos em pequenas partes que trabalham integradas. Cada módulo deve ter uma função específica. Se estamos desenvolvendo um sistema de compras online, teremos um módulo para pagamentos, outro para controle de pedidos e assim por diante. Esse conceito de "dividir para conquistar" é fundamental.

Além de definir esses componentes, é essencial estabelecer as interfaces entre eles. Se um sistema possui cinco módulos, é necessário determinar claramente quais deles interagem entre si e como essa interação ocorre. Um módulo de pagamento, por exemplo, precisa se comunicar com o de pedidos, mas talvez não precise interagir diretamente com o de estoque. Essa interface deve ser bem definida, especificando métodos disponíveis, tipos de parâmetros e retornos esperados.

Outro aspecto essencial é a escalabilidade. Inicialmente, um sistema pode atender um pequeno número de usuários, mas e se, em poucos meses, esse número aumentar para 5.000? A arquitetura precisa permitir expansão de forma eficiente. Quando estruturamos bem os módulos e interfaces, conseguimos maior flexibilidade para adaptações. Isso permite que mudanças sejam realizadas sem necessidade de alterar todo o sistema.

A utilização de padrões também é um ponto-chave. A ideia não é reinventar soluções para problemas já resolvidos. Se já existem padrões eficientes validados pelo mercado, faz sentido utilizá-los em vez de tentar criar algo do zero. Soluções recorrentes devem ser aplicadas para garantir segurança e eficiência no desenvolvimento.

Além dos princípios gerais, existem princípios específicos que se aplicam a diferentes contextos. Por exemplo, desenvolver um sistema de pagamento online é diferente de construir um software de gestão de estoque. No entanto, alguns princípios são universais e sempre aplicáveis.

Entre esses princípios, destacamos o de responsabilidade única. Ele garante que cada elemento do sistema tenha uma função bem definida. Se uma classe no código está lidando com diferentes responsabilidades, talvez seja necessário dividi-la. Se a definição do nome de uma classe é difícil, pode ser um indicativo de que ela está abrangendo muitas funções diferentes.

Outros princípios, como o de segregacão de interfaces, também são importantes para manter a clareza e manutenção do sistema. Construir componentes modulares e bem definidos facilita a evolução do sistema ao longo do tempo, permitindo a inclusão de novas funcionalidades sem grandes impactos.

Outro aspecto relevante é o custo de oportunidade. Se um sistema possui vários módulos e um deles é uma inovação do produto, pode fazer sentido priorizar o desenvolvimento desse módulo primeiro. Se, por outro lado, existe um módulo que já tem soluções estabelecidas no mercado, talvez seja mais vantajoso utilizá-las e focar os esforços no diferencial do produto.

Atrasos também devem ser considerados na priorização de entregas. Se uma nova legislação entrará em vigor no próximo ano e um módulo precisa estar em conformidade, ele deve ser priorizado para evitar problemas futuros.

A ideia aqui não é decorar todos os princípios, mas compreender sua importância e aplicação. Devemos modularizar bem os sistemas, dividir componentes de forma lógica e definir interfaces claras para comunicação eficiente. O uso de princípios nos ajuda a manter o sistema escalável, flexível e de fácil manutenção.

O desenvolvimento arquitetural deve sempre considerar padrões e soluções validadas, evitando a necessidade de criar tudo do zero. O uso de soluções recorrentes traz confiabilidade ao processo de desenvolvimento.

1.3. Trade-Offs Arquiteturais
O ato de equilibrar ou fazer concessões entre dois ou mais atributos de qualidade e características do sistema, para entender isso na prática, pensem em uma balança: se aumentamos um lado, o outro tende a cair. Esse equilíbrio é essencial para tomar decisões que envolvem características importantes.

Por exemplo, quero dirigir com rapidez e segurança. Quanto mais rápido eu dirijo, menos seguro fico, até certo limite. No contexto de sistemas, se quero aumentar muito o desempenho, talvez precise sacrificar um pouco de segurança. Se busco uma resposta extremamente rápida em um sistema, posso comprometer a proteção dos dados.

Os trade-offs arquiteturais envolvem diversos atributos de qualidade, como:

Confiabilidade: Mede a capacidade do sistema de operar corretamente sem falhas por um período prolongado. Um sistema confiável lida bem com erros, possui mecanismos de recuperação e garante a integridade dos dados. Trade-off: Aumentar a confiabilidade pode exigir redundância e validações extras, impactando desempenho e custo.
Desempenho: Representa a rapidez com que o sistema responde às solicitações, influenciado por fatores como tempo de resposta, latência e throughput. Trade-off: Melhorar o desempenho pode exigir mais recursos computacionais, o que pode reduzir a escalabilidade ou aumentar os custos.
Segurança: Envolve a proteção contra acessos não autorizados, vazamento de dados e ataques cibernéticos, garantindo confidencialidade, integridade e disponibilidade da informação. Trade-off: Medidas de segurança mais rígidas (como criptografia forte ou autenticação multifator) podem aumentar a latência e reduzir a agilidade do sistema.
Estabilidade: Refere-se à capacidade do sistema de manter um comportamento previsível, mesmo sob alta carga ou condições adversas. Trade-off: Melhorar a estabilidade pode exigir menos atualizações ou mudanças incrementais, reduzindo a agilidade.
Elasticidade: A capacidade do sistema de ajustar dinamicamente seus recursos conforme a demanda aumenta ou diminui. Trade-off: Implementar elasticidade pode exigir arquiteturas distribuídas e automação, aumentando a complexidade da infraestrutura.
Agilidade: A facilidade com que o sistema pode ser modificado, atualizado e expandido para atender a novas necessidades. Trade-off: Sistemas mais ágeis podem sacrificar estabilidade e segurança se mudanças forem feitas rapidamente sem testes robustos.
Escalabilidade: A capacidade de um sistema crescer para atender a um número maior de usuários ou operações, seja aumentando recursos (escalabilidade vertical) ou distribuindo carga (escalabilidade horizontal). Trade-off: Escalar pode exigir arquitetura distribuída e aumento de custos operacionais.
Disponibilidade: Mede o tempo que o sistema está operacional e acessível aos usuários. Sistemas altamente disponíveis evitam períodos de inatividade (downtime). Trade-off: Alta disponibilidade pode exigir redundância, balanceamento de carga e replicação de dados, aumentando a complexidade e o custo da infraestrutura.
Além disso, fatores como habilidades da equipe também afetam decisões. Por exemplo, se minha equipe só trabalha com determinada linguagem de programação, pode ser necessário equilibrar essa escolha com outras questões de segurança e eficiência.

Exemplos de Trade-Offs Arquiteturais

Monolito vs. Microserviços: Se optamos por microserviços, temos um software dividido em várias partes, muitas vezes distribuídas geograficamente. Isso pode afetar o desempenho, pois a comunicação não é local, mas ocorre através da rede. Se desempenho for um fator crítico, talvez um monolito seja mais adequado.

Banco de Dados Relacional vs. NoSQL: Se escolhemos um banco de dados NoSQL, ganhamos flexibilidade para lidar com grandes volumes de dados diversos, mas sacrificamos estrutura e consistência transacional. Já um banco de dados relacional oferece maior consistência, mas pode não ser tão eficiente para consultas distribuídas e dados não estruturados.

Sistema de Pagamento Online: Um cliente solicita um sistema de pagamento online, e precisamos equilibrar desempenho, segurança e interoperabilidade. Podemos armazenar dados de cartões em memória para acesso rápido, melhorando o desempenho, mas isso pode comprometer a segurança. Por outro lado, criptografar e adicionar autenticação multifator melhora a segurança, mas pode tornar o sistema mais lento.

Interoperabilidade vs. Desempenho: Se um sistema precisa rodar em vários dispositivos e navegadores diferentes, podemos comprometer a eficiência. Uma solução altamente otimizada para um navegador específico pode ter melhor desempenho, mas ser menos compatível com outros ambientes.

No dia a dia do arquiteto de software, as decisões envolvem balançar trade-offs para atender requisitos do cliente e restrições do projeto. Nem sempre escolheremos a solução tecnologicamente mais avançada, mas sim aquela que melhor equilibra qualidade, custo e prazo.

Trade-off refere-se ao ato de equilibrar ou fazer concessões entre dois ou mais atributos de qualidade ou características de um sistema, onde a melhoria de um atributo geralmente leva à degradação de outro. Isso ocorre porque os recursos (como tempo, custo, desempenho, etc) são limitados e as decisões arquiteturais impactam múltiplos aspectos do sistema.

Capítulo 2: O Profissional de Arquitetura de Software
Gerindo o processo de arquitetura, neste capitulo o foco está na gestão do processo de arquitetura. Um arquiteto precisa conhecer ferramentas como a matriz de decisão que ajuda a escolher em diferentes soluções e a análise de premissas e restrições, que garante que a arquitetura esteja de acordo com os limites do projeto. Além disso, frameworks como Hackman e o togas fornecem estruturas para desenvolver arquiteturas corporativas que atentam às necessidades de negócios.

2.1. Arquitetura de Software x Soluções x Corporativa
Nesta seção, exploraremos três pilares essenciais da engenharia de sistemas: arquitetura de software, arquitetura de soluções e arquitetura corporativa. A arquitetura de soluções expande esse conceito ao nível da integração de múltiplos sistemas, abordando como diferentes aplicações e serviços se conectam para resolver problemas específicos de negócios. Por fim, a arquitetura corporativa fornece uma visão holística e estratégica, alinhando a tecnologia com os objetivos empresariais e garantindo que todas as solu ções tecnológicas suportem a visão e as metas de longo prazo da organização. Juntos, esses níveis de arquitetu ra formam uma base sólida para a criação de sistemas eficientes, adaptáveis e alinhados com as necessidades dinâmicas do mercado.

Arquitetura de Software

A arquitetura de software se concentra na estrutura e na organização dos componentes de um siste ma, garantindo que ele seja robusto, escalável e manu tenível. Esta área é a responsável pela organização da solução em um nível mais próximo do código e dos de senvolvedores. Algumas decisões e atividades que são responsabilidade deste profissional, por exemplo:

Participação de revisões de código
Direcionar a implantação de paradigmas de de senvolvimento (ex: TDD, BDD...)
Desenvolver modelos e design de componen tes (diagrama de classes, componentes...) de arquiteturas para soluções específicas.
Apoiar o processo decisório da equipe de de senvolvimento na construção de soluções es pecíficas. Os profissionais que atuam como arquiteto de softwares normalmente têm grande bagagem técnica e experiên cia profissional no contexto do desenvolvimento do sis tema, relativamente habitual termos desenvolvedores experientes que se tornaram arquitetos. Esses profissionais eventualmente atuam como respon sáveis técnicos ou tech lead, apoiando diretamente a equipe de desenvolvimento em dúvidas relacionadas à arquitetura emergente ao longo do projeto de construção da solução.
Arquitetura de Soluções

Um arquiteto de soluções se concentra na integração de múltiplos sistemas e aplicações dentro de uma organização. Isso inclui definir como diferentes sistemas (por exemplo, ERP, CRM, e-commerce) se comunicam e trabalham juntos, utilizando middleware, APIs e outras tecnologias de integração para garantir que todas as partes funcionem de maneira coesa e eficiente.

Arquitetura Corporativa

Um arquiteto corporativo é responsável por alinhar as estratégias de TI com os objetivos de negócios da organização. Isso envolve a criação de roadmaps tecnológicos, definição de políticas e padrões de arquitetura, e a garantia de que todas as iniciativas de TI suportem a visão e os objetivos de longo prazo da empresa, promovendo a agilidade e a inovação dentro da organização. Esse profissional normalmente tem uma atuação mais estratégica/gerencial e menos técnica

2.2. Soft e Hard Skills
Um arquiteto (a) de software deve ter habilidades (skills) diversas. Durante muito tempo valorizou-se apenas as skills técnicas relacionadas à área de arqui tetura de software, tais como modelagem. Contudo, cada vez mais o mercado demanda de um profissional que também tenha soft skills que vão permitir a este profissional ter habilidades comportamentais para li dar, influenciar, persuadir e conquistar o apoio dos mais diversos públicos relacionados a sua atividade.

Programação Orientada a Objetos: Paradigma de programação que organiza o código em objetos que possuem atributos e comportamentos. Facilita a reutilização, modularidade e manutenção do software.
SOLID: Conjunto de cinco princípios para um design de software bem estruturado e flexível. Ajuda a criar sistemas mais organizados, fáceis de manter e escaláveis.
Design Patterns: Padrões de projeto são soluções reutilizáveis para problemas comuns no desenvolvimento de software, promovendo boas práticas e facilitando a manutenção e evolução do código.
DDD (Domain-Driven Design): foca no design do software a partir da modelagem do domínio do negócio.
BDD (Behavior-Driven Development): enfatiza a escrita de testes com linguagem próxima ao negócio, facilitando a comunicação entre desenvolvedores e stakeholders.
TDD (Test-Driven Development): prioriza a escrita de testes antes da implementação do código, garantindo maior confiabilidade e qualidade do software.
Clean Code: Conjunto de boas práticas para escrever código claro, legível e de fácil manutenção, facilitando a colaboração entre desenvolvedores e a evolução do projeto.
Soft Skills

Hard Skills São as habilidades técnicas adquiridas ao longo do tempo, sejam por processos educacionais, leitura de livros e artigos, estudo de novas tecnologias, experiên cia prática... Estas atividades normalmente podem ser medidas e comprovadas (ex: experiência profissional comprovada, certificados, diplomas...). São as habilidades relacionadas aos aspectos compor tamentais, que devem ser desenvolvidas ao longo do tempo e que normalmente não são comprovadas de forma quantitativa ou através de certificados, o que não quer dizer que não devam ser largamente estuda das. Dentre as principais soft skills esperadas de um arquiteto podemos citar:

Inovação: Habilidade de pensar de forma criativa e propor soluções novas para desafios técnicos e organizacionais. Um arquiteto inovador consegue identificar tendências tecnológicas e aplicá-las estrategicamente.
Comunicação: Capacidade de expressar ideias de maneira clara e eficaz, seja oralmente ou por escrito. Essencial para interagir com equipes técnicas, gestores e stakeholders, garantindo alinhamento e entendimento dos objetivos do projeto.
Capacidade de Persuasão: Aptidão para argumentar e justificar decisões técnicas, convencendo diferentes públicos sobre a viabilidade e os benefícios de uma solução arquitetural.
Capacidade de Influência: Habilidade de impactar decisões e direcionar estratégias dentro da equipe e da empresa. Um arquiteto influente consegue engajar times e promover boas práticas sem precisar de autoridade formal.
Aprendizado Contínuo: Comprometimento com a evolução profissional e atualização constante sobre novas tecnologias, metodologias e tendências, garantindo que as soluções sejam sempre inovadoras e eficientes.
Liderança: Capacidade de guiar, motivar e inspirar equipes, garantindo alinhamento estratégico, fomentando boas práticas e garantindo a entrega de projetos de forma eficiente.
2.3. Papel do Arquiteto
Iremos estudar sobre diversas atividades e funções que devem ser desempenhadas por um arqui teto de software no dia a dia profissional. O que seria o Papel do Arquiteto? Um arquiteto de software é um profissional essencial no desenvolvimento de sistemas complexos, atuando como o responsável por definir a estrutura e os padrões de uma aplicação. Suas atividades incluem a criação de modelos de arquitetura, que descrevem a estrutura ge ral do sistema e detalham como seus componentes in teragem. Isso envolve escolher tecnologias adequadas, determinar a configuração de servidores e estabelecer padrões de codificação. Além disso, o arquiteto de sof tware deve garantir que a solução seja escalável, sus tentável e de fácil manutenção, considerando aspectos como desempenho, segurança e integração com outros sistemas. Outra função crucial do arquiteto de software é servir como um elo de comunicação entre diferentes equipes de desenvolvimento. Ele trabalha estreitamente com desenvolvedores, gerentes de projeto, analistas de ne gócios e outras partes interessadas para garantir que os requisitos técnicos e funcionais sejam compreendi dos e implementados corretamente. Isso pode envol ver a elaboração de documentação técnica detalhada, a realização de reuniões e workshops para alinhar expec tativas e resolver conflitos, além de orientar e revisar o trabalho das equipes de desenvolvimento para assegu rar a conformidade com os padrões estabelecidos. Além de suas responsabilidades técnicas e de comu nicação, o arquiteto de software também desempenha um papel estratégico dentro da organização. Ele contri bui para a visão de longo prazo da empresa, ajudando a definir a direção tecnológica e garantindo que as so luções arquitetônicas suportem os objetivos de negó cios. Isso inclui a avaliação e a adoção de novas tecno logias e tendências, a realização de análises de risco e a garantia de que a arquitetura proposta possa evoluir conforme as necessidades do mercado e da organiza ção mudem. Assim, o arquiteto de software não só ga rante a robustez e a eficiência dos sistemas atuais, mas também prepara a empresa para desafios futuros

2.4. A arquitetura dentro das grandes organizações
As principais atividades de um arquiteto de software abrangem uma ampla gama de responsabilidades téc nicas e de gestão. Essas atividades podem ser agrupa das em diversas categorias, citando algumas delas:

1. Definição da Arquitetura do Sistema:

Documentação Técnica: Criar e manter documen tação detalhada sobre a arquitetura do sistema, in cluindo diagramas, especificações e manuais de re ferência.
Orientação e Mentoria: Fornecer orientação técnica e mentoria para os membros da equipe de desenvol vimento, ajudando a resolver problemas complexos e garantindo a adesão aos padrões arquitetônicos.
2. Coordenação e Comunicação:

Análise e Avaliação de Riscos: Identificar potenciais riscos técnicos e de projeto, propondo soluções para mitigá-los e garantir a robustez do sistema.
Adaptação e Evolução da Arquitetura: Monitorar novas tendências tecnológicas e incorporar inova ções relevantes à arquitetura existente para manter a competitividade e a eficiência do sistema.
Adaptação e Evolução da Arquitetura: Monitorar novas tendências tecnológicas e incorporar inova ções relevantes à arquitetura existente para manter a competitividade e a eficiência do sistema.
Revisão e Otimização do Desempenho: Realizar re visões periódicas do desempenho do sistema, identi f icando áreas para otimização e melhorias contínuas.
3. Avaliação e Melhoria Contínua:

Criação de Modelos Arquitetônicos: Desenvolver diagramas e modelos que representem a estrutura do sistema, detalhando como os componentes interagem entre si.
Escolha de Tecnologias e Ferramentas: Selecionar as tecnologias e ferramentas adequadas para a implementação do sistema, considerando aspectos como escalabilidade, desempenho e manutenção.
Definição de Padrões e Práticas: Estabelecer padrões de codificação, práticas de desenvolvimento e diretrizes que a equipe deve seguir para garantir a consistência e qualidade do software.
4. Análise de trade-off e visibilidade:

Colaboração com as Partes Interessadas: Trabalhar com desenvolvedores, gerentes de projeto, analistas de negócios e outras partes interessadas para entender os requisitos do projeto e garantir que a ar quitetura atenda às necessidades do negócio.
Análise de trade-off: Ato de escolher alguma coisa em detrimento de outra e vai consistir em uma análise de pontos positivos e negativos de cada uma das escolhas que faremos. Isto significa ba sicamente que escolhendo uma opção estaremos carregando os pontos negativos e positivos dela e estaremos perdendo os pontos positivos e negati vos da outra opção. Na engenharia de software existe um método que ajuda nesse processo de decisão, o ATAM (Architecture Tradeo f f Analysis Method). Seu objetivo é ajudar a escolher uma arquitetura adequada para um sistema de software, des cobrindo compensações e pontos de sensibilidade.
Apresentar ATAM – Apresentar o conceito de ATAM aos stakeholders e esclarecer dúvidas sobre o processo.
Representantes da área de negócio – todos no processo apresentam e avaliam os motivadores de negócios para o sistema em questão.
Apresente a arquitetura - o arquiteto apresenta a arquitetura de alto nível para a equipe, com um ‘nível de detalhe apropriado’
Identifique as abordagens arquitetônicas – dife rentes abordagens arquitetônicas do sistema são apresentadas pela equipe e discutidas.
Gerar árvore de utilitários de atributos de qua lidade - definir o negócio principal e os requisitos técnicos do sistema e mapeá-los para uma pro priedade arquitetônica apropriada. Apresente um cenário para este determinado requisito. • Análise das abordagens arquitetônicas – anali se cada cenário, classificando-os por prioridade. A arquitetura é avaliada em relação a cada cenário.
Faça um brainstorming e priorize cenários – en tre o grupo maior de partes interessadas, apresen te os cenários atuais e expanda.
Analise as abordagens arquitetônicas – execute a etapa 6 novamente com o conhecimento agre gado da comunidade mais ampla de partes inte ressadas.
Apresentar resultados – fornece toda a documen tação às partes interessadas. Durante todo o processo do ATAM, as soluções encon tradas serão sabatinadas e analisada a viabilidade, até que se defina o modelo arquitetural do projeto.
5. Liderança técnica:

Direcionar as equipes de desenvolvimento na esco lha, especificação e implantação de tecnologias, as sim como a definição e evolução de padrões de de senvolvimento. Poderíamos citar diversas outras atividades (ex: mo nitoração, prototipação....), o grande ponto no mo mento é compreender que as hard e soft skills com binadas ajudam o arquiteto a desempenhar suas funções com excelência
Capítulo 3: Arquitetura de Software Moderna
Governança da arquitetura, a governança da arquitetura envolve garantir que as soluções arquiteturais estejam sendo implementadas corretamente e que as decisões sigam padrões estabelecidos. O arquiteto deve garantir a conformidade das soluções através de revisões periódicas e assegurar que as decisões sejam documentadas adequadamente, contribuindo para a evolução da arquitetura.

3.1. Arquitetura Intencional
Se estamos falando de Arquitetura de Software Moderna, já conseguimos imaginar que essa arquitetura mudou ao longo do tempo, e é justamente sobre isso que vamos abordar neste capítulo, voltada principalmente ao conceito de Arquitetura Intencional.

Quando vocês vão projetar um sistema, criam um desenho ou um diagrama de componentes para mapear os módulos do sistema. Por exemplo, ao utilizar UML, temos diferentes tipos de modelagem: comportamental, estrutural, diagrama de caso de uso, diagrama de classe, diagrama de componente, entre outros. Esses diagramas são criados antes do desenvolvimento do software. A Arquitetura Intencional trata exatamente dessas decisões e determinações tomadas antes do início do desenvolvimento.

Ao iniciar um novo sistema, como um sistema de pagamentos online, a primeira coisa a determinar é a forma de distribuição do sistema: será monolítico, microserviços ou serverless? Como serão as conexões? A Arquitetura Intencional envolve essas grandes decisões arquiteturais tomadas antes do desenvolvimento.

Esse conceito enfatiza a importância de decisões arquiteturais deliberadas e conscientes, alinhadas aos objetivos do negócio. A partir dos requisitos, tomamos decisões que impactam todo o desenvolvimento. A Arquitetura Intencional é uma representação de alto nível do sistema e não define todos os detalhes, mas cria uma visão clara para que a equipe de desenvolvimento tenha um direcionamento.

Uma boa Arquitetura Intencional se baseia em padrões previamente utilizados para replicar boas decisões. O ideal é criar arquiteturas adaptáveis e flexíveis. Como conseguimos isso? Aplicando princípios fundamentais, como modularização, separação de responsabilidades e interfaces bem definidas. Devemos maximizar a comunicação dentro de cada módulo e minimizar a comunicação entre módulos.

Seguindo essa abordagem, criamos uma boa Arquitetura Intencional, o que reduz riscos e garante que decisões essenciais sejam tomadas no início do processo. Isso facilita a vida da equipe de desenvolvimento, que não precisa perder tempo decidindo como construir o software, apenas seguir um plano bem definido. Com foco na qualidade, a satisfação do cliente também aumenta.

No ciclo de vida clássico do desenvolvimento de software, como o modelo Waterfall (cascata), a Arquitetura Intencional se concentra nas fases iniciais. Baseando-se nas necessidades do cliente, criamos uma representação que serve como referência para a equipe de desenvolvimento.

No passado, a Arquitetura Intencional era o principal foco do arquiteto, mas hoje isso mudou. O trabalho do arquiteto continua ao longo de todo o processo de desenvolvimento, teste e implantação. Portanto, a Arquitetura Intencional é essencial, mas não é a única disciplina do trabalho arquitetural.

Em resumo, a Arquitetura Intencional trata do design inicial do sistema. Uma boa análise e planejamento no início evitam problemas futuros. Para isso, utilizamos padrões consolidados, tomamos decisões embasadas e documentamos bem todo o processo. Essa documentação é essencial para garantir que a equipe de desenvolvimento tenha uma referência confiável.

Arquiteturas Intencionais englobam decisões estruturais que são difíceis de mudar ao longo do tempo. No modelo tradicional, o arquiteto projetava e entregava para o desenvolvimento, sem mais envolvimento. Hoje, essa abordagem mudou. O arquiteto precisa acompanhar todo o ciclo de vida do software, garantindo que a arquitetura continue alinhada aos objetivos do negócio.

É a visão inicial determinando o fluxo do início do sistema, são as ideias gerais do sistema, análise de requisitos e projeto, é composta pelas decisões estruturais antes do desenvolvimento do sistema, conceito que enfatiza a importância de tomar decisões arquiteturais e conscientes, com o objetivo de alinhar a arquitetura do sistema com os objetivos e requisitos do negócio.

Visão clara e compartilhada: A equipe deve ter um entendimento comum da arquitetura, garantindo alinhamento e coerência no desenvolvimento.

Foco em qualidade: A arquitetura deve priorizar boas práticas para garantir desempenho, segurança e manutenibilidade.
Uso de padrões e melhores práticas: Adoção de padrões arquiteturais reconhecidos para promover eficiência e interoperabilidade.
Adaptabilidade e flexibilidade: O sistema deve ser projetado para evoluir conforme mudanças nos requisitos e tecnologias.
Importância arquitetura intencional

Redução de riscos: Decisões estruturais bem fundamentadas minimizam problemas futuros, como retrabalho e falhas técnicas.
Eficiência no desenvolvimento: Com uma base sólida, a equipe pode focar na implementação de funcionalidades sem desvio de escopo.
Satisfação do cliente: Um sistema bem planejado atende melhor às expectativas dos usuários e facilita futuras evoluções.
3.2. Engenharia de Software Ágil
É importante lembrar do Manifesto Ágil, criado por volta dos anos 2000 e 2001. Foram cerca de 20 signatários que se reuniram e chegaram a um consenso: desenvolver software não é a mesma coisa que construir um prédio. Sendo assim, projetos de software devem ser conduzidos de maneira diferente de outros tipos de projetos. Eles estabeleceram valores e princípios para guiar esse processo.

Não vamos passar por tudo isso agora, mas, por exemplo, independentemente do modelo que você adote, é fundamental entender que: devemos valorizar mais os indivíduos e as interações do que os processos e as ferramentas. Trazendo isso para o contexto da engenharia e arquitetura de software, o que isso quer dizer? Antes de pensar apenas em ferramentas para melhorar a qualidade do código da sua equipe, talvez seja mais interessante desenvolver as habilidades e capacidades das pessoas que produzem esse código.

O Manifesto Ágil representou uma ruptura na forma como os projetos de software eram conduzidos. Antes, o planejamento era rígido e linear: criava-se um cronograma do início ao fim e ele era seguido à risca, com a entrega final acontecendo apenas no final do projeto. O Manifesto Ágil trouxe uma nova abordagem: ciclos curtos de trabalho, nos quais pequenas partes do sistema são entregues continuamente.

Ao invés de passar meses desenvolvendo um sistema para só entregá-lo ao cliente, agora trabalhamos de forma iterativa. A cada ciclo (que pode ser, por exemplo, de um mês), uma parte funcional do produto é entregue. O cliente dá seu feedback, que é incorporado nas próximas iterações. Assim, evitamos grandes desperdícios de tempo e dinheiro, pois qualquer necessidade de mudança é identificada rapidamente.

Esse conceito está representado no esquema visual ao lado: primeiro, entregamos a essência do produto, garantindo que ele já tenha valor para o cliente. Depois, aprimoramos continuamente, adicionando novos recursos e melhorando a experiência. Isso transformou completamente o processo de engenharia de software, tornando-o mais dinâmico e adaptável.

Hoje, a maior parte das empresas trabalha com ciclos de entrega contínuos, muitas vezes de dois em dois meses. Se algo não agradar ao cliente, rapidamente podemos ajustar e adaptar. Essa abordagem evolutiva tornou o conceito de MVP (Minimum Viable Product) essencial: primeiro criamos uma versão simples, testamos no mercado e, só depois de validar a ideia, aprofundamos o desenvolvimento.

Essa mudança na engenharia impactou diretamente a arquitetura de software. Antes, a arquitetura intencional era predominante: todas as decisões arquiteturais eram tomadas antes do início do desenvolvimento. Agora, a abordagem é mais flexível: tomamos algumas decisões iniciais, mas deixamos outras para serem ajustadas ao longo do projeto, conforme recebemos feedback.

Isso significa que modularizar o sistema tornou-se ainda mais essencial. Precisamos estruturar nossos módulos de forma inteligente, garantindo alta coesão e baixo acoplamento. Quanto mais independentes forem os módulos, mais fácil será adaptar

No esquema visual ao lado, podemos observar dois cenários: no primeiro, os módulos se comunicam de forma controlada e eficiente; no segundo, todos os módulos se comunicam indiscriminadamente. O segundo cenário não é ideal, pois um alto nível de comunicação entre módulos pode comprometer o desempenho e dificultar a manutenção. O ideal é maximizar a comunicação dentro dos módulos e minimizar a comunicação entre módulos.

Portanto, os impactos da engenharia ágil na arquitetura de software são claros:
Os produtos são mais modularizados.
A arquitetura intencional se tornou menos rígida.
A necessidade de arquiteturas flexíveis e adaptáveis aumentou.
Mudanças contínuas e incrementais fazem parte do processo.
Interfaces bem definidas são essenciais para garantir a evolução do sistema sem comprometer sua integridade.
Por fim, um dos grandes aprendizados da agilidade é abraçar as mudanças. A mudança não é um problema, mas sim uma oportunidade de aprimorar o produto. Dessa forma, a arquitetura também precisa ser flexível e adaptável, permitindo evolução contínua ao longo do tempo.
Manifesto Ágil:
Princípios e Valores, indivíduos e interações, software em funcionamento, responder a mudanças, colaboração com o cliente;
Não trabalha com planejamento total se trabalha em pequenos ciclos;
Características métodos ágeis: Ciclos de entrega, incremental, adaptável, evolutivo;
Impactos na arquitetura de software: Menor intencionalidade, modulação, necessidade de flexibilidade, necessidade de sustentação, interfaces;
3.3. Arquitetura Evolutiva
Na disciplina Fundamentos de Arquitetura de Software, agora, vamos falar sobre arquitetura de software evolutiva.

Primeiro ponto: acho que vale a pena a gente destacar um conceito muito presente na literatura, o conceito de arquitetura evolutiva. Para nós, aqui, ele será simbolicamente o mesmo conceito do que estamos chamando de arquitetura evolutiva. Podemos entender que ambas se referem a uma arquitetura que, inicialmente, é representada, mas, com o tempo, ela vai evoluindo, se adaptando. Vamos explorar alguns conceitos, como o conceito de "big design upfront" (BDUF), especificar o que é arquitetura evolutiva e falar um pouco sobre as características inerentes à arquitetura evolutiva.

O que acontece é o seguinte: basicamente, temos dois tipos de arquitetura. A primeira é a arquitetura que é planejada antes do projeto, e a segunda é a arquitetura que se desenvolve ao longo de todo o processo de desenvolvimento. A arquitetura planejada no início é chamada de arquitetura intencional, enquanto a arquitetura que se desenvolve ao longo do projeto é chamada de arquitetura emergente. Quando falamos de BDUF, não estamos trabalhando com arquitetura emergente, mas sim com uma arquitetura intensamente intencional, ou seja, definindo tudo desde o início do projeto. O problema disso é que, como vimos, não conseguimos prever tudo no começo. Assim, você vai fazer um trabalho inicial pesado, com muitas decisões tomadas logo de cara, mas depois terá um alto custo de mudança ao longo do tempo para garantir que o que você entrega ao cliente esteja alinhado com o que ele espera. Esse trabalho inicial, que depois vai gerar custos de mudança, é um problema. No contexto de sistemas críticos, como por exemplo, sistemas embarcados ou de controle de voo, pode até fazer sentido definir tudo desde o início. No entanto, para produtos como um aplicativo de banco digital, que evolui ao longo do tempo, o melhor é adotar uma arquitetura evolutiva.

, como garantir que uma arquitetura intencional aceite a evolução ao longo do tempo? A resposta está em construir uma arquitetura geral do sistema, que seja composta por decisões arquiteturais intencionais e emergentes. A ideia é permitir que a arquitetura evolua, mas de forma controlada. Nesse sentido, utilizamos o conceito de arquitetura evolutiva: um projeto de arquitetura de software que é flexível e acomoda mudanças de forma contínua e incremental.

Quando trabalhamos com arquitetura evolutiva, devemos adotar algumas práticas, como o design incremental e modular, especificando quais módulos serão trabalhados e minimizando a comunicação entre eles. O objetivo é reduzir ao máximo o impacto da complexidade e do débito técnico, entregando o sistema de forma iterativa, em ciclos. A cada entrega, podemos refinar o código e corrigir problemas técnicos, mantendo o foco em entregas satisfatórias para o cliente, e não perfeitas de início. Isso implica que o débito técnico será algo a ser gerido ao longo do tempo, mas que também pode ser uma oportunidade de aprimorar a qualidade.

As vantagens de adotar uma arquitetura evolutiva são muitas. Primeiramente, ela permite que a arquitetura se adapte às mudanças do contexto, respondendo rapidamente às necessidades emergentes. Além disso, ela possibilita uma maior valorização da interação entre os componentes e uma entrega incremental, com foco no desenvolvimento de funcionalidades de forma interativa, reduzindo o risco de mudanças imprevistas.

Com a arquitetura evolutiva, a equipe de desenvolvimento pode ser mais ágil, pois as mudanças são localizadas e as falhas são mais fáceis de corrigir. A arquitetura se torna resiliente, pois é composta por módulos independentes, e um erro em um módulo não comprometerá o sistema como um todo. Além disso, o processo de modernização e evolução da arquitetura é facilitado, já que você pode entregar aos poucos e ajustar o design conforme o projeto avança.

Em resumo, para implementar uma arquitetura evolutiva de sucesso, é essencial adotar uma abordagem de modularização, focar em coesão dentro dos módulos e minimizar o acoplamento entre eles. Isso, combinado com uma boa definição de interfaces e a utilização de conceitos exploratórios, garante que a arquitetura evolua de forma eficient.e O débito técnico, se bem gerido, pode se tornar uma ferramenta útil, pois permite entregar versões funcionais e satisfatórias para o cliente, enquanto o refinamento ocorre ao longo do tempo.

Esses são os conceitos e práticas que fazem a arquitetura evolutiva ser uma estratégia eficaz, especialmente em um contexto de desenvolvimento ágil e produtos que precisam evoluir de forma contínua.

Definição do projeto arquitetura de software voltada para ser flexível e acomodar mudanças de forma contínua e incremental. Escopos pequenos e modularizando com o tempo, não faz o melhor código de primeira, faz conforme o teste e feedback do cliente.

Design incremental: O sistema é construído aos poucos, permitindo ajustes conforme novas informações surgem.
Modularidade: Separação em partes menores e independentes, facilitando manutenção e escalabilidade.
Iteratividade: Desenvolvimento baseado em ciclos curtos de entrega, garantindo melhorias constantes.
Refatoração contínua: O código é revisado e melhorado regularmente para manter qualidade e desempenho.
Gestão de débitos técnicos: Equilibra a velocidade de entrega com a necessidade de manter um código sustentável.
Uso de conceitos exploratórios: Testa diferentes abordagens antes de definir uma solução final, reduzindo incertezas.
BDUF - É você tomar muitas decisões no início do seu projeto, o problema disso é fazer muito trabalho no início vai ter determinado muitas coisas e depois você vai ter um alto custo de mudanças ao longo do tempo para garantir que isso aqui, que o que você vai entregar para o cliente seja associado ao que o cliente espera.

Desalinhamento projeto X executado: O que foi planejado pode não refletir as reais necessidades do cliente.
Surgimento de Bugs: Decisões prematuras podem gerar falhas difíceis de corrigir posteriormente.
Documentação desatualizada: Como o sistema muda, a documentação inicial pode se tornar irrelevante.
Desperdício: Tempo e esforço podem ser gastos em funcionalidades que serão descartadas ou modificadas.
Custo de mudanças: Alterar algo que já foi rigidamente definido no início pode exigir grande retrabalho.
Exemplo de uso: Software embargado para um avião ou máquina, neste caso todas as especificações são obrigatórias;

3.4. Arquitetura Emergente
Dando sequência à disciplina Fundamentos de Arquitetura de Software, abordando arquitetura de software moderna. A ênfase aqui não é só na arquitetura intencional, que vimos anteriormente, mas também na arquitetura que vamos desenvolver ao longo do processo de desenvolvimento, arquitetura de software emergente.

Vamos entender um pouco esse conceito de arquitetura de software emergente. Os princípios dessa arquitetura, algumas práticas, desafios e, ao final, vamos concluir a respeito desse tema.

Se pegarmos a definição literária, a arquitetura emergente é a estrutura de um sistema que evolui de forma orgânica, a partir das decisões de design que são tomadas ao longo do desenvolvimento, baseadas em feedbacks e aprendizado constante.

Agora, vamos conversar sobre isso. A arquitetura emergente é o oposto da arquitetura intencional, onde o arquiteto toma decisões centralizadas antes de começar o desenvolvimento. Na arquitetura emergente, as decisões são tomadas pela equipe de desenvolvimento ao longo do processo. Ou seja, ao invés de planejar tudo de uma vez, as decisões vão surgindo conforme os problemas vão sendo encontrados. Por exemplo, na arquitetura intencional, você poderia decidir usar uma linguagem como Java desde o início, mas no processo de desenvolvimento, ao identificar problemas, pode ser necessário mudar para uma biblioteca diferente. Esse tipo de decisão também faz parte da arquitetura. O arquiteto ainda participa, mas o processo é mais colaborativo, com a equipe tomando decisões conforme o desenvolvimento avança.

Quais são as características dessa arquitetura que vai surgindo ao longo do caminho? Como estamos entregando software de forma interativa e incremental, o planejamento deve ser constante e evolutivo. Em vez de grandes decisões arquiteturais, buscamos soluções menores e mais simples, de forma contínua. A equipe de desenvolvimento participa ativamente da tomada dessas decisões.

Muitas vezes, a equipe pode decidir o caminho a seguir. Por exemplo, se uma equipe tem dois membros com 15 anos de experiência em um produto específico, eles podem sugerir soluções mais eficazes do que o arquiteto, que não tem tanta experiência prática. O arquiteto pode guiar o processo, mas não é o único responsável pelas decisões. A utilização de padrões e práticas consolidadas, como o DDD (Domain-Driven Design), também ajuda a melhorar a qualidade do código, permitindo que a equipe corrija problemas e aumente a qualidade ao longo do tempo.

Uma prática muito importante para a arquitetura emergente é a arquitetura modular, que já discutimos anteriormente. A arquitetura modular envolve princípios como alta coesão, baixo acoplamento e segregação de responsabilidades. Essas práticas são fundamentais para que o sistema seja flexível e capaz de evoluir conforme as necessidades do projeto.

Agora, para fechar, vamos representar a arquitetura de um sistema. Essa arquitetura será composta por duas partes: a arquitetura intencional e a arquitetura emergente. O que buscamos aqui é garantir que essa arquitetura como um todo seja evolutiva. Ao trabalhar com modularização, segregação de responsabilidades e mantendo alta coesão e baixo acoplamento, conseguimos garantir que o sistema evolua de forma eficiente.

Sempre será necessário equilibrar a quantidade de arquitetura intencional com a de arquitetura emergente. Se você está desenvolvendo um sistema crítico, a arquitetura intencional será mais predominante. Porém, em sistemas novos ou produtos em constante evolução, a arquitetura emergente será mais relevante. Essa linha vai variar conforme o contexto, e entender quando tomar decisões intencionais e quando deixar a equipe decidir ao longo do processo é essencial.

Em resumo, a arquitetura de software evolutiva depende do equilíbrio entre as duas abordagens. Não existe uma regra rígida, mas é importante saber quando aplicar mais de uma e como balanceá-las conforme o contexto. A ideia é construir uma arquitetura que seja adaptável e capaz de evoluir ao longo do tempo.

O importante é entender que tanto a arquitetura intencional quanto a emergente têm seu papel no desenvolvimento de software. À medida que o projeto avança, você vai aplicando uma ou outra conforme as necessidades surgem. Com isso, fechamos este capítulo. No próximo, vamos falar um pouco sobre tendências atuais e entrar nas questões dos rádios, que são extremamente importantes para o seu aprendizado.

É a estrutura de um sistema que evolui organicamente a partir de práticas e decisões de design contínuas, baseadas em feedback e aprendizado constante ao longo do ciclo de desenvolvimento. Resumindo os problemas que vão surgindo no meio do caminho, a equipe toma decisões junto com o arquiteto;

Iteratividade e incrementalidade: O sistema cresce de forma incremental, com melhorias sendo feitas em pequenos ciclos. A arquitetura se adapta conforme novos requisitos surgem e desafios são resolvidos progressivamente.
Design simples: Foco em soluções diretas e eficazes, evitando complexidade desnecessária. A simplicidade facilita a manutenção, testes e escalabilidade.
Influenciada pela equipe: A arquitetura não é imposta por um arquiteto isolado, mas co-criada pela equipe de desenvolvimento. O conhecimento coletivo da equipe influencia as decisões técnicas e as direções arquiteturais.
Decisões não centralizadas: Não há um único responsável pela arquitetura - as decisões são tomadas colaborativamente. A autonomia da equipe promove soluções mais flexíveis e eficientes.
Uso de padrões: Padrões arquiteturais e boas práticas são aplicados para manter a qualidade do software. Exemplos: MVC, Microservices, Event-Driven, Hexagonal Architecture.
Técnicas Associadas à Arquitetura Emergente:

TDD (Test-Driven Development): Desenvolvimento orientado a testes, garantindo código confiável e modular. Ajuda na evolução natural da arquitetura, evitando grandes falhas no design.
BDD (Behavior-Driven Development): Define a arquitetura com base no comportamento esperado do sistema, ajudando a alinhar requisitos e desenvolvimento.
Programação em Par (Pair Programming): Dois desenvolvedores trabalham juntos no mesmo código, melhorando a qualidade e promovendo decisões arquiteturais colaborativas.
Continuous Integration (CI): Automatização da integração de código para garantir feedback rápido e menor risco de falhas arquiteturais.
Refatoração: O código e a arquitetura são constantemente melhorados e otimizados, permitindo evolução sem grandes refações.
Arquitetura Modular: O sistema é dividido em módulos menores e independentes, facilitando a escalabilidade e a manutenção.
Desafios da Arquitetura Emergente:

Tomada de Decisões Coletivas: Requer colaboração e alinhamento constante entre os membros da equipe. Evita decisões conflitantes ou falta de coerência na arquitetura.
Experiência Profissional: A equipe precisa de experiência para tomar boas decisões arquiteturais sem precisar de um planejamento rígido.
Conhecimento de Padrões Arquiteturais: É essencial conhecer e aplicar padrões de design e boas práticas para evitar soluções ineficazes.
Liderança Técnica: Um arquiteto ou líder técnico precisa guiar a equipe, garantindo que as melhores práticas sejam seguidas.
Soft Skills: Comunicação, colaboração e negociação são fundamentais para alinhar decisões técnicas e lidar com desafios emergentes.
Arquitetura tradicional/convencional: define a estrutura do sistema do início do projeto, com pouca flexibilidade para mudanças. Arquitetura emergente: evolui a estrutura do sistema de forma incremental e adaptativa, permitindo mudanças contínuas e respondendo ao feedback; Foca na conformidade e documentação das soluções, com revisões periódicas para garantir padrões e evolução arquitetural, Essa abordagem funciona muito bem em projetos ágeis, startups e sistemas que precisam evoluir com rapidez sem um planejamento excessivamente rígido.

Capítulo 4: Estilos Arquiteturais Monolíticos
Evoluções e tendências da arquitetura, neste capitulo o foco é na evolução da arquitetura e nas novas tendências tecnológicas. O arquiteto de software precisa estar atendo às mudanças e inovações para adaptar e melhorar as soluções atuais. Isso inclui a adoção de práticas como DevOps, cloud computing e arquiteturas evolutivas que são essenciais para manter a competividade e atender as demandas dinâmicas do mercado.

4.1. Conceitos Gerais
Dando sequência à nossa disciplina Fundamentos de Arquitetura de Software. Agora, vamos falar sobre os estilos arquiteturais. Vamos abordar os estilos arquiteturais monolíticos, o foco será entender o que são os estilos arquiteturais, para depois detalharmos cada um deles. Vamos começar com uma introdução ao conceito de estilos arquiteturais.

Para começar, precisamos entender o que são os estilos arquiteturais, suas características e os critérios que usaremos para escolher o mais adequado. Quando falo sobre estilo, antes de pensar no conceito teórico, é importante entender a prática. Por exemplo, pensem que eu sou uma pessoa que tem um estilo de viver a vida de forma positiva. O que isso significa na prática? Normalmente, quando enfrento um problema, tento ver o lado positivo da situação, mas isso não especifica uma estratégia de atuação detalhada sobre como eu vou lidar com cada situação. Isso apenas me dá direções gerais. Da mesma forma, os estilos arquiteturais são diretrizes de alto nível, não são soluções detalhadas, mas sim abordagens gerais que orientam a arquitetura do sistema.

O primeiro ponto importante é que, ao escolher um estilo, você não necessariamente usará o mesmo estilo para todo o sistema. Às vezes, é necessário combinar estilos para criar uma arquitetura específica. Embora, didaticamente, eu evite misturar estilos na nossa abordagem aqui, na prática, é comum combinar estilos conforme o sistema evolui. , um estilo arquitetural é basicamente um padrão de alto nível que define a forma como os componentes do sistema se relacionam, como eles se comunicam entre si e com o mundo externo.

Ao escolher um estilo, como o monolítico ou o distribuído, é importante entender as vantagens e desvantagens de cada um. Vamos discutir essas vantagens e desvantagens ao longo do capítulo, mas antes de prosseguir, é fundamental compreender as características dos estilos arquiteturais. Todo estilo é composto por componentes e conectores que especificam como esses componentes interagem. A topologia descreve a disposição desses componentes, e a arquitetura pode ter uma hierarquia ou uma segregação de responsabilidades, com princípios que são aplicados de maneira diferente em cada estilo.

O mais importante ao compreender os estilos arquiteturais é que, ao me deparar com uma situação onde eu precise usar um estilo específico, eu já tenha uma compreensão prévia do que isso implica. Quando a equipe e eu decidimos adotar um estilo monolítico, por exemplo, isso melhora a comunicação e a clareza entre todos, facilitando a manutenção e a evolução do sistema ao longo do tempo. Quando o estilo arquitetural é bem compreendido, é mais fácil entender o código e, consequentemente, a qualidade do produto gerado tende a ser melhor.

Uma analogia interessante seria escolher uma mochila: você precisa avaliar qual tipo de mochila atenderá melhor às suas necessidades, dependendo de como você usará ela. Da mesma forma, na arquitetura de software, você precisa entender como o sistema será utilizado: será um sistema monolítico ou distribuído? O sistema será entregue de uma vez ou em partes, incrementalmente? Essas são decisões arquiteturais importantes que precisam ser tomadas no início.

Escolher o estilo arquitetural é uma das primeiras grandes decisões que você toma, e isso não é uma escolha binária. Na prática, você pode começar com um estilo monolítico e, ao longo do tempo, ir distribuindo o sistema, conectando-o com serviços externos. A escolha do estilo arquitetural impacta diretamente a capacidade de atender aos requisitos do sistema. Por exemplo, se você precisa de alta disponibilidade, a melhor forma de alcançá-la sem gastar excessivamente é usando uma arquitetura distribuída. Embora seja possível alcançar alta disponibilidade em um sistema monolítico, isso exigirá muito mais esforço com escala vertical de recursos.

Além disso, a escolha do estilo arquitetural deve levar em consideração os requisitos específicos do sistema e o contexto em que ele será usado. Por exemplo, em sistemas bancários, é comum a utilização de orientação a eventos e microserviços. Em sistemas militares, frequentemente se utiliza linguagens de alto desempenho e de cálculo matemático.

Portanto, a escolha do estilo arquitetural é uma das primeiras e mais importantes decisões que você tomará. Ela influencia diretamente a forma como o sistema será desenvolvido e mantido ao longo do tempo.

Estilos arquiteturais:

Design patterns de alto nível: Padrões de arquitetura que orientam a construção do sistema (ex: MVC, CQRS, Event Sourcing).
Estrutura ou organização geral para um sistema de software: Define como o sistema é dividido e organizado (ex: Monolítico, Microservices, Serverless).
Integração entre componente do sistema e com o ambiente externo: Como os módulos do sistema interagem (ex: APIs REST, Mensageria, RPC).
Componentes: Elementos básicos do sistema, como módulos, serviços e bancos de dados.
Conectores: Mecanismos que interligam os componentes (HTTP, WebSockets, Message Brokers).
Configuração/Topologia: Estrutura física e lógica do sistema (servidores centralizados, distribuição em cloud).
Princípios e restrições: Regras e boas práticas que limitam o design do sistema (acoplamento baixo, imutabilidade, separação de responsabilidades).
Importancia: Estilos arquiteturais

Reutilização: Componentes bem definidos podem ser reaproveitados em diferentes projetos.
Comunicação eficiente: Sistemas bem estruturados reduzem problemas de latência e aumentam a confiabilidade.
Facilidade de manutenção e evolução: Uma arquitetura bem escolhida facilita a adaptação do software a novas necessidades.
Melhoria da qualidade de software: Um design bem planejado reduz falhas, melhora a segurança e mantém a escalabilidade do sistema.
Critérios de comparação: Estilos arquiteturais

Centralização ou distribuição: Sistemas podem ser centralizados (monolítico) ou distribuídos (microserviços, event-driven).
Entrega única ou incremental: Sistemas podem ser entregues de uma vez (monolítico tradicional) ou por partes (arquitetura modular/microserviços).
Características arquiteturais: Incluem escalabilidade, acoplamento, disponibilidade e segurança.
Skills Equipe: A complexidade da arquitetura deve considerar o nível técnico do time para garantir um desenvolvimento eficiente.

4.2. Arquitetura em Camadas
Dando sequência à nossa disciplina de Fundamentos de Arquitetura de Software, falando especificamente sobre o capítulo de estilos arquiteturais monolíticos. Vamos falar um pouquinho sobre a Arquitetura em Camadas.

Primeiro, vamos aos conceitos. Estamos no capítulo de estilos arquiteturais monolíticos, mas o que é uma arquitetura monolítica? Ela é uma arquitetura em que o sistema é entregue ao cliente em um único pacote, ou seja, de forma única. Esse é o conceito literal. Quando falo sobre monolítico, a palavra "monolítico" deriva de "pedra", pois uma pedra é indivisível. Se você quebrar uma pedra, não consegue juntar novamente. Assim, em um sistema monolítico, você só consegue entregá-lo quando ele está todo pronto, finalizado.

Quando se fala de sistemas monolíticos, é importante entender que no passado, os sistemas eram desenvolvidos de maneira monolítica, sem modularização. Era comum utilizar uma única classe ou poucas classes, sem a separação de responsabilidades. Esse modelo, muitas vezes chamado de "Big Ball of Mud" (Grande Bola de Lama), era o padrão.

Com o tempo, as coisas mudaram. Surgiram novos conceitos, como a ideia de grandes servidores atendendo a múltiplos clientes e a utilização de pequenos serviços em vez de um único serviço massivo. Esse conceito gerou a ideia de modularização dos sistemas, o que levou à Arquitetura em Camadas.

Na Arquitetura em Camadas, o sistema é dividido em várias camadas, sendo que cada camada é responsável por um tipo específico de função. Por exemplo, temos uma camada de apresentação (responsável pela interface com o cliente), uma camada de serviços (onde as regras de negócio são implementadas), uma camada lógica (onde as regras de negócios mais específicas são executadas), uma camada de interface com o banco de dados, e uma camada de persistência de dados. Assim, o sistema é modularizado, o que facilita o desenvolvimento e a manutenção.

No início da pesquisa sobre arquitetura de software, buscava-se arquiteturas modulares. A Arquitetura em Camadas tem várias vantagens, mas também apresenta desafios. Uma das vantagens é a separação de responsabilidades. Por exemplo, você pode ter uma equipe trabalhando na camada de apresentação enquanto outra trabalha na camada de serviços, o que facilita o desenvolvimento paralelo e acelera o progresso. Além disso, ela favorece a reutilização, já que você pode alterar uma camada sem impactar diretamente as outras.

Porém, há desvantagens. Uma camada se comunica apenas com a camada superior ou inferior, o que pode tornar a comunicação entre as camadas mais lenta, impactando o desempenho do sistema. Isso ocorre porque, por exemplo, uma solicitação na camada de apresentação não vai diretamente para o banco de dados, ela passa por todas as camadas intermediárias, o que pode aumentar o tempo de resposta. Outro ponto negativo é que a disponibilidade do sistema depende da camada mais frágil, ou seja, se uma camada falhar, o sistema como um todo pode ser afetado.

Além disso, a escalabilidade também é um desafio, pois, como o sistema é composto por várias camadas, escalar o sistema pode ser mais complicado. E quando se trata de evolução do sistema, adicionar novas funcionalidades pode exigir alterações em várias camadas, o que torna o processo mais complexo.

Para minimizar essas dificuldades, algumas boas práticas podem ser adotadas. Por exemplo, é importante definir claramente as interfaces entre as camadas e modularizar bem dentro de cada camada. Assim, você pode, por exemplo, ter um subgrupo dentro da camada de regras de negócio para tratar de diferentes tipos de regras, como regras de negócios para usuários, regras para produtos, etc. Além disso, a substituição de camadas também pode ser uma estratégia útil, caso você precise atualizar ou trocar alguma camada sem impactar o sistema como um todo.

A Arquitetura em Camadas é um modelo simples e eficiente, que facilita o desenvolvimento paralelo e a reutilização de código. Porém, ele tem limitações relacionadas ao desempenho, disponibilidade e evolução do sistema.

Monolítico

É uma arquitetura que você entrega ele para o cliente, através de um deployment único e esse é o conceito literário;

Arquitetura em camada, o estilo arquitetural em camada organiza o sistema em níveis distintos, onde cada camada tem uma responsabilidade específica e interage om as camadas adjacentes de forma controlada;

Camadas comuns:

Camada de apresentação UI: Responsável pela interface gráfica com o usuário, podendo ser uma aplicação web, mobile ou desktop.
Camada de aplicação/negócio: Contém as regras de negócio e a lógica da aplicação. Essa camada processa os dados recebidos da interface do usuário.
Camada de serviços/integração: Responsável por interações externas, como comunicação com APIs, sistemas terceiros e serviços de backend.
Camada de persistência/dados: Gerencia a comunicação com o banco de dados, garantindo a persistência e recuperação de informações.
Vantagens:

Separação de responsabilidades: A divisão em camadas permite organizar o código de maneira mais clara.
Simplicidade: Fácil de desenvolver, testar e implantar, especialmente em projetos pequenos e médios.
Desenvolvimento paralelo: Diferentes equipes podem trabalhar separadamente em cada camada.
Independência entre camadas: Alterações em uma camada podem ser feitas sem impactar diretamente as outras.
Reutilização: Componentes e módulos podem ser reaproveitados dentro do próprio sistema.
Desvantagens:

Comunicação: Dependências internas podem dificultar a comunicação eficiente entre diferentes partes do sistema.
Desempenho: Aumento da complexidade pode impactar o tempo de resposta, especialmente quando há muitas interações entre camadas.
Disponibilidade: Se um problema ocorrer, pode afetar todo o sistema, já que tudo está integrado.
Escalabilidade: Dificuldade para escalar partes específicas do sistema, pois toda a aplicação precisa ser replicada.
Evolução: Manutenção pode se tornar mais difícil à medida que o sistema cresce.
Boas práticas:

Definição clara de interfaces: Estabelecer contratos bem definidos entre as camadas para facilitar a manutenção.
Adaptação a realidade do projeto: A estruturação do sistema deve ser feita conforme a necessidade do negócio.
Subdivisão de camadas: Evitar acoplamento excessivo e manter cada camada focada em sua responsabilidade.

4.3. Arquitetura Pipeline
O conceito de Pipeline é bem simples, organiza o processamento de dados ou tarefas em uma sequência de estágios, onde cada estágio realiza uma operação específica e passa o resultado para o próximo. Essa abordagem é amplamente utilizada em compiladores, processamento de dados e processamento de imagens, garantindo um fluxo estruturado e eficiente.

Voltado para tarefas com grandes volumes de dados ou onde a performance é crítica. Ele permite um melhor desempenho se comparado com as camadas, pois é otimizado para o processamento sequencial de dados em um fluxo contínuo. Entretanto, ele continua apresentando desafios de disponibilidade, já que, se uma das etapas falhar, todo o sistema pode ser comprometido.

O Pipeline é ideal quando você tem um conjunto de funcionalidades bem definidas, com um fluxo de dados claramente determinado. Ele não é tão flexível quanto a Arquitetura em Camadas, pois foi projetado para processos específicos com alto desempenho, e, para adicionar novas funcionalidades, pode ser necessário modificar o fluxo inteiro, o que torna a evolução do sistema mais complexa.

Exemplos típicos de uso de Pipeline incluem sistemas de compilação de código, onde o código em alto nível é transformado em instruções de baixo nível, ou processos de integração e análise de dados, como relatórios de visualização de dados.

Vantagens desse modelo incluem a alta performance, já que ele é otimizado para tarefas específicas, e a facilidade de escalabilidade, principalmente em estágios individuais do Pipeline, o que permite uma escalabilidade vertical em vez de uma horizontal. No entanto, a desvantagem principal é a falta de flexibilidade e a dificuldade de evoluir o sistema, pois as etapas precisam seguir uma sequência predeterminada e a reversão ou adaptação do fluxo de dados pode ser difícil.

Outro ponto negativo é a complexidade da integração entre os filtros e etapas do Pipeline, o que pode gerar dificuldades em termos de manutenção e evolução funcional. A Arquitetura Pipeline, portanto, é mais indicada para sistemas com um número reduzido de funcionalidades, ou quando você tem uma demanda específica de desempenho.

Em resumo, a Arquitetura Pipeline é mais eficiente em termos de desempenho, mas é menos flexível e mais difícil de evoluir. A manutenção do sistema também pode ser um desafio, pois qualquer alteração nas etapas pode afetar o fluxo geral de dados.

Boas práticas incluem a definição clara de interfaces entre as etapas, a minimização do acoplamento entre elas e o monitoramento contínuo de cada uma das etapas do Pipeline. Isso ajuda a garantir que as operações sejam feitas de forma eficiente e sem sobrecarregar o sistema.

Organiza o processamento de dados ou tarefas em uma sequência de estágios, onde cada estágio realiza uma operação específica e passa o resultado para o próximo estágio;

Estrutura da Arquitetura Pipeline:

Pipes (tubos): São os canais de comunicação entre os estágios, responsáveis por transportar os dados processados.
Filters (filtros): São os componentes que processam os dados, transformando-os antes de passá-los para o próximo estágio.
Em um compilador, o código-fonte passa por diferentes fases, como análise léxica, análise sintática e geração de código, cada uma sendo um estágio no pipeline.

Vantagens da Arquitetura Pipeline:

Separação de responsabilidades: Cada estágio executa uma tarefa específica, tornando o código mais organizado e modular.
Reutilização: Os estágios podem ser reaproveitados em diferentes pipelines, evitando retrabalho.
Escalabilidade: É possível adicionar novos estágios ou modificar os existentes sem impactar toda a estrutura.
Desempenho: O processamento pode ser otimizado, permitindo que diferentes estágios trabalhem simultaneamente.
Desvantagens da Arquitetura Pipeline:

Dependência sequencial: Se um estágio falhar, todo o fluxo pode ser interrompido.
Dificuldade na reversão: Em caso de erro, voltar a um estágio anterior pode ser complexo.
Manutenção da integração: É necessário garantir que os estágios sejam compatíveis e bem integrados.
Evolução funcional: Alterações estruturais podem exigir modificações em vários estágios.
Flexibilidade: Adicionar lógica condicional pode ser desafiador, pois a sequência é pré-definida.
Boas Práticas para Implementação:

Definição clara de interfaces: Cada estágio deve ter entradas e saídas bem definidas para garantir integração correta.
Minimizar acoplamento: Evitar que estágios dependam excessivamente uns dos outros, facilitando manutenção e evolução.
Monitoramento e logs: Implementar registros detalhados do processamento para facilitar diagnóstico e depuração.

4.4. Arquitetura Microkernel
Nos "Fundamentos de Arquitetura de Software" da arquitetura monolítica: o conceito de Microkernel, é um modelo de arquitetura de software onde o sistema é dividido em um núcleo mínimo (core/kernel) e um conjunto de módulos externos (plug-ins). O objetivo é manter o núcleo simples e eficiente, enquanto funcionalidades adicionais são acopladas de forma modular.

Antes de começarmos, vale a pena esclarecer um ponto importante: o conceito de Microkernel, apesar de ser descrito como monolítico na literatura, na prática, hoje em dia ele é aplicado de forma diferente. Inicialmente, foi idealizado como uma arquitetura monolítica, mas atualmente, com o avanço da tecnologia, ele pode ser usado de forma mais modular e não necessariamente monolítica. Essa diferença não altera o entendimento do conceito de Microkernel, e vamos falar mais sobre isso ao longo da explicação.

O que é o Microkernel? Imagine que você tem um sistema com um núcleo central (core), que contém as funcionalidades essenciais e mínimas, e plugins adicionais que fornecem funcionalidades complementares. A ideia é que o núcleo central seja bem enxuto, contendo apenas o que é fundamental, e os plugins possam ser adicionados para expandir a funcionalidade do sistema. Por exemplo, em um sistema bancário, o núcleo pode lidar com o controle de contas, enquanto plugins adicionais podem tratar de investimentos, crédito, empréstimos, etc.

O Microkernel tem como principal objetivo proporcionar flexibilidade e evolução do sistema. Se você precisar adicionar novas funcionalidades, como um novo tipo de serviço bancário, basta adicionar um novo plugin sem modificar o núcleo central. Isso facilita a manutenção e a expansão do sistema ao longo do tempo.

O comportamento básico do Microkernel é que o núcleo central oferece apenas funcionalidades essenciais, enquanto as funcionalidades adicionais são implementadas como módulos ou plugins que podem ser acoplados ou desacoplados conforme a necessidade. Esse modelo proporciona flexibilidade e adaptação ao longo do tempo.

Exemplos de sistemas que utilizam esse tipo de arquitetura incluem navegadores da web, onde o núcleo básico é a funcionalidade de navegação e visualização de páginas, e plugins podem ser adicionados para fornecer recursos como tradutores, bloqueadores de anúncios ou downloads de vídeos. Outro exemplo seria o sistema de streaming como a Netflix, que oferece funcionalidades básicas de visualização de conteúdo, mas pode adicionar plugins para personalizar a experiência do usuário, como recomendações ou ferramentas de teste.

Apesar de o Microkernel ser descrito como uma arquitetura monolítica, ele permite a entrega de funcionalidades incrementais. Ou seja, você pode entregar o núcleo primeiro e, em seguida, ir implementando os plugins de forma incremental ao longo do tempo, o que torna o sistema mais flexível.

Ao desenvolver uma arquitetura Microkernel, é importante considerar o tamanho do núcleo central. O núcleo deve conter apenas as funcionalidades essenciais para evitar sobrecarregar o sistema. Se o núcleo for muito grande, ele pode ficar pesado e afetar a performance do sistema. A ideia é que o núcleo seja o mais enxuto possível, e os plugins, que são as funcionalidades complementares, possam ser adicionados conforme necessário.

As vantagens dessa arquitetura incluem a facilidade de adicionar novas funcionalidades, a flexibilidade para evoluir o sistema ao longo do tempo e a maior disponibilidade. Isso ocorre porque, se um plugin falhar, o sistema continua funcionando, enquanto se o núcleo falhar, todo o sistema é comprometido. Além disso, como cada plugin é independente, é mais fácil fazer alterações e melhorias em partes específicas do sistema.

Porém, o Microkernel também tem suas limitações. A principal dificuldade está na integração entre o núcleo e os plugins. Se o número de plugins aumentar muito, o núcleo pode ficar sobrecarregado, o que pode comprometer o desempenho do sistema. Outro desafio é o gerenciamento da comunicação entre os plugins e o núcleo, que deve ser bem dimensionada para evitar sobrecarga.

Além disso, os testes de integração podem ser mais complicados, já que o sistema é composto por múltiplos plugins que precisam interagir de forma eficiente. Mesmo com essas dificuldades, a arquitetura Microkernel oferece uma boa solução para sistemas que precisam ser flexíveis e escaláveis, e onde a adição de novas funcionalidades ao longo do tempo é um requisito importante.

Boas práticas para essa arquitetura incluem um bom dimensionamento do núcleo central e a definição clara de interfaces entre o núcleo e os plugins. Além disso, é essencial fazer testes de integração para garantir que o sistema funcione como esperado, além dos testes unitários de cada plugin. Isso ajuda a garantir a qualidade do sistema como um todo.

Em resumo, o Microkernel oferece uma arquitetura monolítica flexível, permitindo a adição incremental de funcionalidades. Ele melhora a evolução do sistema e a disponibilidade, mas exige um bom gerenciamento do núcleo e a integração cuidadosa dos plugins para evitar sobrecarga no sistema.

Também conhecida como Plug-in, é um estilo onde o sistema central (Microkernel) fornece funcionalidades mínimas e essenciais, enquanto as funcionalidades adicionais são implementadas como módulos ou plug-in que podem ser acoplados ou desacoplados conforme necessário.

Estrutura da Arquitetura Microkernel:

Core/Kernel: O núcleo do sistema, responsável pelas operações básicas e gerenciamento de comunicação entre os módulos.
Plug-ins: Extensões que adicionam funcionalidades específicas ao sistema sem modificar o núcleo.
Interface de comunicação: Mecanismo que permite a interação entre o núcleo e os plug-ins.
Vantagens da Arquitetura Microkernel:

Extensibilidade: Novos recursos podem ser adicionados sem alterar o núcleo do sistema.
Robustez e estabilidade: O sistema permanece estável, pois as extensões operam de forma independente.
Disponibilidade: Atualizações e correções podem ser feitas nos plug-ins sem interromper o funcionamento do sistema.
Simplicidade: O núcleo é pequeno e gerenciável, facilitando manutenção.
Evolução funcional: Permite a evolução do sistema sem grandes refatorações, pois os novos recursos são adicionados como plug-ins.
Desvantagens da Arquitetura Microkernel:

Dificuldade de integração: Garantir a comunicação eficiente entre o núcleo e os plug-ins pode ser desafiador.
Sobrecarga devido a comunicação: A troca frequente de mensagens entre núcleo e plug-ins pode impactar o desempenho.
Gerenciamento de plug-in: A compatibilidade entre diferentes plug-ins e versões pode se tornar complexa.
Ponto central (Kernel): Se o núcleo falhar, todo o sistema pode ser comprometido.
Teste de integração: Testar todas as combinações possíveis de plug-ins pode ser trabalhoso.
Boas Práticas na Implementação

Design do núcleo: O kernel deve ser o mais simples e eficiente possível, garantindo um desempenho estável.
Design plug-in: Os módulos devem ser independentes e bem definidos, evitando acoplamento excessivo.
Ampla cobertura de teste: Garantir testes rigorosos tanto no núcleo quanto nos plug-ins para evitar falhas na integração.
Capítulo 5: Estilos Arquiteturais Distribuídos
5.1. Conceitos Gerais
As arquiteturas distribuídas são utilizadas para projetar e implementar sistemas onde os componentes estão distribuídos, muitas vezes em locais distintos. Quando você vai utilizar esse tipo de arquitetura? Imagine que você tem um servidor sobrecarregado em uma unidade, mas há outro servidor em uma unidade diferente que está ocioso. Nesse caso, você pode usar recursos distribuídos para melhorar a disponibilidade e a resiliência do sistema. A principal dificuldade aqui é que a comunicação entre os componentes precisa ser eficiente, pois, caso contrário, o desempenho pode ser comprometido.

As características principais desses modelos de sistemas incluem a distribuição geográfica dos componentes, descentralização e comunicação entre componentes. Enquanto nos sistemas monolíticos tudo fica concentrado em um único local, nas arquiteturas distribuídas, os componentes estão separados e devem se comunicar entre si. Essa comunicação precisa ser bem gerida, especialmente quando os componentes estão distantes, o que pode afetar o desempenho. Por outro lado, as arquiteturas distribuídas são altamente tolerantes a falhas, ou seja, se uma parte do sistema falhar, as outras partes podem continuar funcionando normalmente. Outro benefício é a escalabilidade, pois você pode aumentar a infraestrutura de componentes que recebem mais requisições sem afetar os outros.

A heterogeneidade é outro ponto importante, pois em uma arquitetura distribuída, você pode ter componentes escritos em diferentes linguagens de programação ou rodando em diferentes sistemas operacionais, o que proporciona maior flexibilidade.

Dificuldades: Uma das principais dificuldades das arquiteturas distribuídas está relacionada à segurança, pois as mensagens precisam trafegar pela rede, o que pode ser uma preocupação. A comunicação pela rede pode ser mais lenta e menos confiável do que a comunicação local. Além disso, gerenciar a coordenação entre os componentes distribuídos pode se tornar complexo. Portanto, embora as arquiteturas distribuídas tragam muitos benefícios, é importante analisar cuidadosamente o contexto antes de adotar esse modelo, pois nem sempre é a melhor solução para todos os casos.

Escalabilidade e balanceamento são mais fáceis de serem implementados em sistemas distribuídos, mas gerenciar isso ao longo do tempo pode ser mais desafiador. A falta de uma visão centralizada torna a administração mais complexa, principalmente quando há muitos componentes a serem geridos.

Para ilustrar esses conceitos, podemos falar sobre alguns exemplos práticos de empresas que utilizam arquiteturas distribuídas. Por exemplo, a Amazon Web Services (AWS) oferece uma série de ferramentas, como o S3, que são usadas de forma distribuída e independente para fornecer serviços em várias partes do mundo. O Netflix também usa uma arquitetura distribuída para gerenciar seu grande banco de dados de filmes e permitir que milhões de usuários assistam a conteúdos de forma simultânea. Google, Uber, Spotify e outras grandes empresas também adotam essa arquitetura para lidar com seus usuários e serviços espalhados ao redor do mundo.

Características comuns dessas empresas incluem:

Usuários dispersos geograficamente;
Necessidade de conectividade de rede eficiente;
Elasticidade no número de usuários;
Escalabilidade e evolução funcional.
Esses sistemas evoluem ao longo do tempo, como vimos com a Uber e a Netflix, que têm sistemas completamente diferentes hoje em dia em relação a três anos atrás.

Arquiteturas distribuídas oferecem grandes vantagens tecnológicas quando bem utilizadas. No entanto, elas não são adequadas para todos os contextos, e é importante fazer uma análise cuidadosa para escolher a solução ideal para cada caso.

Tendências atuais incluem:

Arquitetura sem servidor (serverless), que não significa "sem servidores", mas sim "servidores de terceiros", o que permite maior flexibilidade e escalabilidade;
Processamento na borda, que melhora a tomada de decisões rápidas e reduz a latência;
Arquiteturas multi-cloud, em que empresas armazenam dados em nuvens públicas e privadas, distribuindo o processamento entre diferentes plataformas;
Arquitetura federada, que é um conceito interessante, principalmente para grandes organizações. Em uma arquitetura federada, você tem entidades independentes que colaboram entre si, como no modelo de governo federal, com um poder central, mas com autonomia local.
Esses conceitos de federação podem ser aplicados em sistemas distribuídos para garantir maior flexibilidade e autonomia entre os componentes.
Arquiteturas distribuídas são uma excelente opção para muitos cenários, especialmente quando você precisa de escalabilidade, resiliência e flexibilidade. No entanto, elas exigem um gerenciamento cuidadoso e uma análise crítica sobre quando e como utilizá-las.

Arquiteturas utilizadas para projetar e implementar sistemas em que os componentes estão distribuídos em diferentes nós de uma rede. A distribuição dos componentes pode ocorrer por várias razões, como escalabilidade, resiliência, alta disponibilidade ou par aproveitar recursos geograficamente distribuídos;

Características das Arquiteturas Distribuídas:

Distribuição de componentes: Os componentes do sistema (como servidores, bancos de dados, e serviços) são distribuídos por diferentes nós, que podem ser servidores físicos ou virtuais, e estão conectados via rede. Essa distribuição possibilita a implementação de diferentes funcionalidades em locais distintos.
Descentralização: Não existe um único ponto de controle ou de falha no sistema. Os sistemas descentralizados têm maior resiliência e não dependem de um único servidor ou nó para funcionar, o que aumenta a disponibilidade.
Comunicação de componentes: Os componentes do sistema precisam se comunicar uns com os outros para garantir a operação conjunta. Essa comunicação pode ocorrer via APIs, protocolos como HTTP, TCP/IP ou outros sistemas de mensagens como RabbitMQ ou Kafka.
Tolerância a falhas: Arquiteturas distribuídas são projetadas para manter a operação mesmo em casos de falhas de componentes. Isso é alcançado por meio de redundância, replicação de dados e estratégias de recuperação automática.
Escalabilidade: A capacidade de um sistema distribuído de crescer em capacidade à medida que a carga aumenta. Isso pode ser feito horizontalmente (adicionando mais nós) ou verticalmente (aumentando os recursos de um único nó).
Heterogeneidade: Os sistemas distribuídos podem envolver uma grande diversidade de plataformas, linguagens de programação, sistemas operacionais e hardware, o que exige mecanismos de integração eficientes entre esses diferentes elementos.
Desafios das Arquiteturas Distribuídas:

Segurança: A segurança é um desafio em sistemas distribuídos devido à necessidade de proteger a comunicação entre os componentes e garantir que os dados sejam acessados apenas por usuários e sistemas autorizados.
Latência e desempenho: A comunicação entre nós distantes pode introduzir latência, o que pode afetar o desempenho geral do sistema. Minimizar a latência e garantir uma comunicação eficiente é um dos principais desafios.
Coordenação e sincronização: Em sistemas distribuídos, os nós podem operar de forma assíncrona, o que exige técnicas de sincronização e coordenação para garantir que as operações sejam realizadas de forma consistente e ordenada.
Complexidade operacional: A gestão de sistemas distribuídos é mais complexa do que sistemas monolíticos. Isso inclui o gerenciamento de múltiplos nós, monitoramento e manutenção, além de lidar com falhas e backups.
Escalabilidade e balanceamento de carga: Escalar um sistema distribuído de forma eficaz exige um balanceamento de carga eficiente para garantir que a carga seja distribuída uniformemente entre os nós. Isso pode ser um desafio quando a demanda aumenta ou quando a carga de trabalho muda.
Aplicações de Arquiteturas Distribuídas:

Amazon Web Services (AWS): A AWS oferece uma plataforma em nuvem altamente distribuída que permite a criação de sistemas escaláveis e resilientes, com diversos serviços baseados em arquiteturas distribuídas.
Netflix: O Netflix usa arquiteturas distribuídas para entregar conteúdo de vídeo em alta definição para milhões de usuários ao redor do mundo, lidando com problemas de latência, escalabilidade e alta disponibilidade.
Google: O Google implementa uma arquitetura distribuída em seus diversos serviços, incluindo a busca, Google Drive e Google Cloud, permitindo uma enorme escalabilidade e resiliência.
Uber: O Uber usa arquiteturas distribuídas para gerenciar a comunicação entre motoristas e passageiros, otimizar rotas e manter dados em tempo real de suas operações.
Spotify: O Spotify distribui seus dados e serviços através de uma arquitetura que lida com grande volume de dados de músicas e usuários em tempo real, garantindo alta disponibilidade e escalabilidade.
Tendências em Arquiteturas Distribuídas:

Arquiteturas serveless: Permite que os desenvolvedores construam e executem aplicativos sem a necessidade de gerenciar servidores, já que a infraestrutura é automaticamente gerenciada pelos provedores de nuvem. Essa tendência facilita a escalabilidade e reduz a complexidade operacional.
Edge Computing: Refere-se ao processamento de dados perto da origem dos dados, em vez de enviá-los para servidores centralizados. Isso é útil para reduzir a latência e aumentar a velocidade de resposta em sistemas distribuídos, especialmente em IoT e aplicações de tempo real.
Arquiteturas multi-cloud: Empresas estão adotando arquiteturas em que utilizam múltiplos provedores de nuvem (como AWS, Azure, Google Cloud) para evitar dependência de um único fornecedor e melhorar a resiliência e disponibilidade.
Arquitetura federada: Trata-se de sistemas distribuídos em que diferentes entidades ou organizações têm controle sobre seus próprios dados, mas podem compartilhar e colaborar de forma segura. Exemplos incluem sistemas de saúde onde hospitais diferentes compartilham dados médicos de forma federada, sem precisar centralizar os dados.

5.2. Arquitetura Orientada a Serviços (SOA)
Arquitetura Orientada a Serviços (SOA) é um estilo de software que organiza os sistemas em componentes modulares e autônomos, que realizam funções específicas. É uma abordagem que organiza e utiliza serviços como unidades independentes, onde cada serviço executa uma função específica e pode ser integrado com outros serviços. A evolução contínua é uma grande vantagem dessa arquitetura, pois ela permite que a arquitetura evolua de maneira incremental, possibilitando a integração de novos serviços conforme surgem novas necessidades e garantindo que os sistemas se mantenham ágeis e escaláveis. Esses serviços se comunicam por meio de protocolos de rede para realizar tarefas complexas. O grande diferencial da arquitetura orientada a serviços é que ela permite que os serviços se distribuam geograficamente, sem depender de uma infraestrutura centralizada.

No modelo de microserviços, por exemplo, como já discutido, você tem vários serviços independentes, enquanto na arquitetura monolítica, tudo está centralizado em um único corpo. Cada serviço pode ser modificado ou escalado sem impactar os outros.

A comunicação entre serviços é feita de forma eficiente por meio de um intermediador, que pode ser um broker de serviços. O intermediador gerencia a comunicação entre os serviços e facilita a integração, garantindo que cada serviço possa se comunicar com os outros de maneira eficiente e sem criar sobrecarga na rede. Isso é semelhante ao conceito de um correio que entrega mensagens entre as partes.

Quando a comunicação não é centralizada, pode ser mais eficiente. Imagine uma sala com várias pessoas falando ao mesmo tempo, sem uma regra de comunicação. Isso geraria muito ruído. No contexto dos sistemas, esse intermediador de comunicação facilita a troca de informações de maneira mais organizada.

Provedor de Serviços: Esse elemento centraliza a comunicação entre os serviços. Ele funciona como um catálogo, onde os serviços se registram para serem consumidos por outros componentes. Ao registrar um serviço, ele se torna acessível para outros componentes, que podem consultá-lo por meio do provedor e utilizá-lo conforme necessário.

Padronizar a comunicação entre os serviços. Por exemplo, você pode usar REST para serviços flexíveis e XML para serviços que lidam com transações complexas, como o envio de notas fiscais.

A evolução contínua é uma grande vantagem da SOA, pois você pode facilmente integrar outros serviços e adaptar a arquitetura conforme novas necessidades surgem.

A arquitetura orientada a serviços resolve várias questões de disponibilidade e resiliência, pois não depende de um único ponto central. Ela permite que novos serviços sejam facilmente adicionados ou removidos sem impactar a operação do sistema como um todo. No entanto, ela também apresenta desafios, como a gestão de comunicação entre muitos serviços e a sobrecarga de rede.

É um estilo de arquitetura de software que organiza e estrutura um sistema em torno de serviços, que são componentes modulares e autônomos que realizam funções especificas. Esses serviços se comunicam entre si através de protocolos de rede para realizar tarefas complexas e fornecer funcionalidades empresariais.

Serviços: unidade ou conjunto de funcionalidades de software independente, desenvolvido para concluir uma tarefa especifica, como recuperar determinadas informações ou executar uma operação. Ele contém as integrações de dados e o código necessários para executar uma função de negócio completa. Esses serviços podem ser acessados remotamente é possível interagir com eles e atualizá-los de maneira independente;

Tendências:

Desvantagens: No entanto, há desafios, como:
Gestão de muitos serviços: à medida que o número de serviços cresce, gerenciar e coordenar todos eles pode se tornar complexo.
Sobrecarga de rede: a comunicação entre os serviços pode gerar sobrecarga na rede, principalmente quando os serviços estão espalhados geograficamente.
Segurança: a comunicação entre diferentes serviços pode criar vulnerabilidades.
Padrões de comunicação: a definição de padrões (como REST, XML, JSON) pode ser um desafio, pois o tipo de comunicação precisa ser definido de forma precisa para garantir a integração correta.
Estrutura da SOA

Provedor de serviços: O provedor de serviços é o componente responsável pela implementação de um serviço específico, disponibilizando funcionalidades que podem ser acessadas por outros componentes do sistema ou por serviços externos. O provedor de serviços oferece a lógica de negócios e os recursos necessários para a execução de uma tarefa específica.
Broker ou registro de serviços (contratos): O broker, também chamado de registro de serviços, é um componente central que registra, armazena e facilita a localização dos serviços dentro da arquitetura SOA. Ele mantém contratos de serviço que descrevem as interfaces e os comportamentos dos serviços, permitindo que os solicitantes de serviços descubram e se conectem aos provedores de serviços.
Solicitante de serviços: O solicitante de serviços é o componente que consome os serviços fornecidos pelo provedor. Ele pode ser outro serviço ou uma aplicação que precisa da funcionalidade de um serviço específico. O solicitante de serviços faz chamadas a serviços registrados no broker e utiliza as funcionalidades oferecidas pelos provedores.
Vantagens da SOA:

Flexibilidade e time to Market: SOA oferece flexibilidade para adaptar e integrar novos serviços conforme as necessidades do negócio mudam. Além disso, permite acelerar o tempo de lançamento de novos produtos ou funcionalidades, já que os novos serviços podem ser rapidamente incorporados à arquitetura existente sem causar grandes alterações.
Reutilização de software: A SOA promove a reutilização de componentes de software. Serviços independentes podem ser reutilizados em diferentes aplicações, reduzindo o esforço de desenvolvimento e promovendo consistência entre as funcionalidades em diferentes sistemas.
Evolução: A evolução contínua é facilitada, pois a arquitetura permite adicionar, substituir ou melhorar os serviços sem impactar todo o sistema. Isso ajuda as organizações a se adaptarem mais rapidamente a mudanças nos requisitos ou na tecnologia.
Manutenção: Como a SOA organiza os sistemas em serviços independentes, a manutenção de cada serviço se torna mais fácil. Se um serviço precisar ser modificado ou atualizado, isso pode ser feito de maneira isolada, sem afetar outros serviços ou a arquitetura como um todo.
Escalabilidade: Os serviços independentes podem ser escalados de forma independente, o que proporciona maior flexibilidade para atender à demanda crescente de forma mais eficiente. A escalabilidade pode ser feita horizontalmente (adicionando mais instâncias de um serviço) ou verticalmente (aumentando a capacidade de um serviço).
Comunicação por API: A comunicação entre os serviços em uma arquitetura SOA é realizada através de APIs (interfaces de programação de aplicativos). Isso facilita a integração entre sistemas e torna possível a utilização de serviços de diferentes plataformas, tecnologias e linguagens de programação.
Resiliência: A resiliência de sistemas baseados em SOA pode ser aumentada, já que os serviços são isolados. Se um serviço falhar, outros serviços podem continuar a funcionar normalmente, o que contribui para a continuidade dos negócios.
Desvantagens da SOA:

Gestão dos Microsserviços: Gerenciar um grande número de microsserviços pode ser desafiador. Isso envolve monitoramento, versionamento, orquestração e controle de falhas de forma eficiente. Além disso, a comunicação entre microsserviços pode introduzir complexidade adicional.
Complexidades ACID: A SOA pode apresentar desafios para garantir transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade) em um ambiente distribuído, especialmente quando envolve várias instâncias de serviços que precisam ser coordenadas em uma transação.
Despafronização: À medida que diferentes equipes desenvolvem diferentes serviços, pode ocorrer uma falta de padronização na forma como os serviços são implementados e comunicam-se entre si. Isso pode resultar em inconsistências e dificuldades de manutenção.
Complexidade na implantação/evolução: A implantação de uma arquitetura SOA pode ser complexa, especialmente à medida que o número de serviços cresce. A evolução da arquitetura também pode ser desafiadora, já que mudanças em um serviço podem afetar vários outros, exigindo coordenação e planejamento cuidadosos.
Latência: A comunicação entre serviços em uma arquitetura distribuída pode introduzir latência, especialmente quando a quantidade de chamadas entre os serviços é grande ou quando os serviços estão localizados em diferentes datacenters.
Sobrecarga devido a comunicação: A comunicação entre serviços, especialmente em um sistema distribuído, pode resultar em sobrecarga, aumentando o tempo de resposta e exigindo mais recursos de rede. Isso pode impactar a performance e a eficiência do sistema.
Segurança: A segurança é mais complexa em sistemas distribuídos, já que cada serviço precisa ser protegido individualmente. Além disso, a comunicação entre os serviços deve ser segura, e os dados sensíveis precisam ser protegidos em trânsito.
Dependências de padrão: Embora a SOA permita a flexibilidade e a integração de diferentes tecnologias, ela também pode criar dependências de padrões específicos (como SOAP ou REST), dificultando a integração de serviços que não seguem esses padrões.
Gerenciamento: O gerenciamento de uma arquitetura SOA exige a coordenação de vários serviços independentes, o que pode ser complexo, especialmente em grandes sistemas. Isso inclui o gerenciamento de atualizações, versões, falhas e a monitoração contínua do desempenho de cada serviço.

5.3. Arquitetura Microserviços
sobre grandes grupos de funcionalidades e como os serviços distribuídos geograficamente continuam a atender a uma base de dados central. Agora, vamos falar sobre uma evolução desse modelo, que é a arquitetura orientada a microserviços.

Bom, quando falamos em microserviços, já podemos entender que essa é a última mudança. O microserviço normalmente refere-se a um contexto mais específico, buscando melhorar a eficiência e a importância do serviço. Vamos seguir o mesmo padrão de explicação que usamos anteriormente: conceitos, estruturas, vantagens e desvantagens, fazendo um comparativo entre microserviços e serviços.

No microserviço, temos a estrutura organizada como um conjunto de serviços pequenos e independentes, que se comunicam através de APIs bem definidas. Cada serviço é responsável por uma funcionalidade específica e pode ser desenvolvido, implementado e escalado de forma independente, sem afetar os outros serviços. A flexibilidade e a escalabilidade são pontos positivos aqui, já que você pode adicionar novos serviços ou modificá-los sem afetar o sistema como um todo.

Uma vantagem do microserviço é que, se um serviço falhar, apenas esse serviço será afetado. Se o banco de dados central cair, todo o sistema para, mas no modelo de microserviços, o impacto é local, ou seja, apenas o serviço com problemas será afetado, os outros continuam funcionando normalmente. Essa é uma grande vantagem em termos de resiliência.

Mas, claro, não é perfeito. O aumento de complexidade é uma desvantagem. Agora, você precisa gerenciar várias instâncias de microserviços e garantir que todos funcionem corretamente. A comunicação entre eles precisa ser bem estruturada e otimizada. Além disso, a utilização de protocolos leves, como REST, melhora a eficiência da comunicação, mas ainda assim há a necessidade de um bom gerenciamento para evitar problemas de sobrecarga de dados.

Comparando os microserviços com a arquitetura orientada a serviços, vemos que, no microserviço, você tem maior flexibilidade e desempenho, mas também enfrenta novos desafios, como a gestão de dados distribuídos e a complexidade na comunicação entre os serviços.

Em termos de vantagens, o microserviço oferece uma evolução, permitindo mais eficiência e flexibilidade. A manutenção e a evolução do sistema tornam-se mais fáceis, pois cada serviço pode ser modificado sem impactar outros, e a escalabilidade pode ser feita de forma mais eficiente. No entanto, o modelo de microserviços exige um controle maior sobre a infraestrutura e a gestão de serviços ao longo do tempo.

Em relação à complexidade, ao dividir a base de dados central em várias réplicas, você precisa garantir que os dados estejam consistentes entre os serviços. Isso pode ser desafiador, especialmente quando os dados são compartilhados entre diferentes serviços, como no exemplo de um serviço bancário que precisa consultar o saldo de um usuário.

Por fim, a gestão do microserviço envolve garantir que os serviços estejam balanceados adequadamente e que a comunicação entre eles seja eficiente. O aumento de instâncias para suportar a carga de trabalho é necessário, o que exige uma camada intermediária para balanceamento de carga.

, a arquitetura de microserviços é uma excelente opção para sistemas que precisam de flexibilidade, resiliência e escalabilidade, mas também traz desafios em termos de complexidade operacional.

Boas práticas incluem descentralizar a comunicação, preferir comunicação assíncrona quando possível e garantir a padronização das interfaces de serviço. Monitoramento e gerenciamento eficientes também são essenciais para manter o sistema funcionando sem problemas.

Estilo de arquitetura de software em que uma aplicação é estruturada como um conjunto de serviços pequenos e independentes, que se comunicam entre si através de APIs bem definidas. Cada microserviços é responsável por uma funcionalidade especifica do sistema e pode ser desenvolvido, implantando e escalado de forma independente dos outros;

API's application programming interface, interface que permite a comunicação entre microsserviços, serviços ou cliente externos.

5.4. Arquitetura Orientada a Eventos (Event-Driven Architecture - EDA)
Na arquitetura orientada a eventos, o sistema é projetado para reagir a eventos disparados por diferentes fontes de dados ou ações. Esses eventos podem ser gerados por sistemas externos, componentes internos ou usuários. A comunicação entre os sistemas é realizada de forma assíncrona, usando mensageria, ou seja, uma plataforma que garante a troca de mensagens entre produtores de eventos (quem gera o evento) e consumidores de eventos (quem reage ao evento). A mensageria é uma parte fundamental da EDA, pois ela permite a comunicação baseada em eventos. Para isso, pode-se usar padrões de publicação e inscrição, onde os produtores publicam eventos e os consumidores se inscrevem para recebê-los.

Ao invés de enviar dados completos de um componente para o outro, você envia apenas a mudança de estado, como um evento. Por exemplo, em um sistema de pagamentos, ao invés de enviar todos os dados de uma transação, você envia apenas informações essenciais, como o número do cliente, o valor e o tipo de pagamento. Isso ajuda a otimizar a comunicação, reduzindo a quantidade de dados trocados entre os componentes.

Um evento é uma notificação de algo significativo que aconteceu dentro do sistema, como uma mudança de estado, uma ação do usuário ou a ocorrência de uma condição específica. Por exemplo, em um sistema de entrega de pizzas, você poderia notificar os clientes quando o pedido foi enviado ou quando chegou ao local de distribuição, sem precisar enviar todos os detalhes da transação.

Pensa no conceito de "mensagem": uma mensagem comunica que algo importante aconteceu, como o pedido de pizza sendo enviado. No entanto, você não quer transmitir uma longa mensagem cheia de informações irrelevantes. O objetivo é otimizar a troca de informações, enviando apenas o necessário, para reduzir a latência e melhorar a eficiência.

Na arquitetura orientada a eventos, temos o conceito de "produtor" e "consumidor". O produtor gera o evento e o transmite, enquanto o consumidor se interessa por ele e o consome. Um exemplo é uma loja com 100 clientes. Em vez de enviar um catálogo de produtos para todos os clientes todos os dias, o produtor (loja) publica as informações em um ponto central, como um painel de promoções. Os consumidores, como os clientes interessados, acessam essa informação quando necessário, reduzindo a troca constante de dados.

Esse conceito de "publicar e assinar" permite uma comunicação mais eficiente, já que os consumidores só recebem as informações relevantes para eles, sem sobrecarregar o sistema com dados desnecessários. Em vez de enviar uma mensagem a cada vez, você só publica a mudança de estado nos canais de interesse.

Uma vantagem disso é o baixo acoplamento entre os componentes. Isso possibilita maior escalabilidade e desempenho, já que os produtores continuam a trabalhar sem precisar esperar pela reação de cada consumidor.

Entretanto, nem todos os domínios de negócio são adequados para esse tipo de arquitetura. Ela funciona bem em contextos com muitas consultas e poucas transações de dados, como em sistemas de monitoramento ou consultoria, onde as informações são mais estáticas. Já em sistemas que exigem transações complexas e troca de dados detalhados, a arquitetura orientada a eventos pode não ser a melhor opção.

Além disso, a consistência dos dados é um desafio. Em sistemas orientados a eventos, você deve garantir que a informação está atualizada sem sobrecarregar o sistema com transações desnecessárias. Para isso, o conceito de "event sourcing" pode ser útil, onde as mudanças de estado são registradas de forma incremental, sem a necessidade de armazenar todos os dados de cada transação.

Por fim, a segurança na comunicação e a confirmação da entrega dos eventos são práticas essenciais para garantir que o sistema funcione corretamente, especialmente em contextos críticos.

Estilo de arquitetura de software em que os componentes do sistema se comunicam e interagem entre si através da troca de eventos. Um evento é uma notificação de que algo significativo aconteceu dentro do sistema, como uma mudança de estado, uma ação do usuário ou a ocorrência de uma condição especifica;

É uma abordagem poderosa para sistemas distribuídos que precisam de alta escalabilidade e flexibilidade. Ela permite uma comunicação eficiente entre os componentes, desacoplando-os de forma que possam evoluir independentemente. Contudo, sua implementação traz desafios, como a complexidade, a gestão de consistência eventual e o rastreamento de eventos, que precisam ser cuidadosamente gerenciados para garantir o sucesso do sistema. Ao seguir boas práticas, é possível mitigar essas desvantagens e tirar proveito das vantagens que essa arquitetura oferece.

É necessário um sistema e mensageria, que utiliza algum padrão de comunicação como inscrição e publicação;

Vantagens da Arquitetura Orientada a Eventos:

Desacoplamento: Em uma arquitetura orientada a eventos, os componentes do sistema são desacoplados, ou seja, os produtores de eventos não precisam conhecer os consumidores e vice-versa. Isso permite que os sistemas evoluam independentemente, facilitando a manutenção e a extensão do sistema.
Desempenho: A comunicação assíncrona entre os componentes, típica dessa arquitetura, pode aumentar o desempenho do sistema, pois os consumidores podem processar eventos de maneira assíncrona, sem precisar aguardar uma resposta imediata. Isso permite que o sistema continue operando mesmo quando alguns componentes estão ocupados ou falhando temporariamente.
Escalabilidade: Como os produtores e consumidores são desacoplados e a comunicação é assíncrona, o sistema pode escalar de forma eficiente. É possível adicionar mais consumidores ou distribuí-los de forma dinâmica conforme a carga de trabalho aumenta, sem impactar a operação do produtor de eventos.
Comunicação Assíncrona: A comunicação entre os componentes é realizada de forma assíncrona, o que significa que os consumidores não precisam estar disponíveis imediatamente para processar os eventos. Isso permite um melhor aproveitamento dos recursos e reduz o tempo de espera, além de melhorar a capacidade de resposta do sistema como um todo.
Desvantagens da Arquitetura Orientada a Eventos:

Complexidade: A implementação de um sistema orientado a eventos pode ser complexa, pois exige uma infraestrutura robusta de mensageria e o gerenciamento adequado dos eventos. O fluxo de dados e a coordenação entre diferentes sistemas podem se tornar difíceis de gerenciar, especialmente em sistemas grandes e distribuídos.
Adequação funcional: Nem todos os tipos de aplicação ou problema se beneficiam de uma arquitetura orientada a eventos. Em alguns cenários, uma abordagem mais simples, como um sistema de requisição e resposta síncrona, pode ser mais adequada. Isso exige uma avaliação cuidadosa sobre quando usar ou não a arquitetura orientada a eventos.
Gerenciamento de estado/eventual consistency: A arquitetura orientada a eventos pode levar a consistência eventual em vez de consistência imediata, o que significa que os dados podem não estar sincronizados imediatamente em todos os sistemas consumidores. Isso pode gerar desafios no gerenciamento de estado, especialmente quando a consistência rigorosa é necessária.
Depuração e Rastreamento: Em sistemas orientados a eventos, o rastreamento e a depuração podem ser desafiadores. Como a comunicação é assíncrona e distribuída, pode ser difícil acompanhar o caminho de um evento em todos os componentes que ele atravessa, tornando a análise de falhas ou problemas mais complexa.
Boas Práticas na Arquitetura Orientada a Eventos:

Definição clara dos eventos: É fundamental que os eventos sejam claramente definidos, com informações precisas sobre o que cada evento representa e o que ele contém. Isso facilita a integração e a compreensão do sistema, além de garantir que os consumidores saibam como reagir corretamente a cada evento.
Modelos claro de gerenciamento de eventos: Ter um modelo bem definido de como os eventos serão gerenciados no sistema é crucial. Isso inclui o uso de brokers de mensagens, filas de eventos e tópicos, além de estratégias para lidar com falhas de entrega, processamento de eventos duplicados, e reprocessamento de eventos, quando necessário.
Desacoplamento entre produtores e consumidores: Um dos maiores benefícios da EDA é o desacoplamento entre os produtores e consumidores de eventos. Isso permite que novos consumidores sejam adicionados ou removidos sem afetar o produtor de eventos. Assim, é importante manter esse desacoplamento ao projetar e implementar a arquitetura.
Confirmação de entrega de eventos: Em sistemas críticos, garantir que os eventos foram entregues corretamente e processados pelos consumidores é essencial. Implementar confirmações de entrega e estratégias de reentrega em caso de falhas é uma boa prática para garantir a confiabilidade do sistema.
Segurança na Comunicação: Como a comunicação entre os componentes é realizada de forma assíncrona e muitas vezes em redes distribuídas, é fundamental implementar segurança na comunicação. Isso inclui criptografia, autenticação e autorização para garantir que apenas componentes autorizados possam publicar ou consumir eventos.
Exercícios de Fixação
Primeira Aula Interativa - Trabalhando Estilos Arquiteturais
Capítulo 7: Conduzindo o Processo Decisório
Neste capítulo, falaremos de atividades essenciais que o profissional de arquitetura de software precisa conhe cer e aplicar para desempenhar suas atividades com excelência, atividades tais como: como conduzir o pro cesso decisório, saber utilizar frameworks arquiteturais e gerenciamento de riscos. Gerindo o processo de Arquitetura Como líder do processo decisório, o arquiteto precisa conhecer práticas e ferramentas que vão lhe apoiar a guiar este processo. É importante frisar que o arquiteto não deve decidir de forma individual, em vários momentos este profissional deve guiar o processo de análise de toma de decisões que podem resultar em decisões dife rentes da que o arquiteto tomaria inicialmente. “O arquiteto não é dono da verdade, mas quem guia o processo de descoberta da mesma”. Vamos falar de algumas ferramentas:

7.1. Matriz de Decisão
Uma matriz de decisão é uma ferramenta analítica usada para avaliar e comparar diversas opções ou soluções com base em múltiplos critérios ponderados. Cada opção é avaliada contra esses critérios, e as pontuações resultantes são somadas para identificar a opção mais adequada. Um arquiteto de software pode utilizar a ma triz de decisão para selecionar tecnologias, frameworks, ou arquiteturas apropriadas para um projeto específico.

Ao definir critérios como desempenho, escalabilidade, custo, facilidade de integração e manutenção, o arqui teto pode atribuir pesos a cada critério de acordo com sua importância relativa. As diferentes opções são avaliadas e pontuadas, permitindo ao arquiteto tomar uma decisão informada e justificada sobre a melhor so lução para atender aos requisitos do projeto e aos objetivos estratégicos da organização.

7.2. Análise de Premissas e Restrições
A análise de premissas e restrições é um processo de identificação e avaliação de suposições (premissas) e limitações (restrições) que influenciam o desenvolvimento de um projeto. Premissas são condições consideradas verdadeiras para planejamento, como a disponibilidade de determinada tecnologia, enquanto restrições são limitações que o projeto deve respeitar, como orçamento, prazo ou conformidade com regulamentações. Um arquiteto de software utiliza essa análise para assegurar que a arquitetura proposta esteja alinhada com as condições reais do projeto e as expectativas das partes interessadas. Ao identificar claramente as premissas e restrições, o arquiteto pode antecipar desafios, mitigar riscos e tomar decisões mais precisas, garantindo que a solução seja viável, eficiente e esteja dentro dos limites estabelecidos

7.3. Análise de Custo da Solução
A análise de custo e solução é um processo que envolve a avaliação detalhada dos custos associados a diferentes opções de solução para um projeto, considerando tanto os custos iniciais quanto os custos recorrentes, como manutenção e operação. O objetivo é comparar essas opções para determinar a mais econômica e eficaz em termos de retorno sobre investimento (ROI) e alinhamento com os objetivos de negócio. Um arquiteto de software utiliza essa análise para tomar decisões informadas sobre quais tecnologias, frameworks e arquiteturas adotar, assegurando que a solução escolhida não só atenda aos requisitos técnicos, mas também seja financeiramente viável. Isso ajuda a evitar custos excessivos, maximizar os recursos disponíveis e garantir que a solução possa ser sustentada a longo prazo dentro do orçamento da organização

Capítulo 8: Gerenciando Riscos
8.1. Conceitos de Riscos
É a possibilidade de um evento ou condição que, se ocorrer, pode afetar negativamente o projeto ou o sistema. Ex. Alteração do escopo, não renovação de uma licença, falta de recursos;

Oportunidade é a possibilidade de um evento ou condição que, se ocorrer, pode afetar positivamente o projeto ou o sistema;

Tipos de riscos:

Riscos técnicos. Ex. atualização de uma biblioteca;
Riscos de projeto: Ex. mudança de requisitos;
Riscos organizacionais. Ex. mudança na estratégia;
Gerenciar riscos:

Identificação de riscos;
Avaliação de análise de riscos;
Mitigação e resposta e riscos;
Monitoramento e revisão de riscos;
Prever o desenho de uma arquitetura prover, uma estrutura para o sistema que garanta a entrega dos requisitos não funcionais, se eu tenho um risco que pode impactar de forma que o meu requisito não funcional não seja atendido, eu sou o guardião tenho que atual de forma proativa para evitar isso.

8.2. Como identificar Riscos
Brainstorming e análise de causas;
Entrevistas e questionários com stakeholders;
Análise de documentação e requisitos;
Ferramenta de identificação SWOT
Garantir transações ACID;
Ferramenta de identificação:
Diagrama de fluxo e casos de uso;
Threat modeling;
8.3. Como classificar Riscos
Classificando riscos: Fatores a se considerar

Probabilidade de ocorrência;
Impacto ou consequência;
Urgência e necessidade de resposta;
Matriz de risco

ROAM

5W2H (Plano de ação)

8.4. Prática Riscos
Fluxo de Ishikawa (Diagrama de peixe)

Capítulo 9: Frameworks Arquiteturais
Frameworks arquiteturais são estruturas de referência que oferecem uma base organizada para o desenvolvimento e a implementação de sistemas de software complexos. Eles proporcionam um conjunto de ferramentas, padrões e práticas que facilitam a criação de arquiteturas robustas, escaláveis e eficientes. Entre os exemplos mais conhecidos estão o TOGAF (The Open Group Architecture Framework), que foca na metodologia de desenvolvimento e governança de arquiteturas empresariais, e o Zachman Framework, que fornece uma visão multidimensional da arquitetura organizacional, abordando diferentes perspectivas e preocupações dos stakeholders. Esses frameworks ajudam a garantir que os sistemas atendam às necessidades do negócio, sejam consistentes e alinhados com os objetivos estratégicos da organização.

9.1. ZACHMAN
O Zachman Framework é uma estrutura conceitual desenvolvida por John Zachman na década de 1980, oferecem uma abordagem sistemática para compreender, documentar e gerenciar a arquitetura de uma organização. Esta estrutura é composta por seis dimensões fundamentais: “O quê”, “Como”, “Onde”, “Quem”, “Quando” e “Por quê”, cada uma representando uma perspectiva única sobre a organização. Em sua forma atual, o framework de Zachman consiste em uma matriz de 6 colunas por 6 linhas. As colunas correspondem às clássicas perguntas 5W1H (What/ Who/Where/When/Why/How) aplicadas à organização. As colunas, portanto, referem-se aos diferentes aspectos sobre a organização que precisam ser conhecidos:

What: sobre o que a organização precisa de infor mação? De que ela trata? Normalmente, essa coluna representa dados mantidos pela organização;
How: Como a organização funciona? Como ela processa seus dados? Esta coluna normalmente refere-se a processos e funções da organização.
Where: Onde as coisas acontecem? Aqui vão informações geográficas, de localização etc.
Who: Quem está na organização e quem faz o quê? Informações sobre pessoas e estruturas organizacionais estão aqui.
When: Quando as coisas acontecem? Questões relativas ao tempo aparecem aqui.
Why: Por que as coisas acontecem? Aqui vão as in formações relativas às motivações da organização, incluindo seus planos estratégicos de negócio. As linhas da matriz referem-se aos diferentes pontos de vista e níveis de detalhe relativos à informação que descreve a organização: A primeira linha contém o escopo e o contexto, e representa o ponto de vista do estrategista como teorizador sobre a organização. Normalmente, contém in formação relevante para o planejamento estratégico de alto nível e, é claro, o próprio conteúdo da Estratégia da organização. A segunda linha contém os conceitos de negócio, representando a visão da liderança executiva (vistos como proprietários dos processos de negócio e informações relacionadas). Contém tipicamente descrição detalhada da organização no nível de processos de negócio. A terceira linha contém informações sobre os sistemas de informação (nível lógico), com a visão dos arquitetos de sistemas (designers). A quarta linha contém informações sobre a infraestrutura tecnológica (nível físico) da organização, sendo o ponto de vista dos engenheiros enquanto construtores. A quinta linha refere-se à descrição dos componentes que a organização utiliza para operar, sendo a visão dos técnicos-implementadores. A sexta e última linha representa as operações propriamente ditas da organização, instanciadas pelos seus colaboradores participantes. O framework Zachman é uma excelente referência literária sobre o assunto, apesar de ter sua aplicabilidade limitada devido a não ser tão prático e dinâmico, assim como o fato de ser um framework mais geral e que não aborda de forma específica o contexto de arquitetura de software

9.2. TOGAF
O The Open Group Architecture Framework (TOGAF) é uma estrutura de arquitetura corporativa amplamente adotada, desenvolvida pelo The Open Group, que fornece uma abordagem abrangente e estruturada para planejar, projetar, implementar e gerenciar a arquitetura de uma organização. Esta estrutura é baseada em um conjunto de melhores práticas e padrões de arquitetura, destinados a promover a consistência, a eficiência e o alinhamento estratégico em toda a empresa. O TOGAF é amplamente reconhecido por sua flexibilidade e adaptabilidade, podendo ser personalizado e ajustado de acordo com as necessidades específicas de cada organização. Ele fornece uma estrutura sólida para a gestão e evolução da arquitetura empresarial, ajudando as empresas a alinhar seus sistemas de informação com seus objetivos estratégicos, reduzir a complexidade e promover a inovação. O TOGAF divide a arquitetura corporativa em quatro pilares básicos:

Business Architecture (Arquitetura de Negócio): define a estratégia de negócio, governança, organização e os processos chaves do negócio.
Data Archtecture (Arquitetura de Dados): descreve a estrutura física e lógica dos ativos de dados da organização, bem como os recursos a serem gerenciados.
Application Architecture (Arquitetura de Aplicação): provisiona um blueprint para que as aplicações individuais sejam publicadas, as interações e o relacionamento delas com os principais processos de negócio da organização.
Technology Archiitecture (Arquitetura Técnica): descreve todo o hardware, software e infraestrutu ra de TI necessários para desenvolver e implantar aplicativos de negócios
Fase Preliminar: é aquela na qual “colocamos em pé” o esforço de arquitetura, estabelecendo a equipe de arquitetura e definindo o método e metamodelo customizados a serem usados em nosso esforço de arquitetura. É aqui também que escolhemos ferramentas de repositório, definimos os processos de Governança da Arquitetura e obtemos o Patrocínio necessário para forço de arquitetura.
Fase A - Visão Arquitetural: Trata-se de estabelecer uma visão de como deve ser nossa arquitetura futura para atender às metas estratégicas de negócio, que são a principal entrada para esta fase. O resultado desta fase é um Documento de Visão da Arquitetura, que documenta onde a organização quer chegar com sua arquitetura para viabilizar o cumprimento das metas estratégicas, e um Plano de Projeto para a execução desta “rodada” do ADM s
Fase B - Arquitetura de Negócio: Desenvolver e documentar a Arquitetura de Negócio desejada (alvo), que irá descrever o que a organização necessita para operacionalizar os objetivos de negócio e responder aos direcionamentos definidos na Visão Arquitetural. O resultado da fase é o detalhamento das necessidades em termos de processos de negócio para atender às metas estratégicas, bem como um gap analysis que nos diz qual é a distância entre nossa situação atual (AS-IS) e a arquitetura em que queremos chegar (TO-BE).
Fase C - Arquiteturas de Sistemas de Informação: Nesta fase, identificamos os sistemas e dados necessários para atender à situação futura de processos de negócio desenhada na fase anterior, bem como nossa situação atual e a distância a ser percorrida (gap analysis).
Fase D - Arquitetura de Tecnologia: Esta fase se ocupa de documentar as necessidades futuras em termos de infraestrutura tecnológica para atender às necessidades de sistemas e dados identificados na fase anterior. Mais uma vez, identificamos também nossa situação atual e a distância a ser percorrida.
Fase E - Oportunidades e Soluções: Nesta fase será gerado a versão inicial completa do Roadmap de Ar quitetura, baseado nos gaps identificados nas fases B, C e D. Identificaremos também projetos e ativida des que deverão ser realizados para atingir os obje tivos definidos no Roadmap. O resultado é um por tfólio de projetos para atingir a arquitetura desejada.
Fase F - Migration Planning: Aborda o planejamento detalhado da migração, ou seja, como passar do estado atual para a Arquitetura Alvo, certificando que o valor do negócio e o custo dos pacotes de trabalho e arquiteturas de transição são entendidos pelos stakeholders.
Fase G - Governança de Implementação: Nesta etapa o principal é a realização de revisões de conformidade com o objetivo de garantir que as ativida des definidas no portfólio estão sendo executadas de acordo com a arquitetura proposta.
Fase H - Gestão de Mudanças na Arquitetura: Trata-se de acompanhar no dia a dia a continuidade da relevância da arquitetura implantada na Fase G às necessidades estratégicas da organização. Mudanças no Ambiente de Negócios e na Estratégia exi girão mudanças na arquitetura, e o processo usado nesta fase deve ser capaz de separar pequenas de grandes mudanças. As grandes mudanças, tipicamente, exigirão a reentrada no ciclo do ADM, ou seja, o estabelecimento de um novo projeto, a ser iniciado novamente na Fase A.
Gestão dos Requisitos: Esta atividade encontra-se literalmente no “centro” do ADM, significando que cada uma das demais fases do ADM ao mesmo tempo gera novos requisitos de arquitetura e utiliza como entrada os requisitos de arquitetura previa mente identificados.
Entre os atrativos de utilização do TOGAF podemos citar sua flexibilidade, visto que as fases não devem ser seguidas como uma receita fixa, sendo assim cada organização pode adotar um processo adaptado conforme suas necessidades. Sendo este framework mais usual tanto pela sua flexibilidade, quanto pelo fato de ser um framework derivado de open groups - o que facilita sua utilização e proporciona uma maior rede de apoio durante o processo de uso.

Capítulo 10: Engenharia e Arquitetura de Software
10.1. Ciclo de Vida de Software
Vamos dar sequência à nossa disciplina de Fundamentos de Arquitetura de Software. Estamos iniciando o capítulo 10, que fala sobre a relação forte entre Engenharia e Arquitetura de Software. Vamos abordar especificamente o ciclo de vida de software, que é extremamente importante.

Só para contextualizar, qual é a importância deste capítulo? Quando falamos sobre Engenharia e Arquitetura de Software, vocês vão perceber que esses dois profissionais, em empresas menores ou em equipes pequenas, podem desempenhar funções sobrepostas. As atividades dessas duas áreas estão completamente relacionadas. Enquanto a Engenharia foca no processo, a Arquitetura se volta mais ao produto. Se você tem um bom processo, a probabilidade de entregar um bom produto é alta. Se estou desenvolvendo um produto, preciso de um processo adequado para construí-lo.

O conceito de ciclo de vida é importante para entender as fases que envolvem a criação de um sistema, desde a concepção da ideia até a entrega do software. Quando você consulta a literatura, verá que a definição do ciclo de vida pode variar. Alguns falam em até sete fases, mas na prática, podemos dividi-las da seguinte forma: começa-se com a definição dos requisitos, passa-se para a modelagem e design, depois vem a fase de desenvolvimento, seguida pela de testes e validação, até finalmente a entrega. O ciclo de vida inclui diversas etapas, como: levantamento de requisitos, modelagem, design, desenvolvimento, testes e entrega.

Existem diferentes modelos de ciclo de vida. Alguns modelos entregam o produto completo de uma vez, enquanto outros fazem entregas incrementais ou parciais ao longo do tempo. O modelo ágil, por exemplo, envolve entregas incrementais e interativas, onde a cada ciclo o cliente valida a entrega, apontando melhorias e novas necessidades. Essa abordagem permite uma flexibilidade maior no processo de desenvolvimento e ajustes conforme o feedback do cliente.

No modelo ágil, o arquiteto de software tem uma atuação diferente em comparação com modelos mais tradicionais, como o Waterfall. Em projetos Waterfall, o arquiteto atua de forma mais intencional, com decisões definidas no início, enquanto no modelo ágil, a arquitetura vai emergindo conforme o desenvolvimento avança. Isso exige que o arquiteto seja capaz de lidar com mudanças e adaptações durante o processo, sem comprometer a qualidade ou integridade do sistema.

O arquiteto, portanto, em um ambiente ágil, precisa ser mais flexível, trabalhando em colaboração com a equipe ao longo do tempo, em vez de apenas definir tudo no início do projeto. O modelo ágil promove uma arquitetura emergente, onde as decisões arquiteturais podem ser tomadas à medida que o sistema é desenvolvido, adaptando-se conforme as necessidades do cliente e a evolução do produto.

Para entender essa mudança, é importante observar como a documentação também muda entre os modelos. Em modelos mais tradicionais, a documentação é mais rígida e detalhada, definindo claramente todos os aspectos antes de iniciar o desenvolvimento. Já em modelos ágeis, a documentação é mais flexível, com entregas graduais e decisões que podem ser feitas ao longo do caminho, baseadas no feedback contínuo do cliente.

Portanto, a principal diferença entre o trabalho do arquiteto nos dois modelos é a abordagem. No modelo tradicional, o arquiteto faz um planejamento mais intenso no início, enquanto no modelo ágil, ele assume um papel mais dinâmico e contínuo, guiando as decisões da equipe ao longo do projeto, com entregas e ajustes frequentes.

São fases que um sistema passa desde a sua concepção até o seu desligamento;

Modelo Cascata

Comunicação: Iniciação do projeto, levantmento de requisitos
Planejmento: Estimativas, cronogramas e monitoração;
Modelagem: Análise e projeto;
Construção: Codificação e teste;
Implantação: Entrega, manutenção e feedback;
Modelo interativo:

Modelo incremental:

Modelo de ciclo de vida ágil:

10.2. Arquiteturas Monolíticas, Deploy Único e Desenvolvimento Cascata
Vamos dar sequência à nossa disciplina "Fundamentos de Arquitetura de Software". Hoje, vamos falar sobre um tema que tem uma relação muito forte com Engenharia e Arquitetura de Software, abordando um conceito bastante típico. Vamos discutir a arquitetura monolítica, que é um conceito tradicional, juntamente com o desenvolvimento em cascata e o conceito de entrega única.

Vamos explorar um pouco sobre essas combinações e ver como elas se relacionam. O conceito de arquitetura monolítica está diretamente ligado à ideia de uma única entrega ao final do projeto. Esse modelo de arquitetura se refere a um único processo de implantação ou implementação, o que significa que o sistema é entregue de uma vez, no final do ciclo de desenvolvimento.

No modelo em cascata, temos um processo linear e sequencial: começa com levantamento de requisitos, passa por uma etapa de projeto, segue para modelagem do sistema, depois para o desenvolvimento e, por fim, para a implantação. A ideia é seguir essa sequência sem voltar atrás, o que é uma característica do modelo em cascata.

Um ponto importante aqui é que, no modelo monolítico, todo o sistema é projetado de uma vez, com o objetivo de ser entregue como um único pacote. Isso é muito comum em projetos com requisitos claros e previsíveis, onde você sabe exatamente o que vai entregar desde o início. Esse modelo é útil, por exemplo, em sistemas críticos de alta segurança, onde é importante garantir o controle total sobre todo o processo de desenvolvimento e entrega.

Uma das vantagens desse modelo é a previsibilidade: como tudo é planejado e projetado com antecedência, você sabe exatamente o que está sendo entregue. Isso é especialmente útil em contextos onde mudanças ao longo do desenvolvimento não são bem-vindas. No entanto, essa abordagem pode não ser ideal para todos os tipos de projeto. Por exemplo, se você está desenvolvendo um produto novo e precisa incorporar novas funcionalidades ao longo do tempo, a arquitetura monolítica pode não ser a melhor opção.

Outro ponto a ser considerado é o tempo. Como você está entregando tudo de uma vez, o tempo de desenvolvimento tende a ser maior. Além disso, se houver falhas ou a necessidade de alterações, corrigir esses problemas pode ser mais difícil e caro, já que tudo está integrado em um único pacote.

Em resumo, a combinação de desenvolvimento em cascata e arquitetura monolítica pode ser útil em contextos onde a previsibilidade e o controle centralizado são necessários, como em sistemas críticos. No entanto, se você precisar de flexibilidade ou entregar incrementos ao longo do tempo, esse modelo pode não ser o mais adequado.

Por fim, é importante entender que esses conceitos não são mutuamente exclusivos. Nem todo desenvolvimento em cascata exige uma arquitetura monolítica, e nem toda arquitetura monolítica precisa ser entregue de uma vez. A escolha entre esses modelos depende do contexto e dos requisitos específicos do projeto.

10.3. Arquiteturas Evolucionárias, Deploy e Desenvolvimento Incremental
Vamos dar sequência ao nosso capítulo 10, onde reforçamos o vínculo muito forte entre Engenharia de Software e Arquitetura de Software. No módulo 10.3, vamos falar sobre uma combinação mais dinâmica que envolve a utilização de arquiteturas evolucionárias com deployments incrementais e o desenvolvimento incremental de software.

Vamos abordar cada um desses conceitos e entender o vínculo entre eles, além das vantagens de sua combinação. Começando pelo desenvolvimento incremental: nesse modelo, o desenvolvimento ocorre em pequenos ciclos, como se em cada ciclo eu entregasse uma parte do sistema. Vamos imaginar que o sistema é composto por quatro partes. No primeiro ciclo, desenvolvo, modelo, testo e entrego a parte A. No segundo ciclo, repito o processo, mas agora para a parte B, e assim por diante até o final do projeto. A cada ciclo, o sistema vai sendo entregue incrementando partes do todo.

O desenvolvimento incremental tem essa característica: ele divide o grande ciclo do desenvolvimento em ciclos menores, que se repetem e evoluem. Agora, se pensarmos em arquitetura, o conceito de arquitetura evolucionária se aplica diretamente aqui. Cada módulo do sistema pode ser desenvolvido separadamente, com baixo acoplamento e alta coesão, permitindo alterações locais sem impactar o sistema como um todo. Isso facilita a evolução do sistema de forma adaptativa e escalável.

Quando falamos em arquitetura evolucionária e deploy incremental, podemos ver que eles se complementam. O modelo de desenvolvimento incremental, com sua abordagem de pequenas entregas ao longo do tempo, tem tudo a ver com o deploy incremental, pois permite a entrega de partes do sistema de forma contínua. Isso maximiza os resultados, tanto no produto quanto no processo de desenvolvimento.

Além disso, o desenvolvimento incremental reduz os riscos, pois permite a adaptação constante às mudanças de requisitos. A cobertura de testes é bem eficaz, pois a integração é realizada ao longo do processo. A automação de testes também ajuda, garantindo maior agilidade e menos erros. O tempo de deploy é reduzido, já que cada parte do sistema é entregue gradualmente. Caso algo não funcione bem, é possível voltar para uma versão anterior sem grandes impactos no restante do sistema, oferecendo um feedback contínuo ao cliente.

No entanto, como toda abordagem, o desenvolvimento incremental tem desafios. O gerenciamento de versões pode ser mais complexo, já que é preciso controlar várias versões do sistema. Além disso, a integração contínua exige testes constantes, o que demanda automação para ser eficaz. Embora seja um processo trabalhoso, a automação ajuda a agilizar as entregas.

Esse modelo é altamente eficaz quando se busca flexibilidade e adaptação. Porém, é importante avaliar o contexto do projeto. Nem todo sistema precisa de tanta flexibilidade. Em projetos mais simples, o custo de implementar uma infraestrutura de integração contínua pode não ser justificável.

Em resumo, esses três conceitos — desenvolvimento incremental, deploy incremental e arquitetura evolucionária — são fortemente vinculados e funcionam muito bem juntos. Quando combinados, eles oferecem flexibilidade, adaptabilidade e um processo de desenvolvimento que garante a entrega de valor contínuo para o cliente, além de um alto nível de qualidade no produto final.

Portanto, essa combinação é extremamente eficaz, mas é preciso avaliar o contexto de cada projeto para entender se esse modelo é o mais adequado. Quando bem implementado, garante a entrega contínua de valor ao cliente, melhorando as chances de sucesso do produto.

Por fim, é importante reforçar a importância da colaboração entre os profissionais de Engenharia e Arquitetura de Software para aplicar essas estratégias de maneira eficaz.

É isso, pessoal! Vamos concluir este assunto destacando a importância de entender como esses conceitos se interrelacionam e o impacto positivo que têm no desenvolvimento de software.

10.4. Engenharia e Arquiteturas Software Considerações
Vamos dar sequência à nossa disciplina de Fundamentos de Arquitetura de Software, finalizando o capítulo 10 sobre Engenharia e Arquitetura de Software. Neste capítulo, vamos abordar a importância da atuação conjunta desses dois profissionais.

Passamos por alguns conceitos importantes, como os modelos de colaboração, o ciclo de vida do software e suas diferentes abordagens. Temos os modelos tradicionais, com uma sequência de etapas, onde tudo é entregue ao final do processo. Por outro lado, existem os modelos incrementais, onde as entregas são feitas de forma gradual até que o sistema esteja completo. Podemos relacionar esses modelos com as arquiteturas de software: se utilizarmos o modelo Cascata, fica mais fácil associá-lo a uma arquitetura monolítica. Já um modelo incremental se adapta melhor a uma arquitetura evolucionária, que é mais dinâmica e flexível.

Não se trata de uma relação obrigatória, mas, historicamente, as arquiteturas monolíticas surgiram com o modelo Cascata. Com a evolução do desenvolvimento de software e a necessidade de entregas mais ágeis, surgiram as arquiteturas evolucionárias, que são mais adequadas a processos incrementais.

Ao concluir, destacamos a importância da colaboração entre os profissionais de Arquitetura e Engenharia de Software. Arquitetura de software foca no design do produto, enquanto Engenharia de Software se ocupa da construção do sistema. Quando esses profissionais trabalham juntos, o processo de desenvolvimento se torna mais eficiente e o produto final é mais robusto, escalável e resiliente.

Agora, falando sobre os principais desafios enfrentados: às vezes, a empresa tem uma estrutura tradicional, mas surge a necessidade de desenvolver um produto que seria melhor com uma arquitetura revolucionária. Isso gera um conflito, pois a estrutura atual não está preparada para esse tipo de arquitetura. Esse tipo de situação exige uma comunicação eficaz entre as equipes de engenharia e arquitetura, pois a colaboração entre elas é fundamental para o sucesso do projeto.

Em equipes menores, pode ocorrer um acúmulo de funções, onde uma pessoa exerce tanto o papel de arquiteto quanto de engenheiro. Essa "dobradinha" deve ser bem-feita, pois quando a colaboração entre arquitetura e engenharia é saudável, o processo tende a ser mais eficaz, resultando em produtos mais fáceis de manter, escalar e evoluir ao longo do tempo.

A colaboração entre esses profissionais deve ser bem estruturada, principalmente quando falamos de requisitos não funcionais, como escalabilidade e resiliência, que são impactados diretamente pela engenharia e arquitetura. Arquitetos de software precisam fornecer as diretrizes para esses requisitos, garantindo que a arquitetura seja adequada para o longo prazo.

Ao longo do tempo, as formas de colaboração entre os profissionais mudaram. Antigamente, o arquiteto participava do projeto desde o início, definindo a arquitetura. Hoje, os engenheiros muitas vezes trabalham juntos com o arquiteto desde o começo do projeto, discutindo a melhor forma de implementar a arquitetura, levando em conta as necessidades do time e as ferramentas disponíveis.

Ferramentas de integração contínua, automação de testes e provisionamento de infraestrutura como código são essenciais para que a equipe consiga implementar uma arquitetura incremental de forma eficiente. Ferramentas modernas, como o DevOps, desempenham um papel importante nesse contexto, proporcionando uma infraestrutura ágil e adaptável.

Em resumo, a colaboração eficaz entre os profissionais de Arquitetura e Engenharia de Software é essencial para criar ambientes de desenvolvimento que produzam produtos de alta qualidade, flexíveis e adaptáveis às mudanças.

Com isso, finalizamos este capítulo. No próximo, vamos falar sobre como entender as necessidades de negócio e como isso se relaciona com a arquitetura e engenharia de software.

Capítulo 11: DEVOPS
11.1. Princípios DevOps
Agora estamos iniciando o nosso capítulo sobre DevOps, dentro da disciplina de Fundamentos de Arquitetura de Software. Vamos falar sobre os princípios fundamentais desse conceito. Vamos entender os princípios que norteiam o DevOps e abordar tópicos como os benefícios, pilares, conceitos importantes, além dos desafios e barreiras que podem surgir.

Antes de falarmos sobre os princípios, é essencial entender o que é o DevOps, qual o seu conceito. Antigamente, o processo de desenvolvimento de software funcionava de maneira bem separada: uma empresa desenvolvia o software, entregava e ia embora, enquanto outra ficava responsável pela manutenção. A equipe de desenvolvimento entregava o sistema pronto, mas depois de um tempo, surgiam problemas como baixo desempenho ou aumento do consumo de memória, por exemplo. Nesse cenário, surgiam conflitos entre as equipes de desenvolvimento e operação, pois cada uma culpava a outra pela falha.

O que precisamos entender é que as equipes de desenvolvimento e operações devem trabalhar juntas desde o início do processo, garantindo que o desenvolvimento e a operação do sistema estejam alinhados. Essa colaboração entre as equipes é um princípio fundamental do DevOps, e isso ajuda a criar um processo de desenvolvimento mais eficiente e eficaz.

O conceito de responsabilidade compartilhada é central aqui. Por exemplo, a equipe de desenvolvimento precisa se preocupar com a operação do sistema, e a equipe de qualidade deve estar envolvida desde o início, definindo padrões de código e evitando problemas como variáveis globais. Em vez de seguir um processo sequencial, como no modelo Cascata, a ideia é automatizar tudo o que for possível para evitar erros humanos, como a automação de testes, que facilita a integração contínua.

A integração contínua permite que as equipes integrem o código diariamente, o que facilita a identificação de problemas rapidamente. Dessa forma, conseguimos entregar versões atualizadas do sistema constantemente, garantindo que o cliente receba entregas de valor de forma contínua, sem ficar meses esperando pela próxima versão.

Agora, falando dos benefícios do DevOps: ele melhora a qualidade e a confiabilidade das entregas, aumenta a colaboração entre as equipes e viabiliza o fluxo contínuo de entrega de valor. Com a integração contínua, o sistema está sempre evoluindo, e o cliente não fica sem atualizações por longos períodos.

DevOps, na verdade, é uma mudança cultural que envolve automatização, processos enxutos e uma melhoria contínua. Não é apenas uma ferramenta ou técnica; é uma filosofia que deve ser aplicada na cultura da empresa. Quando aplicada corretamente, o DevOps transforma a forma como as equipes trabalham, garantindo entregas mais rápidas e eficientes.

Porém, como qualquer mudança cultural, a adoção do DevOps pode enfrentar resistência, principalmente porque envolve alterar processos profundamente enraizados na organização. Isso pode ser difícil, principalmente em empresas com muitas equipes e processos estabelecidos. A visibilidade do fluxo de trabalho e a integração entre as equipes são essenciais para que os benefícios sejam visíveis no contexto global da empresa. Não adianta ter um processo que é bom em uma parte, mas falha nas outras. A ideia é que todos os processos estejam alinhados e otimizados para gerar um benefício geral.

Outro ponto importante é que, por envolver muita automação, o DevOps exige profissionais com conhecimentos técnicos atualizados, já que as tecnologias usadas estão sempre em evolução. Isso exige que as equipes tenham um perfil de atualização contínua.

Concluindo, o DevOps não é apenas uma técnica ou uma ferramenta, mas sim uma mudança cultural significativa que envolve toda a organização. A colaboração contínua entre desenvolvimento e operações é fundamental, e a entrega contínua de valor é o objetivo.

Devops é uma abordagem que integra práticas de desenvolvimento de software (Dev) e operações (Ops) para melhorar a colaboração, aumentar a eficiência e acelerar a entrega de software;

Princípio fundamentais:

Colaboração;
Automação;
Entrega e integração contínua (CI/CD)
Feedback rápido e iteração;
Melhoria contínua;
Benefícios:

Qualidade e confiabilidade das entregas;
Aumento da colaboração entre equipes;
Viabilidade fluxo contínuo de entrega de valor;
Velocidade de entrega;
Redução de custo e riscos;
CALMS: dimensões fundamentais:

Cultura
Automação
Lean (processos enxutos)
Medição
Sharing (compartilhamento)

11.2. Pilares DevOps
Vamos dar sequência à nossa disciplina de Fundamentos de Arquitetura de Software, falando um pouquinho sobre DevOps. Nesse capítulo, vamos abordar os pilares principais desse conteúdo, que é um assunto extremamente importante. A de hoje vai passar um pouco sobre esses pilares, com a intenção de entender melhor o processo, a ferramenta e a importância desse tema. Vamos também falar de alguns exemplos para ilustrar melhor.

, quais são os principais pilares? A figura está mostrando e, quando falamos em pilares, estamos nos referindo a algo que sustenta. Se você retirar um pilar, tudo cai. Isso significa que, para trabalhar com DevOps, é necessário entender e trabalhar sobre alguns pilares fundamentais, que são: automação, integração contínua, entrega contínua (CD), monitoramento e segurança. Para que essa mudança cultural se perpetue ao longo do tempo, devemos trabalhar nesses pilares. Somente assim será possível implementar a cultura de entrega contínua de valor, garantindo que produtos digitais sejam entregues rapidamente, com testes automatizados e entregas positivas.

Vamos falar um pouco sobre cada um desses pilares:

Automação: Quando pensamos em DevOps, a automação é um dos pilares mais importantes. Imagine uma grande empresa, como um banco com 100 mil funcionários, que está constantemente desenvolvendo soluções digitais. Para entregar essas soluções rapidamente, a automação é essencial. Ela entra principalmente nos processos de teste e entrega. Por exemplo, ao invés de realizar testes manuais repetitivos, podemos automatizá-los, economizando tempo e recursos, além de melhorar a qualidade. Ao automatizar tarefas repetitivas, evitamos erros humanos e ganhamos eficiência.

Integração Contínua (CI): Em grandes empresas, como o banco citado, existem centenas de soluções ativas sendo constantemente desenvolvidas. Para lidar com essa complexidade, a integração contínua permite que as equipes integrem o código de maneira constante e organizada. Ao adotar práticas como commits diários e integração automática de código, podemos testar o software de forma contínua e garantir que tudo esteja funcionando corretamente. Isso acelera o processo e facilita a correção de erros, permitindo que o produto final seja entregue de maneira mais eficiente.

Entrega Contínua (CD): A entrega contínua vai além da integração. Após integrar e testar, o próximo passo é garantir que a entrega para o cliente aconteça de forma contínua. Isso significa que, assim que o código é validado, ele está pronto para ser liberado, sem a necessidade de esperar por um cronograma fixo. A entrega contínua permite uma resposta rápida ao cliente, mantendo o produto atualizado sempre que necessário, de forma ágil e com menor tempo de implantação.

Monitoramento: O monitoramento é crucial para garantir que as soluções entregues estejam funcionando corretamente ao longo do tempo. Após a entrega, é necessário monitorar o desempenho do sistema, como o uso de memória e o tempo de resposta, para garantir que os requisitos não funcionais sejam atendidos. Isso permite detectar problemas antes que eles afetem o cliente, possibilitando ajustes contínuos.

Segurança: No modelo DevOps, a segurança não é uma etapa isolada, mas parte integrante do processo. Em vez de ter uma equipe dedicada à segurança, as práticas de segurança são incorporadas diretamente no desenvolvimento, desde o início do processo. Isso inclui garantir que o código esteja livre de vulnerabilidades e que a infraestrutura seja protegida contra ameaças. Além disso, o conceito de "champions" em segurança pode ser aplicado, onde um profissional especializado em segurança dentro de cada equipe garante que as melhores práticas sejam seguidas.

Cada um desses pilares é fundamental para garantir o sucesso do DevOps. A aplicação de DevOps vai variar dependendo do tipo de produto ou serviço que sua empresa oferece. Para empresas que desenvolvem soluções mais críticas, o foco será maior na segurança e na integração contínua, enquanto em empresas que produzem soluções mais simples, a automação e a entrega contínua terão maior destaque.

Concluindo, vimos que a integração desses pilares permite uma evolução gradual dos processos dentro das empresas, proporcionando uma melhoria constante na entrega de produtos digitais.

Pilares da mudança cultural:

Automação: Uso de ferramentas e scripts para automatizar tarefas repetitivas, como builds, testes e deploy. Ferramentas comuns: Selenium, Junit, Gitlab, Ansible;
Integração contínua (CI): Prática de manter o código pronto para deploy a qualquer momento.
Entrega contínua (CD)
Monitoramento e feedback: Monitoramento contínuo do sistema para garantir os requisitos não funcionais ao longo do tempo. Ferramentas: Phrometeus, Grafana, Elasticsearch;
Segurança: DevSecOps: é a prática de integrar a segurança no processo de devops desde o início do ciclo de vida;

11.3. Ferramentas e Práticas Comuns em DevOps

11.4. Integrando DevOps e Arquitetura de Software
Arquitetura evolutiva e devops, arquitetura evolutiva é a prática de construção sistemas que podem evoluir ao longo do tempo em resposta a mudanças nos requisitos e tecnologias;

Como devops pode contribuir para isto? Princípios de arquitetura evolutiva: Desacoplamento, feedback contínua, governança mínima, Exemplo: Mocrisserviços;

Design para DevOps: Envolver práticas de design de software que facilitam a automação continua, entrega contínua e monitoramento. Elementos chave: Automação e Observabilidade;

Imutabilidade de infraestrutura;
Descentralização das decisões arquiteturais;
Resiliência;
Exemplo: Circuit Breakers e IaC;
Módulo 2: Requisitos Arquiteturais e Modelagem Arquitetural
Capítulo 0: Introdução à Engenharia de Requisitos

0.1. Apresentação
0.2. Trajetória
0.3. Redes Sociais
0.4. Apresentação do Módulo
Capítulo 1: Fundamentos de Engenharia de Requisitos

1.1. Requisitos Arquiteturais e Funcionais
Sabemos que as maiores causas de falha em projetos de software se dão por definição errônea de requisitos. Estima-se que quase 85% dos efeitos em sistemas tem origem em requisitos mal levantados (Young, 2001/2002);

A definição ou descrição de um requisito pode ser facilmente encontrado em muitos livros de engenharia de software. Em linhas gerais é aquilo ou algo que é desejado, ou requisitado pelo seu cliente/usuário que será utilizado para que alguma tarefa seja realizada. Um requisito de sistema é uma especificação de uma função ou característica que um sistema de software.

O levantamento de requisitos é um processo essencial para o desenvolvimento de um sistema e pode ser realizado de diversas formas, como análise do ponto de vista dos envolvidos, pesquisa etnográfica, grupos de trabalho, versões de teste e desenvolvimento compartilhado.

Como realizar um levantamento de requisitos?

Requisitos Funcionais: Os requisitos funcionais definem as funcionalidades específicas do sistema, representando tudo o que envolve interação direta com o usuário. São aspectos tangíveis e geralmente os mais perceptíveis para o cliente. Esses requisitos podem surgir a partir de problemas do dia a dia, melhorias em sistemas existentes ou demandas por novas funcionalidades. Exemplo: "O sistema deve permitir que usuários autenticados criem seus perfis e adicionem informações pessoais".
Requisitos Não Funcionais: Os requisitos não funcionais estão relacionados a características como desempenho, usabilidade, confiabilidade, segurança, disponibilidade e manutenibilidade. Embora fundamentais para a qualidade do sistema, muitas vezes são negligenciados, deixados apenas para o time técnico ou considerados implícitos nos requisitos funcionais. Exemplo: "O sistema deve ter um tempo de resposta de no máximo 2 segundos para todos os processos de busca".
O sucesso de um projeto de software depende de um bom levantamento de requisitos, pois cerca de 85% das falhas ocorrem nessa fase inicial. Compreender os requisitos é essencial para evitar problemas na modelagem arquitetural e garantir um sistema eficiente.

Tipos de Requisitos

Requisitos Funcionais: Relacionam-se diretamente com as funcionalidades do sistema, como telas e processos interativos para os usuários. Exemplos incluem cadastro de usuários e geração de relatórios.
Requisitos Não Funcionais: Dizem respeito a aspectos como performance, segurança e escalabilidade, garantindo qualidade e eficiência. Exemplos incluem tempo de resposta inferior a 1 segundo e alta disponibilidade.
Tríade dos Requisitos, Para um requisito ser validado, ele deve conter:

Motivo: Justificativa da necessidade.
Origem: Quem ou o que demandou o requisito (usuário, cliente, stakeholders).
Objetivo: O que se espera alcançar.
Método, Processo e Ferramenta

Método: Forma de execução.
Processo: Passo a passo para realizar a tarefa.
Ferramenta: Recursos utilizados para implementar o processo.
Levantamento de Requisitos, Pode ser realizado de diversas formas:

Entrevistas e pesquisas: Coleta direta ou coletiva de informações com usuários.
Análise de sistemas legados: Identificação de melhorias e evoluções
Ideação: Geração de ideias e definição de MVPs (Produtos Mínimos Viáveis).
Testes empíricos: Avaliação de versões de teste em cenários reais
Requisitos na Era da Computação em Nuvem: Com o avanço da computação em nuvem, a preocupação com hardware diminuiu, mas surgiram novos desafios, como controle de custos e escalabilidade. Hoje, requisitos não funcionais desempenham um papel crucial na otimização de desempenho e segurança. Esse panorama destaca a importância de documentar e compreender bem os requisitos, garantindo que o sistema atenda tanto às necessidades funcionais quanto à experiência do usuário e à eficiência operacional.

Conclusão: Os requisitos não funcionais são menos tangíveis e frequentemente mal gerenciados, sendo deixados para a equipe técnica sem um planejamento adequado. Entretanto, são essenciais para garantir a qualidade e a experiência do usuário no sistema.

1.2. Arquitetura Mínima Viável
MVP – Produto mínimo viável, pensar no mínimo para ser entregue

Conclusão: É melhor as postergar as decisões quando a incerteza é grande. A cada ciclo, fazer o mínimo necessário;

1.3. Padrões Arquiteturais
Padrões Arquiteturais e Metodologias de Desenvolvimento de Software, O desenvolvimento de software evoluiu ao longo dos anos, resultando em diferentes abordagens para planejamento e implementação de sistemas. Essas abordagens podem ser divididas em modelos tradicionais e metodologias ágeis.

Modelos Tradicionais

Os métodos tradicionais foram amplamente utilizados nas fases iniciais da engenharia de software e incluem:

Modelo Cascata: Processo sequencial com fases bem definidas (análise, projeto, codificação, testes e entrega). É rígido e pouco flexível para mudanças.
Modelo Espiral: Iterativo, permitindo entregas contínuas e aprimoramento progressivo.
Modelo Incremental: Desenvolvimento por partes, entregando funcionalidades em etapas.
Prototipação: Criação rápida de protótipos para validar requisitos com os usuários
RUP (Rational Unified Process): Processo iterativo baseado em fases, combinando planejamento e desenvolvimento contínuo
Esses modelos são eficazes quando há requisitos bem definidos desde o início, mas apresentam dificuldades para lidar com mudanças constantes.

Metodologias Ágeis

Para responder à necessidade de maior flexibilidade e adaptação, surgiram as metodologias ágeis, que se destacam por:

Iterações curtas: Desenvolvimento em ciclos pequenos, com entregas frequentes.
Times multidisciplinares: Equipes colaborativas atuando simultaneamente.
Feedback contínuo: Ajustes rápidos com base no retorno dos usuários.
Os métodos ágeis mais populares são:

Scrum: Baseado em sprints curtas, com papéis definidos (Scrum Master, Product Owner) e entregas incrementais.
Kanban:Utiliza quadros visuais para monitorar e otimizar o fluxo de trabalho.
Conclusão: A transição dos modelos tradicionais para metodologias ágeis reflete a evolução das necessidades do mercado. O foco deixou de ser um processo rígido e linear para um desenvolvimento mais dinâmico, adaptável e colaborativo, garantindo entregas mais rápidas e alinhadas às expectativas dos clientes.

1.4. Desenvolvimento Ágil
O Desenvolvimento Ágil é baseado em metodologias que priorizam entregas rápidas, flexibilidade e colaboração entre as equipes. Ele se fundamenta nos seguintes princípios:

Valor: Funcionalidades devem gerar valor ao usuário.
Frequência: Desenvolvimento contínuo com entregas regulares.
Flexibilidade: Capacidade de reavaliar prioridades.
União: Uso combinado de diferentes tecnologias.
Motivação: Equipe engajada melhora os resultados.
Comunicação: Clareza sobre objetivos e execução.
Simplicidade, Revisão e Sustentabilidade: Código limpo e sustentável.
Organização: Coordenação entre múltiplas equipes.
Autoavaliação: Revisão constante para melhorias
Vantagens do Desenvolvimento Ágil

Maior produtividade.
Entregas contínuas e incrementais.
Scrum Framework

O Scrum é um dos principais frameworks ágeis, estruturado em ciclos curtos chamados sprints. Suas etapas incluem:

Backlog – Lista de funcionalidades a serem desenvolvidas.
Planning Meeting – Definição das prioridades da sprint.
Sprint Backlog – Seleção das tarefas da sprint
Task – Unidade mínima de uma funcionalidade
Daily – Reuniões diárias de alinhamento.
Review – Apresentação dos recursos desenvolvidos.
Increment – Entrega das novas funcionalidades.
Retrospectiva – Reflexão para melhorias futuras.
Papéis no Scrum

Product Owner – Define requisitos e prioridades.
Scrum Master – Facilita o processo e remove impedimentos.
Equipe de Desenvolvimento – Responsável pela implementação.
O Kanban também é utilizado como um método visual para gerenciar o fluxo de trabalho.

Conclusão: O Desenvolvimento Ágil traz maior eficiência e qualidade para projetos, promovendo entregas frequentes, colaboração e adaptação rápida às mudanças.

1.5. Sistemas Legados
Os sistemas legados são aplicações desenvolvidas em tecnologias antigas, muitas vezes consideradas ultrapassadas, mas que ainda são amplamente utilizadas em diversas organizações. Apesar de serem essenciais para o funcionamento de muitos negócios, sua manutenção é desafiadora, devido à falta de suporte, dificuldades de integração com novas tecnologias e escassez de profissionais qualificados.

Desafios dos Sistemas Legados

Utilizam linguagens e frameworks desatualizados.
Dificuldade em encontrar especialistas para suporte e manutenção.
Alto custo para modernização ou substituição.
Possível incompatibilidade com tecnologias mais recentes.
Estratégias para Modernização

A decisão sobre o que fazer com um sistema legado envolve diferentes abordagens, como:

Evoluir o sistema atual – Melhorando partes do código, migrando gradualmente para tecnologias modernas.
Criar um sistema novo do zero – Substituir completamente o legado por uma nova solução.
Combinar ambas as estratégias – Atualizar funcionalidades críticas enquanto desenvolve um novo sistema em paralelo.
Conclusão: A modernização de sistemas legados exige um planejamento estratégico, considerando custos, riscos e impactos para o negócio. Escolher entre evolução gradual ou reestruturação completa depende da complexidade do sistema, tempo disponível e recursos da empresa.

1.6. Responsabilidades de Times
A organização dos times dentro de uma empresa varia conforme o porte da empresa e a quantidade de colaboradores disponíveis.

Empresas de grande porte possuem equipes especializadas, com divisão clara de responsabilidades, processos bem definidos e maior burocracia, exigindo metodologias ágeis para alinhamento e colaboração eficiente.

Empresas menores contam com equipes multifuncionais, onde os profissionais assumem diversas responsabilidades. Esse modelo proporciona maior flexibilidade e agilidade, mas exige um alto grau de maturidade e capacitação para evitar sobrecarga.

Independentemente do tamanho da empresa, o sucesso dos times depende de uma boa distribuição de tarefas, comunicação eficiente e processos estruturados, garantindo produtividade e eficiência.

Capítulo 2: Elicitação de Requisitos Arquiteturais
2.1. O que é Engenharia de Requisitos
A Engenharia de Requisitos é um processo essencial no desenvolvimento de sistemas, garantindo que as necessidades dos usuários sejam corretamente compreendidas e implementadas.

Principais Etapas do Processo:

Elicitação de Requisitos – Entender o que deve ser desenvolvido, identificando as dores do cliente e mapeando fontes de requisitos.
Análise de Requisitos – Classificar requisitos, resolver conflitos, realizar análise de custo-benefício e modelagem conceitual.
Especificação – Documentação detalhada das funcionalidades e criação de tarefas.
Validação – Garantir que os requisitos atendem às expectativas antes da entrega final.
Tipos de Requisitos:

Funcionais: Definem o que o sistema deve fazer.
Não funcionais:Requisitos de desempenho, segurança e usabilidade.
Ferramentas e Métodos:

Uso de entrevistas e questionários para levantamento de requisitos.
Métodos ágeis (Scrum, Kanban) para organização e acompanhamento de tarefas.
Definition of Ready (DoR) e Definition of Done (DoD) para garantir clareza nas entregas.
O sucesso da engenharia de requisitos depende da colaboração entre Product Owners, desenvolvedores, testadores e stakeholders, garantindo qualidade e alinhamento com as expectativas do cliente.

2.2. Gestão de Produtos
A Gestão de Produtos envolve a criação, desenvolvimento e evolução de um produto, equilibrando design, tecnologia e negócios para atender às necessidades dos usuários e do mercado.

Arquitetura e o Mundo VUCA

A arquitetura de um produto não deve considerar apenas a parte técnica, mas sim a resolução de problemas reais. O conceito de Mundo VUCA nos desafia a lidar com um ambiente:

Volátil: Mudanças rápidas e inesperadas no mercado.
Incremental: Evolução contínua, melhorando o produto ao longo do tempo.
Complexo: Muitos fatores interligados influenciam as decisões.
Ambíguo : Nem sempre há uma única resposta correta.
Sistema Finalizado: O Equilíbrio Essencial

Um produto bem-sucedido precisa balancear três pilares:

Design: Foco na experiência do usuário, usabilidade e estética.
Tecnologia: Infraestrutura eficiente, escalabilidade e desempenho.
Negócios : Alinhamento com objetivos estratégicos, monetização e impacto no mercado.
Ciclo de Gestão de Produtos

A gestão eficaz de um produto envolve um ciclo contínuo de melhoria e validação:

Definir os próximos passos: Planejar evoluções e melhorias.
Acompanhar a construção: Garantir que o desenvolvimento siga o plano.
Validar o que foi feito: Testar e verificar se as soluções atendem aos objetivos.
Definir objetivos: Traçar metas claras para direcionar o crescimento do produto.
Entendendo o Problema

Antes de desenvolver soluções, é essencial entender o problema que o produto visa resolver:

Pesquisa: Coleta de dados, feedbacks e análise de mercado.
Definição: Identificação do problema central e das necessidades dos usuários.
Desenvolvimento: Implementação de funcionalidades para resolver os problemas identificados.
Liberação: Entrega do produto ou novas funcionalidades para os usuários.
Solução: Ajustes e melhorias contínuas baseadas em testes e feedback.
A Gestão de Produtos exige visão estratégica, adaptação e colaboração entre equipes, garantindo que o produto evolua e continue relevante no mercado.

2.3. Tipos de Conhecimento
Para garantir o sucesso de um projeto, é essencial identificar os conhecimentos necessários e preencher lacunas de requisitos. Falhas nesse processo podem comprometer a entrega e a qualidade do produto. Além disso, a expertise no domínio do problema pode levar à omissão de conhecimento tácito, dificultando sua documentação e comunicação.

Impacto da Falta de Requisitos

Requisitos ausentes ou mal definidos podem:

Introduzir retrabalho e atrasos no projeto.
Gerar funcionalidades incompletas ou incompatíveis com as necessidades reais.
Comprometer a experiência do usuário e a qualidade do produto final.
Conhecimento Tácito

O conhecimento tácito é aquele adquirido ao longo da vida por meio da experiência. Ele não está formalmente documentado e, muitas vezes, é difícil de ser transmitido. Para lidar com esse tipo de conhecimento, é necessário:

Identificar: Reconhecer quais informações não estão explícitas.
Selecionar o que é relevante: Determinar quais conhecimentos devem ser compartilhados.
Articular no contexto certo: Tornar esse conhecimento acessível e compreensível para os stakeholders.
Tipos de Conhecimento

No contexto de desenvolvimento de produtos e projetos, o conhecimento pode ser categorizado em quatro tipos:

Não sabe que sabe: O indivíduo possui conhecimento, mas não tem consciência disso até ser desafiado ou questionado.
Sabe que sabe: Conhecimento consolidado e reconhecido, podendo ser facilmente aplicado ou compartilhado.
Não sabe que não sabe: Desconhecimento de algo essencial, representando um risco ao projeto.
Sabe que não sabe: Reconhece-se a falta de conhecimento sobre um assunto, permitindo buscar aprendizado ou apoio de especialistas.
A gestão do conhecimento exige estratégia e comunicação eficaz para garantir que as informações críticas sejam identificadas, compartilhadas e aplicadas corretamente no desenvolvimento do projeto.

2.4. Desafios da Elicitação de Requisitos
A elicitação de requisitos é um processo fundamental para o desenvolvimento de um sistema, pois define o que precisa ser construído e quais são as necessidades reais dos usuários e da empresa. No entanto, esse processo apresenta diversos desafios que podem comprometer o sucesso do projeto se não forem bem gerenciados.

Critérios de Sucesso do Projeto

O sucesso de um projeto depende de três fatores principais:

Custo : O orçamento deve ser bem planejado e controlado.
Tempo : O cronograma precisa ser cumprido para evitar atrasos e impactos financeiros.
Satisfação : O produto final deve atender às expectativas dos stakeholders e usuários.
Já o sucesso no gerenciamento do projeto envolve um equilíbrio entre:

Custo : Garantia de que os recursos financeiros sejam bem utilizados.
Tempo : Cumprimento dos prazos estabelecidos.
Escopo : Entrega das funcionalidades esperadas sem desvio nos objetivos do projeto.
Desafios na Definição de Requisitos

Requisitos arquiteturais: Garantir que a estrutura do sistema suporte crescimento, desempenho e escalabilidade.
Identificação de stakeholders: Encontrar as pessoas certas para fornecer informações e tomar decisões estratégicas.
Funcionalidades que ninguém usa: Evitar desperdício de tempo e recursos em funcionalidades que não geram valor para o usuário final.
Identificação de Stakeholders

Os stakeholders são essenciais para definir os requisitos corretos. Eles podem ser:

Líderes e gestores com influência na empresa e no projeto.
Tomadores de decisão que aprovam mudanças e funcionalidades.
Especialistas no problema, que conhecem a fundo as necessidades do sistema.
Usuários finais, que interagem diretamente com o sistema e conhecem seus desafios.
Influenciadores da aceitação do sistema, que podem apoiar ou dificultar sua adoção.
Pessoas com objetivos pessoais ligados ao sucesso do projeto, como gerentes que precisam de bons resultados para sua carreira.
Para garantir o sucesso do projeto, é essencial envolver os stakeholders desde o início, definir requisitos claros e manter uma comunicação eficaz ao longo do desenvolvimento.

Capítulo 3: Uso do Trello para Gestão de Requisitos – Parte I
O Trello é uma ferramenta de gerenciamento de projetos baseada no conceito de Quadro Kanban, que permite organizar tarefas de forma visual e colaborativa. Ele é amplamente utilizado para acompanhar requisitos e modelagem arquitetural, garantindo que todas as etapas do desenvolvimento sejam bem estruturadas e rastreáveis.

Quadro Kanban no Trello

O Quadro Kanban no Trello é composto por listas que representam diferentes fases do fluxo de trabalho. Cada tarefa é representada por um cartão, que pode ser movido entre as listas à medida que avança no processo. Um exemplo de estrutura eficiente inclui:

Para Fazer: Reúne todas as tarefas pendentes que precisam ser executadas.
Planejar : Definição de escopo, levantamento de requisitos e modelagem da solução.
Executar: Desenvolvimento e implementação das funcionalidades.
Revisar : Validação do que foi desenvolvido, incluindo testes e homologação.
Ajustar: Correção de problemas e refinamentos necessários antes da entrega final.
Feito: Tarefas concluídas e aprovadas, garantindo rastreabilidade do progresso.
Benefícios do Trello na Gestão de Projetos

Visualização clara do fluxo de trabalho e do progresso das tarefas.
Colaboração eficiente entre equipes, permitindo comentários, atribuição de responsáveis e anexação de documentos.
Flexibilidade para adaptar os quadros às necessidades do projeto.
Facilidade na priorização de tarefas e acompanhamento do backlog.
Ao integrar o Trello no processo de desenvolvimento, as equipes conseguem organizar melhor as demandas, otimizar a produtividade e garantir a entrega eficiente das funcionalidades.

Capítulo 4: Uso do Trello para Gestão de Requisitos – Parte II
Capítulo 5: Primeira Aula Interativa – Demonstração de Projeto de Levantamento de Requisitos Arquiteturais
Capítulo 6: Análise de Requisitos Arquiteturais
Uma das tarefas mais importantes dos analistas de requisitos é a priorização das funcionalidades, garantindo que o time de desenvolvimento entregue o maior valor possível. Para isso, existem duas abordagens eficazes:

Kano Model

Método que classifica os requisitos com base no impacto que causam na satisfação do usuário. Ele divide as funcionalidades em categorias como:

Básicas (Must-have): Essenciais para o funcionamento do sistema.
Desempenho (Performance): Quanto melhor forem implementadas, mais satisfeitos os usuários ficarão.
Encantamento (Delighters): Funcionalidades inesperadas que geram alto valor e satisfação.
Cost of Delay (Custo do Atraso)

Técnica que mede o impacto financeiro ou estratégico de adiar a entrega de uma funcionalidade. Ajuda na decisão sobre quais requisitos devem ser desenvolvidos primeiro, garantindo que o retorno sobre investimento seja maximizado.

Essas ferramentas auxiliam na tomada de decisão, otimizando o planejamento e execução do backlog para que o projeto alcance seus objetivos com eficiência e impacto máximo.

6.1. Priorização de Requisitos
A priorização de requisitos é uma etapa essencial para garantir que o time de desenvolvimento atenda às expectativas do cliente, focando nos itens que geram mais valor. Para isso, dois modelos são amplamente utilizados:

Modelo de Kano

O Kano Model ajuda a categorizar funcionalidades de acordo com o impacto que têm na satisfação do usuário. Ele analisa as funcionalidades em um gráfico com dois eixos:

Eixo vertical: representa a satisfação do usuário.
Eixo horizontal: representa o investimento feito na funcionalidade (qualidade da implementação).
Esse modelo divide os requisitos em três categorias principais:

Expectativas Básicas (Basic Expectations):

São funcionalidades essenciais que o sistema precisa ter.
Quando bem implementadas, são percebidas como mínimo necessário.
Se mal implementadas ou ausentes, impactam negativamente a experiência do usuário.
Funcionalidades de Satisfação (Satisfiers):

Apresentam um comportamento linear: quanto mais investimento, maior a satisfação.
Se forem bem implementadas, geram alto valor.
Se forem mal implementadas, prejudicam diretamente a percepção do usuário.
Funcionalidades de Encantamento (Delighters):

São diferenciais inesperados que surpreendem positivamente os usuários.
Se não existirem, não causam insatisfação, mas se forem bem implementadas, geram um grande impacto positivo.
Custo de Atraso (Cost of Delay - CoD)

O Cost of Delay mede o impacto financeiro e estratégico causado pelo atraso na entrega de uma funcionalidade. Para priorizar tarefas com base nesse modelo, utilizamos a fórmula:

Índice de Prioridade = Custo de atraso / Duração de implementação

Quanto maior o custo do atraso, mais prioritária deve ser a funcionalidade.
Funcionalidades rápidas e de alto impacto devem ser priorizadas.
Além disso, diferentes tipos de funcionalidades possuem comportamentos distintos em relação ao custo do atraso, podendo variar de acordo com a criticidade para o negócio.

Conclusão: A priorização eficaz garante que o time foque nos requisitos certos, otimizando tempo e recursos. O Modelo de Kano permite entender como as funcionalidades impactam os usuários, enquanto o Cost of Delay traz uma visão financeira e estratégica para decisões mais assertivas. Com essas abordagens, o desenvolvimento se torna mais eficiente e alinhado às necessidades do negócio.

6.2. Histórias de Usuários
Uma história de usuário é uma breve descrição de um requisito do ponto de vista de um usuário do sistema, essencial para promover o entendimento entre a equipe de desenvolvimento e o dono do produto. Cada história descreve o que o usuário precisa e por que isso é importante, geralmente escrita como se fosse o próprio usuário descrevendo sua necessidade.

Por exemplo: "Eu, gerente, preciso acompanhar as atividades de minha equipe porque preciso garantir que as atividades sejam executadas dentro do prazo."

O objetivo das histórias de usuário é promover a conversa entre a equipe de desenvolvimento e o dono do produto. Elas são intencionalmente incompletas para incentivar discussões e esclarecimentos constantes. Ao contrário de especificações formais, elas não fornecem todos os detalhes, mas exigem colaboração contínua para resolver dúvidas e esclarecer pontos.

A analogia com uma foto ajuda a entender como funcionam as histórias de usuário. Inicialmente, a foto (história) pode parecer simples e sem muitos detalhes. Porém, ao contar a história por trás da foto, a imagem ganha mais contexto e significado, assim como as histórias de usuário se tornam mais claras e valiosas à medida que são discutidas com o dono do produto.

As boas histórias de usuários devem ser escritas de forma que promovam alinhamento de conhecimento e compreensão entre todos os membros da equipe, com ênfase em conversas e negociações.

Características de uma Boa História de Usuário

Independência: A história deve ser autossuficiente e não depender de outras histórias.
Negociável: Não deve ser vista como um contrato fechado. Deve ser aberta para discussões e ajustes.
Valiosa: A história deve claramente descrever o valor que ela gera para o cliente.
Estimável: Deve fornecer informações suficientes para que o time de desenvolvimento possa elaborar uma estimativa inicial de esforço.
Sob medida: A história deve ser pequena o suficiente para ser concluída em uma iteração ou sprint, considerando a capacidade do time.
Testável: A história precisa ser clara o suficiente para permitir a definição de testes que garantam que a funcionalidade foi corretamente implementada.
Em resumo, histórias de usuário são uma ferramenta poderosa para entender as necessidades do usuário e garantir que o time de desenvolvimento esteja alinhado com os objetivos do negócio, sendo essencial para o sucesso do projeto.

6.3. Débito Técnico
Durante o processo de desenvolvimento, é comum que o time tome decisões que envolvem comprometer as melhores práticas de codificação, muitas vezes por causa de prazos apertados ou da instabilidade dos requisitos. Essas decisões resultam em dívidas técnicas, que são questões no código que precisarão ser corrigidas no futuro. Embora possam ser necessárias em momentos específicos, essas escolhas podem levar a problemas acumulados, caso não sejam gerenciadas adequadamente.

A gestão do débito técnico é crucial para garantir que essas questões sejam abordadas ao longo do tempo. Sem essa gestão, o produto pode se tornar cada vez mais complexo e a manutenção se tornará mais cara e difícil. Quando o débito técnico é acompanhado corretamente, o time pode planejar atividades de refatoração e correções dos problemas mais críticos, garantindo a evolução contínua do produto.

Débito técnico está diretamente associado ao trabalho extra que resulta da escolha de uma solução rápida e fácil, em detrimento de uma abordagem mais eficiente e eficaz. Essas escolhas, embora convenientes no curto prazo, podem resultar em custos elevados de manutenção e desenvolvimento no longo prazo, comprometendo a qualidade do produto.

Capítulo 7: Qualidade e Requisitos Arquiteturais
7.1. Acessibilidade
Acessibilidade é a possibilidade de acesso a um lugar ou conjunto de lugar. No caso da web, uma interface com boa acessibilidade provê boa experiência de navegação para qualquer pessoa, independentemente de terem alguma deficiência ou não.

Há diversos tipos de deficiência que podem atrapalhar a utilização de um site não acessível. A tabela abaixo relaciona algumas dessas deficiências e os potenciais problemas que podem ter

Por que investir em acessibilidade: Estudos mostram que cerca de 20% da população brasileira possui algum tipo de deficiência. Certamente nem todas essas pessoas possuem incapacidades que as impeçam de utilizar um site não acessível. Mesmo que o percentual de usuário incapazes de utilizar um site não acessível seja 10% ou até 5%, é imprudente para qualquer negócio excluir tal percentual de potenciais clientes. Para uma loja on-line, por exemplo, alcançar 5% a mais de público pode representar mais vendas. Para uma rede social, representa mais usuários. Projetar um site acessível, então, é um investimento que deve ser considerado em projetos web.

7.2. Desempenho
As tecnologias de desenvolvimento web tem evoluído muito nos últimos anos. Com isso, estamos tentando fazer mais e mais coisas em nossas aplicações. Consequentemente, as aplicações estão ficando mais robustas e mais pesadas, podendo levar um longo tempo de carregamento e demora para os usuários. Dessa forma um problema tem ficado muito evidente: desempenho. Quanto mais tentamos fazer sistemas robustos, capazes de fazer muitas coisas, mais o desempenho se torna uma questão relevante para desenvolvedores.

Existe um objetivo primário para se preocupar com desempenho: dar ao nosso usuário uma experiência melhor. Empresas conseguem aumentar consideravelmente a retenção de clientes e a rentabilidade de seus sites ao melhorar o desempenho da aplicação e, consequentemente, a experiência de seus usuários.

Aplicações são essenciais para cada vez mais atividades fundamentais para as pessoas e o desempenho das aplicações, que não deve ser uma barreira para que elas consigam alcançar seus objetivos.

Veremos várias formas de melhorar o desempenho das aplicações, mas você não precisa se preocupar em usar todas. Qualquer coisa que você puder fazer para melhorar o desempenho já poderá afetar positivamente a experiência do usuário.

Os problemas de desempenho se concentram em dois pontos principais da aplicação: no carregamento da página e na renderização na página. O carregamento da página é quando todos os recursos estáticos são carregados no servidor para o navegador. Isso significa que quanto maiores forem os arquivos, maior será o tempo de carregamento. O tempo de renderização diz respeito ao tempo que demora depois que todos os arquivos essenciais foram carregados, e o navegador vai precisar trabalhar para compilar, interpretar tudo e dispor os elementos de uma maneira que seja entendível visualmente.

Devemos tratar a questão de desempenho como uma questão estratégica para nossa aplicação. Vários estudos mostram que aplicações com melhor desempenho tem melhores resultados. Um site de vendas, por exemplo, poderá perder usuários ou perder vendas por conta de demora na resposta da aplicação. O usuário poderá fazer o cadastro no sistema porque aplicação demora muito, e ele acabou desistindo. Então devemos tratar desempenho como atributo diretamente ligado aos objetivos de negócio, por isso devemos decidir estrategicamente quanto tempo e esforço vamos investir para melhorar o desempenho da aplicação.

7.3. Usabilidade
Usabilidade define a facilidade com que as pessoas podem empregar uma ferramenta para realizar uma tarefa específica e importante. Dessa forma, a interface web deve ser construída para ajudar o usuário a realizar seu trabalho e chegar F informação importante de maneira efetiva. Conforme a ISO 9241-11: “Usabilidade é a medida pela qual um produto pode ser usado por usuários específicos para alcançar objetivos específicos com efetividade, eficiência e satisfação em um contexto de uso específico”.

Para garantir alto grau de usabilidade, as interfaces do sistema devem contemplar os cinco atributos de usabilidade listados abaixo: Aprendizado, Eficiência, Memorização, Robustez, Satisfação

Um sistema bancário é um exemplo de sistema de difícil aprendizado, mas muito eficiente. Um funcionário do banco deve ter vários treinamentos para entender os conceitos e as funcionalidades do sistema. Um usuário leigo certamente não conseguiria utilizar um software bancário sem treinamento. Entretanto, quando o usuário está familiarizado com o sistema, ele consegue chegar a seu objetivo facilmente. Utilizando apenas o teclado, com poucos comandos o funcionário do banco consegue resolver o problema de um cliente. Apesar de ser de difícil aprendizado, é bastante eficiente.

Capítulo 8: Especificação e Validação de Requisitos Arquiteturais (E-book)
Como vimos até agora, o principal objetivo de uma equipe — composta por desenvolvedores, líderes, coordenadores e especialistas de negócios — é, antes mesmo de gerar modelos gráficos que representem a realidade do que o sistema deve se tornar, construir modelos de entendimento sobre como o software deve se comportar. Para alcançar o produto desejado com qualidade, dentro do prazo e orçamento, contamos com alguns recursos que auxiliam nesse processo. Assim, a modelagem não é um produto final, mas sim o meio adequado para a construção de um sistema.

Unified Modeling Language (UML)

Unified Modeling Language, ou simplesmente UML, é uma linguagem que visa "permitir a comunicação" ao visualizar, especificar, construir, documentar e entender fluxos e sistemas. Surgiu na década de 1990 com a unificação de métodos no BOOCH (Object Oriented Software Engineering — OOSE) e Object Modeling Technique (OMT), tendo como mentores os renomados Grady Booch, Ivar Jacobson e James Rumbaugh (France; Koryn, 2001). Tornou-se, portanto, uma referência para modelagem de sistemas orientados a objetos e é amplamente utilizado em diversas ferramentas.
A UML oferece diversos tipos de diagramas para especificar aspectos dinâmicos que descrevem como o sistema deve se comportar. Contudo, a UML não fornece um "caminho das pedras", mas sim formas de visualizar o que precisa ser feito. Podemos dividir a modelagem em dois grandes grupos: modelos comportamentais, que tratam dos aspectos dinâmicos e funcionais, e modelos estruturais.
Um diagrama, em sua essência, é uma representação gráfica de informações, processos, sistemas e tudo o que pode ser expresso visualmente. Ele é utilizado para ilustrar ou exemplificar contextos, regras de negócios, fluxos de trabalho, entre outros. Diagrams são amplamente usados em diversas áreas, como engenharia, tecnologia e negócios. Como mostrado na ilustração acima, os diagramas podem ser divididos por forma de representação e geralmente possuem uma estrutura hierárquica. Embora muitos diagramas possam compartilhar características, devido à complexidade ou à proximidade hierárquica, cada um possui uma função e finalidade específicas.
Diagramas Comportamentais

Na modelagem computacional, um sistema é representado pela dinâmica e pelas funcionalidades que ele deve ter, sendo a modelagem comportamental responsável por isso. Os aspectos dinâmicos de um sistema descrevem como ele responderá a estímulos ou eventos vindos de fontes externas. Já os aspectos funcionais estão relacionados ao fluxo de atividades ou operações, como decisões, iterações, desvios, recursividade, entre outros. Em outras palavras, os aspectos dinâmicos descrevem “o que” o sistema deve fazer, enquanto os aspectos funcionais detalham “como” isso deve ser feito.
A UML apresenta diagramas específicos para ambos os aspectos. Para os aspectos dinâmicos, temos:
Caso de Uso
Diagrama de Interação (Sequência e Colaboração)
Diagrama de Transição de Estados
Para os aspectos funcionais, destacamos:
Descrição textual de Caso de Uso
Diagrama de Atividades
Entre os diagramas tanto para aspectos dinâmicos quanto funcionais, o diagrama de Caso de Uso é um dos mais utilizados. Ele é uma excelente ferramenta de comunicação entre os envolvidos, podendo especificar outros casos de uso e estabelecer relações diretas entre eles.
Ao especificarmos a dinâmica de um caso de uso de um sistema, usamos o diagrama de caso de uso com seus respectivos relacionamentos. Por exemplo, no diagrama a seguir, temos uma relação entre "Atende Solicitação Almoxarifado" e os casos de uso específicos "Solicitação de Devolução" e "Atende Solicitação de Fornecimento". O "Atende Solicitação de Fornecimento", por sua vez, está incluído no caso "Verifica Cota". Casos como "Verifica Cota Material" e "V
Para construir um diagrama de caso de uso eficaz (Booch; Rumbaugh; Jacobson, 1999), deve-se seguir algumas regras:
O diagrama deve ter um nome.
Minimizar o cruzamento de linhas.
Deve apresentar um nível adequado de abstração.
Relacionar casos próximos, quando houver uma relação.
Apresentar apenas o agente e seu caso, para facilitar o entendimento.
Evitar especificações excessivas e garantir que os aspectos importantes sejam detalhados.
Focar em um aspecto do sistema dentro do seu escopo.
Os diagramas de interação especificam os relacionamentos entre objetos com base em sua estrutura organizacional, considerando as mensagens enviadas e recebidas entre eles. O diagrama de sequência, por exemplo, além de mostrar as interações, também especifica a sequência em que elas ocorrem. Ele é frequentemente utilizado para ilustrar interações entre usuários e sistemas.
Principais considerações para a criação de um diagrama de sequência:
Definir o contexto da interação.
Informar os parâmetros das mensagens.
Dividir o diagrama por complexidade.
A apresentação deve ser da esquerda para a direita.
Informar as pré e pós-condições das mensagens.
Representar a ordenação temporal das mensagens.
Para objetos criados e destruídos, usar as notações apropriadas.
No diagrama de colaboração, também conhecido como diagrama de comunicação, a interação entre objetos é o foco. Ele exibe a troca de informações e colaboração entre objetos, com a necessidade de uma ordem cronológica para dar sentido completo ao processo. Aspectos importantes:
Nomear o diagrama.
Estabelecer o contexto.
Colocar as classes como vértices em um grafo.
Desenhar as ligações por onde fluirão as interações.
Numerar a sequência das interações.
Por fim, o diagrama de transição de estados mostra a evolução de um sistema através de uma cadeia de estados, cada um representado por um retângulo, com transições indicadas por setas. Este diagrama é especialmente útil para sistemas com comportamento baseado em estados e ajuda a validar o comportamento lógico do sistema.

Diagramas Estruturais

Os diagramas estruturais são utilizados para descrever a estrutura de sistemas ou partes deles, podendo se referir à parte física, como equipamentos, ou à parte lógica, como objetos em orientação a objetos. São frequentemente divididos em diagramas de componentes (representando a parte física), pacotes (representando a estrutura do sistema), objetos (mostrando a relação entre eles durante a execução), entre outros.
Os diagramas de componentes podem ir além de representar partes físicas, incluindo também unidades funcionais, interfaces entre componentes, e estruturas arquiteturais. Eles são essenciais para identificar problemas e servir como documentação para futuras manutenções.
Os diagramas de implantação representam os componentes de software e hardware de um sistema, mostrando as relações entre eles. Além disso, esses diagramas podem ilustrar a organização do sistema em pacotes e como as dependências entre pacotes e classes são estabelecidas.
Modelo Arquitetural 4+1

Um modelo arquitetural é uma visão abstrata da realidade. Usamos modelos para capturar os elementos mais importantes, permitindo uma discussão focada e ajudando na tomada de decisões para projetos e produtos. Isso é necessário porque discutir todos os aspectos envolvidos de uma só vez seria muito complexo.
O Modelo 4+1, proposto por Philippe Kruchten em 1995, organiza a descrição da arquitetura de sistemas complexos em cinco visões: quatro principais (lógica, de desenvolvimento, de processos e física) e uma visão adicional (cenários), que valida as outras quatro.
As Cinco Visões do Modelo 4+1:

Visão Lógica: Foca nos aspectos funcionais do sistema, mostrando como os componentes de software suportam as funcionalidades principais.
Visão de Desenvolvimento: Trata da organização estática do software, detalhando a estrutura dos arquivos de código, bibliotecas e artefatos.
Visão de Processos: Foca no comportamento em tempo de execução, como concorrência, threads e processos, mostrando a dinâmica do sistema.
Capítulo 9: Introdução ao Azure DevOps
Capítulo 10: Segunda Aula Interativa – Projeto no Azure DevOps
Módulo 3: Design Patterns, Estilos e Padrões Arquiteturais
Capítulo 0 - Visão Geral do Módulo

0.1. Apresentação
0.2. Apresentação do Módulo
Capítulo 1 – Arquitetura de Software e Qualidade de Código

1.1. Introdução
Qualidade de software, boas práticas de engenharia de software, principio desenvolvimento e projeto de software e técnicas e ferramentas para melhoria da qualidade. Catálogo de padrões de projeto, padrões para aplicações corporativas. Estilos e padrões arquiteturais, reconhecimento de características chaves de sistema, padrões arquiteturais e arquiteturas concentradas em domínios.

A arquitetura de software, conceitos e propriedades fundamentais de um sistema considerando seu ambiente, seus elementos, seus relacionamentos e seus princípios de projeto e evolução. Como arquiteto de se preocupar com as características do sistema no vai ser construído, considerando as três partes muito importante que compõe a arquitetura de um sistema, a primeira delas define quais são as partes ou as estruturas, depois o papel dessas partes e também o relacionamento entre essas partes, e ao ambiente ao qual o software vai ser inserido

As responsabilidades do arquiteto de softwares, vão muito além das decisões de alto nível do projeto. É muito importante que o arquiteto, apoie a equipe na empresa das melhores práticas de programação, zele pela qualidade e padronização do código fonte.

Conceitos importantes como:

Clean Code: Clean Code, ou "Código Limpo", é uma abordagem que enfatiza a legibilidade, simplicidade e manutenção de código. Um código limpo é fácil de entender, modificar e estender. Ele segue boas práticas de programação, como nomes claros para variáveis e funções, funções pequenas e focadas, e a eliminação de redundâncias. Clean Code busca reduzir a complexidade do código, tornando-o mais intuitivo e sustentável ao longo do tempo.
Object Calisthenics: Object Calisthenics são um conjunto de regras e práticas criadas para melhorar a qualidade do código orientado a objetos. Elas foram projetadas para ajudar os desenvolvedores a escreverem código mais simples, mais legível e mais robusto. Alguns exemplos de regras incluem: "Não tenha mais de 2 argumentos em um método", "Evite o uso de loops", "Use apenas um nível de indentação por método" e "Nunca use null". O objetivo é promover uma programação mais limpa e bem estruturada, alinhada com os princípios da orientação a objetos.
TDD (Test-Driven Development): O TDD, ou Desenvolvimento Orientado a Testes, é uma metodologia de desenvolvimento de software onde os testes são escritos antes do código. O processo segue um ciclo contínuo de três etapas: Red (escrever o teste que falha), Green (escrever código suficiente para passar o teste), e Refactor (melhorar o código sem alterar seu comportamento). O TDD visa garantir que o código funcione como esperado desde o início e facilita a refatoração e manutenção, promovendo uma abordagem mais segura e eficiente para o desenvolvimento.
SOLID: SOLID é um acrônimo que representa cinco princípios fundamentais de design de software orientado a objetos. Eles são:
S - Single Responsibility Principle (SRP): Cada classe deve ter apenas uma responsabilidade, ou seja, um motivo para mudar.
O - Open/Closed Principle (OCP): O software deve ser aberto para extensão, mas fechado para modificação.
L - Liskov Substitution Principle (LSP): Objetos de uma classe derivada devem poder substituir objetos da classe base sem alterar a funcionalidade.
I - Interface Segregation Principle (ISP): Os clientes não devem ser forçados a depender de interfaces que não utilizam.
D - Dependency Inversion Principle (DIP): As classes de alto nível não devem depender de classes de baixo nível; ambas devem depender de abstrações.
Patterns

Design Patterns, ou Padrões de Projeto, são soluções reutilizáveis para problemas comuns de design que ocorrem em sistemas de software. Eles ajudam a estruturar o código de maneira eficiente e com boa manutenção, evitando reinventar a roda. Alguns dos padrões mais conhecidos incluem o Singleton, Factory, Observer, Strategy, entre outros. Os padrões ajudam os desenvolvedores a implementar soluções comprovadas e bem estruturadas para problemas específicos no design de software.
Code Smells

Code Smells (ou "cheiros de código") referem-se a sinais ou indícios de que o código pode ser melhorado. Eles não são erros de sintaxe, mas sim práticas que podem levar a problemas de manutenção e evolução do software. Alguns exemplos de code smells incluem duplicação de código, funções ou classes com muitas responsabilidades, e métodos longos. Identificar e corrigir code smells pode ajudar a melhorar a qualidade do código e facilitar futuras modificações e refatorações.
Análise Estática de Código

A Análise Estática de Código é uma técnica que examina o código fonte sem executá-lo, com o objetivo de encontrar possíveis erros, vulnerabilidades ou padrões que possam comprometer a qualidade do software. Ferramentas de análise estática de código verificam o código em busca de questões como violação de padrões de codificação, código duplicado, complexidade excessiva e possíveis bugs. Ela é essencial para garantir que o código atenda aos requisitos de qualidade e desempenho antes de ser executado em ambientes de produção.
Esses conceitos formam a base de boas práticas de desenvolvimento e são fundamentais para garantir a qualidade, manutenibilidade e flexibilidade do software ao longo de seu ciclo de vida.

Conclusão a arquitetura de software é uma disciplina diretamente relacionada com a qualidade final dos produtos de software. Demanda o conhecimento sobre diversas práticas e princípios. Tais princípios são fundamentais para o trabalho das equipes se transforme um trabalho de engenharia.

1.2. Code Smells
Alguns softwares possuem uma característica indesejada, entregam o resultado funcional esperado aos usuários, mas possuem problemas em suas estruturas internas. Praticas indevidas e outras funcionalidades vão sendo incorporadas usando como base as, mas definições que foram tomadas nas fases anteriores do projeto.

Embora não impactem diretamente a execução dos sistemas, eles têm grande potencial de se tornarem efetivamente bugs, comprometerem o entendimento e a manutenção.

Bloaters

Bloaters (ou "inchaços") são code smells que surgem quando uma parte do código se torna excessivamente grande e difícil de manter. Esses problemas ocorrem quando o código cresce sem controle, tornando-se mais difícil de entender, modificar e testar.

Long Method: Métodos com muitas linhas de código.
Large Class: Classes que acumulam muitas responsabilidades, tornando-se grandes e difíceis de entender.
Long Parameter List: Métodos ou funções com muitos parâmetros, dificultando a compreensão e uso.
Object-Orientation Abusers

Os Object-Orientation Abusers são code smells relacionados ao uso incorreto ou inadequado dos conceitos de orientação a objetos. Eles ocorrem quando se faz um uso excessivo ou errado dos princípios da orientação a objetos, prejudicando a estrutura e a flexibilidade do sistema.

Data Clumps Agrupamento de dados relacionados que poderiam ser encapsulados em uma classe.
Switch Statements: O uso excessivo de instruções de switch em vez de utilizar o polimorfismo, o que viola o princípio da orientação a objetos e diminui a flexibilidade do código.
Refused Bequest: Quando uma classe filha herda métodos de uma classe pai, mas não os utiliza, violando o princípio da herança.
Chance Preventers

Os Chance Preventers (ou "impedidores de oportunidades") são code smells que limitam a flexibilidade e a capacidade do sistema de se adaptar a mudanças. Eles restringem o código ao impedir que novas opções e soluções sejam exploradas.
Divergent Change: Quando diferentes partes de um sistema precisam ser alteradas simultaneamente, mas essas partes são modificadas de maneira independente, tornando o código mais propenso a erros.
Shotgun Surgery: Quando uma pequena mudança no sistema exige que várias classes ou arquivos sejam alterados, aumentando a complexidade e o risco de introduzir erros.
Feature Envy: Quando um objeto ou classe precisa de dados de outro objeto de forma excessiva, o que indica que a responsabilidade pode estar mal distribuída entre as classes.
Dispensables

Os Dispensables (ou "desnecessários") são code smells que indicam que algum código ou estrutura não tem utilidade ou não está contribuindo para o funcionamento do sistema. Eles aumentam a complexidade sem agregar valor real.

Duplicate Code: Quando o código se repete em várias partes do sistema, aumentando a manutenção e o risco de inconsistências.
Dead Code: Código que não é mais utilizado, mas que permanece no sistema, ocupando espaço e tornando o código mais difícil de entender.
Commented-out Code: Código que foi comentado e não está sendo executado, mas que ocupa espaço no código, prejudicando sua legibilidade.
Essas categorias de Code Smells são sinais de que o código pode ser melhorado. Identificar e corrigir essas falhas pode levar a um código mais modular, flexível e fácil de manter. Ao seguir as boas práticas de design, como aplicar os princípios SOLID e refatorar o código regularmente, esses code smells podem ser minimizados, resultando em um software de maior qualidade e longevidade.

1.2.1. Code Smells – Bloaters
Os code smells do tipo bloaters referem-se a problemas causados pelo crescimento desordenado da estrutura do código, como métodos e classes, o que compromete a manipulação e manutenção do código. Esses problemas geralmente surgem ao longo do tempo, especialmente quando débitos técnicos não são sanados. Os principais exemplos dessa categoria incluem:

Long method: Métodos com muitas linhas de código.
Large class: Classes com muitos campos, métodos e linhas de código.
Primitive obsession: Uso excessivo de tipos primitivos em vez de objetos pequenos.
Long parameter list: Métodos com muitos parâmetros na assinatura.
Data clumps: Agrupamento repetido de variáveis ou atributos em diferentes partes do código.
Esses code smells estão relacionados ao crescimento descontrolado do código e tendem a surgir à medida que o sistema evolui, frequentemente como resultado de falta de boas práticas de desenvolvimento ou conhecimento inadequado sobre o software.

1.2.2. Code Smells – Couplers
As causas dos code smells desta categoria são: Acoplamento excessivo entre classes e uso excessivo de delegação;

Feature envy: um método acessa mais dados de outro objeto do que seus próprios dados.
Inappropriated intimacy: uma classe acesso métodos ou atributos internos de outro classe.
Message chains: um conjunto de métodos onde a implementação deles apenas chama outro método;
Middle man: uma classe que executa apenas uma ação a delega todos o restante do trabalho para outras classes.
Conclusão, os code smells do tipo couplers estão relacionados a violação dos princípios de coesão e acoplamento da O.O. Eles podem acontecer tanto por uso acessivo do acoplamento, quanto por excesso de delegação das responsabilidades para outras classes.

1.3. Análise Estática de Código
Avaliação do código, durante a análise, é possível aplicar diferentes regras para identificar, por exemplo:

Presença de erros comuns de programação;
Violação de política de nomenclatura;
Códigos candidatos a refatoração;
Testes de segurança;
No pipeline de CI/CD:

Os benefícios capazes de desempenhar análises, de forma: Sistêmica, Consistente, Eficiente e Antecipada;
Permite identificar uma vasta gama de deficiências, sintetizar e aplicar conhecimentos de especialistas, extrair e avaliar métricas, aplicar padrões de codificação e fornece feedback imediato;
Permite algumas métricas representa unidades de tamanho de parte do código fonte como: Lines of code (LOC), Number of attibutes (NOA), Number of methods (NOM). Outras representam características da estrutura e relacionamento das classes: Wighted method per class (WMC), Lack of cohesion in methods (LCOM) e depth of inheritance tree (DIT).
Threshold é uma abordagem que pode ser adotada e determinadar um threshold. Em uma análise baseada em threshold o resultado permite determinar quando um atributo está acima ou abaixo do valor esperado. Devem ser sempre monitorados e recalibrados.
A definição de um threshold pode ser feita com base em: Referência (normas, padrões, etc), Benchmarks em um conjunto de sistemas, benchmarks de mercado e experiência profissional;
Analise estática de código e code smells, diversos code smells estão diretamente relacionados a uma ou mais métricas, como exemplo: Long method, Large class, feature envy;
Conclusão, a análise estática é uma prática importante para identificar diversos tipos de problemas em sistema, em tempo de compilação. É possível utiliza-la para extrair métricas do cpodigo e identificar code smells.

Capítulo 2 – Catálogos de Padrões

2.1. Introdução aos Catálogos de Padrões
Arquitetura é uma das principais disciplinas da Engenharia de Software. Os produtos resultantes de seus processos contribuem de forma substancial para a garantia dos atributos de qualidade de um software. Além disso, a arquitetura envolve definições das partes elementares de um sistema e, portanto, espera se que todas sejam fundamentadas em práticas de engenharia.

Um arquiteto deve ser capaz de identificar características relevantes dos principais problemas que ocorrem durante o ciclo de vida de um software e propor soluções efetivas. Para auxiliar esse processo existem diversas propostas de padrões. Christopher Alexander define padrões como uma entidade que descreve um problema que ocorre repetidas vezes em um ambiente e apresenta uma essência de solução para esse problema, de tal forma que a solução possa ser replicada milhões de vezes sem nunca produzir resultados idênticos. Padrões são utilizados como templates para solucionar problemas recorrentes que se manifestam ao longo do ciclo de vida de um software. Por se tratarem de propostas amplamente testadas e bem documentadas, os padrões contribuem para garantir a qualidade do produto. Além disso, os padrões colaboram para a redução dos riscos dos projetos e para o estabelecimento de um vocabulário comum entre os profissionais, sejam desenvolvedores, testers, arquitetos, etc. Padrões na Arquitetura de Software têm sido estudados por décadas. Dado o grande número de propostas, eles são frequentemente organizados e divulgados em catálogos. Os catálogos concentram padrões com algum uso em comum, seja pelo tipo de problema ao qual se propõem a resolver ou por características das aplicações ao qual podem ser aplicados.

A documentação dos padrões frequentemente possui os seguintes elementos:

Nome: descreve de forma sucinta o padrão;
Problema: define o problema que o padrão se propõe a resolver e quando o padrão deve ser utilizado.
Solução: descreve como o padrão propõe resolver o problema.
A solução deve ser sempre apresentada de forma genérica para possibilitar que o padrão seja aplicado em diferentes domínios de problemas e de forma independente de tecnologia. É comum a solução descrever os elementos, os relacionamentos entre os elementos e suas responsabilidades.
Resultados e consequências: descrevem os benefícios da adoção do padrão e suas consequências de forma a fundamentar a possível utilização ou não do padrão. Podem conter, por exemplo, impactos na flexibilidade, extensibilidade, portabilidade e manutenibilidade.
Existem diversos catálogos de padrões na literatura e alguns são enumerados na lista a seguir:

GoF: um dos catálogos de padrões mais conheci dos e utilizados. Apresenta vinte e três padrões para solução de problemas frequentemente encontrados no desenho (projeto) de softwares orientados a objetos. Publicado no livro Design Patterns Elements of Reusable Object-Oriented Software de Gama et al.
AntiPatterns: catálogo de padrões que usa uma abordagem diferente dos demais. Ele apresenta soluções ruins, que não devem ser utilizadas, para problemas de projeto e codificação de software. Tais soluções podem comprometer a compreensão, a evolução e a manutenção do código fonte. Publicado no livro AntiPatterns: Refactoring Software, Architectures, and Projects in Crisis de Brown et al.
Pattern Oriented Software Architecture (POSA): focado em padrões para desenvolvimento de sistemas de missão-crítica, muito utilizados no desenvolvimento de sistemas operacionais, servido res web, middlewares e softwares de plataforma. Publicado no livro Pattern-Oriented Software Architecture Volume 1: A System of Patterns de Buschmann et al.
Patterns of Enterprise Application Architecture (POEAA): apresenta diversos padrões para “aplicações corporativas”, com foco nas linguagens .Net e Java. Publicado no livro Patterns of Enterprise Application Architecture de Martin Fowler. 2
Design Patterns, Estilos e Padrões Arquiteturais
DDD Patterns: discute padrões relevantes para equipes que utilizam a metodologia Domain Dri ven Design. Os detalhes de alguns padrões de DDD podem ser consultados no livro Patterns, Principles, and Practices of Domain-Driven Design de Scott Millett e Nick Tune.
SOA Patterns: o livro Patterns: Service-Oriented Architecture and Web Services de Endrei et al. apresenta um catálogo com diversos padrões para solução de problemas frequentes na implementação de arquiteturas orientadas a serviços (SOA). Os padrões envolvem questões de projeto de arquitetura SOA, implementação de barramento de comunicação, descoberta de serviços, dentre outros.
2.2. Patterns of Enterprise Application Architecture
Padrões de Acesso a Dados e Sistemas Distribuídos - Martin Fowler

Padrões de Acesso a Dados:

Na arquitetura de software, requisitos como persistência de dados têm impacto significativo na qualidade do sistema. Martin Fowler, em seu livro Patterns of Enterprise Application Architecture, descreve vários padrões de acesso a dados que podem ser utilizados para resolver problemas comuns encontrados em diferentes fontes de armazenamento de dados, como bancos de dados relacionais, NoSQL, arquivos, entre outros.

Active Record: O padrão Active Record é usado quando as regras de persistência de dados são simples. Ele combina dados e comportamentos do negócio em um único objeto, simplificando o acesso à persistência. Nesse modelo, o objeto é responsável por carregar e salvar seus próprios dados no banco.
Data Mapper: O padrão Data Mapper é utilizado para separar os objetos do domínio do código de persistência. Ele atua como uma camada de mapeamento, traduzindo conceitos de orientação a objetos para a linguagem do banco de dados, permitindo que os objetos do domínio e a base de dados evoluam independentemente.
Unit of Work: O padrão Unit of Work gerencia transações, garantindo que todas as operações (inclusões, exclusões e modificações) em objetos afetados por uma transação sejam salvas no banco de dados de forma consistente. Este padrão é amplamente utilizado em aplicações web, onde cada requisição HTTP é tratada como uma transação independente.
Repository: O padrão Repository fornece uma camada intermediária entre o código do domínio e a fonte de persistência. Ele centraliza a lógica de acesso aos dados, oferecendo um local único para montar queries e aplicar regras de persistência. Esse padrão é útil em aplicações com múltiplos domínios ou consultas complexas.
Padrões para Sistemas Distribuídos:

Em sistemas distribuídos, a comunicação entre componentes e a integração com fontes externas podem ser desafiadoras. Fowler descreve alguns padrões que visam resolver problemas comuns neste tipo de arquitetura.

Gateway: O padrão Gateway propõe o encapsulamento de acesso a recursos externos, como bancos de dados ou APIs, por meio de um objeto que remove o acoplamento entre a aplicação e a dependência externa. Isso reduz a complexidade, permitindo que a lógica da aplicação não precise lidar diretamente com os detalhes da fonte externa.
Service Hub: O padrão Service Hub ajuda a mitigar problemas de desempenho durante testes, substituindo dependências externas por objetos stub. Isso permite que o teste se concentre na aplicação sem ser impactado por serviços externos lentos ou com falhas, melhorando a eficiência dos testes.
Registry: O padrão Registry oferece transparência de localização em sistemas distribuídos. Ele permite que clientes descubram a localização de serviços e recursos distribuídos dinamicamente, sem precisar de informações prévias sobre o servidor, tornando o sistema mais flexível e adaptável.
Remote Facade: No contexto de sistemas distribuídos, a comunicação entre objetos remotos é afetada pela latência da rede. O padrão Remote Facade sugere agrupar várias chamadas granulares em uma única chamada para reduzir o impacto da latência. O Remote Facade atua como um ponto único de acesso para múltiplas operações remotas, melhorando a performance da comunicação.
Conclusão: Esses padrões ajudam a enfrentar desafios comuns no desenvolvimento de sistemas corporativos e distribuídos. Ao aplicar os padrões descritos por Fowler, os arquitetos de software podem melhorar a modularidade, a flexibilidade e a escalabilidade dos sistemas, além de garantir maior eficiência e manutenção a longo prazo.

2.3. Design Patterns – GoF
A definição de um threshold pode ser feita com base em: Referência (normas, padrões, etc), Benchmarks em um conjunto de sistemas, benchmarks de mercado e experiência profissional;

2.4. Anti Patterns
A definição de um threshold pode ser feita com base em: Referência (normas, padrões, etc), Benchmarks em um conjunto de sistemas, benchmarks de mercado e experiência profissional;

Capítulo 3 – GoF – Padrões de Criação

3.1. Singleton
A definição de do padrão singleton ele atua sobre controle de instâncias de um objeto então Imagine que nós temos um determinado recurso vai ter um arquivo de configuração um sócrate de rede onde diversos processos podem consumir esse recurso na primeira execução quando esse recurso foi demandado nós vamos criar uma Instância de um objeto cliente e esse objeto cliente vai fazer o acesso ao recurso compartilhado quando uma nova execução acontecer o padrão final de utilizamos é criar uma nova Instância desse consumidor e essa Nova Instância afeta o recurso compartilhado e assim sucessivamente porém alguns recursos podem apresentar problemas se forem acessados por objetos diferentes consequentemente nas pernas três execuções em um sistema implementado com essa primitiva de comunicação nós vamos ter problemas dos mais diversos por acessar o recurso compartilhado ou três objetos simultaneamente cada um símbolo tem como proposta controlar o acesso a esses recursos quando a primeira execução acontecer nós vamos criar o objeto cliente desse recurso e em seguida quando a segunda ou a terceira execução surgirem elas vão compartilhar o mesmo objeto que existe atualmente e foi criado pela primeira execução dessa forma seja quantos objetos tentarem acessar esse recurso compartilhado todos eles vão utilizar apenas um cliente um consumidor o padrão sington.

Ele garante que existirá uma única Instância de uma classe e somente uma forma de obter essa distância única E além disso essa Instância vai ser criada sob demanda sem nenhuma execução demandar o acesso àquele recurso compartilhado ela não vai ser criada dentro do sistema Em contrapartida o primeiro fato de existir o padrão siga como sistema pode eventualmente estar mascarando o problema de projeto dentro do sistema então nós precisamos realmente avaliar se aquela implementação do símbolo ela pode ser fatorada ou se ela realmente necessária ele requer tratamentos especiais como nós vimos Principalmente quando existe a possibilidade do alto índice de paralelismo e concorrência e aquelas equipes que usam testes unitários podem encontrar algumas dificuldades para gerar os moques dos objetos que são símbolos uma vez que existe um controle de qual Instância vai ser criada e tem um ponto único baseado métodos estáticos pode ser um pouco mais difícil complementar os testes unitários pelo sistema eu acho que precisamos ponderar os benefícios negativos se aplica as nossas necessidades nessa hora nós vimos que é possível controlar o ciclo de vida de um objeto garantindo que vai existir somente uma distância desse objeto durante toda a execução do sistema e nós podemos fazer uma analogia de que o pai é um síndico ele é uma evolução das variáveis globais que existem nos paradigmas da programação.

3.2. Builder
O padrão de criação Builder é utilizado para simplificar a criação de objetos complexos, onde a construção envolve múltiplas etapas, como inicialização de atributos, construção de objetos dependentes e obtenção de recursos compartilhados. Esse padrão permite a criação de diferentes representações de objetos por meio do mesmo construtor, tornando o processo mais flexível e organizado. Ele viabiliza a criação de objetos complexos de forma progressiva, facilitando a compreensão das etapas envolvidas.

Entre os pontos positivos, destaca-se a flexibilidade na construção de objetos e a possibilidade de reutilizar etapas de criação, permitindo a materialização de diferentes tipos de objetos conforme o contexto. Além disso, o padrão contribui para a coesão das classes, alinhando-se aos princípios de responsabilidade única, ao separar a criação de um objeto de sua funcionalidade.

Porém, o uso do padrão Builder pode aumentar a complexidade do projeto e das classes, tornando a implementação mais difícil de gerenciar, especialmente quando as etapas de construção se tornam recursivas ou exigem a criação de tipos concretos diferentes. Apesar disso, o padrão oferece uma abordagem consistente para a criação de objetos complexos.

3.3. Factory Method
O padrão de criação é alguns conceitos de muitos sistemas possuem diferentes variações E além disso algumas etapas de criação da inicialização desses conceitos são comuns então nós temos uma árvore de heranças com diferentes níveis a criação aqui é a criação desses diferentes produtos conceitos dessa árvore de herança e dentro delas nós temos etapas comuns de criação de todos os tipos de produtos porém dentro do processo de criação ainda existem algumas etapas que são específicas de acordo com o produto que está sendo criado padrão nessa estrutura ele permite representar esse tipo de problema criando uma solução para ele e qualquer proposta imagine nós temos a necessidade de criar uma fábrica de sorvetes então quando uma classe do nosso sistema tem um papel de consumidor de clientes precisa produzir um sorvete dentro do padrão a inicialização do sorvete para uma fábrica porém o consumidor não vai chegar para fábrica de cria um sorvete de morango ou cria um sorvete de chocolate ou cria um sorvete de baunilha o cliente ele vai acionar a fábrica informar o tipo do sorvete que ele deseja e a fábrica tem um papel de construir o objeto real porém algumas etapas são comuns a todos os tipos de produtos nós temos um produto com diferentes tipos ou seja existem variações a materialização desses produtos Como obter o copinho ou a casquinha e decorar ele com a casinha Em contrapartida o sorvete sim produzido ele é específico de cada tipo de produto Então essa alergia ilustra a proposta do padrão a fábrica ela vai permitir que sejam criados diferentes tipos de produtos nós somos reutilizar as etapas comuns no caso porém conseguindo cumprir as etapas específicas de pegar um sorvete de morango ou chocolate.

Ele viabiliza a construção de diferentes tipos de objetos em uma estrutura de herança onde cada classe filha pode determinar o comportamento de algumas etapas do processo de inicialização.

3.4. Abstract Factory
o padrão de criação abstratica alguns software são classificados como linhas do produtos de software que que significa isso eles demandam combinações diferentes de tipos de produtos e cada contexto de execução pode dominar uma combinação diferente as linhas de produtos de software são aqueles sistemas onde nós temos diferentes requisitos muitas vezes não funcionais como uma certa bancada um mecanismo de autenticação login e para cada um desses requisitos nós temos diferentes implementações eu posso ter o mecanismo de persistência como implementação posso ter um log com diferentes bibliotecas de lá alguém passa ter autenticação com diferentes algoritmos de autenticação e um software que é uma língua de produto eu posso na hora empacotar ele com persistência e autenticação com isso por exemplo e esse mesmo software por um outro contexto eu posso empacotar ele ou executá-lo com persistência no ciclo o log semi-log e autenticação e além do texto essas variações nós precisamos ter na linha de produtos software essa capacidade de combinar todos os tipos de produtos gerando a expectativa do cliente com mais em cada contexto Então esse padrão ele é diferente muitas vezes as pessoas acaba confundindo mas o papel dele é atuar em linha de produtos uma vez nós temos essa necessidade ele pode viabilizar a criação dessas famílias de produtos relacionados de forma que não há necessidades concretas dos objetos ou seja quando eu preciso de um determinado tipo de produto para usá-lo eu vou me basear em Abstrações desse produto sem me preocupar que na hora de execução eu vou ter uma persistência transparente os meus objetos consumidores. Compatibilidade entre objetos criados para cada Factor e ele remove o acoplamento entre os objetos Concretos e os seus consumidores uma vez que ele se baseiam em Abstrações Em contrapartida ele apresenta um nível maior de complexidade porém considerando que nós temos a demanda a necessidade de uma linha de produtos de software é a sua complexidade adicional pode se fazer valer. O padrão abstract Factor flexibiliza a criação de família de objetos garante a compatibilidade entre objeto criados e remove o acoplamento entre cliente e o produto concreto.

Capítulo 4 - GoF (Padrões Estruturais)

4.1. Adapter
A definição de um padrões estruturais do catálogo falando do padrão a tendência que nós temos atualmente é reutilizar cada vez mais aplicação delegadas componentes e outras estruturas que se sentem porém muitas vezes nós nos deparamos com situações onde uma classe legada do sistema que já existe já é utilizada por diferentes pontos do sistema e por algum motivo não pode ser evoluída porque não é Nossa ou porque usa uma tecnologia mais antiga ou porque ainda nós não temos tempo hábil para poder fatorar essa classe e nós precisamos criar um novo código do cliente e vai utilizar porém o código do cliente ele espera um contrato que é distinta do que legal parece o problema é rápido

Tem como proposta viabilizar a comunicação do cliente com a classe delegada mesmo eles tendo interfaces diferentes a proposta desse padrão É permitir que as classes clientes utilizam diferentes implementações de um conceito de forma Universal nós vimos que a classes podem ter interface diferente mas Além disso podem acontecer cenários onde a classe delegada tem duas implementações distintas é uma só então ele vai gerar uma interface comum estabelecida para que as clientes possa se comunicar com aquelas legais sendo ela uma ou duas ou quantas forem necessárias essa proposta inclui a criação adaptador a implementação incompatível ou seja nós vamos modelar qual é a visão oficial a visão padrão caso alguma classe legada implemente Essa visão padrão ela vai ser transparente com os consumidores porém aquelas que forem compatíveis vão ter adaptadores que traduzem as visões para que a cliente não precise tomar decisões fazer inspeções e qual delegada para tornar mais terrível.

A proposta de solução do padrão permite definir uma representação padrão para um conceito dentro do sistema e por meio dela utilizar diferentes implementações de forma uniforme.

4.2. Facade
Existem no Sistema uma classe complexa ou ainda um componente complexo essa classe ela pode ser uma classe do sistema ou uma classe de terceiros que ela tem uma série de comportamentos e nós temos dentro de nosso sistema uma classe cliente com alguma determinada lógica que alteracionada vai consumir a estrutura dessa classe completa porém muitas vezes o uso dessa classe pode não ser trivial pode demandar várias chamadas a nível de granulares para métodos dessa classe ela pode ter problemas de coesão de acopramento

E com isso se eu tenho somente uma classe cliente esses possíveis problemas nessa classe podem não ser significativos mas na medida eu começo a ter outras funcionalidades do nosso sistema se comunicando com essa classe eu vou ter efetivamente diferentes pontos do sistema com a replicação dessa lógica complexa de consumo desse método

Às vezes o Mero o fato de eu conseguir reutilizar confiança com a delegação ou qualquer outro recurso da orientação do projeto resolvem esse problema de duplicidade porém eu posso encontrar limitações onde essas classes não possuem uma representação comum e como nós já sabemos não é interessante eu ter essa regra tem implementada em diferentes pontos principalmente sendo classes do sistema com conhecimento ele fazia de outra classe que pode nem ser do nosso sistema e amanhã eu troco essa classe Porque troquei o fornecedor por exemplo eu vou ter inúmeros pontos do sistema sendo alterados Esses são exemplos de problemas onde o padrão com ele nós vamos criar uma interface de comunicação com essa classe complexa as classes consumidores do nosso sistema sempre que precisarem acessar a classe complexa bom se basear na fachada e a fachada ela vai simplificar o uso da numerações necessárias para cumprir uma única responsabilidade Então ela absorve para ela a necessidade de conhecer essa classe complexa E além disso ela simplifica esse acesso gerando uma representação interna do sistema Ou seja eu consigo representar o negócio com base na Ótica do nosso sistema e não com base na Ótica de fornecedor com essa classe eu preciso apenas escrever a fachada se outra classe do sistema passa a necessidade daquela operação eram três chamadas de métodos todas elas Agora acessar a facada vamos dizer uma demonstração prática de como esse padrão pode ser implementado e as características particularidades. Como nós vimos o padrão permite isolar sistemas de artefatos de terceiros e artefatos complexos ele permite simplificar o uso de objetos complexos ou com problemas de desenho.

4.3. Flyweight
o padrão Flyweight não tem execução de sistema uma classe pode dar origem a diversos objetos porém em alguns casos parte do estado ou seja os atributos desses objetos pode ser igual pode ser compartilhada pelas várias instâncias que existem naquele objeto se esses dados não forem compartilhados entre essas instâncias vai haver um consumo desnecessário de memória que pode comprometer a performance do sistema Então esse padrão tem como objetivo atacar o consumo excessivo de memória ele é duplicação de estados de atributos de objetos que tem valores em comuns são iguais porém muitas vezes acabamos gerando referências de memórias duplicadas para guardar o mesmo dado Otimizar o uso de memória por meio do compartilhamento desses estados comuns entre as diferenças distâncias de objetos de uma classe vamos ver como esse padrão pode ser implementado tem como ideia Central reduzir o consumo de memória eliminando a duplicidade de estados de objetos que são comuns as diferentes instâncias que existem durante a execução do sistema a proposta de solução desse padrão contempla a criação de um contexto uma Factor e os n objetos que vão existir que são representados como esses objetos. Essa é a essência na solução do padrão como nós vemos padrão Flyweight torna possível reduzir consideravelmente o consumo de memória quando existe uma quantidade grande de objetos similares que são compartilhados entre diferentes classes de um sistema.

4.4. Composite
O padrão serviços e manipulados como uma composição, ou seja, como um todo e uma vez que nós desempenhamos uma ação sobre esse objeto sobre isso conceito todas as partes que formam esse elemento único podem sofrer a relação

O padrão comparsa ele propõe por árvores de objetos de formas complexas com quantos níveis forem necessários E além disso nós vamos ter a possibilidade de consumir essa estrutura como um único objeto e durante o uso todas as objetos dessa estrutura podem ser acessados individualmente e quando eu desempenhar uma ação com aquele objeto que representa a estrutura todas as partes vão ser acionadas e podem Executar a sua responsabilidade dentro da estrutura. Permite manipular composições complexas e objetos como unidade ele utiliza o conceito polimorfismo para permitir objetos de tipos concretos distintos sejam utilizados e o uso da recursividade viabiliza estruturas de diferentes topologias sendo processadas sendo utilizadas como uma unidade.

4.5. Decorator
Nessa nós vamos concluir o estudo sobre os padrões estruturais falando em padrão de crédito na orientação pelo objeto uma vez que Nós criamos uma Instância de uma classe o objeto criado nunca muda a sua forma Seu Crime um objeto aluno ele vai ser aluno durante toda a existência desse objeto no sistema por mais que eu consiga visualizar de forma diferente se essa classe aluno tiver uma interface se ela tiver uma classe abstrata e eu consegui ver esse objeto pelas suas características baseadas dessas Abstrações ele sempre na memória vai ser um aluno e essa característica faz com que não seja possível adicionar ou remover comportamentos de um objeto em tempo de execução mas existem cenários onde essa possibilidade pode se tornar necessária e o padrão Decorator ele vai nos ajudar a criar uma solução que permita incluir substituir ou remover comportamentos de um objeto depois que ele foi criado os comportamentos são construídos que vão encapsular o objeto original então se eu quero incluir o comportamento a mais eu vou criar um objeto com esse comportamento a mais e ele vai envolver objeto original sempre que eu desempenhar algo com isso objeto encapsulado ação vai cair primeiro no envelope para depois ser enviada por objeto original e o meu envelope ele vai ter mesmo contrato mesmo interface que o objeto original Então todo mundo que enxerga que usa a classe conseguiria usar o possível.

Tem alguns pontos positivos ele permite estender o comportamento do objeto sem a necessidade de alterar a sua classe ou a sua estrutura ele torna possível combinar diferentes comportamentos de um objeto de acordo com o contexto de execução Em contrapartida ele aumenta consideravelmente a complexidade do código então nós precisamos pontuar se a nossa necessidade realmente demanda o uso do padrão Mas se a nossa resposta for afirmativa faz todo sentido nós adotarmos a proposta em alguma implementações pode ser complexo tratar coordenação e remoção da pilha de execução então ele tem que ser usado não tem mais isso afinal de começar a encadear demais comportamentos adicionados envolvidas substituídos pode se tornar difícil prever o Real comportamento vai ter nós ficamos porque permite adicionar substituir e remover comportamentos de um objeto contornando assim a limitação que existe da orientação por objeto.

Capítulo 5 – GoF (Padrões Comportamentais)

5.1. Command
O padrão Command na teoria da orientação do projeto é definido que as classes representam os conceitos do domínio do problema todas as entidades todos os agentes que estão envolvidos na simulação Viva do problema são candidatos a se tornarem classes dentro do sistema e as ações desempenhadas por esses agentes por essas entidades devem ser encapsuladas e implementadas em métodos dessas classes porém alguns cenários nós precisamos representar ações que vão ser desempenhadas num sistema ou seja os Command que são executados Porém Aqui essas ações elas não são métodos elas são as classes do sistema e o padrão Calma que propõe encapsular as informações necessárias para a execução de um objeto ou seja tratar todas as informações necessárias encapsuladas em um objeto aquelas ações sejam executadas não somente executá-las mas também criar uma interface comum de execução para essas ações na demonstração dessa nós vamos ver como nós podemos representar ações nos sistemas encapsulas dentro de uma classe e permitir com que em determinado agente do sistema Execute diferentes ações uma vez que nós vamos ter essa representação padrão para requisições de Command.

Flexibilizar a execução de ações nos sistemas por diferentes mecanismos ele permite a implementação de mecanismos de fazer e desfazer e agrega muitas funcionalidades interessantes quando nós precisamos criar um consumidor que tem o papel de disparar ações dentro do sistema além de permitir reusar essas ações para serem executadas em diferentes canais.

5.2. Template Method
O padrão Template Method algumas vezes nós nos deparamos com situações onde uma funcionalidade precisa ser implementada mas existem variações desse comportamento a classe que implementa essa funcionalidade pode não ser capaz de determinar como implementar todas as etapas desse algoritmo porém algumas das etapas ela consegue definir e implementar e as outras ela sabe apenas que elas existem o padrão não tem método ele vive a criar uma estrutura por um esqueleto dessa funcionalidade Ou seja a classe o pai a classe que concentra o ponto de acesso a essa funcionalidade vai determinar todos os passos daquela funcionalidade as etapas que ele consegue implementar ele já vai implementadas e aquelas que ele não é capaz de implementar ele vai delegar para as classes filhas com isso a diferentes variações que são as classes filhas vão poder definir como aquelas etapas de um pai não foi capaz de implementar devem ser construídas e como o esqueleto da funcionalidade foi definido na classe ai todas as variações automaticamente vão herdar as implementações que já foram definidas na classe esse padrão se assemelha muito a oferta e método mas aqui o foco é o comportamento e para nós vermos a diferença entre um e outro e as particularidades.

Nós vimos que o padrão permite reduzir a implementação de algoritmos extensos reduz a possibilidade de duplicação de código e simplifica a manutenção e a evolução de Especialidades de variações presentes no algoritmo uma vez que nós conseguimos concentrar as regras comuns nas classes pais e delegar para as filhas as etapas que são de suas responsabilidades

5.3 State
Ele atua em cenários onde nós temos uma classe com diferentes comportamentos porém a implementação desses comportamentos depende diretamente do estado dos atributos da classe um grande exemplo de implementação desse padrão é quando nós temos algum jogo eletrônico como por exemplo Mário se nós representarmos o personagem em uma classe ele vai ter um estado que determina Qual a situação do personagem no jogo tem diversas ações podem ser desempenhadas na medida que o usuário interage é um jogo estou com meu personagem sendo a fase inicial do Mário.

Ele vai pular como intensidade ele pode correr como uma determinada intensidade um botão que é o personagem pode não fazer nada porém se eu pego uma flor de Fogo o meu personagem vai se transformar eu vou mudar o estado do personagem não faz mais por exemplo aqui eu continuo tendo personagem Mário porém dependendo do como eu for implementar esse personagem eu vou ter que fazer dentro do método correr dentro do método saltar ações que correspondem a situação do pai Mário Além disso se eu era o Mário as mesmas ações mudam de acordo com o estado do personagem nesse momento só pega uma pena das ações mudam de novo se todas essas situações por representadas todos os métodos de ações do personagem vão ter uma série de uma série de uma séries quando ele ficar qual é a situação do personagem ele Visa atuar sobre esse tipo de situação ele vai permitir que o objeto Mude o seu comportamento e cada estado vai ter uma classe separada com a implementação das ações que refletem aquele Estado então eu tiro da classe a implementação das ações e gera uma classe com os métodos com as responsabilidades para cada situação do objeto e as transições de estados vão fazer com que vem na classe por exemplo e coloca dentro do estado dele a classe que desempenha essas ações de acordo com a situação do personagem.

Contribui para reduzir a complexidade de implementação de objeto com múltiplos estados ele permite criar representações que encapsulam a situação atual de um determinado objeto com ele é possível melhorar a responsabilidade única das classes remover estruturas indesejadas de Infiel e substituir isso por exemplo.

5.4. Strategy
Sobre um Strategy a manutenção de um software pode se tornar uma grande dor de cabeça quando existem códigos que possuem muitas ramificações os famosos e emaranhados de fiel e suíte Case essas estruturas se tornam suscetíveis à evolução e constantes que acabam gerando novas ramificações problemas indesejados e muitas vezes nós não somos capazes de identificar e entender o que aquela estrutura realmente faz por meio do padrão estratos nós encapsulamos cada uma dessas derivações do algoritmo alvo em classes específicas essa ideia é muito parecida com que nós estudamos o padrão state mas lá nós separamos as ações com base no estado do objeto aqui nós vamos pegar um determinado algoritmo independente deles Independente de um estado ou não mas ele é uma ramificação de um algoritmo maior e encapsular em uma classe A classe principal que antes da implementação de padrão tem todas as ramificações passa armazenar uma referência para a estratégia ou seja por objeto que tem aquela ramificação.

Tem como ponto positivo o fato de tornar possível alternar a forma de execução de um determinado algorífico em tempo de execução ele permite contornar algumas limitações do uso de herança usando por exemplo composição e contribui para que nós não tenhamos uma quantidade grande de fiel Sweet Case tempo de nosso sistema Em contrapartida aí eficácia de implementação desse padrão depende do índice de ocorrências das variações quanto maior a quantidade de variações mais fácil fundamentar a adoção desse padrão o consumidor principal passa a ser responsável por definir essa estratégia Então quem vai usar o objeto principal que contém a estratégia acaba sendo responsável por materializar a estratégia que ele quer utilizar mudando a ótica de dependências dentro da situação do sistema e em algumas linguagens ele pode Hoje ser substituído por recursos nativos da própria linguagem então é muito importante que vocês conhecerem a ferramenta que você usam porque pode ser que você já tem um recurso nativos, por meio do padrão é possível isolar implementações de algoritmo e alternar o seu uso mantendo a coesão de cada implementação

Atividade de Fixação

Primeira Aula Interativa - Capítulo 6 – Princípios SOLID

Os princípios SOLID são diretrizes fundamentais para o design de software orientado a objetos, promovendo código mais modular, flexível e fácil de manter. Eles foram definidos por Robert C. Martin (Uncle Bob) e são amplamente utilizados no desenvolvimento de sistemas.

6.1. Simple Responsibility Principle: Cada classe ou módulo deve ter uma única responsabilidade, ou seja, deve existir apenas uma razão para modificar a classe. Isso melhora a coesão e facilita a manutenção do código.
6.2. Open Closed Principle: O código deve ser aberto para extensão, mas fechado para modificação. Isso significa que novas funcionalidades devem ser adicionadas sem alterar o código existente, geralmente utilizando abstração e herança.
6.3. Liskov Substitution Principle: Objetos de uma classe derivada devem poder substituir objetos da classe base sem alterar o comportamento do sistema. Esse princípio garante a correta utilização da herança e evita dependências frágeis.
6.4. Interface Segregation Principle: Interfaces devem ser específicas para cada contexto, evitando interfaces muito grandes e genéricas. Isso impede que classes sejam forçadas a implementar métodos desnecessários, tornando o sistema mais modular.
6.5. Dependency Inversion Principle: Módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações. Isso reduz o acoplamento e melhora a flexibilidade do sistema ao utilizar injeção de dependência.
Capítulo 7 – Estilos Arquiteturais

7.1. Estilos Arquiteturais
A concepção da arquitetura de um software é uma equação complexa que envolve inúmeras variáveis, oriundas, principalmente, dos requisitos esperados para o sistema. Esse processo demanda a análise e ponderação dos trade offs de cada possível abordagem candidata e o arquiteto deve ser capaz de avaliá–las em um alto nível de abstração, uma vez que o sistema ou componente está em fase preliminar de concepção. Se o arquiteto tiver em mãos diretrizes que permitem organizar as abordagens candidatas de forma a reconhecer suas características e permitir determinar se o sistema alvo é semelhante a outros no qual cada abordagem já foi aplicada ele será capaz de avaliar os benefícios e os pontos negativos e, assim, fundamentar suas decisões. Porém, as soluções precisam ser abstratas o suficiente de forma a viabilizar a comparação independente de tecnologias e ramo de atuação de negócio. Tudo isso torna fundamental o conhecimento dos estilos arquiteturais. Estilos arquiteturais descrevem soluções para resolução de problemas na arquitetura de software, porém, atuam em alto nível, permitindo caracterizar uma família de sistemas do ponto de vista da sua organização estrutural. Isso significa que eles produzem uma terminologia que caracteriza componentes de software com base no aspecto identificável da sua organização, sempre a partir de uma visão do nível mais alto de abstração e independente de tecnologia. O estilo arquitetural de um software permite descrever como as camadas, os componentes e os módulos irão se comunicar, identificando e isolando suas responsabilidades. Não existe um estilo arquitetural universal capaz de resolver todos os problemas, uma vez que cada tipo de sistema possui uma característica marcante. Por isso, cada estilo arquitetural é capaz de resolver uma classe de problemas. Existem sistemas que demandam requisitos elevados de segurança, enquanto outros podem ter como característica fundamental o desempenho, a replicação global de dados ou um elevado índice de disponibilidade. Desta forma, os sistemas que seguirem um determinado estilo arquitetural se beneficiarão de determinados atributos em favor de outros. É importante salientar que estilos arquiteturais não são sinônimos de padrões arquiteturais. Um padrão arquitetural apresenta uma solução amplamente testada, documentada e replicável para problemas recorrentes de arquitetura dentro de um estilo arquitetural. Esses termos são frequentemente confundidos, porém, atuam em níveis distintos da solução. Estilos arquiteturais fornecem uma visão periférica em torno do problema enquanto padrões arquiteturais descrevem o processo de como a solução deve ser construída, focado em uma solução concreta. As seções a seguir detalham os principais tipos de estilos arquiteturais.

7.2. Estilos Arquiteturais – Structure
Os estilos arquiteturais do tipo Structure têm por objetivo suportar o planejamento da arquitetura do sistema fornecendo diretrizes para a decomposição e organização dos componentes e comportamentos do sistema. Também são conhecidos pelo jargão “From mud to structure”.

Os principais são:

Layered
Pipes and filters
Component-based
Esses estilos têm alta relevância na teoria de arquitetura de software uma vez que as discussões sobre como distribuir as responsabilidades fazem parte de todos sistemas minimamente estruturados. Em contrapartida, nem todos sistemas demandam requisitos de adaptação, por exemplo.

O estilo arquitetural Layered, também conhecido como arquitetura baseada em camadas, sugere a organização dos sistemas em cada camada, em que cada camada possui uma responsabilidade específica e to dos os artefatos de software residentes em uma deter minada camada devem desempenhar um papel asso ciado a essa responsabilidade. Seu uso contribui para desenvolver aplicações mais fáceis de entender, testar e manter, além de auxiliar o desenvolver paralelo e in dependente de cada camada do sistema.

O estilo arquitetural por si não define de forma explícita as camadas que devem compor o sistema, ele é frequentemente refinado e transformado em uma solução concreta pelos padrões arquiteturais como MVC, MVP, dentre outros que serão estudados nos capítulos posteriores do curso. Entretanto, é comum encontramos pelo menos qua tro camadas nas principais soluções:

Presentation Layer
Business Layer
Persistence Layer
Database Layer.
Já o estilo arquitetural Pipe and Filters, ilustrado em Figura 8, visa decompor um processo complexo de forma que cada tarefa é encapsulada em elementos distintos e reutilizados e, a execução do processo como um todo ocorre através do encadeamento de tais componentes. Além de permitir o reuso das atividades, esse modelo arquitetural contribui para a melhoria do desempenho dos processos e simplifica o processo evolutivo, permitindo que novas etapas sejam facilmente inseridas ou removidas do fluxo de processamento.

Padrão Registry - As premissas do estilo Pipe and Filters são utilizadas na organização de componentes autônomos de sis temas distribuídos, no processamento de requisições HTTP de servidores web e também na organização de camadas em alguns padrões arquiteturais que estuda remos nos capítulos posteriores, como Hexagonal Ar chitecture.

7.3. Estilos Arquiteturais – Message Styles
O processamento assíncrono entre sistemas distribuídos pode ser utilizado para garantir a conformidade com diferentes requisitos de qualidade de um sistema que, via integração síncrona, podem não ser tecnicamente viáveis. Os estilos arquiteturais deste tipo classificam as diferentes abordagens frequentemente adotadas no uso de processamento de mensagens, sendo os principais:


Implicit invocation
Asynchronous messaging
Publish-subscribe
Esses três estilos arquiteturais formam a base das principais arquiteturas modernas, em que a presença de middlewares orientados a mensagens nas integrações entre aplicações e componentes da própria aplicação e o uso de eventos para processamento assíncrono estão cada vez mais presentes.

7.4. Estilos Arquiteturais – Adaptive Systems>
Existem cenários que imputam aos sistemas a necessidade de serem flexíveis e customizáveis, permitindo que mudanças nos requisitos funcionais e não funcionais sejam aplicadas diretamente pelos consumidores do sistema. Os estilos arquiteturais deste tipo categorizam as principais soluções adotadas para satisfazer essa necessidade. Os principais estilos arquiteturais catalogados nesta categoria são:

Microkernel
Reflection
Domain-specific language
7.5. Estilos Arquiteturais – Distributed Systems
Um arquiteto deve dominar as boas práticas de projeto e desenvolvimento de sistemas distribuídos e os estilos arquiteturais desta categoria permitem identificar as características chaves das principais abordagens para composição de sistemas distribuídos e integração entre aplicações. Os principais estilos arquiteturais desta categoria são:

Service-oriented
Peer to peer style
Object request broker
Cloud native.
7.6. Estilos Arquiteturais – Deployment
A arquitetura é uma disciplina holística e envolve as diversas fases do ciclo de vida de um software e suas diferentes necessidades. Saber classificar e analisar o trade offs dos principais modelos de implantação dos sistemas é fundamental para o sucesso de um software, uma vez que a escolha do modelo de implantação incorreto pode anular todos os pontos positivos do projeto de um software. Os estilos arquiteturais mais conhecidos deste tipo são:

Client-Server
N-tier
No estilo arquitetural Client-Server visa distribuir o runtime do software é distribuído entre dois tipos de nós e ambos se integram por meio de um canal de comunicação. Os componentes presentes nos clientes podem, ainda, serem estruturados com base em uma separação de camadas lógicas (layers), assim como no servidor. Além disso, um cliente pode se comunicar com um ou vários servi dores diferentes utilizando vários protocolos.

Um cliente pode requisitar dados e algoritmos para um servidor. Além disso, os clientes podem ser classificados como Thin Clients e Fat Clients. O critério para essa definição se baseia na capacidade de processa mento e quantidade de responsabilidades atribuídas para os componentes de software que rodam no cliente. A arquitetura N-tier se baseia nos princípios do esti lo arquitetural N-tier, porém, tem foco na distribuição física do software (tiers). Seu principal objetivo é distribuir o software em camadas físicas de acordo com a complexidade e os requisitos arquiteturais do software. Embora a implementação mais tradicional seja a separação em três camadas, nas aplicações modernas é comum a utilização de várias camadas como pode ser observado no exemplo ilustrado na Figura 10.

Um sistema pode demandar diversos estilos arquiteturais para atender às suas necessidades, além disso, eles podem ser combinados, produzindo soluções híbridas. Este capítulo descreve brevemente os estilos arquiteturais e devem ser utilizados como um guia para o aprofundamento dos estudos.

Capítulo 8 – Padrões Arquiteturais

8.1. Padrões Arquiteturais
Os padrões arquiteturais com base naquilo que nós vimos nos estilos arquiteturais é a primeira do módulo Eu comentei que existem diferentes definições de arquitetura mas todas elas têm um lucro em comum como nós podemos ver a definição do prêmio do gato definir arquitetura como a estrutura dos componentes suas inter-relações e os princípios e diretrizes que regem o seu design e a evolução ao longo do tempo por mais que a estrutura do português dessa definição seja um pouco diferente da outra ela tem a mesma estrutura em comum que é definir as partes o papel dessas partes as regras de relacionamento entre elas e também outros elementos como as regras e evolução ao longo do tempo as características do ambiente ao qual o software se inclui mas a definição de arquitetura ele tem sempre esses três pilares fundamentais e quando nós falamos padrões nós estamos falando de essências de soluções que visam resolver problemas recorrentes que são amplamente testados e podem ser replicados e adaptadas em inúmeros contextos diferentes isso é válido padrões de projeto de análise e também será válido para padrões eleitorais então quando nós falamos de padrões arquiteturais nós estamos falando de essência de soluções que descrevem abordagens para a organização da estrutura de um sistema aqui nós não estamos mais preocupados com a estrutura de um código fonte específico ou como implementar uma solução por um problema de projeto do código fonte nós olhamos para uma ótica maior que é a organização do sistema quer pegar um determinado que define as características de um sistema as características Chaves de um sistema e propor soluções para problemas que acontecem dentro desses universo o foco passa a ser então separação de interesses culturais também são capazes de imprimir características desejadas a um sistema dependendo do padrão adotado no sistema pode ter um comportamento uma capacidade ele não terá por isso é muito importante conhecer as características a proposta de cada padrão para que quando nós Recebemos o que é esperado no sistema nós conseguimos fundamentar todas as decisões que nós vamos tomar e escolher os padrões adequados a escolha do padrão deve levar em consideração Além disso ele simplificam a definição da arquitetura de preferência é aquela que foi Projetada pelo sistema uma vez que eu adoro padrões eu consigo comunicar de uma forma mais simples uma forma padronizada O que é esperado de referência tenha eles também contribui para minimizar o esforço necessário para o desenvolvimento e a manutenção do sistema principalmente testados quando nós paramos tecnologias eles não focam resolver problemas concretos eles focam em caracterizar o sistema melhor dizendo eles focam em caracterizar famílias pegar diversos sistemas que possuem características que distinguem essa família para isso nós precisamos basear nas características que discriminam essas famílias componentes os padrões eles vão se basear e existem padrões para resolver esse problema se o meu problema é a organização estrutural eu posso dar por exemplo se eu estou trabalhando em eventos no meu sistema então Além disso eu posso ainda combinar os padrões porque eles têm propósito diferente existem inúmeros outros tipos naturais o caso do sistema interativos são muito conhecidos como MVC, MVP ou MVVM, desejáveis para um determinados vimos que os padrões arquiteturais propõem soluções para problemas recorrentes na elaboração de uma arquitetura de um software eles permitem aplicar características desejáveis para um determinado sistema e devem ser utilizados em conjunto com os estilos arquiteturais.

8.2. Model View Controller (MVC)
O padrão arquitetural MVC, um dos mais conhecidos na literatura de desenvolvimento de sistemas. Formalizado em 1979 a partir de um estudo sobre a linguagem, o padrão MVC tem sido amplamente utilizado em sistemas orientados a objetos. A proposta desse padrão visa organizar a estrutura de um sistema, separando os interesses do sistema e, principalmente, em sistemas interativos, ou seja, aqueles que envolvem interação Homem-Máquina.

Como um padrão arquitetural, o MVC possui um problema-alvo, uma proposta de solução e os elementos que fazem parte dessa proposta, como vimos nos padrões de projeto. Ele pode ser de alta complexidade, exigindo um esforço considerável no projeto, manutenção e desenvolvimento dos componentes. No entanto, equipes que buscam uma abordagem para maximizar recursos e a portabilidade dos componentes podem se beneficiar significativamente desse padrão. Sua proposta está diretamente relacionada ao conceito de arquitetura que discutimos anteriormente.

O primeiro pilar do MVC é a definição das partes e suas responsabilidades, além do relacionamento entre elas. O MVC é composto por três camadas:

Os Três Pilares do MVC

Model: Responsável por gerenciar os dados e o estado da aplicação. O model processa os dados e os envia para a fonte de persistência. Em algumas variações do MVC, o model pode ser ativo ou passivo. Quando ativo, ele transmite o resultado do processamento; quando passivo, ele recebe as demandas e transmite o resultado para fora da aplicação, sem interagir diretamente com a view.
View:: A view apresenta os dados ao usuário e coordena a interação entre o usuário e a aplicação. Ela coleta as informações fornecidas pelo usuário antes de acionar o controller. A view não é responsável pela lógica de negócios, apenas pela interface com o usuário, e envia as ações do usuário ao controller para que a demanda seja executada.
Controller: O controller atua como um intermediário entre a view e o model. Ele coordena as ações do model, decide qual view exibir com base no contexto de execução e escolhe a view apropriada para renderizar o resultado para o usuário. O controller é essencial para rastrear as mudanças no model e determinar qual view deve ser exibida.
Comunicação entre as Camadas

O terceiro pilar do MVC refere-se às regras de comunicação entre as camadas. O processo de comunicação começa com a interação do usuário na view, que envia uma ação ao controller. O controller então atualiza o model, realizando as ações necessárias. Uma vez que a regra de negócio seja executada, o controller examina o modelo atualizado e escolhe qual view será exibida ao usuário. O controller entrega o modelo à view, e esta passa a exibir os dados ao usuário.
Uma característica importante do MVC é que o controller pode escolher diferentes views, dependendo do contexto da execução. Por exemplo, se o fluxo principal for seguido sem erros, o controller pode escolher uma view específica. Caso contrário, ele pode optar por uma view de erro, dependendo da situação.
Vantagens do MVC

Entre as principais vantagens do padrão MVC, podemos destacar:

Isolamento: O padrão oferece uma estrutura modular, onde alterações em uma camada não afetam as demais. Isso facilita a manutenção e evolução do sistema.
Estabilidade: O MVC facilita o teste de camadas de forma independente, o que contribui para uma maior estabilidade no sistema.
Reusabilidade: O padrão permite o reaproveitamento de views, modelos e controllers em diferentes partes do sistema.
Portabilidade: Com o MVC, é possível manter um controller e trocar as views sem afetar a lógica do sistema.
Variações do MVC

Existem várias variações do padrão MVC, como o MVP e o MVVM, que mantêm a essência do MVC, mas com algumas diferenças nas responsabilidades e nos fluxos de comunicação entre as camadas. Essas variações têm alvos diferentes, mas continuam utilizando a estrutura básica do MVC para separar as responsabilidades e facilitar o desenvolvimento.
Conclusão:O padrão MVC contribui significativamente para a melhoria do desenvolvimento e manutenção de sistemas, oferecendo uma abordagem sistemática para modelagem, separação de interesses, e maximizando o reuso e a portabilidade dos componentes. Ele é uma solução robusta e testada que continua a ser amplamente adotada em diversos tipos de sistemas.

8.3. Model View Presenter (MVP)
O MVP é uma variação do padrão MVC (Model-View-Controller) e foi proposto nos anos 90 pela Talent, uma empresa formada por Apple, IBM e HP. Esse padrão introduz algumas diferenças em relação ao MVC, principalmente na separação de responsabilidades entre a interface do usuário e as regras de negócios.

No MVC, embora exista uma separação de preocupações, as regras de navegação e de apresentação do dado ficam delegadas à view (a interface gráfica). Isso pode ser um problema porque muitas vezes as regras de navegação envolvem validações, transformação de dados para apresentação e controle do fluxo dentro da interface. No MVP, essa responsabilidade é retirada da view e delegada ao presenter.

Ao separarmos as regras de navegação, o MVP permite que o código relacionado à interface gráfica seja mais testável, já que muitas vezes, em outros padrões, as interfaces gráficas dependem de componentes antigos ou não concebidos com foco em estabilidade. Isso dificulta a realização de testes, especialmente quando se trata de regras de navegação complexas. Com o MVP, conseguimos testar essas regras de forma isolada, já que estão encapsuladas no presenter, e não diretamente na view.

Outro benefício do MVP é que ele proporciona maior portabilidade. Quando o model ou o presenter são alterados, o impacto nas views é minimizado, pois elas não têm relacionamento direto com os controles de negócios. Isso torna o sistema mais modular e facilita a manutenção.

Agora, vamos entender melhor os três pilares do MVP:

O MVP é composto por três partes:

Model: Representa os dados e as regras de negócios. Ele é responsável pela persistência e pelo processamento dos dados.
View: Responsável pela interface com o usuário. A view não possui lógica de negócios, apenas exibe os dados que o presenter fornece.
Presenter: É o intermediário entre o model e a view. Ele encapsula as regras de navegação e lógica de apresentação, manipulando os dados do model e formatando-os para exibição na view. Cada presenter está associado a uma view específica.
Responsabilidades das Partes

Model: Encapsula as regras de negócio e a persistência de dados. Ele notifica o presenter sobre as mudanças no sistema.
View: A view é passiva, ou seja, ela depende do presenter para fornecer os dados e as interações. Ela não toma decisões sobre como os dados são apresentados.
Presenter: O presenter é responsável por coordenar a interação entre o model e a view. Ele processa os dados do model e os formata de forma que a view possa exibi-los corretamente.
Comunicação entre as Partes

O fluxo de comunicação no MVP começa quando a view envia para o presenter as ações do usuário (por exemplo, um clique em um botão). O presenter então atualiza o model, que retorna os dados processados e notifica o presenter sobre a nova realidade do sistema. O presenter então processa esses dados e os envia para a view, que apenas os exibe.
Vantagens do MVP:

Isolamento das Regras de Negócio: O MVP permite uma separação clara entre as regras de negócio e a interface gráfica, o que melhora a manutenção e a testabilidade do código.
Estabilidade: Como a lógica de navegação e de apresentação é isolada no presenter, é mais fácil manter o código estável, evitando problemas típicos de teste e manutenção da interface gráfica.
Testabilidade: O código de navegação e lógica de apresentação pode ser testado de forma mais eficaz, pois não depende diretamente da interface gráfica, que é mais difícil de testar.
Conclusão: O MVP promove uma separação clara de responsabilidades, com um foco maior no isolamento das regras de negócio da interface do usuário. O presenter tem um relacionamento de um para um com a view, diferente do que temos no MVC. Isso torna o sistema mais modular, estável e testável, além de facilitar a manutenção e portabilidade.

8.4. Model View ViewModel (MVVM)
O padrão MVVM. Criado em 2005 por Jangosman, o MVVM é uma variação do padrão MVP e, por sua vez, do MVC. O foco principal do MVVM é a separação lógica entre a interface do usuário e as regras de negócio, proporcionando uma maior flexibilidade e organização do código.

Para entendermos melhor o MVVM, é importante relembrar os três pilares que definem a arquitetura de sistemas:

Definição das Partes (Camadas):

View: Responsável pela apresentação dos dados e coleta das entradas do usuário.
ViewModel: Atua como um "orquestrador", sendo o intermediário entre a interface gráfica e a lógica de negócios.
Model: Representa a inteligência do negócio, contendo as regras de processamento e manipulação de dados.
Papel de Cada Parte:

View: Continua sendo a responsável pela apresentação dos dados e pela coleta dos inputs do usuário, mas com uma maior separação das lógicas de negócio.
ViewModel: Ao contrário do MVP, onde o apresentador tem um papel mais ativo, no MVVM o ViewModel tem a responsabilidade de orquestrar a interação entre a View e o Model. Ele manipula os dados do modelo e prepara essas informações para serem apresentadas na interface.
Model: Representa a parte lógica do negócio, realizando o processamento e interagindo com fontes de dados, como bancos de dados ou APIs.
No MVVM, a comunicação entre as camadas é baseada no conceito de Data Binding (vinculação de dados). O ViewModel interage com o Model para atualizar os dados, e, por meio de Data Binding, a View é automaticamente atualizada quando os dados no ViewModel mudam.

No MVVM, quando há uma alteração no estado do Model, essas mudanças são refletidas no ViewModel, que, por sua vez, atualiza a View de forma automática, sem a necessidade de chamadas explícitas de atualização.

Como funciona o Data Binding no MVVM?

No MVVM, a principal diferença em relação ao MVP está no uso do Data Binding. O ViewModel possui propriedades que estão diretamente vinculadas aos controles da interface (como campos de texto ou grids). Quando um valor no ViewModel é alterado, o Data Binding garante que essas alterações sejam refletidas automaticamente na interface do usuário. Além disso, se o usuário alterar os dados na interface, o ViewModel será atualizado automaticamente.

Por exemplo, imagine que o nome de usuário está sendo exibido em um campo de texto. Quando o nome do usuário é alterado no Model, o ViewModel captura essa alteração e a reflete na View. O Data Binding pode até permitir que a View envie as alterações diretamente ao ViewModel, sem necessidade de código adicional.

Diferença do MVVM para o MVC e MVP

No MVC e MVP, a comunicação entre as camadas é mais explícita. O Controller ou o Presenter assume a responsabilidade de atualizar a View com base nas alterações no Model. Já no MVVM, a maior parte dessa comunicação é automática através do Data Binding, o que facilita a manutenção e a reutilização do código, além de reduzir a quantidade de código de ligação entre as camadas.

Conclusão: O MVVM permite uma separação clara entre as regras de interface de usuário e as regras de negócio, facilitando a manutenção, reutilização e testes. O uso do Data Binding torna a comunicação entre as camadas mais eficiente e menos propensa a erros, já que as atualizações são feitas automaticamente. Com isso, o MVVM se torna uma excelente escolha para sistemas interativos, especialmente em plataformas como WPF, Xamarin e outras que oferecem suporte nativo ao Data Binding.

Capítulo 9 – Arquiteturas de Camadas

As arquiteturas centradas em domínio focam no isolamento das regras de negócio, garantindo que o núcleo da aplicação fique independente das interações externas e tecnologias específicas.

9.1. Hexagonal Architecture
Esse modelo propõe um núcleo isolado (hexágono) onde estão as regras de negócio, enquanto a comunicação com o mundo externo ocorre por portas e adaptadores.

Núcleo: Contém a lógica de negócio, independente de tecnologia.
Portas: Abstrações que expõem funcionalidades do núcleo e interagem com tecnologias externas.
Driver Ports (entrada): Disparam regras de negócio.
Driven Ports (saída): Acessam serviços externos.
Adaptadores: Implementam as portas.
Driver Adapters: Chamam o núcleo (APIs, UI). Conectam o núcleo a serviços externos (banco de dados, APIs).
Exemplo Prático: Sistema de Corretora de Valores

Domínio: Entidades como Ação, Conta, Carteira e Custódia.
Regras de Negócio: Exemplo do método ComprarAcao, que executa etapas como validação, criação de ordens e envio à B3.
Isolamento de Tecnologia: O núcleo acessa tecnologias via portas, permitindo troca de implementações sem impacto no código de negócios.
Benefícios

Isolamento do Domínio : Lógica desacoplada de infraestrutura.
Testabilidade : Possibilidade de testes unitários sem dependências externas.
Flexibilidade e Manutenibilidade: Troca de tecnologias sem afetar o núcleo.
Portabilidade: Adaptação a novos cenários com mudanças mínimas.
Aplicabilidade: Ideal para sistemas com múltiplos canais de execução, domínios complexos e requisitos elevados de testabilidade e flexibilidade.

9.2. Onion Architecture
A Onion Architecture, um modelo arquitetural interessante e prático.

Ao estudar arquiteturas baseadas em camadas, frequentemente encontramos estruturas onde o fluxo de dependência é de cima para baixo. Ou seja, uma camada depende diretamente da camada logo abaixo, criando o que chamamos de dependência transitória. Por exemplo:

A camada de interface do usuário depende da camada de regra de negócio.
A camada de regra de negócio depende da camada de dados.
Consequentemente, a camada de interface do usuário também acaba dependendo indiretamente da camada de dados.
Embora este fluxo seja comum, ele gera problemas quando as camadas dependem diretamente de infraestrutura ou tecnologias específicas. Nesse cenário, a tecnologia se espalha por diferentes camadas do sistema, criando um acoplamento indesejado
A Onion Architecture resolve esses problemas reorganizando as dependências de maneira concêntrica. As camadas seguem um fluxo de dependência de fora para dentro:

Camada Externa (Tecnologia): Mais periférica, lida com detalhes de tecnologia, como infraestrutura e frameworks.
Camada de Aplicação: Contém os serviços e lógica de aplicação que orquestram o sistema.
Camada de Domínio: Localizada no núcleo, é composta por regras de negócio puras, sem dependências externas.
Quanto mais próximo do núcleo, mais tratamos do negócio. Quanto mais periférico, mais lidamos com a tecnologia.
Principais Diretrizes:

Isolamento da Tecnologia: As camadas internas (regra de negócio e domínio) não devem depender diretamente da tecnologia. ara isso, utilizam-se abstrações que as camadas externas devem implementar.
Modelagem do Domínio: O núcleo contém as regras e modelos do domínio. Ele pode ser extensível e permitir subdivisões conforme a complexidade do negócio.
Implementação das Abstrações: As camadas externas implementam as abstrações definidas internamente e realizam a composição da aplicação.
Benefícios:

Maior Manutenibilidade: Separação clara de responsabilidades.
Estabilidade: Redução do impacto de mudanças tecnológicas no domínio.
Aceitação de Mudanças: Adaptação mais simples a novos requisitos de negócio.
Limitações:

Complexidade Inicial: Requer maior esforço de implementação e maior curva de aprendizado.
Não Ideal para Sistemas Simples: É mais adequado para sistemas complexos e de longa duração.
Considerações Finais: A Onion Architecture organiza camadas de forma concêntrica, colocando o domínio no núcleo. Essa abordagem promove o isolamento da tecnologia e ajuda a manter o foco no negócio. Embora possa exigir maior esforço inicial, o retorno em estabilidade e manutenibilidade justifica sua adoção, especialmente em projetos de grande escala e longo prazo.

9.3. Clean Architecture
O Clean Architecture é um modelo arquitetural centrado no domínio, estruturado em camadas concêntricas para separar regras de negócio de detalhes tecnológicos. Diferente de outras abordagens, como a Hexagonal Architecture, ele enfatiza a organização clara das camadas e suas responsabilidades.

Estrutura

Entidades (Central): Regras de negócio corporativas reutilizáveis em diversos sistemas.
Use Cases: Regras de negócio específicas da aplicação, expondo abstrações para dependências externas.
Interface Adapters: Adaptadores para APIs, controladores e outros canais de comunicação.
Frameworks and Drivers: Integrações externas, como bancos de dados e servidores web, sem lógica de negócio.
Fluxo de Informação

A interação começa com eventos externos (ex.: chamadas de API).
A informação flui para dentro, passando pelos Use Cases e sendo processada pelas regras de negócio.
O resultado é preparado para apresentação ao usuário por meio de portas de saída.
Benefícios

Separação de Interesses: Isola regras de negócio de infraestrutura.
Flexibilidade: Facilita a troca de tecnologias sem impactar o domínio.
Escalabilidade: Ideal para aplicações modernas e de grande porte.
O Clean Architecture permite um fluxo bem definido, onde as dependências sempre apontam para dentro, promovendo manutenibilidade e aderência às melhores práticas de desenvolvimento de software.

Capítulo 10 – Padrões para Sistemas Distribuídos

Bem-vindo ao décimo capítulo do módulo Design Patterns! Hoje, vamos iniciar o estudo dos padrões voltados para sistemas distribuídos, explorando seus desafios, modelos arquiteturais e boas práticas.

Revisão dos Capítulos Anteriores

Padrões de projeto: Conceitos fundamentais para organização do código.
Padrões de sistemas interativos: Como MVC e MVP.
Padrões focados em domínio: Separação de responsabilidades no software.
Agora, nosso foco será a integração entre aplicações, explorando sistemas autônomos que se comunicam por canais de comunicação.

10.1. Padrões para Sistemas Distribuídos
A Importância dos Sistemas Distribuídos, atualmente, é raro encontrar aplicações que funcionem isoladamente. A integração com outras aplicações e o reaproveitamento de sistemas legados são tendências cada vez mais comuns. No entanto, essa comunicação introduz desafios que tornam essencial o uso de padrões arquiteturais.

Principais Desafios

Heterogeneidade
Sistemas executando em diferentes plataformas.
Variações de latência e largura de banda nas conexões.
Integração entre sistemas operacionais distintos.
Escalabilidade
Capacidade de suportar um grande volume de acessos sem perda de desempenho.
Segurança
Proteção dos dados não apenas nos servidores, mas também na comunicação entre eles.
Flexibilidade e Tratamento de Falhas
Garantia de confiabilidade, mesmo diante de falhas.
Modelos Arquiteturais em Sistemas Distribuídos

Dentre os principais modelos de arquitetura, destacam-se:

Modelo Cliente-Servidor

O modelo mais comum, onde: Um processo cliente solicita recursos a um processo servidor.
Dependendo do fluxo, um sistema pode assumir ambos os papéis.
Variações, uso de clusters para maior disponibilidade.
Variações, Sincronização de servidores em bancos de dados críticos (exemplo: transações financeiras).
Modelo Peer-to-Peer (P2P)

Todos os nós podem atuar como cliente e servidor simultaneamente.
Utilizado em: Compartilhamento de arquivos. Edição colaborativa de documentos. Redes blockchain
Desafios: Maior complexidade de implementação. Garantia de compatibilidade entre diferentes nós. Riscos de segurança no compartilhamento direto de informações.
Middleware em Sistemas Distribuídos: O middleware atua como um intermediário entre a aplicação e a camada de rede, proporcionando um modelo de programação coeso e homogêneo. Ele facilita a comunicação entre sistemas heterogêneos e abstrai detalhes técnicos da rede.

Catálogos de Padrões: Para aprofundar o estudo sobre sistemas distribuídos, recomenda-se referências como: Martin Fowler, Gregory e Bob

10.2. Enterprise Application Patterns – Point-to-Point Channel
O padrão Point-to-Point Channel é um modelo de comunicação assíncrona em sistemas distribuídos, garantindo que cada mensagem enviada seja entregue exclusivamente a um único receptor.

Middleware Orientado a Mensagens (MOM)

O Middleware Orientado a Mensagens (MOM) facilita a comunicação entre aplicações sem exigir conexão direta entre elas. Em vez disso, as mensagens são enviadas para um canal, que:

Armazena a mensagem.
Garante sua entrega ao receptor posteriormente.
Permite comunicação assíncrona, garantindo alta velocidade e confiabilidade.
Elementos-chave do MOM:

Messenger: Integra aplicações via middleware.
Message: Dados enviados contendo comandos ou eventos.
Channel: Meio que conecta emissor e receptor.
Implementação e funcionamento

O MOM geralmente opera por meio de filas:

O emissor insere mensagens na fila gerenciada pelo middleware.
O receptor recupera as mensagens quando disponível.
A comunicação é fracamente acoplada, pois o receptor pode estar indisponível no momento do envio.
Vantagens do Middleware Orientado a Mensagens

Permite comunicação mesmo quando o receptor está offline.
Garante entrega da mensagem assim que o receptor estiver ativo.
Suporta envio assíncrono, otimizando a escalabilidade do sistema.
O Padrão Point-to-Point Channel

Esse padrão garante que:

Cada mensagem seja processada por apenas um receptor, evitando duplicações.
Mensagens sejam enviadas em ordem e com prioridade, dependendo da configuração do middleware.
O sistema seja escalável, distribuindo mensagens entre múltiplos receptores sem que uma mesma mensagem seja processada mais de uma vez.
Conclusão: O Point-to-Point Channel é um padrão essencial para garantir comunicação confiável em sistemas distribuídos. Ele permite processamento exclusivo de mensagens, essencial para cenários onde a duplicação de processamento pode gerar inconsistências ou prejuízos.

10.3. Enterprise Application Patterns – Publish Subscribe Channel
O padrão Publish Subscribe Channel é uma abordagem essencial para sistemas distribuídos orientados a eventos, permitindo que múltiplos receptores sejam notificados de um evento de forma assíncrona.

Funcionamento do Publish Subscribe Channel

Publicador (Publisher): O emissor do evento publica mensagens em um canal de comunicação.
Canal de Mensagens: Armazena notificações e garante a entrega a todos os assinantes.
Assinantes (Subscribers): Sistemas ou processos interessados no evento são notificados assim que a mensagem estiver disponível.
Garantia de Entrega: Um evento só é removido do canal após ser entregue a todos os assinantes, evitando perda de mensagens.
Diferença entre Fila e Tópico

Fila: Utilizada no padrão Point-to-Point Channel, onde cada mensagem é entregue a um único receptor.
Tópico: Utilizado no Publish Subscribe Channel, permitindo que múltiplos assinantes recebam a mesma mensagem simultaneamente.
Vantagens do Publish Subscribe Channel

Comunicação assíncrona: Publicador e assinantes não precisam estar ativos ao mesmo tempo.
Garantia de entrega: Todos os interessados recebem a notificação, mesmo que estejam temporariamente offline.
Escalabilidade: Permite que um evento seja enviado para múltiplos receptores ao mesmo tempo.
Conclusão:O Publish Subscribe Channel é um padrão eficiente para integração de sistemas distribuídos, garantindo comunicação assíncrona confiável e possibilitando notificações em larga escala.

10.4. Enterprise Application Patterns – Concurrency>
A concorrência em sistemas distribuídos é um dos desafios mais complexos do desenvolvimento, pois envolve múltiplas transações acessando os mesmos dados simultaneamente, o que pode levar a problemas difíceis de prever e testar.

Problemas Clássicos de Concorrência

Perda de Update: Uma transação sobrescreve a alteração de outra, causando perda de dados.
Leitura Suja: Uma transação lê um dado não confirmado por outra transação, levando a inconsistências caso haja rollback.
Leitura Não Repetível: Uma transação lê um dado que é alterado por outra antes de finalizar, gerando valores inconsistentes.
Leitura Fantasma: Uma consulta inicial retorna um conjunto de dados que muda antes da transação terminar, causando inconsistências.
Soluções para Concorrência

Imutabilidade: Torna os dados inalteráveis, eliminando conflitos, mas aumentando o uso de armazenamento.
Isolamento: Garante que apenas uma transação por vez acesse um conjunto de dados, prevenindo inconsistências.
Controle de Concorrência:
Otimista: Assume que conflitos são raros e resolve problemas apenas quando ocorrem, ideal para sistemas distribuídos com poucas atualizações simultâneas.
Pessimista: Bloqueia registros para evitar concorrência, garantindo consistência, mas podendo impactar o desempenho.
O controle de concorrência é essencial para sistemas distribuídos e deve ser escolhido com base nos requisitos de escalabilidade, custo de processamento e necessidade de sincronização offline.

Capítulo 11 – Arquiteturas de Sistemas Distribuídos

11.1. Enterprise Application Integration (EAI)
A Enterprise Application Integration (EAI) é uma abordagem arquitetural que busca integrar aplicações empresariais de forma eficiente e escalável, eliminando a complexidade da comunicação ponto a ponto.

Problemas da Integração Direta (Ad Hoc)

Dificuldade de gerenciar múltiplas conexões.
Impacto imprevisível de mudanças em aplicações.
Diversidade de tecnologias (JSON, XML, bancos de dados distintos).
Complexidade crescente com sistemas legados e redundantes.
Solução EAI

O EAI centraliza a comunicação entre aplicações por meio de um backbone de integração, facilitando:

A padronização da troca de informações.
A comunicação transparente entre sistemas heterogêneos.
O suporte a múltiplos padrões (arquivos, bancos de dados, RPC, mensagens assíncronas).
Benefícios do EAI

Melhora o relacionamento com clientes e parceiros.
Prolonga o ciclo de vida de sistemas legados.
Reduz o time-to-market, acelerando a transformação digital.
Facilita fusões e aquisições, simplificando a unificação de sistemas.
Otimiza processos internos, promovendo padronização e eficiência.
O EAI é uma solução robusta para a integração corporativa, combinando processos, software e hardware com um backbone central para garantir escalabilidade e eficiência.

11.2. Service Oriented Architecture (SOA)
A Service Oriented Architecture (SOA) é um padrão arquitetural que visa integrar aplicações por meio de serviços reutilizáveis, garantindo flexibilidade, governança e redução de custos.

Motivações para Adotar o SOA

Reduzir custos de manutenção e desenvolvimento.
Melhorar a governança e rastreabilidade das integrações.
Aumentar a flexibilidade e a escalabilidade da TI.
Proposta do SOA

Encapsular processos comuns de negócio em serviços.
Expor serviços por meio de interfaces abertas e padronizadas.
Integrar aplicações sem a necessidade de modificar sistemas existentes.
Serviços no SOA

São tarefas repetitivas do negócio, como consultar cotações ou contratar funcionários.
Exposição de dados corporativos, tornando informações acessíveis sem alterar aplicações.
Governança para controlar acessos, reuso e eficiência dos serviços.
Antes e Depois do SOA

Antes: Sistemas isolados, sem reaproveitamento e com múltiplos acessos diretos a bases de dados.
Depois: Aplicações compostas por serviços reutilizáveis e organizados.
Benefícios do SOA

Maior reutilização de serviços e sistemas legados.
Padronização e interoperabilidade entre diferentes tecnologias.
Automação de processos e melhoria na qualidade e segurança.
Redução do tempo de manutenção e maior eficiência operacional.
SOA x Web Services

Web services são uma tecnologia para integração.
SOA é um conceito mais amplo, focado em governança, reutilização e abstração.
Governança no SOA

Garante controle e rastreamento do ciclo de vida dos serviços.
Define políticas e regras para acesso e utilização dos serviços.
Enterprise Service Bus (ESB)

Backbone central que organiza a troca de informações entre serviços.
Facilita a integração eficiente e estruturada dentro da arquitetura SOA.
Desafios do SOA

Definir quais processos devem ser transformados em serviços.
Modelar os serviços de forma eficaz e sustentável.
Implementar uma arquitetura governável e escalável.
O SOA é uma evolução da integração corporativa, estruturando processos e dados em serviços reutilizáveis e governados, proporcionando maior eficiência e flexibilidade para as empresas.

11.3. Enterprise Service BUS (ESB)
O Enterprise Service Bus (ESB) é um componente essencial em arquiteturas SOA (Service-Oriented Architecture), funcionando como um barramento que centraliza a comunicação entre serviços. Ele roteia mensagens, facilita a descoberta de serviços, converte formatos de dados (HTML, XML, JSON, binário) e possibilita a integração de diversas tecnologias.

Entre suas principais funcionalidades estão:

Repositório de Serviços: Elimina integrações ponto a ponto e centraliza a governança.
Roteamento e Mediação: Direciona solicitações para o serviço correto sem necessidade de localização física.
Suporte a Múltiplos Formatos e Protocolos: Permite integração entre diferentes sistemas.
Orquestração e Fachadas de Serviços: Habilita a criação de fluxos de trabalho complexos.
Medição e Enriquecimento de Mensagens: Garante entrega confiável e enriquece dados sem codificação adicional.
Transformação de Mensagens: Converte formatos como XML para JSON dinamicamente.
Além disso, o ESB oferece segurança, auditoria, alta disponibilidade e estabilidade, atuando como um gateway de mensagens.

Aplicações: É amplamente utilizado na integração de sistemas corporativos, portais, aplicações móveis e workflows automatizados.

Exemplos de ESB no mercado:Algumas implementações populares incluem IBM WebSphere ESB, Oracle Service Bus e Microsoft BizTalk Server.

Conclusão:O ESB simplifica a comunicação entre serviços, melhora a governança e garante flexibilidade na arquitetura SOA, tornando a integração de sistemas mais eficiente e escalável.

Atividade Modular

Capítulo 12 – Aplicação de Padrões Arquiteturais

12.1. Aplicação de Padrões Arquiteturais – MVC
12.2. Aplicação de Padrões Arquiteturais – MVP
Módulo 4: Design Patterns, Estilos e Padrões Arquiteturais
Iniciando a nossa jornada para aprender um pouco mais sobre os princípios de arquitetura de software da atualidade, ao longo deste conteúdo trabalharemos juntos para explorar tendências relacionadas às arquiteturas modernas. Vamos analisar as atualidades e observar aquilo que tem evoluído.

Nosso foco será examinar as principais arquiteturas e tecnologias do momento, incluindo frameworks mais proeminentes que merecem maior destaque e atenção. Ao mesmo tempo, discutiremos alguns princípios básicos que devem ser considerados em contextos gerais.

O objetivo deste módulo é, de forma simples, olhar para o mercado, entender o que é mais importante e relevante e tentar trazer uma visão geral das tendências atuais. Naturalmente, um único conteúdo não é suficiente para cobrir todos os aspectos, mas daremos um panorama geral sobre o que mais se destaca. Em momentos futuros, podemos aprofundar esses conceitos de forma mais detalhada.

Abordaremos mais sobre as tendências e os princípios de arquitetura de software da atualidade. Quando falamos em atualidade, é essencial considerar aspectos como interatividade, escalabilidade, disponibilidade e outras características fundamentais, que exploraremos em maior profundidade neste módulo.

Capítulo 1 – Introdução a Arquiteturas de Sistemas Web

1.1. Evolução da Arquitetura de Sistemas Web
No início, tudo era mato. Os sites eram estáticos, mas, com o aumento da quantidade de usuários, a necessidade de processamento também cresceu. Foi então que surgiu a necessidade de trabalhar com camadas: de um lado, muitos clientes; do outro, o servidor.

Conforme o número de usuários continuou aumentando, tornou-se essencial gerenciar essa arquitetura de forma mais eficiente. Assim, as aplicações começaram a ser estruturadas em camadas, como no modelo de três camadas (frontend, backend e banco de dados).

Mas o crescimento não parou por aí. Com a demanda cada vez maior, surgiu a necessidade de distribuir o processamento. Foi então que o conceito de orientação a serviços ganhou força. Antes, todo o processamento ocorria no servidor; agora, passou a ser distribuído em módulos.

A evolução continuou e chegamos aos microserviços, um modelo associado ao conceito de computação em nuvem (cloud computing). Nesse modelo, o sistema é composto por vários módulos independentes, podendo ser implantados em diferentes infraestruturas — tanto próprias quanto de terceiros. Isso permite maior escalabilidade e flexibilidade.

Naturalmente, os módulos ficaram menores, e o próximo passo foi o serverless. Aqui, nem tudo precisa ser desenvolvido internamente. Algumas partes do sistema podem ser consumidas como serviços de terceiros, pagando-se apenas pelo uso.

1.2. Princípios Arquiteturais
Os princípios arquiteturais fundamentais que norteiam o desenvolvimento de sistemas modernos. Esses princípios são estratégias amplas que, quando seguidas, promovem a criação de arquiteturas sólidas, flexíveis e fáceis de evoluir. A seguir, apresentamos os principais pontos abordados:

1. Definição de Princípios:

Princípios Arquiteturais: Diretrizes amplas que aumentam a probabilidade de sucesso no desenvolvimento de sistemas.
Design Patterns: Soluções específicas para problemas recorrentes.
2. Importância dos Princípios:

Promovem elasticidade, escalabilidade e evolução.
Facilitam a manutenção e a evolução dos sistemas ao longo do tempo.
3. Princípios Destacados:

Separação de Responsabilidades: Cada módulo deve ter uma responsabilidade clara e específica, reduzindo complexidade e facilitando manutenção.
Evitar Duplicação de Código: Centralizar funcionalidades comuns, como autenticação, para minimizar esforços e erros em mudanças futuras.
Aberto-Fechado (Open/Closed): Componentes devem ser abertos para extensão, mas fechados para modificação, permitindo adaptações sem comprometer o código existente.
Programação para Interfaces: Definir claramente como os módulos se comunicam antes de implementar seus detalhes internos.
Dependências Explícitas: Usar injeção de dependência para deixar claras as relações entre os módulos, facilitando testes e manutenção.
Inversão de Controle: Delegar o gerenciamento de dependências para frameworks especializados, criando sistemas desacoplados e coesos.
4. Benefícios dos Princípios:

Redução de efeitos cascata em alterações.
Incremento da modularização e clareza do código.
Flexibilidade para incorporar novos módulos e funcionalidades.
Maior facilidade em testar, rastrear erros e evoluir sistemas complexos.
5. Abordagem Incremental:

Entregas básicas e refatoração contínua para ajustar e aprimorar o sistema ao longo do tempo.

1.3. Principais Arquiteturas
Arquitetura de software é o esqueleto de um sistema que define como ele será construído para atender aos requisitos funcionais e não funcionais, garantindo características de qualidade. Ela abrange o design, o planejamento e a estruturação das soluções para resolver problemas específicos de um sistema.

Uma boa arquitetura é essencial para alinhar a solução às necessidades do sistema. Por exemplo, projetar uma arquitetura que dependa de comunicação via web para um sistema em tempo real com alta latência seria uma escolha inadequada. Assim, compreender os requisitos e características do sistema é crucial para prover uma arquitetura eficiente e funcional.

Cada tipo de arquitetura tem suas vantagens e desvantagens e deve ser escolhido conforme as necessidades específicas do sistema. A arquitetura ideal equilibra escalabilidade, desempenho, manutenção e flexibilidade, garantindo a entrega de uma solução eficiente para o problema identificado.

Características Importantes da Arquitetura

Escalabilidade: Capacidade do sistema de aumentar sua capacidade de atendimento.
Manutenibilidade: Facilidade de adaptação ao longo do tempo para adicionar novas funcionalidades.
Desempenho: Resposta rápida às solicitações dos usuários.
Principais Tipos de Arquitetura

Arquitetura Monolítica

Então, vamos falar um pouco sobre as características das arquiteturas monolíticas. Como o próprio nome sugere, um sistema monolítico é único e totalmente integrado. A palavra monolítico vem de monólito, ou seja, uma única pedra sólida que não se quebra. Nesse modelo, todas as funcionalidades estão concentradas em um único código centralizado.
Esse tipo de arquitetura pode até ser modularizado internamente, mas, no fim das contas, tudo está dentro do mesmo código. E quais são as vantagens disso? Durante muitas décadas, essa foi a abordagem mais utilizada porque é mais simples de desenvolver, gerenciar e manter. O controle centralizado facilita a administração do sistema, tornando-o confiável nesse sentido.
Por outro lado, há desvantagens. À medida que o sistema cresce, sua manutenção se torna mais difícil. Imagine um código com 40 ou 50 mil linhas — isso pode tornar o desenvolvimento mais complexo. Isso não significa que todo sistema legado seja monolítico, mas muitas aplicações antigas seguem esse modelo.
Ainda assim, a arquitetura monolítica tem seu valor em determinados contextos. Se for necessário que uma aplicação rode localmente, com uma estrutura de controle centralizada, por questões de segurança ou desempenho, um sistema monolítico pode ser a melhor solução. A comunicação interna dentro de um monólito é muito rápida, o que pode trazer ganhos de performance.
O problema aparece quando é necessário escalar o sistema. Para aumentar a capacidade, normalmente é preciso comprar um servidor mais potente e reinstalar tudo, o que dificulta a escalabilidade. Esse modelo de crescimento é chamado de escalabilidade vertical, pois exige o aumento da capacidade de um único servidor, em vez de distribuir a carga entre vários.
Esse é um dos principais desafios das arquiteturas monolíticas, especialmente no contexto das aplicações web, onde o modelo cliente-servidor precisa lidar com um grande volume de requisições.
Arquitetura Cliente-Servidor

Outra característica importante das aplicações web é a arquitetura cliente-servidor. Basicamente, nesse modelo, temos vários clientes no frontend fazendo solicitações a um backend, que possui grande capacidade de processamento para responder a essas requisições.
A comunicação entre cliente e servidor normalmente ocorre por meio de algum protocolo simples, mas amplamente adotado, como o HTTP. Esse modelo trouxe diversos benefícios, como a possibilidade de separar e otimizar a utilização dos recursos do sistema. Além disso, permite utilizar diferentes tecnologias no frontend e no backend, proporcionando maior modularidade e interoperabilidade.
No entanto, como vimos ao longo da evolução da web, essa abordagem, embora melhor do que as anteriores, não resolve todos os desafios. À medida que os sistemas se tornaram mais complexos, foi necessário adicionar novas camadas além do cliente e do servidor.
Um exemplo dessa evolução foi a criação de uma terceira camada, responsável pelo banco de dados, onde ocorre a persistência das informações. Essa mudança trouxe uma separação mais clara entre a lógica de negócios e a gestão de dados, além de ser uma questão essencial para garantir eficiência no uso do hardware e da tecnologia envolvida.
A evolução da arquitetura cliente-servidor foi muito positiva e continua sendo amplamente utilizada em sistemas empresariais. No entanto, mesmo com essa divisão, o processamento ainda está concentrado em um único local. Foi justamente essa limitação que impulsionou o surgimento de novas arquiteturas, mais escaláveis e distribuídas.
Arquitetura Orientada a Serviços (SOA)

Nesse contexto, surge outro tipo de arquitetura: a orientada a serviços (SOA). Já mencionamos um pouco sobre ela, e, basicamente, sua proposta é dividir o processamento do sistema em vários módulos distribuídos, mantendo um controle gerencial centralizado.
Com a SOA, o sistema é composto por diversos módulos independentes, que se comunicam entre si, mas há um módulo central responsável pelo gerenciamento e controle dessas interações. Esse modelo proporciona uma padronização na comunicação, tornando-a geralmente mais eficiente e rápida do que a encontrada em arquiteturas cliente-servidor tradicionais.
Na SOA, a comunicação entre os módulos pode ocorrer por canais dedicados e através de APIs utilizando protocolos como SOAP ou REST. Essas abordagens são mais eficientes e flexíveis, mas ainda assim não atingem um nível de desempenho extremo.
Vantagens da SOA: Uma das grandes vantagens desse modelo é a reutilização de módulos. Um serviço implementado em um sistema pode ser reaproveitado em outros, permitindo integrações eficientes. Isso possibilita, por exemplo, que um mesmo serviço atenda a diferentes sistemas, promovendo modularização e flexibilidade.
Desafios da SOA:Por outro lado, essa arquitetura traz desafios. Além de projetar corretamente os componentes do sistema, é necessário planejar como esses componentes irão se comunicar. Criar essa estrutura e definir padrões de integração não é uma tarefa simples.
Além disso, a governança dos serviços ao longo do tempo é fundamental. Manter a organização, documentação e versionamento dos serviços exige um esforço contínuo para garantir que a arquitetura se mantenha eficiente e sustentável.
Arquitetura de Microserviços

O surgimento dos microserviços ocorreu como uma evolução natural da arquitetura orientada a serviços (SOA). Embora SOA tenha sido uma grande inovação, ela trouxe desafios, como a complexidade na integração e a governança, tornando o gerenciamento de múltiplos serviços distribuídos algo trabalhoso e difícil.
Os microserviços surgem para enfrentar esses desafios, permitindo não apenas a distribuição do processamento, mas também dos dados, de forma que o processamento ocorra localmente nos módulos.
Diferente da SOA, onde um módulo simples pode se comunicar excessivamente com outros (trocando dados entre locais distintos), os microserviços seguem o princípio de autonomia. Cada serviço opera com seus próprios dados próximos a ele, evitando a necessidade de comunicação constante com outros módulos. Assim, um serviço pode realizar transações localmente e só se comunicar com outro quando realmente precisar confirmar um dado externo.
Além disso, os microserviços podem utilizar provedores de cloud computing, reduzindo a necessidade de gerenciamento manual da infraestrutura. Isso oferece mais flexibilidade e escalabilidade, permitindo que os sistemas cresçam conforme a demanda.
Desafios da Arquitetura de Microserviços:
Entretanto, essa abordagem também aumenta a complexidade. Se já existiam desafios na SOA, nos microserviços essa modularização cresce ainda mais. Gerenciar poucos serviços já exige governança, mas administrar dezenas ou centenas de microserviços pode ser um grande desafio.
Outro ponto importante é a necessidade de balanceamento de carga. Nos microserviços, se um serviço for sobrecarregado, é possível iniciar novas instâncias para atender à demanda. No entanto, para isso funcionar corretamente, é necessário um mecanismo de balanceamento, que direcione as requisições para as instâncias disponíveis de maneira eficiente. Esse controle adiciona uma nova camada de complexidade ao sistema.
Arquitetura Serverless

A arquitetura serverless funciona da seguinte forma: imagine que você precisa desenvolver um serviço específico, mas em vez de implementá-lo do zero, você utiliza uma solução já existente. Por exemplo, se precisar realizar um cálculo específico, em vez de criar essa funcionalidade manualmente, você pode usar um serviço da Amazon (ou de outro provedor) que já tenha essa operação pronta. Assim, você apenas paga pelo uso desse cálculo e recebe o resultado sem precisar gerenciar a infraestrutura.
Vantagens do Serverless
Custo baseado no uso: o valor por execução pode ser mais alto, mas como é utilizado de forma pontual, uma boa gestão financeira pode reduzir os custos totais.
Execução sob demanda: o modelo serverless é baseado na execução de funções em resposta a eventos, sem a necessidade de gerenciar servidores.
Escalabilidade automática: a infraestrutura ajusta automaticamente a capacidade de processamento conforme a demanda. Se você precisa processar 5 requisições por dia e, de repente, a carga sobe para 10.000 requisições, o provedor (como a Amazon) escalará automaticamente para atender à demanda.
Complemento aos Microserviços: O serverless não substitui os microserviços, mas pode complementá-los. Ele permite que certas funções sejam executadas sem a necessidade de manter servidores ativos o tempo todo. Além da Amazon, há outros provedores que oferecem esse tipo de serviço, como Azure Functions e Google Cloud Functions.
Em resumo, em vez de desenvolver e manter uma infraestrutura própria, você paga apenas pelo uso de algo que já foi desenvolvido e está sempre disponível quando precisar.

Arquitetura Orientada a Eventos (Event-Driven)

Podemos pensar a arquitetura dirigida a eventos (Event-Driven Architecture - EDA) como uma evolução natural das arquiteturas anteriores. Cada nova abordagem surge para resolver problemas específicos, mas isso não significa que uma arquitetura seja universalmente melhor. Ela será mais adequada para determinadas necessidades e desafios.
Antes de aprofundarmos nesse modelo, é importante compreender que, nos últimos anos, algumas arquiteturas se tornaram amplamente utilizadas no mercado. Elas compartilham princípios semelhantes, e entre elas, podemos destacar três principais abordagens.
Arquiteturas Modernas

Onion Architecture

Qual é o conceito por trás da arquitetura Onion? A figura representativa dessa abordagem ilustra bem a ideia: no núcleo da aplicação, ficam as regras de domínio, ou seja, os serviços e modelos que definem o coração do sistema. Esse núcleo representa as regras de negócio, que devem ser priorizadas e desenvolvidas primeiro. A partir dele, o sistema se expande para fora, adicionando camadas externas conforme necessário.
Por exemplo, a camada de infraestrutura, como o banco de dados, não deve influenciar o núcleo. Pelo contrário, o banco de dados deve ser tratado como um detalhe externo, que interage com a regra de negócio, mas sem afetar diretamente sua estrutura.
Vantagens dessa abordagem

A principal vantagem dessa arquitetura é a inversão de dependências: as camadas externas dependem do núcleo, e não o contrário. Isso traz diversos benefícios, como:

Maior flexibilidade tecnológica – Se for necessário trocar o banco de dados por uma solução mais eficiente e barata, essa mudança não impacta o núcleo da aplicação.
Código mais sustentável – Como as regras de negócio estão isoladas no núcleo, qualquer alteração tecnológica externa pode ser feita sem necessidade de mudanças internas.
Manutenção facilitada – Atualizações e evoluções geralmente ocorrem mais nas bordas do sistema do que no núcleo. Com essa arquitetura, as modificações externas não exigem replicação de mudanças para dentro.
Em resumo, a Onion Architecture trabalha com uma estrutura de camadas organizadas de dentro para fora, garantindo que o sistema tenha baixo acoplamento, seja mais modular, sustentável e preparado para evoluções futuras.

Clean Architecture

A Clean Architecture é bastante similar à Onion Architecture, mas enfatiza ainda mais a modularização do sistema. Na Onion Architecture, o modelo de domínio está no núcleo da aplicação. Já na Clean Architecture, essa estrutura é organizada de forma mais explícita, seguindo uma divisão bem definida:
Entidades – Representam os conceitos fundamentais do domínio.
Casos de Uso – Definem as regras de negócio e as interações principais do sistema.
Serviços de Aplicação – Responsáveis por coordenar a comunicação entre as camadas.
A estrutura segue o mesmo princípio da inversão de dependências: as camadas externas dependem das internas, e não o contrário.
Vantagens da abordagem

A Clean Architecture parte da seguinte premissa: as regras de negócio são muito amplas, então precisamos identificar o que realmente não muda ao longo do tempo.
Por exemplo, se você está desenvolvendo um sistema de vendas, um item de venda dificilmente terá mudanças frequentes, pois faz parte do conceito central do domínio. Sendo assim, o sistema deve ser construído a partir dessas entidades estáveis, garantindo maior robustez e flexibilidade para mudanças futuras.
Além disso, essa arquitetura reforça que a maior parte das mudanças ocorrerá nas camadas externas. Por isso, a dependência deve fluir de dentro para fora. Isso evita que qualquer alteração em tecnologias externas, como um banco de dados ou um serviço de terceiros, cause mudanças em cascata dentro do núcleo da aplicação. Dessa forma, a manutenção se torna mais simples, e a evolução do sistema ocorre de maneira mais organizada e sustentável.
Hexagonal Architecture (Arquitetura Hexagonal)

A arquitetura hexagonal segue um conceito semelhante às arquiteturas anteriores, estruturando a aplicação no centro, com entidades externas se comunicando por meio do conceito de portas e adaptadores.
Portas: São os pontos de entrada e saída para troca de dados e serviços.
Adaptadores: São responsáveis por permitir que diferentes tecnologias consigam se comunicar.
Principais conceitos

Ao compararmos com a Onion Architecture, percebemos que a Hexagonal Architecture é uma evolução, mas com uma especificação menos rígida sobre a estrutura interna. O foco aqui é garantir que o sistema seja interoperável.
A ideia principal é programar para interfaces, mas expandindo esse conceito para toda a arquitetura. Isso significa que, ao desenvolver o sistema, você trabalha com portas e adaptadores, permitindo que as partes internas e externas se comuniquem sem dependências diretas.
Vantagens da abordagem

Se houver uma mudança tecnológica, como a necessidade de alterar a forma como o sistema se conecta a um desktop, basta ajustar o adaptador correspondente, sem impactar a lógica interna da aplicação. Esse modelo permite ignorar não apenas a persistência de dados, mas também outros atributos secundários, tornando a aplicação mais flexível e adaptável a diferentes cenários.

O grande objetivo das arquiteturas modernas, incluindo a Hexagonal Architecture, é oferecer:

Facilidade de evolução
Alta capacidade de manutenção
Flexibilidade para diferentes contextos ao longo do tempo
Capítulo 2 – Frameworks SPA para desenvolvimento WEB

2.1. SPA – Single Page Application
2.2. Principais frameworks da atualidade: Angular, Vue.js e React.
Capítulo 3 – Introdução às APIs e Arquiteturas REST e GraphQL

3.1. Introdução às APIs REST
Uma API (Interface de Programação de Aplicações) é uma ponte que permite a comunicação entre sistemas distintos. Em outras palavras, se um programa utiliza a tecnologia "X" e outro a tecnologia "Y", a API define um padrão de comunicação que possibilita a troca de informações entre esses dois programas, mesmo que estejam em locais diferentes.

Além de definir o protocolo de comunicação, uma API também implementa toda a infraestrutura necessária para essa interação. Ela estabelece regras sobre como mensagens devem ser enviadas e recebidas, incluindo detalhes como formato e conteúdo das solicitações e respostas.

REST e o Conceito de Comunicação Web:Uma das formas mais conhecidas de construir APIs é o REST (Representational State Transfer), que surgiu nos anos 2000 para resolver problemas relacionados à comunicação no contexto web. O REST é baseado no protocolo HTTP, amplamente utilizado na internet. Sua principal característica é ser stateless, ou seja, não mantém informações do estado do cliente entre requisições.

Principais Métodos HTTP no REST:

GET: Usado para obter dados.
POST: Inserir novos dados.
PUT/PATCH: Atualizar dados existentes.
DELETE: Remover dados.
Cada método trabalha com identificadores únicos de recursos, conhecidos como URIs (Uniform Resource Identifiers), que indicam os endereços dos recursos na rede.

Vantagens e Desafios do REST

Vantagens:

Simplicidade: Utiliza padrões conhecidos (HTTP).
Escalabilidade: Fácil de expandir com novos serviços.
Integração: Compatível com diversas plataformas.
Adotado Mundialmente: É amplamente conhecido e utilizado.
Desafios:

Insegurança: Informações transmitidas no formato JSON são facilmente legíveis.
Limitações de Cache: Necessidade de controles secundários para otimizar desempenho.
Manutenção de Versões: Gerenciar múltiplas versões pode se tornar complexo ao longo do tempo.
Autenticação em APIs REST

Para garantir que apenas clientes autorizados acessem os recursos, é necessário implementar mecanismos de autenticação. Alguns exemplos incluem:

Token JWT (JSON Web Token): o Gera um token exclusivo para o cliente, que deve ser enviado em cada requisição.
OAuth: Um protocolo de autorização amplamente utilizado, como o Google OAuth, para validar clientes.
API Keys: Chaves exclusivas associadas a cada cliente, utilizadas para autenticação e controle de acesso.
Respostas e Erros Padrão em APIs REST

O REST adota códigos de status HTTP para indicar o resultado de uma solicitação, como:

200 (OK): Solicitação bem-sucedida.
404 (Not Found): Recurso não encontrado.
500 (Internal Server Error): Erro no servidor.
A utilização de APIs REST apresenta uma solução eficiente para a comunicação entre sistemas distintos, especialmente em contextos web. Sua simplicidade e flexibilidade o tornaram amplamente adotado. No entanto, é fundamental estar atento às suas limitações, como questões de segurança e gerenciamento de versões, para garantir que as APIs atendam aos requisitos de sistemas modernos e escaláveis.

3.2. Introdução ao GraphQL
A solução que vamos apresentar é robusta, ideal para cenários complexos, mas com um custo mais elevado. Para problemas simples, ela pode não ser a melhor escolha, pois não substitui totalmente o REST, mas sim complementa, dependendo do caso de uso.

Essa tecnologia foi desenvolvida pelo Facebook em 2012 para atender às suas necessidades específicas. Na rede social, o tipo de consulta dos usuários não era simples como buscar apenas uma linha em um banco de dados. Um perfil de usuário, por exemplo, inclui foto, vídeos, postagens, curtidas e outros dados armazenados em diferentes locais. O REST tradicional, nesse cenário, muitas vezes retornava dados desnecessários, resultando em ineficiência. Para resolver isso, o Facebook desenvolveu essa nova abordagem e, em 2015, disponibilizou-a para a comunidade.

A grande vantagem dessa solução é a possibilidade de delimitar exatamente quais dados serão retornados ou manipulados em cada requisição. Por exemplo, se há 50 informações disponíveis, você pode solicitar apenas as 4 ou 5 necessárias, evitando sobrecarga de dados. Além disso, ela permite integrar dados de múltiplas fontes em uma única solicitação, otimizando a comunicação entre cliente e servidor.

No REST, o servidor costuma retornar um conjunto fixo de dados para cada consulta. Já na abordagem apresentada, a consulta é flexível e ajustada às necessidades específicas do cliente. Isso elimina problemas como "overfetching" (trazer mais dados do que o necessário) e "underfetching" (trazer menos dados do que o necessário).

A solução utiliza um esquema fortemente tipado. Antes de iniciar, você define quais informações estarão disponíveis para consulta ou alteração. Essa abordagem melhora a gestão de memória e garante mais segurança ao sistema. Por exemplo:

Query: Utilizada para obter dados.
Mutation: Utilizada para alterar dados.
Subscription: Permite obter informações em tempo real.
Esses conceitos tornam a solução ideal para sistemas que precisam lidar com grande volume de dados e interações complexas.

Ferramentas de apoio

Existem várias ferramentas que facilitam o uso dessa abordagem:

Apollo: Ajuda no gerenciamento de consultas do lado do cliente.
Playground: Permite testar as consultas de forma interativa antes de implementá-las.
Relay: Facilita a integração com outras tecnologias.
Embora o número de ferramentas ainda seja menor comparado ao REST, elas são robustas e atendem bem às necessidades do mercado.
Vantagens:

Redução do fluxo de dados entre cliente e servidor.
Flexibilidade nas consultas, trazendo apenas os dados necessários.
Integração simplificada de múltiplas fontes de dados.
Desafios:

Esquema fortemente tipado, exigindo planejamento detalhado no início.
Curva de aprendizado maior do que o REST tradicional.
Controle de cache diferenciado, com uma abordagem distinta do REST.
3.3. Demonstração do desenvolvimento de API
Capítulo 4 – Documentação de APIs com SWAGGER

4.1. Documentação de APIs com SWAGGER
O Swagger é uma ferramenta que permite documentar APIs REST de forma prática e visual. Antes de entender como ele funciona, é importante compreender o conceito de APIs REST.

Conceito de REST

REST (Representational State Transfer) é um estilo arquitetural para construção de APIs. Nem toda API desenvolvida utilizando o protocolo HTTP é RESTful, pois, para ser considerada assim, precisa aderir aos princípios desse modelo arquitetural.
O Swagger auxilia na construção de APIs bem estruturadas, RESTful e, principalmente, bem documentadas.
Benefícios do Swagger

Ferramentas gráficas: Proporcionam uma abordagem visual e intuitiva para construção de APIs.
Conformidade com a especificação OpenAPI: Assegura uma interface padronizada e consistente.
Facilidade de documentação: Garante clareza e concisão na documentação da API.
Automação: Permite a geração automática de documentação e até de código para requisições.
Por que é importante documentar APIs?

Clareza e entendimento: Todos os envolvidos (desenvolvedores, testadores e clientes) compreendem o propósito da API.
Facilidade de integração: Terceiros conseguem integrar suas aplicações rapidamente.
Manutenção e evolução: O sistema pode ser atualizado de forma mais ágil e organizada.
Componentes Básicos de uma Documentação com Swagger

Pontos de acesso (Paths): Especificação dos endpoints disponíveis na API.
Métodos HTTP: Definição dos métodos suportados por cada endpoint (GET, POST, PUT, DELETE, etc.).
Parâmetros: Descrição dos parâmetros aceitos pela API (query parameters, headers, body, etc.).
Respostas: Documentação das respostas padrão, indicando o que a API retorna em caso de sucesso ou erro.
Segurança: Informações sobre autenticação e autorização, como o uso de tokens ou chaves de acesso.
Arquivo de Configuração

A configuração do Swagger exige um arquivo no formato JSON ou YAML, que define:

Estrutura e endpoints da API.
Regras de validação.
Detalhes das respostas e erros.
Testes com Swagger

Uma das principais vantagens do Swagger é sua interface gráfica interativa, que permite:

Testes dinâmicos: Realizar requisições e validar respostas sem a necessidade de executar a API em produção.
Facilidade de uso: Equipes conseguem verificar a documentação e realizar testes de integração de maneira intuitiva.
Vantagens e Desafios do Swagger

Facilidade de uso: Interface visual clara e amigável.
Agilidade no desenvolvimento: Geração automática de código e documentação.
Integração entre equipes: Permite que times multidisciplinares trabalhem de forma eficiente.
Desafios

Configuração inicial: Exige a criação de um arquivo de configuração correto (JSON ou YAML).
Curva de aprendizado: Requer um bom entendimento sobre REST e a especificação OpenAPI.
O Swagger é amplamente utilizado devido à sua capacidade de simplificar o processo de documentação e integração de APIs. Embora REST nem sempre seja o método mais rápido ou eficiente, a necessidade crescente de comunicação entre serviços distribuídos torna ferramentas como o Swagger cada vez mais relevantes.

Capítulo 5 – Demonstração de Arquiteturas de Microsserviços

Capítulo 6 – Arquiteturas Orientadas a Eventos

6.1. Introdução às Arquiteturas Orientadas a Eventos
A arquitetura orientada a eventos baseia-se na comunicação de eventos, ou seja, mudanças significativas de estado, como "pedido solicitado", "pedido processado", etc. Essa abordagem otimiza a troca de informações entre sistemas, tornando a comunicação mais eficiente, leve e rápida, ideal para contextos de alto desempenho e sistemas distribuídos.

Por exemplo, em vez de uma loja notificar individualmente cada cliente sobre mudanças de preços, ela atualiza um painel central (repositório) acessado pelos clientes interessados. Assim, reduz-se o volume de transações e a troca de dados, tornando o sistema mais ágil e menos dependente de interações constantes.

Os principais componentes dessa arquitetura incluem:

Produtores de eventos: Geram e disparam eventos (ex.: loja alterando preços).
Consumidores de eventos: Recebem e processam eventos relevantes (ex.: clientes verificando preços).
Event Bus: Canal central de comunicação que transporta os eventos entre produtores e consumidores.
Modelos de comunicação como "publish-subscribe" e "event streaming" são usados para atender às diferentes necessidades de sistemas e consumidores. A arquitetura orientada a eventos permite sistemas mais desacoplados, modulares e escaláveis, sendo comum em serviços distribuídos. Ela também melhora a resiliência a falhas, já que problemas em consumidores não afetam produtores ou outros consumidores.

Por fim, é crucial garantir rastreamento e consistência na comunicação, especialmente em sistemas críticos, como bancos, onde histórico e verificações são essenciais.

Resumo: A aborda arquiteturas orientadas a eventos, que otimizam a comunicação em sistemas distribuídos, baseando-se na troca de eventos significativos (mudanças de estado). Os principais componentes incluem produtores, consumidores e um Event Bus para transporte. Essa abordagem reduz a troca de dados, facilita a escalabilidade e melhora a resiliência do sistema. Exemplos práticos incluem sistemas de notificações centralizadas, como atualizações de preços em lojas. Modelos como "publish-subscribe" e "event streaming" são usados conforme a necessidade dos consumidores. A arquitetura promove flexibilidade, modularidade e eficiência, sendo especialmente útil em contextos de serviços distribuídos e alta demanda.

6.2. Demonstração de uma Aplicação Orientada a Eventos
A arquitetura orientada a eventos tem como base o conceito de evento, que é uma mudança de estado que pode representar uma atualização ou algo significativo que precisa ser comunicado. Por exemplo, a criação de um novo pedido ou o registro de um novo usuário. Esses eventos indicam alterações relevantes no sistema.

Vimos que, nessa arquitetura, existem alguns elementos principais. Um deles é o conceito de publicação e assinatura (Pub/Sub), onde temos um elemento responsável por publicar eventos e outros que consomem ou "assinam" esse conteúdo. Além disso, existem diferentes formas de implementação, como o fluxo contínuo de eventos, que podem ser gerados de maneira esporádica, com base em mudanças de estado, ou de forma contínua.

Na 6.2, vamos explorar mais profundamente a aplicação prática da arquitetura orientada a eventos, com foco no conceito de publisher (publicador). Implementaremos, de forma prática, um publicador e alguns elementos consumidores para demonstrar o funcionamento desse modelo. Esse tipo de arquitetura nos permite criar sistemas desacoplados, facilmente escaláveis, resilientes e com grande flexibilidade para incorporar novos elementos.

Capítulo 7 – Introdução às Arquiteturas de Sistemas Mobile

7.1. Desenvolvimento Móvel Nativo
Vamos dar sequência à nossa disciplina Princípios de Arquiteturas de Software da Atualidade. Neste capítulo, abordaremos o desenvolvimento mobile e a arquitetura desses sistemas.

Esse capítulo está estruturado em três formas principais de desenvolvimento: nativo, cross-platform e híbrido. Na de hoje, focaremos no desenvolvimento nativo, explorando seus conceitos e características. Vamos falar sobre o que é o desenvolvimento nativo no contexto mobile, com exemplos específicos de Android e iOS, além de discutir as tendências e vantagens desse modelo.

O que é o desenvolvimento nativo? Imagine que você tem dois sistemas operacionais principais no mercado: Android e iOS. Desenvolver algo de forma nativa significa criar um software especificamente para cada um desses sistemas operacionais, utilizando suas linguagens e ferramentas dedicadas.

Por exemplo:

Para Android, você utiliza Java ou Kotlin.
Para iOS, você utiliza Swift ou Objective-C.
Essas aplicações são desenvolvidas exclusivamente para uma plataforma, aproveitando ao máximo os recursos oferecidos por ela.

Vantagens do desenvolvimento nativo: Acesso total aos recursos do sistema operacional Com o desenvolvimento nativo, você consegue utilizar todos os recursos e APIs específicas de cada plataforma, como gráficos avançados, bibliotecas dedicadas e interações com hardware.

Melhor desempenho: Aplicativos nativos são mais rápidos e eficientes, pois são otimizados para o sistema operacional em que rodam.

Experiência de usuário aprimorada: Por serem desenvolvidos para um sistema específico, os aplicativos nativos oferecem interfaces mais fluídas e melhor integração com o sistema operacional.

Adequação para casos específicos: Para aplicações como jogos, que exigem gráficos avançados, ou sistemas com altas demandas de segurança, como software militar, o desenvolvimento nativo é a melhor escolha.

Desafios do desenvolvimento nativo Custo elevado: Como você precisa desenvolver dois códigos distintos (um para Android e outro para iOS), o custo de desenvolvimento e manutenção é maior.

Duplicação de esforço: Cada sistema operacional exige sua própria base de código, o que aumenta a complexidade de gerenciamento e manutenção.

Ferramentas e linguagens principais

Para Android:

Java: Uma linguagem versátil, mas considerada verbosa. Ideal para equipes já familiarizadas com a linguagem.
Kotlin: Mais moderna e concisa que Java, é atualmente a linguagem preferida para desenvolvimento Android.
Para iOS:

Swift: Uma linguagem poderosa, projetada pela Apple, que tem se tornado a principal escolha para desenvolvimento iOS.
Objective-C: Embora ainda usada, está em desuso em favor do Swift.
Tendências no desenvolvimento nativo, Facilitação do desenvolvimento, Ferramentas como Android Studio e Xcode oferecem ambientes integrados (IDEs) que aceleram o processo de criação de aplicativos, com bibliotecas e componentes nativos prontos.

Realidade aumentada e virtual: Linguagens e plataformas estão cada vez mais equipadas para suportar aplicações inovadoras, como realidade aumentada e computação de borda.

Evolução das linguagens

Kotlin está ganhando protagonismo no desenvolvimento Android.
Swift continua como a principal escolha para iOS, com ferramentas como SwiftUI, que facilitam a criação de interfaces gráficas.
Conclusão: O desenvolvimento nativo é uma excelente escolha quando se deseja criar aplicativos otimizados e robustos, aproveitando ao máximo os recursos do sistema operacional. Contudo, deve ser utilizado com cuidado, considerando seu custo elevado e a necessidade de gerenciamento de múltiplas bases de código.

7.2. Desenvolvimento Móvel Crossplataform
Agora, vamos explorar o desenvolvimento cross-plataform, ou seja, o desenvolvimento multiplataforma. Esse modelo permite criar um único código que pode ser utilizado em mais de uma plataforma, como iOS e Android.

O que é o Desenvolvimento Cross-Plataform? O desenvolvimento cross-plataform refere-se a criar uma base única de código que será utilizada em diferentes sistemas operacionais. Isso contrasta com o desenvolvimento nativo, onde cada plataforma (iOS e Android) exige um código específico. A principal vantagem desse modelo é a economia de tempo e custos, uma vez que você desenvolve apenas uma vez e o código é adaptado para rodar nas diferentes plataformas.

Por outro lado, como é uma solução genérica que visa atender a múltiplos sistemas, ela pode apresentar limitações em desempenho e acesso a recursos específicos de cada plataforma. Algumas características técnicas podem estar disponíveis apenas no iOS ou no Android, e as ferramentas cross-plataform buscam equilibrar essas diferenças. Assim, o desempenho pode ser bom, mas dificilmente será igual ao de uma aplicação nativa.

Ferramentas de Desenvolvimento Cross-Plataform: O Xamarin é uma plataforma de desenvolvimento cross-plataform criada pela Microsoft. Ele utiliza a linguagem C# e permite desenvolver interfaces gráficas e lógicas de negócio compartilhadas entre iOS e Android.

Vantagens do Xamarin:

Integração com o ecossistema Microsoft (.NET): A ferramenta oferece suporte completo ao ambiente Microsoft, proporcionando confiabilidade e boas práticas.
Código compartilhado: A lógica de negócio pode ser compartilhada entre as plataformas, evitando duplicação de código.
Acesso às APIs nativas: O Xamarin utiliza associações para acessar APIs específicas de cada plataforma, garantindo uma experiência próxima ao nativo.
Desempenho: Apesar de não ser totalmente nativo, o código é compilado para o ambiente específico (iOS ou Android), garantindo um desempenho próximo ao esperado.
Limitações do Xamarin:

Tamanho dos aplicativos: Aplicativos desenvolvidos com Xamarin podem ser maiores em comparação aos nativos, devido às bibliotecas adicionais incluídas no pacote.
Ecossistema menor: A base de bibliotecas e ferramentas é limitada ao ambiente Microsoft.
Complementação de código: Em alguns casos, é necessário adicionar trechos específicos para cada plataforma, caso haja funcionalidades exclusivas que não podem ser compartilhadas.
Kotlin Multiplatform (KMM): Outra ferramenta interessante é o Kotlin Multiplatform, uma solução multiplataforma da JetBrains baseada em Java. Essa ferramenta permite desenvolver um único código que pode ser compilado para diversas plataformas, incluindo dispositivos móveis, desktops e até dispositivos IoT, como relógios e geladeiras.

Vantagens do Kotlin Multiplatform:

Código único: Assim como no Xamarin, a lógica de negócio pode ser compartilhada entre plataformas.
Simulador integrado: Permite testar aplicativos em diferentes dispositivos e resoluções, sem a necessidade de hardware específico (como um dispositivo físico da Apple para testar iOS).
Portabilidade: A portabilidade do Kotlin permite que o código seja executado em diversas plataformas, além de facilitar o desenvolvimento com APIs nativas.
Limitações do Kotlin Multiplatform:

Complexidade de aprendizado: Para quem não tem experiência com Java ou Kotlin, pode haver uma curva de aprendizado mais acentuada.
Desempenho: Embora o desempenho seja bom, ele não atinge o nível de um aplicativo totalmente nativo.
Licenciamento: Alguns recursos avançados podem exigir o pagamento de licenças, enquanto a versão gratuita é limitada a projetos menores.
Conclusão: Tanto o Xamarin quanto o Kotlin Multiplatform são ótimas opções para o desenvolvimento cross-plataform. O Xamarin é mais indicado para desenvolvedores com experiência no ecossistema .NET, enquanto o Kotlin Multiplatform oferece maior flexibilidade para quem busca uma solução que abranja diversas plataformas além de iOS e Android.

Ambas as ferramentas oferecem desempenho próximo ao nativo, mas não chegam a superar o desenvolvimento nativo em termos de performance e acesso completo aos recursos da plataforma. A escolha entre elas dependerá do contexto do projeto, das necessidades específicas e da experiência da equipe de desenvolvimento.

7.3. Desenvolvimento Móvel Híbrido
Vamos dar sequência à nossa disciplina Princípios de Arquitetura de Software da Atualidade. Estamos no Capítulo 7, falando sobre as diferentes formas de desenvolvimento móvel, também conhecido como desenvolvimento mobile.

Já abordamos o desenvolvimento nativo e o desenvolvimento cross-platform, e nesta entraremos no conceito de desenvolvimento híbrido.

O que é o Desenvolvimento Híbrido? De forma geral, o desenvolvimento híbrido utiliza conceitos de desenvolvimento web para criar aplicações que podem ser executadas em diversas plataformas. Enquanto os aplicativos nativos são desenvolvidos com bibliotecas específicas para cada sistema operacional, e o cross-platform permite o desenvolvimento de um único código para ser adaptado a diferentes plataformas, o desenvolvimento híbrido vai além. Ele utiliza tecnologias web para criar aplicativos que podem rodar em Android, iOS, e até mesmo em navegadores e desktops.

Por exemplo, no modelo híbrido, você cria uma aplicação web que é exibida como se fosse um aplicativo nativo no dispositivo móvel. Isso reduz custos de desenvolvimento, pois é um processo mais rápido e simples, mas tem limitações quando se trata de aplicativos que exigem alta performance, interfaces gráficas complexas, ou acesso intenso a recursos nativos dos dispositivos.

Ferramentas de Desenvolvimento Híbrido: Flutter e React Native, exploraremos duas ferramentas amplamente utilizadas no desenvolvimento híbrido: o Flutter e o React Native. Vamos falar sobre suas características, vantagens e quando optar por cada uma.

Flutter

O Flutter é um framework desenvolvido pelo Google e utiliza a linguagem Dart. Algumas características e vantagens:

Linguagem Dart: Para usar o Flutter, é necessário conhecimento em Dart, o que pode ser uma barreira para quem não conhece essa linguagem.
Interface gráfica rica e declarativa: O Flutter oferece uma biblioteca vasta para criar interfaces gráficas modernas e responsivas de forma rápida e eficiente.
Compilação para código nativo: Apesar de ser um framework híbrido, o Flutter realiza a compilação para código nativo, garantindo um desempenho muito próximo ao de aplicativos nativos.
Facilidade no desenvolvimento: Por ser um framework com muitas funcionalidades prontas, ele acelera o desenvolvimento, especialmente para aplicações que não demandam uso intenso de recursos gráficos.
Para utilizar o Flutter, é necessário instalar o SDK e configurar uma IDE compatível.
React Native

O React Native é um framework desenvolvido pelo Facebook que utiliza a linguagem JavaScript. Algumas características e vantagens:

Linguagem JavaScript: Diferentemente do Flutter, que exige o aprendizado de Dart, o React Native utiliza JavaScript, uma linguagem amplamente conhecida, facilitando a curva de aprendizado.
Componentes reutilizáveis: Permite a reutilização de componentes do React para o desenvolvimento móvel, o que acelera o processo de criação de aplicativos.
Ambiente de desenvolvimento: Pode ser configurado usando ferramentas como o Expo, que simplifica o desenvolvimento e oferece um ambiente visual mais acessível.
Desempenho satisfatório: Embora o React Native não tenha o mesmo nível de desempenho que o Flutter em aplicações mais pesadas, ele é suficientemente eficiente para a maioria das aplicações híbridas.
Comparação entre Flutter e React Native

Ao comparar as duas ferramentas, não há uma solução universalmente "melhor". A escolha depende do contexto e dos requisitos do projeto.

Linguagem de programação: O Flutter utiliza Dart, uma linguagem menos difundida, enquanto o React Native usa JavaScript, que tem maior adesão e comunidade de desenvolvedores.
Interface gráfica: O Flutter oferece uma biblioteca rica e personalizável, sendo uma boa escolha para aplicativos que demandam interfaces elaboradas.
Curva de aprendizado: O React Native tem uma curva de aprendizado mais rápida devido ao uso de JavaScript e à popularidade da linguagem.
Desempenho: O Flutter, com sua compilação para código nativo, oferece um desempenho ligeiramente superior em aplicações que exigem mais processamento. Já o React Native compensa com flexibilidade e facilidade de uso.
Tendências no Desenvolvimento Híbrido

Flutter: O número de usuários e desenvolvedores que utilizam o Flutter tem crescido significativamente, o que contribui para o aumento de funcionalidades e melhorias no framework.
React Native: O uso do Expo tem facilitado ainda mais o desenvolvimento com React Native, tornando o processo mais intuitivo e eficiente.
Os frameworks híbridos estão cada vez mais eficientes e resolvendo problemas com soluções de custo-benefício atraente, especialmente para projetos menos complexos.
Capítulo 8 – Arquiteturas Cloud Native e Serverless

8.1. Introdução às Arquiteturas Cloud Native
Arquiteturas cloud-native são aquelas projetadas, desde o início, para operar em ambientes de nuvem. Diferentemente de aplicações que foram criadas para rodar em servidores locais e posteriormente migradas para a nuvem, as aplicações cloud-native já são concebidas com componentes preparados para aproveitar ao máximo os recursos oferecidos por provedores de nuvem. Isso inclui escalabilidade, resiliência, agilidade no desenvolvimento e facilidade de provisionamento.

As principais características desse tipo de arquitetura são a escalabilidade dinâmica e a flexibilidade. Por exemplo, em momentos de alta demanda, como na Black Friday, a infraestrutura pode ser automaticamente ajustada para atender ao aumento no número de solicitações. Quando a demanda diminui, os recursos são desprovisionados, otimizando custos.

Componentes Fundamentais das Arquiteturas Cloud-Native

Contêineres: Os contêineres encapsulam a aplicação e suas dependências em um único pacote, o que facilita a replicação e o provisionamento em diferentes ambientes. Diferentemente de máquinas virtuais, os contêineres compartilham o mesmo sistema operacional, o que os torna mais leves e eficientes. Ferramentas como Docker permitem criar e gerenciar contêineres de forma prática.
Orquestração: A orquestração, realizada por ferramentas como Kubernetes, gerencia o ciclo de vida dos contêineres. Ela permite provisionar, escalar, atualizar e desprovisionar recursos de forma automática, garantindo que a infraestrutura acompanhe as demandas de uso.
Microserviços: A arquitetura de microserviços divide uma aplicação em pequenos serviços independentes. Isso facilita a manutenção, a escalabilidade e o desenvolvimento incremental. Cada microserviço pode ser implementado, testado e escalado separadamente.
Benefícios :

Escalabilidade: Possibilidade de escalar verticalmente (aumentando os recursos de uma única instância) ou horizontalmente (adicionando novas instâncias).
Resiliência: Capacidade de recuperação automática em caso de falhas.
Flexibilidade: Infraestrutura adaptável às mudanças de demanda.
Agilidade: Entregas contínuas (CI/CD) tornam o desenvolvimento mais rápido e eficiente.
Otimização de custos: Pagamento baseado no uso, o que reduz gastos desnecessários.
Desafios e Considerações

Gerenciamento de custos: Se os recursos não forem desprovisionados adequadamente, os custos podem aumentar.
Complexidade: A gestão de uma infraestrutura dinâmica exige conhecimento técnico e ferramentas apropriadas.
Segurança: É essencial implementar boas práticas de segurança para proteger dados e garantir conformidade com regulamentações locais e internacionais.
Ferramentas e Tecnologias

Docker: Gerenciamento de contêineres.
Kubernetes: Orquestração de contêineres.
Terraform: Automação do provisionamento de infraestrutura.
CI/CD: Integração e entrega contínuas para atualizações rápidas e seguras.
Exemplos de Uso

Aplicações Web: Ambientes de grande variação de acesso.
Processamento de Dados: Execução de cargas intensivas de forma escalável.
Gerenciamento de Dispositivos IoT: Escalabilidade para lidar com o aumento de dispositivos conectados.
Conclusão: As arquiteturas cloud-native são projetadas para maximizar as vantagens oferecidas pela nuvem, como flexibilidade, escalabilidade e resiliência. No entanto, exigem planejamento cuidadoso para otimizar custos, gerenciar a segurança e acompanhar a evolução das demandas ao longo do tempo.

8.2. Introdução às Arquiteturas Serverless
Vamos falar um pouco mais sobre arquiteturas serverless, um tema muito importante quando discutimos arquiteturas atuais e tendências futuras. Abordaremos os conceitos de arquiteturas serverless, os componentes necessários, as vantagens de utilizá-las e os casos típicos de aplicação.

Primeiramente, é importante entender o conceito. Quando falamos em "serverless", na prática, isso não significa "sem servidor". O servidor existe, mas não é de responsabilidade do dono da aplicação. Ele é gerenciado por um terceiro, e o desenvolvedor não precisa se preocupar com essa infraestrutura.

Evolução das Arquiteturas

Ao longo do tempo, as arquiteturas de software passaram por várias transformações:

Arquiteturas Monolíticas: O software era desenvolvido de forma centralizada, em um único sistema.
Arquiteturas Orientadas a Serviços: Surgiu a ideia de modularizar e distribuir o processamento pela rede, evitando sobrecarregar um único servidor.
Microserviços: Com o tempo, os serviços foram fragmentados em unidades menores, chamadas microserviços, que podem ser gerenciadas e executadas de forma independente.
Arquiteturas Serverless: A evolução seguinte foi a fragmentação de microserviços em funções específicas que podem ser executadas sob demanda por um provedor externo.
O conceito de serverless é simples: imagine que você tem uma função específica no seu código que é executada milhares de vezes por dia, como um cálculo matemático. Em vez de sobrecarregar o seu servidor para realizar essa função, você a delega a um provedor externo, que realiza o processamento e retorna o resultado. Isso permite que você foque no desenvolvimento da lógica da sua aplicação, sem se preocupar com a infraestrutura ou com a escalabilidade.

Características Principais do Serverless

Gerenciamento terceirizado: Toda a infraestrutura, incluindo escalabilidade e manutenção, é responsabilidade do provedor.
Pagamento por uso: Você só paga pelas funções executadas, sem a necessidade de manter servidores provisionados continuamente.
Desempenho otimizado: Recursos são alocados dinamicamente, e o provedor garante que a demanda seja atendida.
Características Principais do Serverless

Gerenciamento terceirizado: Toda a infraestrutura, incluindo escalabilidade e manutenção, é responsabilidade do provedor.
Pagamento por uso: Você só paga pelas funções executadas, sem a necessidade de manter servidores provisionados continuamente.
Desempenho otimizado: Recursos são alocados dinamicamente, e o provedor garante que a demanda seja atendida.
Modelos de Implementação

Existem dois modelos principais em arquiteturas serverless:

Functions as a Service (FaaS): Funções individuais são executadas sob demanda. Exemplos incluem AWS Lambda, Google Cloud Functions e Azure Functions.
Backend as a Service (BaaS): Serviços de backend, como autenticação, banco de dados ou armazenamento, são disponibilizados como serviços gerenciados. Você pode utilizar soluções de provedores para evitar provisionar servidores dedicados.
Benefícios

Escalabilidade automática: A infraestrutura se ajusta automaticamente à demanda.
Redução de custos: Você paga apenas pelo uso, sem custos fixos de servidores ociosos.
Foco na lógica da aplicação: Não é necessário gerenciar hardware ou dimensionar infraestrutura.
Desafios

Latência inicial (Cold Start): As primeiras execuções de funções após períodos de inatividade podem ser mais lentas.
Limitações de execução: Algumas plataformas impõem limites de tempo (geralmente entre 5 e 30 minutos por execução).
Gerenciamento de estado: Como os dados não são mantidos no servidor, o controle do estado precisa ser feito pelo cliente.
Casos de Uso

Automação de processos: Ideal para processos repetitivos e pré-determinados.
APIs e microserviços ágeis: Facilita o desenvolvimento de APIs e a escalabilidade.
Mensageria e eventos: Respostas a mudanças de estado em sistemas.
Processamento pontual: Execução de cálculos ou tarefas específicas sob demanda.
Tendências Futuras

Integração com contêineres: Combinar serverless com contêineres para criar arquiteturas ainda mais flexíveis.
Serverless de longo prazo: Suporte a funções mais complexas e com tempos de execução maiores, fragmentando tarefas em etapas menores.
Capítulo 9 – Introdução às FaaS (AWS Lambda e Azure Functions)

Neste capítulo 9, vamos nos aprofundar no conceito de funções FaaS (Function as a Service), trazendo um pouco da realidade da Amazon, da Microsoft e da ESA sobre como trabalhar com esses conceitos. Antes de entrar especificamente nas plataformas dos grandes provedores, faremos uma breve introdução ao conceito de funções FaaS.

9.1. Funções como Serviço
Quando falamos em FaaS, estamos basicamente nos referindo ao uso da computação em nuvem para executar partes do código sem a necessidade de gerenciar toda a infraestrutura por trás. Nesse modelo, você deixa o código hospedado em um provedor de serviço. Sempre que precisar que esse código seja executado, você paga apenas pelo uso. Trata-se de um conceito que visa fragmentar ainda mais o código e distribuí-lo ao longo da rede de forma eficiente.

Objetivo do Modelo: O principal objetivo desse modelo é permitir que o código esteja hospedado em um servidor de terceiros, sem a necessidade de provisionar um container ou uma máquina dedicada. O provedor de serviço gerencia toda a infraestrutura. Esse ambiente pode abrigar códigos de diversos clientes, sendo ativados apenas quando ocorre uma solicitação específica.

A ideia central é criar uma estrutura na qual um evento dispara a execução de uma função. Assim, você consegue executar o código em resposta a um evento sem se preocupar com o provisionamento ou a manutenção da infraestrutura.

Características do FaaS

Escalabilidade automática: O sistema escala automaticamente conforme a demanda. Não é necessário reservar previamente capacidade para atender a picos de utilização.
Pagamento por uso: Você paga apenas pelo tempo de execução do código, tornando o custo mais eficiente.
Despreocupação com infraestrutura: Toda a gestão da infraestrutura é realizada pelo provedor.
Limitações: Os provedores podem impor restrições, como o número de solicitações por hora ou a quantidade máxima de memória disponível por função.
Funcionamento das Funções

O desenvolvimento em FaaS segue um modelo no qual o código é escrito em pequenas funções independentes. Essas funções podem ser acionadas por eventos, como:

Mudanças de estado em aplicações.
Disparos manuais ou automáticos, como alterações de temperatura em dispositivos IoT.
O código é executado em um ambiente isolado, gerenciado por um provedor de nuvem, permitindo flexibilidade e dinamismo.
Vantagens

Escalabilidade e flexibilidade: O sistema se adapta automaticamente ao volume de requisições.
Custo reduzido: Você paga apenas pelo uso efetivo.
Foco na lógica de negócios: O desenvolvedor pode concentrar esforços na aplicação, sem precisar gerenciar infraestrutura.
Desafios

Financeiros: É necessário pensar em custos ao longo do tempo, considerando a oscilação da demanda e o modelo de cobrança por uso.
Limitações de recursos: Provedores impõem restrições que podem não atender a demandas específicas, como execuções contínuas ou muito complexas. Nesse caso, arquiteturas tradicionais podem ser mais apropriadas.
Tendências e Futuro do FaaS

Assim como o Docker e o Kubernetes surgiram para orquestrar microserviços, no futuro, veremos ferramentas para integrar funções de diferentes provedores em fluxos lógicos. No entanto, funções muito longas ou complexas podem exigir estratégias específicas, como fragmentação em funções menores.
Outra tendência é a integração entre FaaS e outras tecnologias, como containers, para aproveitar ao máximo as vantagens de cada abordagem.

9.2. Princípios gerais de FaaS na Azure
9.3. Princípios gerais de FaaS na AWS
Capítulo 10 – Demonstração Prática da Arquitetura FaaS

Arquitetura de soluções
Módulo 1 - Computação em Nuvem
Capítulo 0 - Apresentação

A arquitetura de soluções normalmente fica entre a área de negócios e a área de software. Então, sim, é uma área totalmente técnica, pois precisa entender o que está acontecendo na área de negócios para transformar isso na área de software, representando essas informações no formato adequado.

Vamos imaginar a área de arquitetura de solução como um departamento ou função específica. O arquiteto normalmente consegue captar os requisitos de negócio e gerar, de forma geral, uma solução no formato de software. É como se ele pegasse tudo que o cliente está falando, compreendesse e dissesse: "Deixa eu rabiscar essa ideia aqui, e o software será mais ou menos assim." É isso que a arquitetura de solução faz.

De forma geral, um arquiteto ou arquiteta de solução precisa saber desenhar arquiteturas. Ou seja, precisa representar graficamente como o software vai funcionar. Para isso, cria desenhos e diagramas, permitindo visualizar de forma clara tudo o que o cliente solicitou. Esses desenhos, geralmente, são diagramas como o modelo C4, UML ou mapeamento de processos. Assim, a arquitetura de solução consegue responder perguntas de negócio no formato de desenhos de software.

Além disso, a arquitetura de soluções analisa os impactos comerciais em relação às escolhas tecnológicas. Por exemplo: "Vamos usar Oracle? Ou mais SQL? Vamos trabalhar com Java ou PHP? Qual provedor de nuvem utilizar?" Todas essas decisões impactam comercialmente a solução escolhida.

Não é incomum encontrar profissionais de arquitetura de soluções em reuniões comerciais de pré-venda ou venda. Como possuem um perfil mais técnico, conseguem fazer a interface com o cliente final e oferecer suporte técnico à equipe comercial.

Outra atribuição do arquiteto de solução é analisar os custos e impactos que determinada solução terá para o negócio. Assim, fica claro que a arquitetura de soluções está posicionada entre a área técnica e a área comercial, lidando diariamente com desenhos e modelagens de sistemas.

Quando pensamos em arquitetura de software, precisamos entender que se trata de uma disciplina dentro da engenharia de software. Engenharia de software envolve processos que vão desde a criação até a entrega do software. A arquitetura de software faz parte desse processo.

A arquitetura de software está diretamente ligada ao desenvolvimento do software. Diferente da arquitetura de soluções, que tem um papel mais amplo, o arquiteto de software se preocupa mais com o código, com o desenvolvimento e com a visão macro do software. Ele define como os componentes se integrarão e como a estrutura do software será organizada.

É interessante notar que a arquitetura de software pode impactar diretamente a estrutura organizacional de uma empresa. Isso acontece porque times de desenvolvimento precisam se estruturar para criar e integrar componentes de software. Em muitas situações, diferentes especialidades são necessárias para compor o software conforme sua arquitetura.

Existe um conceito famoso chamado Lei de Conway, que diz que organizações que desenvolvem sistemas de software tendem a produzir sistemas que refletem suas estruturas de comunicação. Isso significa que a forma como os times estão organizados influencia diretamente na arquitetura do software.

Por exemplo, se uma empresa possui equipes distintas para backend e frontend, provavelmente seu software será segmentado claramente entre essas áreas. Já em empresas onde há maior interação entre designers, UX, UI e desenvolvimento, o software será estruturado de forma mais integrada com essas áreas.

A arquitetura de software também envolve a relação entre os objetivos de negócio, suas restrições e os componentes a serem criados, visando sua evolução ao longo do tempo. O software precisa gerar valor continuamente, e sua arquitetura deve garantir essa longevidade.

A ISO possui uma definição clara sobre arquitetura de software, relacionando-a com os princípios que guiam seu design e evolução. Ou seja, a arquitetura de software estabelece o que está sendo desenvolvido como parte de um conjunto maior, garantindo a integração entre componentes para alcançar um resultado final coeso.

O arquiteto de software tem um papel fundamental: transformar requisitos de negócio em padrões arquiteturais. Ele define como o software será desenvolvido e quais serão seus componentes. Normalmente, orquestra desenvolvedores e especialistas de domínio, garantindo que as boas práticas sejam seguidas e que o software seja sustentável a longo prazo.

Outro ponto importante é que o arquiteto de software precisa conhecer profundamente os principais conceitos e modelos arquiteturais. Cada solução pode exigir um modelo diferente, e o arquiteto precisa saber escolher a melhor abordagem para cada situação.

Quando surgem crises técnicas – como desacordos entre desenvolvedores sobre padrões a serem usados, organização de camadas ou problemas de qualidade do software –, o arquiteto assume o papel de mediador, garantindo que o projeto siga boas práticas e mantenha sua integridade técnica.

Além disso, o arquiteto de software reforça boas práticas de desenvolvimento. Normalmente, são profissionais sêniores que adquiriram experiência ao longo dos anos e já enfrentaram muitos desafios. Utilizam esse conhecimento para orientar equipes e evitar erros comuns.

Mesmo em empresas que não possuem um cargo formal de arquiteto de software, é comum que desenvolvedores sêniores assumam essa responsabilidade de forma indireta, pois já conhecem o que funciona e o que não funciona na prática.

Em resumo, a arquitetura de software é essencial para garantir que o software seja bem estruturado, sustentável e alinhado aos objetivos do negócio. O arquiteto, seja de soluções ou de software, atua como um facilitador, garantindo que as decisões técnicas estejam alinhadas às necessidades da empresa.

Capítulo 1 - Introdução à computação em nuvem

1.1. Introdução à computação em nuvem
A computação sendo oferecida para você como serviço, você liga um computador diretamente em um outro, um servidor em outro local que a gente chama de nuvem, quando se pensa em computação em nuvem, é o uso de um computador, de um servidor, de múltiplos servidores, de vários serviços de computação que não estão na sua casa, que estão distantes de você, que estão em um data center em algum local conhecido, Ou talvez desconhecido para a maioria de todos nós, certo?

Computação em nuvem nada mais é do que a possibilidade, pela primeira vez na história, de usar um computador no modelo de serviço, ou seja, você contrata o uso de um provedor que está te provendo esse serviço e deixa ele até você. Ele chega até você por uma funcionalidade, por uma tecnologia chamada streaming, ou seja, aquilo que está acontecendo lá naquele servidor volta para a tua tela. Até a tua tela do seu computador, da sua televisão, do seu telefone, do seu tablet, ele chega até você. Meio estranho, aquela imagem que está sendo produzida naquele computador lá é transferida para você para que você consiga ver como se fosse um espelho do que está acontecendo lá naquele servidor.

É um modelo de contratação híbrido, ou seja, não tem um local fixo. Para você, é transparente, você não sabe onde se encontra especificamente esse provedor, e ele pode estar em qualquer lugar que você queira. Ou seja, você pode posicionar uma máquina virtual na cloud, ela pode estar no país, na sua casa, no seu trabalho, em outra cidade, em outro país. Essa computação está sendo oferecida para você como um serviço. Você não tem que ter um computador físico para você, ele pode ser acessado de qualquer lugar. E o último ponto importante: ele funciona no modelo de pagamento sob demanda. É quase como um modelo de locação, Você não está comprando efetivamente aquela máquina, você está alugando, você está pagando pelo que usa.

Principais pontos: alguém está oferecendo um serviço de computação para você e a imagem daquele computador que você está operando, aquele serviço que está acontecendo, chega até você pela internet. E aí você pode acessar esse conteúdo de qualquer lugar que queira. É ubíquo, não importa onde você esteja, você terá um computador disponível para você e pagará na medida do uso.

Esse modelo é tão importante porque permite que a gente saia do antigo modelo de capitalização rapidamente. Mas o fato é que há poucos anos atrás, se você quisesse comprar um negócio na internet, você tinha que comprar uma máquina, normalmente um rack, colocar tudo numa sala, comprar segurança, câmeras, ar condicionado. Ou seja, para você montar um negócio online, era um investimento altíssimo. Hoje, com a computação em nuvem, esse modelo mudou.

Agora temos diferentes modelos: 100% nuvem ou híbrido, onde parte da infraestrutura fica na nuvem e parte local. Isso reduz o custo inicial e permite que empresas cresçam conforme a demanda. O modelo é mais justo, flexível e, se bem planejado, mais econômico.

As três principais provedoras de nuvem hoje são: AWS da Amazon, Azure da Microsoft e GCP da Google. São as líderes do mercado, mas existem outras como Alibaba Cloud e Huawei Cloud, que também estão crescendo.

Por fim, a principal vantagem da nuvem é a escalabilidade e elasticidade. Você contrata mais recursos quando precisa, pagando apenas pelo que usa. Além disso, há economia de custos, pois não é necessário comprar hardware próprio, e um acesso global, permitindo que empresas operem de qualquer lugar do mundo. Esse modelo de computação mudou a forma como consumimos tecnologia e continuará sendo essencial no futuro.

1.2. Princípios da computação em nuvem
Quando a gente fala especificamente a respeito da escalabilidade e da elasticidade, estamos falando de um complemento da cloud, de um modelo que é capaz de suportar o aumento ou a redução do uso de hardware à medida que você precisa. Então, vamos dar alguns exemplos.

Imagina que você contrata um serviço de nuvem e aloca o uso de um servidor. Esse servidor atende suas necessidades, permitindo que seu aplicativo funcione para todos os seus usuários com boa performance. Tudo está funcionando bem, mas, de repente, seu sistema cresce tanto que você precisa que esse servidor se torne mais poderoso. Você pode, a qualquer momento, aumentar a escala desse servidor, tornando-o mais potente.

Por exemplo, se antes ele tinha dois processadores, você pode mudar a SKU e aumentar para três ou quatro processadores. Se a memória inicial era 8GB, pode expandir para 16GB, 32GB, etc. Esse tipo de escalabilidade é chamado de escala vertical, pois o computador cresce em capacidade.

Fazemos até uma brincadeira comparando com o Hulk: quando ele se transforma, cresce e fica muito forte, depois volta ao normal. O mesmo acontece com a escalabilidade vertical, que permite que o servidor aumente ou diminua sua capacidade conforme necessário.

Essa escalabilidade pode ser automática na cloud. Com alguns cliques, você pode proporcionar mais poder de processamento, claro que pagando um pouco mais. Se hoje você paga X por uma máquina com dois processadores, para uma máquina com quatro processadores, pagará X + Y. Mas essa alteração pode ser feita a qualquer momento.

Existe também a escalabilidade horizontal, que será abordada ao longo do curso. Nesse modelo, em vez de aumentar o poder de um único servidor, você adiciona mais máquinas. Pode ter duas, três, quatro ou até dez máquinas funcionando simultaneamente. Esse conceito é chamado de computação distribuída, permitindo que mais máquinas processem informações ao mesmo tempo.

Ambas as escalabilidades podem ser combinadas: aumentar o número de servidores e, ao mesmo tempo, aumentar a capacidade de cada um. Tudo isso pode ser feito com poucos cliques na nuvem.

Agora, falando sobre elasticidade, ela representa a capacidade de automatizar a escalabilidade. Ou seja, o próprio ambiente detecta quando há gargalos e aumenta automaticamente a capacidade computacional. Se a carga de trabalho aumentar muito, o sistema cria novos recursos automaticamente. Quando a demanda diminui, os recursos são reduzidos. Isso é muito útil na cloud, pois permite que os ambientes se ajustem dinamicamente às necessidades do momento. Se, por exemplo, seu site recebe muitas visitas repentinamente, os servidores automaticamente aumentam a capacidade para manter a performance. Quando o tráfego diminui, a cloud reduz os recursos para evitar custos desnecessários. Esse é um princípio fundamental da cloud.

O próximo tema é disponibilidade e confiabilidade. Os provedores de serviços em nuvem trabalham com alta disponibilidade, garantindo que seu ambiente estará sempre ativo, desde que você configure corretamente. Se um datacenter falhar, outro assumirá automaticamente. A cloud oferece replicação em diversas regiões, garantindo que seu serviço continue funcionando, mesmo em caso de falhas físicas. Confiabilidade refere-se ao tempo de funcionamento do sistema sem falhas. Quanto mais servidores replicados você tiver, maior a disponibilidade e a confiabilidade do sistema. Por exemplo, se você tem apenas um servidor local e ele falhar, todo o serviço ficará indisponível. Mas se houver redundância na nuvem, o serviço continuará funcionando mesmo que um servidor pare.

Agora, sobre segurança e conformidade. A cloud é um ambiente público e compartilhado, mas foi projetada para garantir isolamento entre os usuários. As máquinas virtuais são separadas e os dados são criptografados, tanto em repouso quanto em trânsito. Os datacenters da cloud são altamente protegidos, e a localização exata de muitos deles não é divulgada para evitar ataques. Além disso, as plataformas de cloud seguem rigorosos padrões de conformidade e possuem diversas certificações de segurança. Outro ponto importante é que a cloud trabalha com modelo de responsabilidade compartilhada. Isso significa que, caso ocorra algum problema, parte da responsabilidade é do provedor e parte do cliente. Em muitos casos, os provedores oferecem garantias e compensações financeiras caso ocorra alguma falha significativa.

Por fim, o custo sobre demanda. Esse modelo é muito vantajoso, pois você paga apenas pelo que usa. Diferente do modelo tradicional, onde você precisa comprar e manter servidores físicos, na cloud você pode alugar recursos e pagar somente pelo tempo que realmente utilizar. Existem diferentes modelos de precificação na cloud, como: Pay-as-you-go (pagar conforme o uso), onde você só paga pelo tempo de uso dos recursos / Reserva de capacidade, onde você paga antecipadamente por um ambiente fixo por um ou dois anos. / Computação spot, onde você utiliza sobras de capacidade a preços reduzidos. A vantagem do modelo pay-as-you-go é a flexibilidade, pois permite aumentar ou reduzir os recursos de forma rápida e eficiente. No entanto, é importante monitorar os custos para evitar gastos excessivos. Assim como na conta de energia elétrica, onde pagamos pelo consumo, na cloud você só paga pelo que realmente utilizar. Se não usar, não paga nada.

O papel da cloud é oferecer mais autonomia, distribuição e escalabilidade, aproveitando recursos modernos como computação distribuída, inteligência artificial e blockchain.

1.3. Nuvens Públicas, Privadas e Híbridas e Modalidades de Serviços
Quando a gente pensa em serviço de Cloud, podemos ter diferentes necessidades que nos levam a soluções e modelos distintos. Entre os modelos mais conhecidos hoje, temos: Modelo público / Modelo privado / Modelo híbrido (combinação dos dois anteriores)

Nuvem Pública: O que é, efetivamente, a nuvem pública? São aqueles serviços providos por terceiros, empresas que fornecem acesso aos seus recursos de forma compartilhada entre múltiplos clientes. O custo inicial é reduzido, pois o investimento em infraestrutura já foi feito por essas grandes empresas. O modelo de pagamento é no formato pay-as-you-go (pague pelo que usar), ou seja, você não investe em hardware, mas sim no aluguel do serviço. A escalabilidade é altíssima, pois esses provedores possuem uma infraestrutura gigantesca. Outra característica interessante da nuvem pública é que a manutenção não é responsabilidade do usuário. A manutenção de hardware, segurança, refrigeração, poeira, tudo isso é gerenciado pelo próprio provedor de Cloud. Muitas vezes, o serviço pode ser automatizado e atualizado de forma automática. Além disso, a conectividade é global. Grandes provedores possuem data centers espalhados pelo mundo, permitindo que os serviços sejam acessados de qualquer país, desde que não haja restrições regionais. Os recursos são padronizados, ou seja, quando contratamos servidores, armazenamento ou banco de dados, eles seguem um padrão definido pelo provedor, facilitando a compatibilidade e integração.

Nuvem Privada: Não é o mesmo que ter um data center dentro da empresa. Nuvem privada significa utilizar a infraestrutura própria no formato de serviço de nuvem. Ou seja, mesmo que a empresa tenha um data center físico, é necessário configurar um ambiente de Cloud dentro dele. Dessa forma, os recursos são provisionados dinamicamente, como em uma nuvem pública. Para que isso aconteça, é essencial contar com softwares específicos que transformam o data center em uma nuvem privada, como: VMware vSphere / Azure Stack (Microsoft) / OpenStack. Essas soluções permitem que a empresa tenha controle total da infraestrutura, personalizando recursos conforme a necessidade. No entanto, há um custo alto envolvido, pois é necessário investir em hardware próprio. Apesar do custo elevado, a nuvem privada garante segurança e controle total sobre os dados, sem depender de provedores externos. No entanto, a escalabilidade é limitada, pois o aumento de capacidade depende da compra de novos equipamentos.

Nuvem híbrida: Combina as vantagens da nuvem pública e privada. Muitas empresas adotam essa abordagem, aproveitando a escalabilidade da nuvem pública e o controle da nuvem privada. Para que uma empresa tenha uma nuvem híbrida, ela precisa possuir uma infraestrutura de nuvem privada funcional. Apenas ter um data center e usar uma nuvem pública separadamente não configura uma nuvem híbrida. É essencial que haja integração entre os dois ambientes. Com a nuvem híbrida, é possível mover aplicações entre os dois ambientes conforme a necessidade. Isso permite otimizar custos, mantendo dados sensíveis na nuvem privada e aproveitando a escalabilidade da nuvem pública quando necessário. Entretanto, essa abordagem pode gerar desafios adicionais, como a complexidade na gestão dos dois ambientes e a necessidade de integração segura entre os sistemas.

1.4. Recursos para escalabilidade, elasticidade e alta disponibilidade
As três das modalidades de serviço: IAAS, PAAS e SAAS. se você vai para a nuvem, parte da responsabilidade passa para o provedor. Quando falamos de servidores, armazenamento, rede e virtualização, tudo isso é gerenciado pela nuvem. Além disso, a parte de segurança física, como energia elétrica e refrigeração, também fica sob a responsabilidade da nuvem.

IAAS: Infraestrutura como Serviço, ou seja, você tem a responsabilidade de tudo: criar o hardware, armazenar o hardware, configurar servidores, criar rede, virtualizar se necessário e implementar segurança. No IAAS, você tem controle total sobre a infraestrutura virtualizada, podendo configurar tudo como quiser. Exemplos incluem AWS EC2, Google Compute Engine e Azure VMs. Infraestrutura básica, configurada manualmente.

Se você opta pelo PAAS, ganha mais comodidade. Além dos servidores e armazenamento, a plataforma já vem com sistema operacional e middleware instalados. Ou seja, é um serviço gerenciado, onde você apenas coloca seu código, o ambiente já vem preparado para desenvolvimento, sem necessidade de configuração manual. Serviços como Google App Engine, AWS Elastic Beanstalk e Azure App Services são exemplos. Ambiente pronto para desenvolvimento.

Já no SAAS, tudo está pronto para uso. Você paga e utiliza diretamente, sem se preocupar com infraestrutura ou gerenciamento, você simplesmente consome o serviço sem necessidade de instalação ou gerenciamento, tudo pronto para uso imediato.

Capítulo 2 - Overview da Azure, AWS e GCP

2.1. Introdução ao Azure Portal
Para quem nunca criou uma conta, ele sugere que você comece gratuitamente, apresentando algumas opções e ferramentas disponíveis. A Azure oferece serviços populares gratuitos por 12 meses, além de 55 serviços gratuitos para sempre. Ao criar uma conta na Azure, você recebe um crédito de $200 para testar a cloud durante 30 dias, além dos serviços gratuitos. Por exemplo, entre os serviços gratuitos por dois meses, você pode utilizar máquinas virtuais do Windows e Linux, bancos de dados gerenciados e outros serviços. Clicando em "Todos os serviços gratuitos", podemos visualizar as diferentes categorias de serviços disponíveis. Entre as ofertas gratuitas para sempre, temos serviços como: Banco de dados Cosmos DB → 1.000 unidades de requisição por segundo, por até 255 dias. / Aplicações móveis e web → 10 aplicativos móveis ou web, com 1 hora gratuita por dia. / Funções serverless → 1 milhão de execuções gratuitas por mês.

Ao acessar o portal pela primeira vez, o sistema pedirá para você "Começar gratuitamente" e fazer login com um e-mail da Microsoft. Caso ainda não tenha uma conta, será necessário criar uma.

Criar uma conta Microsoft: Informe um e-mail, nome, data de nascimento e telefone.
Confirmar a identidade: Resolver um desafio (captcha) e validar o telefone.
Fornecer informações pessoais: Endereço, cidade, código postal e outras informações.
Adicionar um cartão de crédito: A Azure solicita um cartão para verificação, mas não cobrará nada durante o período gratuito.
Configurar segurança: Adicionar um e-mail alternativo e configurar autenticação adicional.
Dentro do Azure Portal, temos algumas seções importantes:

Barra de pesquisa → Permite encontrar rapidamente serviços, recursos e documentos.
Botão "Criar recurso" → Atalho para criar rapidamente serviços como máquinas virtuais, redes virtuais, aplicativos web e bancos de dados.
Marketplace → Permite contratar serviços de terceiros, como máquinas virtuais personalizadas, bancos de dados alternativos e muito mais.
Um recurso importante ao iniciar na Azure é configurar um alerta de cobrança, também chamado de "budget alert". Isso garante que você não ultrapasse um limite de gastos, recebendo notificações caso o consumo esteja próximo do orçamento definido.

Configuração de Alertas de Cobrança

Acesse Gerenciamento de custos e cobrança.
Vá até Configurações e clique em Criar orçamento.
Defina um nome (ex: "Limite Mensal") e um valor máximo (ex: $10).
Configure um alerta para quando 90% desse valor for atingido.
Informe um e-mail para receber notificações.
Assim, caso o consumo se aproxime do limite, você será alertado com antecedência. Esse foi um overview inicial da Azure. Agora, vamos continuar com o nosso curso e explorar outras clouds, como AWS e GCP.

2.2. Introdução ao Console AWS
A AWS oferece mais de 350 serviços diferentes, e podemos classificá-los por categorias, como computação, armazenamento, banco de dados, machine learning e redes.

Fazendo login para nós, e esse login vai ser feito com os nossos dados. Por enquanto, os nossos dados são de root. Olha o root, aquele e-mail que nós criamos, certo? Então, aqui ele vai imediatamente me mostrar o menu de serviços, algum Wizard, barra de pesquisas e mais algumas informações de configuração. Então, nesse momento, eu tenho um F5 aqui pegando algumas informações. Trouxe uma página dos serviços recentemente visitados, e por enquanto não tem nenhum. Ele sugere que eu escolha algum serviço ou algumas aplicações na região que eu quiser escolher. Eu posso verificar através das aplicações e criar aplicações a partir daqui. Também posso entrar em menus tutoriais com boas-vindas para validar o painel da AWS. O AWS Cost Explorer é uma ferramenta da AWS para custos a partir de soluções. Enfim, tem vários itens importantes que a gente pode explorar, e esse menu vai se personalizando à medida que a gente vai usando. Conforme a gente for utilizando, ele vai mudando, e faremos algumas mudanças logo de início. Primeiramente, vou mudar minha região para a Norte da Virgínia, nos Estados Unidos, porque essa é uma das regiões mais baratas. Como eu disse para vocês, a Cloud é um serviço global, funcionando em várias regiões. Então, a região US-East-1 é a mais barata de todas, e eu gosto de usá-la para os nossos testes. Outra coisa importante que a gente pode explorar é esse primeiro menu aqui em cima. Aqui está o meu usuário e o ID da conta. Eu posso clicar em Conta, Organização, Cota de Serviço, Cobranças, Credenciais de Segurança e Ativar o suporte a várias sessões ao mesmo tempo. Tudo isso a gente não vai entrar em muitos detalhes agora.

Aqui também aparecem as regiões disponíveis da AWS. Tem várias regiões, incluindo algumas que não estão habilitadas na minha conta, mas que eu posso habilitar. Há regiões nos Estados Unidos, Ásia, Canadá, Europa e América do Sul. Nas configurações, eu posso mudar o idioma para português ou outros idiomas. Também posso alterar o tema da interface para escuro, claro ou deixar no padrão do navegador. Temos também um menu de ajuda com suporte especializado, posts em fóruns, documentação e treinamentos. Bem legal! Depois, você pode explorar isso com mais calma. Notificações: A AWS possui uma barra de notificações dos serviços. À medida que os serviços forem sendo provisionados, as notificações aparecem. utra funcionalidade interessante é o AWS CloudShell, que cria uma máquina virtual com acesso ao suporte da Amazon. Essa ferramenta permite que a gente trabalhe com tudo dentro da Cloud, explorando a partir daqui, sem precisar configurar nada localmente na nossa máquina. Assim como no Azure, podemos pesquisar por serviços, como EC2, S3, VPC, e acessar rapidamente. O menu principal exibe os serviços favoritos e os serviços recentemente visitados. Por enquanto, não há favoritos nem serviços visitados, mas à medida que utilizarmos, essa lista será preenchida.

Criando um usuário IAM, vamos criar um usuário para que não precisemos mais usar o usuário root. Esse é um passo essencial na Cloud. O usuário root tem acesso irrestrito, podendo até mesmo excluir a conta da AWS. Para isso, vamos criar um usuário IAM (Identity and Access Management), que terá permissões controladas. No console, vá até IAM, clique em Usuários e, em seguida, no botão Adicionar usuário. Vou nomear o usuário como joao.faria e conceder acesso ao console da AWS. Escolha entre a identidade Center (novo IAM da AWS) ou o modo clássico. Vou optar pelo clássico e definir uma senha. Podemos obrigar o usuário a trocar a senha no próximo login, mas não faremos isso agora. Agora, é hora de conceder permissões ao usuário. Podemos anexar políticas diretamente. Vou conceder acesso de administrador e permissões de faturamento para que o usuário possa visualizar os custos da conta. Podemos adicionar tags para categorizar o usuário, como setor e centro de custo, mas não faremos isso agora. Após criar o usuário, posso baixar um arquivo CSV com as credenciais. Caso eu perca as credenciais, será necessário redefinir a senha.

Criando um alias para facilitar o login, Para evitar decorar o ID numérico da conta, posso criar um alias. Vou definir "jb_faria" como alias para facilitar o login. Agora, posso fazer logout da conta root e entrar novamente com o novo usuário. Ao acessar a tela de login, digito jb_faria no lugar do ID da conta, informo o usuário joao.faria e a senha configurada. Com isso, estamos logando na AWS com um usuário mais seguro e controlado, sem precisar mais do root. Podemos configurar autenticação multifator (MFA) e outras medidas de segurança posteriormente.

2.3. Introdução ao Console GCP
Capítulo 3 - Soluções Multicloud

3.1. O que são soluções Multicloud
Multicloud é o uso estratégico de vários provedores de Cloud ao mesmo tempo. Por exemplo, usar AWS com Azure e GCP para ter o melhor dos mundos. Utilizando esse tipo de estratégia, você diversifica o seu parque tecnológico e evita a dependência de um único fornecedor, né? Assim, o famoso lock-in acaba sendo evitado, e você mantém a flexibilidade. Ou seja, quando você tem o seu parque tecnológico instalado em um determinado provedor, você pode migrar para outro ou dividir a carga de trabalho entre eles, aproveitando o que for mais vantajoso. Por exemplo, se um determinado serviço for mais barato no Google, você pode usá-lo lá. Essa estratégia permite adaptação às demandas do negócio, garantindo mais flexibilidade. A ideia é justamente ter o controle total ao mesmo tempo. Aqui você vê uma ferramenta que faz exatamente esse trabalho, ou seja, integrar diversas Clouds diferentes. Temos exemplos como AWS, Azure, GCP e outros serviços de provedores. Existem diversos conectores disponíveis, garantindo conectividade global. A interface única dessas ferramentas permite uma camada de filtragem entre todas as Clouds, facilitando a gestão.

Principais características do Multicloud:

Flexibilidade - Você pode escolher o provedor mais barato, o que tenha melhor desempenho ou aquele que esteja mais próximo da sua empresa.
Resiliência - Caso um provedor saia do mercado ou aumente preços, você não fica preso, pois pode migrar rapidamente.
Redundância - Com serviços distribuídos entre Clouds, evita-se falhas e minimizam-se impactos de problemas em um único provedor.
O lock-in é um dos principais desafios das soluções Cloud. Se você estiver preso a um único fornecedor, pode sofrer com preços abusivos ou limitações contratuais. Para evitar isso, é importante adotar uma estratégia Multicloud, garantindo sempre mais de um fornecedor.

Desafios do Multicloud:

Gestão complexa - Administrar uma única Cloud já é desafiador. Com várias, a complexidade aumenta, exigindo profissionais capacitados.
Segurança e conformidade - Diferentes Clouds possuem diferentes padrões de segurança e regulamentação, podendo gerar problemas de compliance.
Interoperabilidade - A integração entre Clouds pode gerar latência e exigir APIs, dificultando a comunicação direta entre serviços.
Hoje, os provedores estão melhorando a integração entre si para facilitar o uso Multicloud. No entanto, a complexidade operacional ainda é um desafio, aumentando os custos e exigindo profissionais especializados.

Ferramentas para Multicloud:

Calvin – Permite integração rápida entre AWS, Azure e GCP, facilitando a gestão.
Lacework – Plataforma de segurança para contas Multicloud.
Terraform – Infraestrutura como código, permitindo provisionamento em diversas Clouds.
Cloudify – Plataforma de gerenciamento Multicloud, facilitando a automação e integração.
Morpheus – Ferramenta poderosa para gerenciamento unificado de múltiplas Clouds.
Essas plataformas ajudam a centralizar a administração, reduzir complexidade e otimizar custos. Em resumo, esse é um panorama geral do Multicloud!

3.2. Cloud Management Platforms (CMP)
o que é IaC? Pensa comigo: quando você acessa um portal, como o console de um serviço, e configura o tamanho da máquina, SKU, redes e outras opções, todas essas configurações são empacotadas e enviadas por uma requisição para uma API. Essa API responde à sua solicitação e cria a infraestrutura diretamente na Cloud, certo? Se a interface chama uma API para criar a infraestrutura, então podemos criar ferramentas que chamem essa API diretamente, sem precisar passar pela interface gráfica, certo? E aí entra a ideia de um código que cria sua infraestrutura chamando as APIs por trás dos panos. Ao pensar em IaC, estamos invertendo a forma de provisionamento: em vez de selecionar opções manualmente na interface, fazemos isso via código. Por isso chamamos de infraestrutura como código. E quais são as vantagens? Não vou detalhar todas agora, mas o fato é que, ao automatizar a criação da infraestrutura por código, podemos criar e destruir ambientes de forma resiliente e sem erros. Agora, pensa comigo: imagine replicar duas máquinas virtuais idênticas manualmente. É fácil cometer erros, esquecendo de marcar uma opção ou selecionando algo diferente. Esse tipo de erro humano é muito comum. Com código, isso não acontece, pois as configurações são aplicadas automaticamente.

Com IaC, você ganha:

Rapidez para provisionar infraestrutura sempre que precisar.
Reprodutibilidade, garantindo que as configurações sejam idênticas.
Escalabilidade, possibilitando expandir o ambiente com facilidade.
Redução de erros, eliminando falhas humanas.
Outra vantagem interessante: imagine que você queira alterar o ambiente, por exemplo, aumentar o armazenamento de 8GB para 10GB. Se fez a configuração via código e armazenou no Git, pode simplesmente atualizar a versão e aplicar a mudança sem medo de perder histórico.

Modelos de IaC: Existem dois modelos principais, Declarativo – Define o estado final desejado. Exemplo: Terraform. / Imperativo – Especifica cada passo necessário para a configuração. Exemplo: Ansible, Chef. A escolha entre eles depende da prática e preferência de cada pessoa.

Ferramentas de IaC populares incluem:

Terraform: Usa HCL, linguagem declarativa, fácil de usar e bem documentada.
CloudFormation: Nativa da AWS, sempre atualizada com novos serviços.
Ansible: Automação via YAML, bastante usada no mercado.
Pulumi: Permite definir infraestrutura com linguagens comuns como JavaScript e Python.
Chef/Puppet: Mais voltadas para configuração de servidores.
O Terraform é uma ferramenta que permite criar infraestrutura na nuvem via código. Ele foi criado pela HashiCorp e recentemente adquirido pela IBM.

3.3. Soluções de Edge Computing e CDN
o que seria o CDN e qual a relação entre eles, quando você tem um computador ou um data center, ele está localizado em um lugar físico. O acesso a esse data center limita a sua latência, certo? Vamos dar um exemplo mais claro para que fique bem entendido. Digamos que você mora na cidade do Rio de Janeiro e seu servidor esteja no norte da Virgínia. Quando você faz uma requisição HTTP, o que acontece? Você se conecta ao servidor à velocidade da luz, através de uma fibra óptica. Sua requisição chega, é processada pelo servidor, e a resposta é enviada de volta ao seu navegador. Além disso, há a necessidade de uma confirmação, ou seja, um protocolo de ida e volta. Mesmo sendo extremamente rápido, existe um tempo de deslocamento entre a requisição e a resposta. Quanto mais distante estiver a origem dos dados, mais lenta será a resposta. E, normalmente, lentidão significa uma experiência ruim para o usuário. Ninguém quer acessar um site de compras, por exemplo, clicar e esperar vários segundos para carregar. Pelo contrário, queremos respostas rápidas.

A Solução Como resolver isso? Uma solução seria ter data centers espalhados pelo mundo inteiro, mas isso seria extremamente caro e inviável em termos de infraestrutura, energia, segurança e manutenção. A alternativa adotada foi a criação de pequenos servidores distribuídos, chamados de computação de borda (Edge Computing). Esses servidores ficam mais próximos do usuário final, reduzindo a necessidade de acessar um data center principal distante. A Cloud Computing, por exemplo, possui grandes data centers espalhados pelo mundo, enquanto a computação de borda se refere a esses pequenos servidores mais próximos dos usuários. Pense no Netflix: quando você clica no play de um vídeo, ele começa a tocar quase instantaneamente. Isso acontece porque o vídeo não está sendo carregado de um único servidor em um país distante. Ele está replicado em servidores ao redor do mundo, graças à computação de borda.

Diferença entre Cloud Computing e Edge Computing, Cloud Computing refere-se a grandes data centers descentralizados em diferentes regiões do mundo. Já a computação de borda envolve pequenos data centers que pertencem à Cloud, mas estão distribuídos em maior quantidade e mais próximos dos usuários. Hoje, existem entre 30 e 40 grandes regiões de data centers globais, mas há cerca de 250 pequenos data centers espalhados para agilizar o acesso a informações replicadas. Isso reduz a latência e melhora a experiência do usuário, principalmente em aplicações que exigem respostas rápidas, como veículos autônomos, streaming e jogos.

O que é CDN (Content Delivery Network) é uma rede de distribuição de conteúdo. Basicamente, ele armazena e entrega conteúdos estáticos (como imagens, vídeos, arquivos JavaScript e CSS) de servidores mais próximos do usuário. O Spotify, por exemplo, ao tocar uma música, carrega o áudio de um servidor próximo à sua localização, garantindo um carregamento mais rápido. Isso acontece com qualquer serviço de streaming, tornando a experiência do usuário mais fluida. Enquanto a Edge Computing trata da computação distribuída, o CDN foca na entrega de conteúdo estático. Os dois juntos otimizam o desempenho e reduzem a dependência dos data centers principais. Empresas como Cloudflare, AWS, Akamai e Google Cloud oferecem soluções de CDN e computação de borda para tornar o carregamento de conteúdos mais eficiente. Quando falamos de conteúdos dinâmicos (como processamento de banco de dados e cálculos complexos), esses ainda precisam ser processados por servidores mais robustos. Mas para conteúdos estáticos (como vídeos, músicas e imagens), o CDN é a solução ideal.

Capítulo 4 - Migração para a nuvem

4.1. Introdução à Migração para Nuvem
o que é migração para a nuvem? O processo consiste em transferir nossas aplicações, dados e cargas de trabalho de um ambiente on-premises para a nuvem. O objetivo principal é escalabilidade, flexibilidade, eficiência operacional e redução de custos—princípios fundamentais que a nuvem nos proporciona. Claro, ao fazer esse movimento, podemos escolher diferentes tipos de nuvem, como: Pública, Privada, Híbrida.

O que motiva a migração para a nuvem? Redução de custos:

Custos operacionais menores.
Redução de despesas com infraestrutura.
Otimização do modelo Capex → Opex.
Maior eficiência na gestão de servidores e manutenções.
Uso de ferramentas mais resilientes:

Maior disponibilidade e tolerância a falhas.
Replicação e backup automatizados.
Infraestrutura como Código (IaC) para rápida alocação de recursos.
Facilidade de inovação e integração com serviços modernos

Integração com IA, machine learning, big data e analytics.
Serviços escaláveis e prontos para uso, reduzindo tempo de configuração.
Segurança e conformidade com padrões globais

Certificações para segurança de dados (LGPD, ISO, PCI DSS, etc.).
Proteção contra ataques e vulnerabilidades.
Tipos de carga de trabalho migradas para a nuvem, entre as cargas de trabalho mais comuns migradas para a nuvem, temos:

Aplicações transacionais:

Sistemas de gestão empresarial (ERP, CRM).
Controle de estoque, ponto de venda, entre outros.
Bancos de dados

Relacionais e não relacionais.
Processamento de grandes volumes de dados.
Ambientes de teste, homologação e desenvolvimento

Flexibilidade para times híbridos e remotos.
Testes mais rápidos e escaláveis.
Análises de dados

Processamento de big data e data analytics.
Modelos de ETL, data lakes e data warehouses.
Riscos e desafios da migração para a nuvem

Conectividade

Necessidade de uma internet estável e de alta disponibilidade.
Dependência de serviços externos para funcionamento contínuo.
Compatibilidade de aplicações legadas

Algumas aplicações antigas podem não ser compatíveis com a nuvem.
Desafios na refatoração ou reescrita dessas aplicações.
Gestão de custos

É essencial monitorar os custos, pois cada recurso utilizado gera cobrança.
Planejamento adequado para evitar surpresas na fatura.
Governança e segurança

Diferente do ambiente on-premises, na nuvem, a governança precisa ser automatizada e bem estruturada.
Controle de acesso, auditoria e conformidade são fundamentais.

4.2. Cloud Adoption Framework
Cloud Adoption Framework trata-se de um framework adotado pelas provedoras de nuvem, focado em áreas específicas, que ajuda você a migrar para a nuvem. Turma, quero dizer para vocês que, antes de começarmos, é importante destacar que ainda estamos em um período de migração para a nuvem. A nuvem já existe há algum tempo, mas os provedores de nuvem são relativamente novos. Por exemplo, a AWS nasceu em 2006, ou seja, daqui a pouco completa 20 anos de existência. A Azure, por sua vez, nasceu em 2008 como Microsoft Cloud e se tornou Azure em 2014. O Google entrou na segunda metade dos anos 2000, e outras clouds estão sendo construídas agora, algumas ainda não estão totalmente preparadas. A explosão da nuvem aconteceu especialmente entre a metade da segunda década de 2000, mais especificamente de 2015 a 2016, e se intensificou com a pandemia de 2020. Nos últimos quatro a cinco anos, vimos uma grande aceleração na integração de cargas de trabalho para a nuvem, algo que antes estava no ambiente on-premises. Nem sempre essa migração é rápida, pois muitas vezes envolve grandes mudanças e aplicações que dependem de uma reestruturação. Além disso, é necessário contratar especialistas, como vocês estão se tornando, para facilitar essa migração para a nuvem. Isso significa que ainda há uma grande oportunidade para profissionais que entendem o processo de migração. Muitas empresas ainda estão carentes de profissionais qualificados. De acordo com um estudo recente de 2004, metade das 500 maiores empresas dos Estados Unidos ainda não haviam migrado para a nuvem, e estavam planejando fazê-lo até 2023. Ou seja, ainda há um grande mercado para profissionais que ajudam empresas nesse processo de migração.

o Cloud Adoption Framework (CAF), que é um conjunto de boas práticas e diretrizes que ajudam você a levar sua infraestrutura para a nuvem. É um modelo não fechado, mas sim adaptável, que permite maior mobilidade, flexibilidade, segurança e tranquilidade. Essas diretrizes permitem que você se organize de forma que chegue à nuvem com mais facilidade.

O documento da AWS, por exemplo, fala sobre várias áreas importantes para a migração, como a cultura da nuvem, a governança, a escolha da plataforma, a segurança e como organizar as operações. Não basta simplesmente levar suas cargas de trabalho para a nuvem. É necessário entender e adaptar vários aspectos do processo, incluindo pessoas, tecnologias, segurança e processos de governança. Cada empresa precisa se organizar adequadamente para ter sucesso na migração. O planejamento envolve desde a seleção da plataforma até a implementação de medidas de segurança e a definição de um modelo de negócios que leve em consideração a rentabilidade da migração.

O Cloud Adoption Framework da AWS, por exemplo, divide a migração em camadas fundamentais, como negócios, governança, plataformas, segurança e operações. A transformação digital passa por essas camadas para garantir que a organização alcance resultados. A ideia é promover um aumento de eficiência operacional, melhorias nos processos de negócios e uma maior visibilidade das operações no ambiente digital.

Além da AWS, a Azure também tem sua versão do framework, com algumas características diferentes, mas com o mesmo objetivo: oferecer um modelo de adoção que envolva um plano estratégico, a definição de motivações e a priorização de projetos. Na Azure, a adoção começa com a criação de uma "Landing Zone", onde as melhores práticas são implementadas e a migração começa de forma gradual.

á o Google Cloud (GCP) adota uma abordagem um pouco diferente, dividindo o processo de migração em quatro verticais: aprendizado, liderança, escala e segurança. O GCP propõe uma jornada de aprendizado tático, depois liderança e finalmente uma transformação completa para a nuvem. Em resumo, o Cloud Adoption Framework (CAF) não é uma metodologia rígida, mas sim um conjunto de boas práticas e orientações que pode ser adaptado às necessidades de cada organização. A migração para a nuvem deve ser feita de forma gradual, passo a passo, para garantir que você obtenha os melhores resultados. É importante conhecer essas orientações e aplicá-las de forma cuidadosa.

4.3. Introdução aos "R’s" da migração para a nuvem
As estratégias de migração são, na verdade, técnicas que permitem escolher o que fazer e como fazer para ir para a nuvem. Esse tema é crítico para muitas empresas, pois a migração para a nuvem é algo realmente relevante e há uma grande demanda nesse sentido. As empresas têm buscado priorizar essa movimentação e aproveitar as melhores práticas para realizá-la, gastando o mínimo possível e sendo mais eficientes na operação. No entanto, essa jornada não é fácil nem simples. Além de planejamento, exige conhecimento sobre a nuvem e profissionais capacitados, que saibam executar esse processo corretamente. Quando falamos sobre estratégia de migração, é necessário fazer uma análise detalhada, considerando não apenas a escolha do provedor de nuvem, mas também os sistemas envolvidos. Em alguns casos, há sistemas legados que precisam ser reestruturados; outros podem ser levados para a nuvem sem grandes alterações. Em certas situações, um sistema pode até se tornar obsoleto com a migração, necessitando ser desativado. Essas são as estratégias que conheceremos a partir de agora. Existem diferentes oportunidades e modelos de migração, cada um com suas características específicas. O que vou apresentar a vocês é uma evolução do conceito dos 5 R’s da Gartner, uma organização que trata de temas executivos e tecnológicos. Em determinado momento, a AWS expandiu esse conceito para 6 R’s, e hoje o mercado já fala em 7 R’s.

1. Rehost (Lift and Shift): Essa é uma estratégia bastante comum e simples de ser utilizada. Basicamente, consiste em pegar um sistema que está no ambiente on-premises e movê-lo para a nuvem sem alterações. Por exemplo, imagine que você tem um servidor web e um servidor de banco de dados locais. No processo de Rehost, você simplesmente cria servidores equivalentes na nuvem e replica a estrutura original, mantendo tudo igual, talvez até com as mesmas versões de software e configurações. Essa estratégia é rápida e tem um custo relativamente baixo, mas não aproveita todos os recursos da nuvem. É uma abordagem útil para iniciar uma migração de maneira simples, sem grandes investimentos.

2. Replatform: O Replatform é parecido com o Rehost, mas com algumas adaptações para melhor aproveitamento dos recursos da nuvem. Por exemplo, ao invés de simplesmente replicar um banco de dados local na nuvem, você pode utilizar um serviço gerenciado de banco de dados (DBaaS). Em vez de uma máquina virtual tradicional, pode-se usar um serviço com escalabilidade automática. Essa abordagem permite otimizar a infraestrutura sem modificar drasticamente a aplicação.

3. Repurchase (SaaS Replacement): Aqui, a ideia é substituir a aplicação atual por uma solução já existente no mercado, geralmente baseada na nuvem (Software as a Service – SaaS). Por exemplo, imagine que sua empresa utiliza um ERP antigo, desenvolvido internamente, cheio de problemas e limitações. Ao invés de investir na modernização desse sistema, pode ser mais vantajoso adquirir uma solução pronta, como SAP, Oracle, Salesforce ou outro software já disponível na nuvem. Essa estratégia elimina a necessidade de manutenção da infraestrutura e pode trazer ganhos de eficiência, mas tem um custo inicial mais alto.

4. Refactor / Re-architect: Essa é a opção mais complexa e cara, mas também a que proporciona maior aproveitamento dos benefícios da nuvem. Consiste em reescrever a aplicação para torná-la totalmente compatível com a nuvem (Cloud-native), utilizando tecnologias modernas, como microservices, serverless, bancos de dados gerenciados e escalabilidade automática. É uma abordagem que pode levar anos para ser concluída, exigindo investimento em desenvolvimento e especialistas, mas oferece maior flexibilidade, escalabilidade e eficiência no longo prazo.

5. Retire (Decommission): Nessa estratégia, a empresa identifica sistemas que não precisam ser migrados para a nuvem e que podem ser simplesmente desativados. Por exemplo, um software que controla a temperatura do ar-condicionado do data center pode ser desativado caso o data center seja desativado. Da mesma forma, uma aplicação que gerencia acesso físico a um prédio pode ser substituída por uma solução integrada na nuvem. Eliminar sistemas obsoletos reduz custos e simplifica a migração.

6. Retain (Revisit / Keep): Essa estratégia envolve manter determinadas aplicações no ambiente on-premises, seja porque a migração não faz sentido financeiro ou técnico, seja porque há restrições regulatórias ou operacionais. Por exemplo, uma aplicação desenvolvida em Delphi nos anos 2000, que funciona bem internamente e tem poucos usuários, pode não justificar os custos de adaptação para a nuvem. Nesse caso, a empresa pode optar por mantê-la rodando no ambiente atual.

7. Reevaluate / Optimize: O sétimo R diz respeito a avaliar continuamente a infraestrutura e otimizar custos e recursos. Às vezes, pode ser necessário revisar as decisões tomadas anteriormente e realocar cargas de trabalho, ajustar configurações e melhorar a eficiência operacional.

Falamos sobre os modelos de migração e como cada estratégia pode ser aplicada. O conceito dos 6 R’s da AWS (e agora dos 7 R’s) oferece um guia valioso para decidir qual abordagem adotar em cada caso. Desde uma migração rápida com Rehost até uma transformação completa com Refactor, cada estratégia tem seu lugar e deve ser escolhida com base nas necessidades e objetivos da empresa.

Capítulo 2 - Overview da Azure, AWS e GCP

3.1. O que são soluções Multicloud
3.1.1 nfhsdkhjsfsjk

3.1. O que são soluções Multicloud
3.1. O que são soluções Multicloud

