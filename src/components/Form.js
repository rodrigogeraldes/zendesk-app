import React from "react";
import bgImg from "../assets/img1.jpg";
import { useForm } from "react-hook-form";

export default function Form() {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Zendesk App</h2>
          <span>Insira suas credenciais zendesk</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input type="text" placeholder="URL do ambiente" />
            <input type="text" placeholder="Nome de usuário" />
            <input type="password" placeholder="Senha" />
            <button className="btn">Entrar</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
