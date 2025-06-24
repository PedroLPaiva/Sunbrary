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
    <div className="min-h-screen flex items-center justify-center bg-fundo font-sans">
      <div className="bg-white shadow-md rounded-2xl p-10 max-w-4xl w-full flex flex-row items-stretch gap-0 scale-110">
        <div className="flex flex-col justify-center h-full w-56 min-h-full">
          <img src={process.env.PUBLIC_URL + '/LOGO_SUNBRARY.png'} alt="Logo Sunbrary" className="h-48 mt-16" />
        </div>
        <div className="flex-1 flex flex-col justify-center px-8">
          <h2 className="text-3xl font-bold text-titulo mb-8 text-center">Acesso ao Sistema</h2>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="mb-6 w-full">
              <label className="block text-titulo mb-2 text-lg" htmlFor="usuario">Usuário</label>
              <input
                id="usuario"
                type="text"
                className="border border-destaque rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-titulo w-full text-base"
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
                autoComplete="username"
              />
            </div>
            <div className="mb-6 w-full">
              <label className="block text-titulo mb-2 text-lg" htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                className="border border-destaque rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-titulo w-full text-base"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                autoComplete="current-password"
              />
            </div>
            {erro && <div className="text-red-600 text-base mb-6 w-full">{erro}</div>}
            <button
              type="submit"
              className="bg-titulo text-white rounded-xl px-4 py-3 w-full hover:bg-destaque transition-colors text-lg font-semibold"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
