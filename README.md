# Site de Portfólio em React e Next

## Começando
Estas instruções irão ajudá-lo a obter uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos
- Node.js (versão atualizada).
- yarn(após baixar o node.js, basta rodar o comando "npm install --global yarn". se necessário, usar "sudo npm install --global yarn" para conceder privilégios de administrador ao comando) 
- VSCode (editor de texto).

- Para garantir que o Node.js ou yarn estão instalados, execute o comando "node --version" e "yarn --version" no terminal do computador. Se aparecer um número de versão, está tudo nos conformes.

### Instalação
- Clone ou baixe o repositório.
- Abra o projeto em seu editor de código.
- Abra um terminal ou prompt de comando e navegue até o diretório do projeto.
- Execute "yarn" para instalar todas as dependências necessárias.
- Execute "yarn build" para a construção do ambiente.
- Execute "yarn start" para iniciar o servidor de desenvolvimento.

### Como funciona
O site imita uma página do VSCode. Para navegar nele, basta clicar nas abas superiores ou laterais, assim como funciona a troca de arquivos no VSCode.

## Construído com
- React.js
- Next.js
- HTML
- CSS
- JavaScript

## Autor
Gabriel Sadigursky


## Como navegar pelos arquivos

Como uma implementação em React como essa exige muitos arquivos, para fins de avaliação, aqui estão os caminhos para certas partes do código:

1 - As páginas principais do site (trajetória pessoal, trajetória profissional, home, projetos...) são separadas em componentes do React. Cada componente exporta um JSX (código de HTML em JavaScript) e podem ser encontrados em "components/pages".

2 - Os arquivos Pessoal.js e Profissional.js têm toda sua construção do HTML e CSS dentro dos arquivos, assim podem ser mais facilmente avaliados. Já as páginas de contato, projetos, configurações... usam outros componentes dentro de si, que são importados dos arquivos do diretório pai, assim como outras partes do site, como os botões laterais. Esses componentes são representados por tags com nomes especiais geralmente pintadas de verde. Foi usada uma API do site Imgur para trazer todas as fotos que estão nos cards de projeto, assim só precisa do link do site hospedador para exibir as imagens.

3 - Dentro de "components/pages/api", existe o arquivo projects.json que é onde estão todas as informações dos projetos, que serão usadas pelos componentes para imprimir todos os cards na página de projetos.

4 - Dentro de "components", o componente ContactCode.js é onde contém todas as informações de contato que são exibidas no site.

Qualquer dúvida, chamar no número (51) 99760-0101.

Agradecimentos ao repositorio que serviu de base para a construcao desse site https://github.com/itsnitinr/vscode-portfolio?ref=reactjsexample.com


