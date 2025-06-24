import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-fundo font-sans">
      <header className="flex items-center gap-4 bg-white shadow p-6">
        <img src={process.env.PUBLIC_URL + '/LOGO_SUNBRARY.png'} alt="Logo Sunbrary" className="h-14" />
        <h1 className="text-3xl font-bold text-titulo">Sunbrary</h1>
      </header>
      <main className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-2xl text-titulo font-semibold mb-4">Bem-vindo à Sunbrary!</h2>
        <p className="text-lg text-gray-700">Escolha uma opção no menu para começar.</p>
      </main>
    </div>
  );
}
