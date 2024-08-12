"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import CustomSnackbar from "./CustomToast";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    observations: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [cepError, setCepError] = useState("");
  const [checkmarkVisibility, setCheckmarkVisibility] = useState("hidden");
  const [formVisibility, setFormVisibility] = useState("block");

  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = snackbarState;

  const handleClick = (newState) => () => {
    setSnackbarState({ ...newState, open: true });
  };

  const handleClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    if (id === "cep") {
      setCepError("");
      if (value.length >= 5) {
        const formattedCep = value
          .replace(/\D/g, "")
          .replace(/^(\d{5})(\d{0,3})/, "$1-$2");
        setFormData((prevData) => ({ ...prevData, cep: formattedCep }));
      }
    }
    if (id === "phone") {
      let formattedPhone = value.replace(/\D/g, "");
      console.log(value.length);
      if (value.length <= 10) {
        formattedPhone = formattedPhone.replace(/^(\d{2})/, "($1) ");
      } else {
        formattedPhone = formattedPhone.replace(
          /^(\d{2})(\d{5})(\d{0,4})/,
          "($1) $2-$3",
        );
      }
      setFormData((prevData) => ({ ...prevData, phone: formattedPhone }));
    }
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value.trim(),
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      observations: "",
      cep: "",
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
    });
    setCepError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    handleClick({ vertical: "top", horizontal: "center" })();
    handleReset();
    setCheckmarkVisibility("block");
    setFormVisibility("hidden");
  };

  const handleCepBlur = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    setFormData((prevData) => ({ ...prevData, cep: e.target.value.trim() }));
    if (cep.length === 8) {
      try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url);
        const data = await response.json();
        if (!data.erro) {
          setFormData({
            ...formData,
            street: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
          });
          setCepError("");
        } else {
          setCepError("CEP não encontrado na base de dados");
        }
      } catch (error) {
        setCepError("Erro ao buscar CEP");
      }
    } else {
      setCepError("CEP deve ter 8 dígitos");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-fit xl:p-24 bg-gray-200">
      <h1 className="text-3xl font-semibold mb-20 text-center text-green-900 align-middle mt-10 md:mt-0">
        Você gostou dessa ideia? Deixe seus dados que iremos entrar em contato.
      </h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl text-md ">
        <div
          id="checkmark"
          className={`text-green-800 ${checkmarkVisibility} flex flex-col justify-center items-center`}
        >
          <Icon
            id="checkmark"
            icon="carbon:checkmark-filled"
            className={`w-[80px] h-[80px]`}
          />
          <span className="mt-10 text-center">
            Enviado! Nossa equipe irá entrar em contato muito em breve.
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${formVisibility}`}
        >
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-green-900"
              >
                Nome*
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-green-300 text-green-900 rounded-lg focus:ring-green-500 focus:border-green-500 focus:outline-green-500 block w-full p-2.5"
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 font-medium text-green-900"
              >
                Telefone*
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="shadow-sm bg-gray-50 border border-green-300 text-green-900  rounded-lg focus:outline-green-500 focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="(xx) xxxxx-xxxx"
                maxLength={15}
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-green-900"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="shadow-sm bg-gray-50 border border-green-300 text-green-900 rounded-lg focus:outline-green-500 focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="mb-5 mt-3">
              <label
                htmlFor="text"
                className="block mb-2 font-medium text-green-900"
              >
                Observações
              </label>
              <textarea
                type="text"
                id="observations"
                rows={9}
                maxLength={300}
                value={formData.observations}
                onBlur={handleBlur}
                onChange={handleChange}
                className="mt-3 shadow-sm bg-gray-50 border border-green-300 text-green-900 rounded-lg focus:ring-green-500 focus:border-green-500 focus:outline-green-500 block w-full p-2.5"
                placeholder="Nos conte algo sobre você"
              />
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <label
                htmlFor="cep"
                className="block mb-2 font-medium text-green-900"
              >
                CEP
              </label>
              <input
                type="text"
                id="cep"
                value={formData.cep}
                onChange={handleChange}
                onBlur={handleCepBlur}
                maxLength="9"
                className={`shadow-sm bg-gray-50 border  text-green-900  rounded-lg focus:ring-green-500  focus:outline-green-500 focus:border-green-500 block w-full p-2.5 ${cepError ? "border-red-500" : "border-green-300"}`}
                placeholder="58010-000"
              />
              {cepError && <p className="text-red-500  mt-1">{cepError}</p>}
            </div>
            <div className="mb-5">
              <label
                htmlFor="street"
                className="block mb-2  font-medium text-green-900"
              >
                Rua
              </label>
              <input
                type="text"
                id="street"
                value={formData.street}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-green-300 text-green-900  focus:outline-green-500  rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Rua"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="number"
                className="block mb-2  font-medium text-green-900"
              >
                Número
              </label>
              <input
                type="text"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-green-300 text-green-900  focus:outline-green-500  rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Número"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="neighborhood"
                className="block mb-2 font-medium text-green-900"
              >
                Bairro
              </label>
              <input
                type="text"
                id="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-green-300 text-green-900  focus:outline-green-500  rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Bairro"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="city"
                className="block mb-2  font-medium text-green-900"
              >
                Cidade
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-green-300 text-green-900  focus:outline-green-500  rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Cidade"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="state"
                className="block mb-2  font-medium text-green-900"
              >
                Estado
              </label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-green-300 text-green-900  focus:outline-green-500  rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                placeholder="Estado"
              />
            </div>
          </div>

          <div className="col-span-2 flex justify-between">
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-white bg-green-700 hover:bg-green-800 focus:green-ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-4 py-2.5 text-center"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-4 py-2.5 text-center"
            >
              Limpar
            </button>
          </div>
        </form>
        <CustomSnackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Formulário enviado com sucesso!"
          key={vertical + horizontal}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
