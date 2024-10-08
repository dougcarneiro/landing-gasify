"use client";

import * as image from "../components/Images";
import RegisterForm from "./Form";
import { Link, Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Divulgacao() {
  return (
    <>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="scale-90"></div>
      <header className="bg-white content-center max-w-[100vw] flex rounded-3xl justify-between mx-12 mt-12 mb-6 p-4 shadow-md">
        <a
          href="#"
          id="gasify-logo"
          className="flex content-center items-center space-x-2"
        >
          <image.GasifyLogo />
          <image.Gasify />
        </a>
        <div className="flex items-center justify-end max-w-[45vw] min-w-[45vw]">
          <div className="flex gap-8">
            <Link
              to="divulgacao"
              smooth={true}
              duration={700}
              className="text-xl text-green-800 cursor-pointer"
            >
              Benefícios
            </Link>
            <Link
              to="esg"
              smooth={true}
              duration={900}
              className="text-xl text-green-800 cursor-pointer"
            >
              ESG
            </Link>
            <Link
              to="footer"
              smooth={true}
              duration={900}
              className="text-xl text-green-800 cursor-pointer"
            >
              Nossas Redes
            </Link>
          </div>
          <div className="ml-5 text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-xl px-4 py-2.5 text-center">
            <Link
              to="form"
              smooth={true}
              duration={500}
              className="flex content-center items-center space-x-2 text-xl text-white font-semibold border-green focus:text-green-800 cursor-pointer"
            >
              Queremos conhecer
              <br /> você!
            </Link>
          </div>
        </div>
      </header>
      <main className="overflow-x-hidden">
        <section
          id="dados"
          className="flex gap-x-16 justify-center items-center h-[300px] p-10"
        >
          <div className="flex flex-col gap-y-4 text-center">
            <p className="text-green-800 text-5xl font-semibold">+50</p>
            <p className="text-green-800 text-[28px] font-semibold ">
              Parceiros
            </p>
          </div>
          <div className="flex flex-col gap-y-4 text-center">
            <p className="text-green-800 text-5xl font-semibold ">Até +20%*</p>
            <p className="text-green-800 text-[28px] font-semibold ">
              Aumento de receita
            </p>
          </div>
          <div className="flex flex-col gap-y-4 text-center">
            <p className="text-green-800 text-5xl font-semibold ">+1500</p>
            <p className="text-green-800 text-[28px] font-semibold ">
              kgCO2 evitados
            </p>
          </div>
        </section>
        <Element
          name="divulgacao"
          id="divulgacao"
          className="flex flex-col justify-center items-center h-[300px] text-center"
        >
          <p className="text-green-800 text-4xl font-semibold">
            Expanda seu posto de combustível com sustentabilidade!
          </p>
        </Element>
        <section className="flex justify-center items-center mb-[2rem]">
          <div
            id="cards-divulgacao"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div
              id="card"
              className="w-[20rem] h-[20rem] flex flex-col shadow-2xl justify-center m-[3rem]"
            >
              <div className="flex-col flex justify-center items-center  gap-8 content-center">
                <image.Card1 />
                <div className="txt-center">
                  <h2 className="w-[248px] text-green-700 text-xl font-semibold ">
                    Fidelização dos clientes
                  </h2>
                  <p className="w-[231px] h-[78px] text-center text-green-700 text-base font-normal ">
                    Com os créditos de carbono, você e seu cliente tem mais uma
                    relação em comum!
                  </p>
                </div>
              </div>
            </div>
            <div
              id="card"
              className="w-[20rem] h-[20rem] flex flex-col shadow-2xl  justify-center m-[3rem]"
            >
              <div className="flex-col flex justify-center items-center  gap-8 content-center">
                <image.Card2 />
                <div className="txt-center">
                  <h2 className="w-[248px] text-green-700 text-xl font-semibold ">
                    Fidelização dos clientes
                  </h2>
                  <p className="w-[231px] h-[78px] text-center text-green-700 text-base font-normal ">
                    Com os créditos de carbono, você e seu cliente tem mais uma
                    relação em comum!
                  </p>
                </div>
              </div>
            </div>
            <div
              id="card"
              className="w-[20rem] h-[20rem] flex flex-col shadow-2xl  justify-center m-[3rem]"
            >
              <div className="flex-col flex justify-center items-center  gap-8 content-center">
                <image.Card3 />
                <div className="txt-center">
                  <h2 className="w-[248px] text-green-700 text-xl font-semibold ">
                    Fidelização dos clientes
                  </h2>
                  <p className="w-[231px] h-[78px] text-center text-green-700 text-base font-normal ">
                    Com os créditos de carbono, você e seu cliente tem mais uma
                    relação em comum!
                  </p>
                </div>
              </div>
            </div>
            <div
              id="card"
              className="w-[20rem] h-[20rem] flex flex-col shadow-2xl  justify-center m-[3rem]"
            >
              <div className="flex-col flex justify-center items-center  gap-8 content-center">
                <image.Lucro />
                <div className="txt-center">
                  <h2 className="w-[248px] text-green-700 text-xl font-semibold ">
                    Fidelização dos clientes
                  </h2>
                  <p className="w-[231px] h-[78px] text-center text-green-700 text-base font-normal ">
                    Com os créditos de carbono, você e seu cliente tem mais uma
                    relação em comum!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <image.GarotoDivulgacao />
        </section>
        <Element
          name="esg"
          id="esg"
          className="flex flex-col text-center scale-75 gap-y-8 max-w-[1200px] m-auto mb-[64px]"
        >
          <h2 className="text-green-900 text-5xl font-semibold  m-8">
            ESG: o que significa e benefícios ao adequar o seu negócio
          </h2>
          <p className=" text-green-900 text-2xl font-medium">
            A sigla inclui um conjunto de práticas ambientais, sociais e de
            governança que uma empresa deve adotar em seus projetos, com os seus
            funcionários, clientes e possíveis investidores.
          </p>
          <p className=" text-green-900 text-2xl font-medium ">
            A sigla ESG significa Environmental, Social and Governance
            (Ambiental, Social e Governança) ou ASG em português.
          </p>
          <p className=" text-green-900 text-2xl font-medium ">
            Empresas que usam os padrões ESG possuem maior probabilidade de
            sucesso no longo prazo.
          </p>
        </Element>
        <Element name="form" id="form">
          <RegisterForm />
        </Element>
      </main>
      <Element className="relative" name="footer" id="footer">
        <image.Planta />
        <div className="flex flex-col gap-8 justify-center items-center h-[340px] bg-green-800 text-white">
          <p className="text-white text-2xl font-semibold">
            © 2024 Gasify. Todos os direitos reservados.
          </p>
          <div>
            <a href="https://www.instagram.com" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="text-white mx-4"
              />
            </a>
            <a href="https://www.x.com" target="_blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                size="2x"
                className="text-white mx-4"
              />
            </a>
            <a href="https://www.youtube.com.br" target="_blank">
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                className="text-white mx-4"
              />
            </a>
          </div>
        </div>
      </Element>
    </>
  );
}

