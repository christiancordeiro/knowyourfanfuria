# 🦁 FURIA FanCard - Carteirinha de Fã da FURIA

Uma aplicação web desenvolvida em **React** que utiliza a **API do Reddit** para medir o nível de fandom de um usuário em relação à equipe FURIA Esports. Esse projeto foi criado como parte do **Desafio 2** do processo seletivo da FURIA.

Através da autenticação com o Reddit, a aplicação coleta dados como posts, comentários e votos positivos relacionados à FURIA. Com base nesses dados, ela calcula um índice de engajamento e gera uma carteirinha personalizada com o **nível de fã**.

---

## 📦 Tecnologias utilizadas

- **React (Vite)**
- **TypeScript**
- **Reddit API (OAuth2)**
- **Tailwind CSS**

---

## 🚀 Funcionalidades

- 🔐 **Autenticação com Reddit**: O usuário deve fazer login e conceder permissão para que seus dados sejam acessados.
- 📄 **Coleta de dados**: Após o login, são buscados comentários, posts e votos relacionados à FURIA.
- 📊 **Cálculo de engajamento**: Um algoritmo próprio analisa a atividade do usuário relacionada à FURIA.
- 🪪 **Carteirinha personalizada**: Exibe o nível de fã com base no resultado da análise.
- 🏅 **Níveis de fã**:
  - *Novo fã*
  - *Fã iniciante*
  - *Fã intermediário*
  - *Fã ultra*
  - *Fã lendário*

---

## 🔧 Como rodar o projeto

1. **Clone o repositório**

```bash
git clone https://github.com/christiancordeiro/knowyourfanfuria.git
cd furia-fancard
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variaveis de ambiente**

```bash
VITE_REDDIT_CLIENT_ID=seu_client_id
VITE_REDDIT_CLIENT_SECRET=sua_key
VITE_REDDIT_REDIRECT_URI=http://localhost:5173/carteirinha
```

3. **Execute a aplicação**

```bash
npm run dev
```
