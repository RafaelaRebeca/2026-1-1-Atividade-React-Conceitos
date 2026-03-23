"use client";

import { useEffect, useState } from "react";
import { getProdutosTodos } from "@/services/api";

const CardProduto = ({produto}:any) => {
  return (
                <div
              key={produto.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "15px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                border: "1px solid #eee"
              }}
            >
              {/* Imagem do Produto */}
              <img
                src={produto.images?.[0]}
                alt={produto.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  backgroundColor: "#f9f9f9"
                }}
              />

              {/* Informações conforme o exemplo do JSON */}
              <h3 style={{ fontSize: "18px", margin: "15px 0 10px", color: "#222" }}>
                {produto.title}
              </h3>
              
              <p style={{ fontSize: "14px", color: "#666", flexGrow: 1 }}>
                {produto.description.substring(0, 80)}...
              </p>

              <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px", color: "#2c7a7b" }}>
                  R$ {produto.price}
                </span>
                <span style={{ fontSize: "12px", backgroundColor: "#edf2f7", padding: "4px 8px", borderRadius: "4px" }}>
                  ⭐ {produto.rating}
                </span>
              </div>
            </div>

  )
}

export default function Home() {
  // Estados para armazenar os produtos da API e o texto da busca
  const [produtos, setProdutos] = useState<any[]>([]);
  const [busca, setBusca] = useState("");

  // Busca os dados assim que a página carrega
  useEffect(() => {
    getProdutosTodos()
      .then((resultado) => {
        // A API dummyjson retorna os produtos dentro de um objeto 'products'
        setProdutos(resultado.data.products || []);
      })
      .catch((erro) => console.error("Erro ao carregar produtos:", erro));
  }, []);

  // Regra de negócio: Filtrar produtos conforme o usuário digita no input
  const produtosFiltrados = produtos
    .filter((produto) =>
      produto.title.toLowerCase().includes(busca.toLowerCase())
    )
    .slice(0, 10);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f9", minHeight: "100vh" }}>
      
      {/* 1. O HEADER: Contém o título e o input de pesquisa */}
      <header style={{ 
        textAlign: "center", 
        marginBottom: "30px", 
        padding: "20px", 
        backgroundColor: "#fff", 
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ color: "#333" }}>Catálogo de Produtos</h1>
        <input
          type="text"
          placeholder="Pesquisar por título do produto..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            padding: "12px",
            width: "100%",
            maxWidth: "500px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            outline: "none"
          }}
        />
      </header>

      {/* 2. O MAIN: Onde os cartões são renderizados dinamicamente */}
      <main style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((item) => (
            <CardProduto produto = {item}/>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1", color: "#888" }}>
            Nenhum produto encontrado com esse nome.
          </p>
        )}
      </main>
    </div>
  );
}