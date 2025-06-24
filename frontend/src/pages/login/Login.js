import React, { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erroUsuario, setErroUsuario] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroGeral, setErroGeral] = useState("");

  const validarUsuario = (value) => /^[a-zA-Z0-9]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let erroU = "";
    let erroS = "";
    setErroGeral("");

    if (!usuario) {
      erroU = "Campo Obrigatório";
    } else if (!validarUsuario(usuario)) {
      erroU = "Insira somente número ou letras";
    }
    if (!senha) {
      erroS = "Campo Obrigatório";
    }
    setErroUsuario(erroU);
    setErroSenha(erroS);
    if (erroU || erroS) return;

    // Aqui você faria a autenticação real
    setErroGeral("Usuário ou Senha Incorretos");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D6EFD8] font-sans" style={{ fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
      <div className="bg-white rounded-2xl p-12 max-w-4xl w-full shadow-none border border-[#80AF81] flex flex-col md:flex-row items-center md:items-stretch scale-110">
        {/* Logo à esquerda */}
        <div className="flex justify-center items-center mb-6 md:mb-0 md:mr-12 md:w-1/2">
          <img src={process.env.PUBLIC_URL + '/LOGO_SUNBRARY.png'} alt="Logo Sunbrary" className="h-52 w-52 object-contain" />
        </div>
        {/* Formulário à direita */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          {/* Título centralizado acima dos campos */}
          <h2 className="text-3xl font-bold text-[#1A5319] mb-8 text-center" style={{ fontFamily: 'Montserrat, Segoe UI, Roboto, sans-serif' }}>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-[#1A5319] mb-1 font-semibold" htmlFor="usuario">Usuário</label>
              <input
                id="usuario"
                type="text"
                placeholder="Digite o Nome do Usuário"
                className="border border-[#80AF81] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#508D4E] w-full text-[#1A5319] shadow-sm"
                value={usuario}
                onChange={e => setUsuario(e.target.value)}
                autoComplete="username"
              />
              {erroUsuario && <div className="text-[#DC2626] text-sm mt-1">{erroUsuario}</div>}
            </div>
            <div className="mb-4">
              <label className="block text-[#1A5319] mb-1 font-semibold" htmlFor="senha">Senha</label>
              <input
                id="senha"
                type="password"
                placeholder="Digite a Senha de Acesso"
                className="border border-[#80AF81] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#508D4E] w-full text-[#1A5319] shadow-sm"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                autoComplete="current-password"
              />
              {erroSenha && <div className="text-[#DC2626] text-sm mt-1">{erroSenha}</div>}
            </div>
            {erroGeral && <div className="text-[#DC2626] text-sm mb-4 text-center">{erroGeral}</div>}
            <button
              type="submit"
              className="bg-[#1A5319] text-white rounded-xl px-4 py-2 w-full hover:bg-[#508D4E] transition-colors font-semibold border border-[#1A5319]"
            >
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
