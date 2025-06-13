import React, { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const validarUsuario = (value) => /^[a-zA-Z0-9]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");
    if (!usuario || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }
    if (!validarUsuario(usuario)) {
      setErro("Usuário só pode conter letras ou números");
      return;
    }
    // Aqui você faria a autenticação real
    // Exemplo de erro genérico:
    setErro("Usuário ou Senha Incorretos");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-white shadow-md rounded-2xl p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="usuario">Usuário</label>
            <input
              id="usuario"
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              value={usuario}
              onChange={e => setUsuario(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          {erro && <div className="text-red-600 text-sm mb-4">{erro}</div>}
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-xl px-4 py-2 w-full hover:bg-blue-700 transition-colors"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
