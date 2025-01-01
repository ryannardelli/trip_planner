# Planejador de Viagem

## Descrição
O **Planejador de Viagem** é um aplicativo que auxilia no planejamento de viagens, fornecendo informações sobre o local e o clima, garantindo que os usuários possam se preparar adequadamente para o clima de seu destino.

## APIs Utilizadas
- **BrasilAPI**: Para validar CEPs e buscar informações sobre localidades no Brasil.
- **WeatherAPI**: Para verificar o clima atual e a previsão do tempo no destino.

## Funcionalidades
- **Validar o CEP do destino**: O aplicativo permite que o usuário insira um CEP e valide se ele pertence a uma localidade no Brasil.
- **Exibir informações sobre o destino**: O sistema exibe o nome da cidade, estado e outras informações, juntamente com o clima atual e a previsão para os próximos dias.

## Estrutura do Projeto

### 1. Home (Página Inicial)
- **Formulário de CEP**: O usuário insere o CEP do destino em um campo de entrada.
- **Botão de Submissão**: Após inserir o CEP, o usuário clica no botão para submeter o CEP e obter informações sobre o destino.
- **Exibição de Carregando**: Durante a busca das informações, o sistema exibe um indicador de carregamento para informar ao usuário que o processo está em andamento.

### 2. Resultados (Página de Informações sobre o Destino)
- **Clima Atual**: Exibe informações sobre as condições climáticas no destino, como temperatura, umidade e uma descrição geral (exemplo: ensolarado, nublado).
- **Previsão para os Próximos Dias**: Apresenta a previsão do tempo para os próximos dias, incluindo as temperaturas mínimas e máximas, além das condições climáticas esperadas.
- **Sugestões de Roupas**: Com base na previsão do tempo, o aplicativo sugere roupas e itens que o usuário pode precisar levar para o destino (exemplo: "Dia quente, use roupas leves").

## Tecnologias Utilizadas
- **Frontend**:
  - React
  - Bootstrap
- **APIs**:
  - BrasilAPI
  - WeatherAPI


## Como Rodar o Projeto
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>

## Acesso Online
O projeto está hospedado na Netlify. Você pode acessá-lo através do seguinte link:
[Planejador de Viagem - Acesse Aqui](https://marvelous-phoenix-5213f9.netlify.app/)

### Passo 1: Acesse o Link
O projeto está disponível online através do seguinte link:

[Planejador de Viagem - Acesse Aqui](https://seu-projeto.netlify.app)

### Passo 2: Explore o Aplicativo
- Na página inicial, insira o CEP do destino que deseja planejar.
- Clique no botão para obter as informações do destino.
- Veja o clima atual e a previsão dos próximos dias.
- 
### Passo 3: Interaja com o Sistema
- O aplicativo fornece uma interface simples para validar o CEP e obter as informações.
- A resposta será exibida após o carregamento dos dados de localização e clima.
- Caso o CEP não seja encontrado pela API, você será direcionado para uma página de erro e poderá tentar novamente.

Caso queira explorar ou contribuir com o código-fonte, siga as instruções na seção "Como Rodar o Projeto" para rodar o projeto localmente.

