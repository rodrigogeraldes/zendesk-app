import React, { useState } from "react";
import bgImg from "../assets/img1.jpg";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Realize aqui a chamada para a API usando fetch ou axios
    const authHeader = btoa("rodrigo.geraldes@combocx.com.br:Rodrigo=5255"); // Substitua 'username' e 'password' com suas credenciais de autenticação

    // Realize aqui a chamada para a API usando fetch ou axios
    try {
      const response = await fetch(
        "https://pdi-combocxhelp.zendesk.com/api/v2/ticket_fields/count",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + authHeader,
          },
          mode: "no-cors",
        }
      );

      const data = await response.json();

      // Verifique o retorno da API e exiba o alerta correspondente
      if (response.ok) {
        setAlerta("Mensagem enviada com sucesso!");
      } else {
        setAlerta(`Erro: ${data.message}`);
      }
    } catch (error) {
      setAlerta("Ocorreu um erro ao enviar a mensagem.");
    }
  };
  // console.log(watch('username'));

  return (
    <section>
      {alerta && <div style={{ color: "white" }}>{alerta}</div>}
      <div className="register">
        <div className="col-1">
          <h2>Zendesk App</h2>
          <span>Insira suas credenciais zendesk</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
            <input type="text" placeholder="URL do ambiente" />
            <input
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Senha"
            />
            <button className="btn" type="submit">
              Entrar
            </button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
