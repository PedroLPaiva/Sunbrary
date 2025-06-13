# Guia de Contribuição

## Fluxo de Trabalho

1. Faça um fork do repositório (se aplicável).
2. Crie uma branch para cada nova feature ou correção:
   ```
   git checkout -b feature/nome-da-feature
   ```
3. Faça commits pequenos e descritivos, seguindo o padrão:
   ```
   feat: descrição da feature
   fix: descrição da correção
   docs: atualização de documentação
   ```
4. Antes de dar merge na branch principal, abra um Pull Request e solicite revisão.
5. Resolva conflitos e garanta que todos os testes estejam passando.

## Convenções de Código
- Siga o padrão de código definido para cada linguagem (PEP8 para Python, ESLint/Prettier para JS/TS).
- Separe responsabilidades por camadas (backend, frontend, database).
- Documente endpoints, modelos e regras de negócio.
- Teste funcionalidades críticas.
- Use nomes de variáveis e funções claros e descritivos.

## Organização de Pastas
- `backend/`: API FastAPI, serviços, modelos, testes.
- `frontend/`: React, componentes, páginas, integração com API.
- `database/`: scripts SQL, migrations, documentação do banco.
- `docs/`: documentação geral, arquitetura, decisões técnicas.

## Boas Práticas
- Use branches para features, correções e releases.
- Faça code review antes de mergear.
- Mantenha o README e documentação sempre atualizados.
- Separe DTOs, Models e Entidades.
- Escreva testes automatizados sempre que possível.

## Exemplo de Branch
```
feature/1-cadastro-usuario
fix/2-corrige-login
```

## Exemplo de Pull Request
```
Título: feat: implementa cadastro de usuário
Descrição: Este PR adiciona a funcionalidade de cadastro de usuário, incluindo validações e testes automatizados.
```
