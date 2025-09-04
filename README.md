# 📲 Gerador de QRCODE com Node.js

Uma ferramenta simples e prática para **gerar códigos QR
dinamicamente**, desenvolvida com **Node.js**. Ideal para uso em
servidores, automação ou como base para projetos mais complexos.

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   Recebe texto, links ou dados via terminal (ou parâmetros) e gera um
    **QR code** correspondente.
-   Suporta saída em formatos como **PNG** ou **Base64**, conforme
    implementado.
-   Possível integração com endpoints de API ou pipelines automatizados.

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

-   **Node.js** --- ambiente de execução JavaScript no backend.
-   Biblioteca de geração de QR code (`qrcode` ou similar) --- verifique
    no `package.json`.
-   Utilização de módulos modernos do Node (CommonJS ou ES Modules).

------------------------------------------------------------------------

## 📂 Estrutura do Projeto

    Gerador-de-QRCODE-com-Node.js/
    ├── src/
    │   └── [arquivos fonte em JS que executam a geração]
    ├── .env                 # Variáveis de ambiente (se usadas)
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md            # Este arquivo

------------------------------------------------------------------------

## ⚙️ Pré-requisitos

-   **Node.js** instalado (versão recomendada: 14 ou superior).
-   **npm** (gerenciador de pacotes).

------------------------------------------------------------------------

## ▶️ Instalação & Execução

1.  Clone o repositório:

    ``` bash
    git clone https://github.com/Vitaosouzaa/Gerador-de-QRCODE-com-Node.js.git
    ```

2.  Navegue até a pasta do projeto:

    ``` bash
    cd Gerador-de-QRCODE-com-Node.js
    ```

3.  Instale as dependências:

    ``` bash
    npm install
    ```

4.  Execute o gerador:

    ``` bash
    npm start
    ```

------------------------------------------------------------------------

## 🖼️ Exemplo de Uso

``` bash
node src/index.js   --text="https://meusite.com"   --output="qrcode.png"   --format="png"   --size=300
```

Esse comando gera um **arquivo PNG** com o QR code direcionando para
`https://meusite.com`.

Também é possível gerar saída em **Base64** para uso direto em front-end
ou APIs:

``` bash
node src/index.js --text="Olá mundo!" --base64
```

------------------------------------------------------------------------

## 🤝 Contribuição

Contribuições são bem-vindas! Para colaborar:

1.  Faça um fork do repositório.
2.  Crie uma branch com a feature:\
    `git checkout -b feature/nova-funcionalidade`
3.  Faça commit das alterações:\
    `git commit -m "Adiciona nova funcionalidade"`
4.  Envie para o repositório:\
    `git push origin feature/nova-funcionalidade`
5.  Abra um Pull Request.

------------------------------------------------------------------------

## 📄 Licença

Este projeto está sob a licença **MIT** --- sinta-se à vontade para
usar, modificar e distribuir.

------------------------------------------------------------------------

👨‍💻 Desenvolvido por **Vitor Souza**
