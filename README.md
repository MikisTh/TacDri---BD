# TacDri---BD
2024.2
Documentação do Projeto - TACDRI

License

Sobre o Projeto

🔹TACDRi: 

O Projeto Backend TacDri é uma aplicação desenvolvida para fornecer uma API robusta e eficiente para suportar as funcionalidades do frontend TacDri. Utilizando tecnologias modernas e boas práticas de desenvolvimento, o projeto oferece um ambiente seguro e escalável para lidar com as operações de cadastro de usuários, gerenciamento de posts e comentários, entre outras funcionalidades. Aplicativo de apoio nutricional, onde o usuário pode registrar sua dieta atual (caso tenha acompanhamento profissional) e quantificar com base nos dados fornecidos pela TACO e realizar os cálculos nutricionais básicos para dianóstico nutricional ou receber orientações básicas de nutrição com base em perguntas guiadas. O app também oferece um chat com inteligência artificial (GPT API) para sugerir trocas de refeições e receitas fitness personalizadas. 


📁 Estrutura de Pastas
TACDRI/
│
├── App.tsx # Ponto de entrada da aplicação
├── package.json # Informações e dependências do projeto
├── tsconfig.json # Configuração do TypeScript
├── .gitignore # Arquivos ignorados no controle de versão
│
└── src/ # Código-fonte principal do app
├── screens/ # Telas principais da aplicação
│ └── HomeScreen.tsx # Tela inicial (Home)
├── components/ # Componentes reutilizáveis
├── services/ # Requisições HTTP, APIs, etc.
├── context/ # Estados globais usando Context API
├── utils/ # Funções auxiliares
├── data/ # Dados mockados ou estáticos
├── styles/ # Estilos globais e temas
└── navigation/ # Configuração de navegação


🧠 Tecnologias utilizadas
- Tecnologia | Função
React Native | Framework para desenvolvimento mobile multiplataforma
Expo Ambiente | simplificado para desenvolvimento React Native
TypeScript | Superset de JavaScript com tipagem estática
*VS Code | Editor de código
Node.js | Runtime JS utilizado pelo Expo
Git/GitHub | Versionamento de código


🔧 Funcionalidade atual
Tela inicial (HomeScreen.tsx) implementada, com visualização básica.
App configurado para exibir a HomeScreen diretamente via App.tsx.
Estrutura de projeto modular criada, com separação por responsabilidade.
Git inicializado e conectado ao repositório remoto do GitHub:
Usuário GitHub: lucca7r
Repositório remoto: https://github.com/lucca7r/NutriAi.git

⚙️ Ambiente de Execução
O projeto é executado com Expo Go no celular ou emulador.

Inicialização do app via terminal com: npx expo start


📝 Observações
A navegação entre telas ainda será implementada (React Navigation).
A integração com a API do GPT (para chat nutricional) será feita na fase posterior.
Todo o projeto está em TypeScript para garantir tipagem e escalabilidade.

Funcionalidades

Cadastro de Usuário: Permite que os usuários se cadastrem no aplicativo fornecendo informações básicas, como nome, e-mail, senha e habilidades.
Login: Esta funcionalidade permite que usuários registrados acessem suas contas fornecendo suas credenciais de login.
Registro Alimentar: Permite que os usuários faça o resgistro quantitativo das suas refeições diárias.
Dieta: Permite o gerenciamento dos registro alimentares realizados pelo usuário em um período, possibilitando que os usuários façam alterações e possam fazer uma análise quantitativa e qualitativa de suas refeições registradas.
TACO: Esta funcionalidade permite que os usuários possam calcular a composição centesimal da refeição ou dieta com base na quantidade dos alimentos inseridos em cada registro alimentar.
Dri: Oferece um espaço para os usuários compararem a quantidade de macronutrientes e micronutrientes ingeridos com a Recomendação Dietética Adequada. 
IMC: Permite que os usuários descubram o seu IMC (Índice de Massa Compórea).
Chat: Esta funcionalidade permite que os usuários se comuniquem por meio de mensagens de texto.
Feed de Atividades: Fornece aos usuários uma lista de atividades e postagens.
Favoritos: Permite que os usuários marquem e acessem rapidamente itens de interesse dentro do aplicativo.
Posts: Permite que os usuários compartilhem conteúdo, ideias, perguntas e informações com outros usuários na plataforma.
Populares: Os usuários podem visualizar postagens ou usuários que estão em alta.


Tecnologias Utilizadas
Java: Linguagem de programação amplamente utilizada para o desenvolvimento de aplicativos corporativos.
Spring Boot: Framework que simplifica o desenvolvimento de aplicativos Java, fornecendo um conjunto de ferramentas e bibliotecas para facilitar a criação de APIs RESTful.
Spring Data JPA / Hibernate: Facilita a integração com o banco de dados e simplifica as operações de persistência de dados.
MongoDB: Banco de dados NoSQL utilizado para armazenar os dados da aplicação.
Maven: Gerenciador de dependências e construção de projetos para Java.
WebSockets: Utilizado para comunicação em tempo real no chat dos usuários.

![aatable](https://github.com/user-attachments/assets/6b8f0c50-ae0c-4ed2-9e84-223b95eb743b)


#Teste Glicêmico 
GLICEMIA DE JEJUM
HEMOGLOBINA GLICADA (HbA1c)

//Diagnóstico
Diabetes tipo 1
Diabetes tipo 2
Diabetes gestacional
Pré-diabetes
Hipoglicemia
Síndrome Metabólica
Cetoacidose Diabética (CAD)
Síndrome Hiperosmolar Hiperglicêmica (SHH)
Resistência à Insulina
Pancreatite
Endocrinopatias

#Exame de Colesterol 
Colesterol total
Colesterol não-HDL (LDL+VLDL)
Colesterol HDL
Colesterol LDL
Colesterol VLDL
Triglicerídeos


#Hemograma
