# Hooks Customizados

Coloque aqui hooks React reutilizáveis para lógica compartilhada entre componentes.

Exemplo:
```js
// src/hooks/useAuth.js
import { useState } from 'react';
export function useAuth() {
  const [user, setUser] = useState(null);
  // ...
}
```
