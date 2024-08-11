"use client";
import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  const [cepError, setCepError] = useState("");

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
      [id]: value,
    });

    if (id === "name") {
      setFormData((prevData) => ({ ...prevData, name: value.trim() }));
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
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
  };

  const handleCepBlur = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
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
          setCepError("CEP inválido");
        }
      } catch (error) {
        setCepError("Erro ao buscar CEP");
      }
    } else {
      setCepError("CEP deve ter 8 dígitos");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-fit p-24 bg-gray-200">
      <h1 className="text-3xl font-semibold mb-20 text-center text-green-900">
        Você gostou dessa ideia? Deixe seus dados que iremos entrar em contato.
      </h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-4xl text-md">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-900"
              >
                Nome*
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onBlur={handleBlur}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 font-medium text-gray-900"
              >
                Telefone*
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="(xx) xxxxx-xxxx"
                maxLength={15}
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-900"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="cep"
                className="block mb-2 font-medium text-gray-900"
              >
                CEP*
              </label>
              <input
                type="text"
                id="cep"
                value={formData.cep}
                onChange={handleChange}
                onBlur={handleCepBlur}
                maxLength="9"
                className={`shadow-sm bg-gray-50 border text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${cepError ? "border-red-500" : "border-gray-300"}`}
                placeholder="58010-000"
                required
              />
              {cepError && (
                <p className="text-red-500  mt-1">{cepError}</p>
              )}
            </div>
          </div>

          <div>
            <div className="mb-5">
              <label
                htmlFor="street"
                className="block mb-2  font-medium text-gray-900"
              >
                Rua
              </label>
              <input
                type="text"
                id="street"
                value={formData.street}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Rua"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="number"
                className="block mb-2  font-medium text-gray-900"
              >
                Número
              </label>
              <input
                type="text"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Número"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="neighborhood"
                className="block mb-2  font-medium text-gray-900"
              >
                Bairro
              </label>
              <input
                type="text"
                id="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Bairro"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="city"
                className="block mb-2  font-medium text-gray-900"
              >
                Cidade
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Cidade"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="state"
                className="block mb-2  font-medium text-gray-900"
              >
                Estado
              </label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Estado"
                required
              />
            </div>
          </div>

          <div className="col-span-2 flex justify-between">
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2.5 text-center"
              onClick={handleSubmit}
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg  px-4 py-2.5 text-center"
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
