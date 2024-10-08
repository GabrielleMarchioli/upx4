# Projeto Entregas Amazon UPX4

Este projeto é um sistema de gerenciamento de entregas, desenvolvido para facilitar a logística de pedidos e entregas de produtos. O backend foi criado usando Node.js e MongoDB, permitindo o registro de usuários, produtos, pedidos e endereços.

## Funcionalidades

- **Cadastro de Usuários**: Permite que entregadores e clientes se cadastrem na plataforma.
- **Gerenciamento de Pedidos**: Os clientes podem criar pedidos, que são atribuídos a entregadores.
- **Armazenamento de Endereços**: Os usuários podem salvar seus endereços para facilitar o processo de entrega.
- **Cálculo de Rotas**: O sistema pode calcular rotas para as entregas, otimizando tempo e distância.

## Estrutura do Banco de Dados

O sistema utiliza as seguintes tabelas no MongoDB:

### 1. Usuarios
- **id**: ID único do usuário.
- **nome**: Nome completo do usuário.
- **email**: Email do usuário (usado para login).
- **senha**: Senha criptografada para autenticação.
- **data_criacao**: Data de criação do registro.

### 2. Enderecos
- **id**: ID único do endereço.
- **id_usuario**: ID do usuário associado.
- **logradouro**: Rua, avenida, etc.
- **numero**: Número do endereço.
- **bairro**: Bairro do endereço.
- **cidade**: Cidade do endereço.
- **estado**: Estado (UF) do endereço.
- **cep**: Código postal (CEP).
- **complemento**: Informação adicional do endereço (opcional).

### 3. Pedidos
- **id**: ID único do pedido.
- **id_cliente**: ID do cliente que fez o pedido.
- **id_entregador**: ID do entregador responsável.
- **status**: Status do pedido (pendente, em transporte, entregue).
- **data_pedido**: Data e hora do pedido.
- **data_entrega**: Data e hora estimada da entrega.

### 4. Rotas
- **id**: ID único da rota.
- **id_pedido**: ID do pedido associado.
- **ponto_partida**: Endereço de partida (geralmente do armazém).
- **ponto_destino**: Endereço de destino (geralmente o do cliente).
- **distancia**: Distância calculada (em km).
- **duracao**: Duração estimada da rota (tempo).

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para o backend.
- **Express**: Framework para construir a API.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.

## Como Executar o Projeto

1. Clone o repositório:
-git clone https://github.com/GabrielleMarchioli/upx4.git
-cd upx4
2. Instale as dependências:
-npm install
3. Configure as variáveis de ambiente (por exemplo, conexão com o MongoDB).
4. Inicie o servidor:
npm start
