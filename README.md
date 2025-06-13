# Sunbrary

Projeto fullstack com React (frontend), FastAPI (backend) e MySQL (banco de dados).

## 📁 Estrutura do Projeto

```
Sunbrary/
├── backend/               # FastAPI (API, serviços, modelos, etc.)
│   ├── app/               # Organização do backend
│   │   ├── api/           # Rotas/endpoints
│   │   ├── core/          # Configurações, autenticação, etc.
│   │   ├── models/        # Modelos de dados
│   │   ├── services/      # Lógica de negócio
│   │   └── tests/         # Testes do backend
│   └── requirements.txt
├── database/              # Scripts SQL, migrations, documentação do banco
│   └── init.sql
├── frontend/              # React (componentes, páginas, assets, etc.)
│   ├── public/
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── services/      # Comunicação com API
│   │   ├── hooks/         # Hooks customizados
│   │   └── tests/         # Testes do frontend
│   └── package.json
├── docs/                  # Documentação do projeto
│   └── arquitetura.md
├── .vscode/               # Configurações e extensões recomendadas
├── README.md
└── CONTRIBUTING.md
```

## 👥 Divisão de Equipe Sugerida
- 2 pessoas: frontend (React)
- 2 pessoas: backend (FastAPI)
- 1 pessoa: banco de dados
- 1 pessoa: integração, testes e documentação

## 🧠 Boas Práticas
- Use branches para features, correções e releases (ex: `feature/1-cadastro-usuario`).
- Siga convenções de código e camadas separadas.
- Documente endpoints, modelos e regras de negócio.
- Faça code review antes de mergear na branch principal.
- Separe DTOs, Models e Entidades.
- Teste serviços críticos.

## 📚 Documentação
- Mantenha o README e o CONTRIBUTING.md atualizados.
- Use a pasta `docs/` para decisões técnicas e arquitetura.

## 🚀 Primeiros Passos

### Backend
1. Acesse a pasta `backend/`.
2. Crie e ative um ambiente virtual Python.
3. Instale as dependências:
   ```
   pip install -r requirements.txt
   ```
4. Inicie o servidor FastAPI:
   ```
   uvicorn app.main:app --reload
   ```

### Frontend
1. Acesse a pasta `frontend/`.
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor React:
   ```
   npm start
   ```

### Banco de Dados
- Scripts e instruções estão em `database/`.

---

Para detalhes de scripts e execução do frontend, veja o arquivo `frontend/README.md`.