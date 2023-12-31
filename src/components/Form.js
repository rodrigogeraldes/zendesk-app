import React, { useState } from "react";
import bgImg from "../assets/img1.jpg";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState("");
  const apiUrl =
    "https://pdi-combocxhelp.zendesk.com/api/v2/ticket_fields/count";
  const headers = new Headers();
  // headers.append("Authorization", "Basic " + btoa(username + ":" + password));
  headers.append(
    "Authorization",
    "Bearer c1c8cc9b761291d95f55ca907873d4b6bf91ec09731003c1e1db5db42f64e497"
  );
  headers.append("Accept", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Credentials", "true");
  headers.append("Access-Control-Allow-Methods", "*");
  headers.append("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(apiUrl, { headers });
      const data = await response.json();

      // Verifique o retorno da API e exiba o alerta correspondente
      if (response.ok) {
        setAlerta("Mensagem enviada com sucesso!");
      } else {
        setAlerta(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.log(username, password, headers, apiUrl);
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
