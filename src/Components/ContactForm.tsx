import { useRef, useState } from "react";
import axios from "axios";
import { Spinner } from "flowbite-react";

export default function ContactForm() {
  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const msg = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Estado para el logo de carga
  const [isSent, setIsSent] = useState(false); // Estado para indicar si el formulario fue enviado

  function validateForm() {
    return (
      name.current?.value &&
      /(.)+@(\w|\W)+\.(\w)+/.test(email.current?.value || "") &&
      msg.current?.value
    );
  }

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true); // Inicia el estado de carga

      try {
        await axios.post("https://formsubmit.co/ajax/felipemiguelsainz@gmail.com", {
          message: `Hola, ${name.current?.value} con el email ${email.current?.value} te envió el siguiente mensaje: ${msg.current?.value}`,
          name: "Be Awake",
        });

        setIsSent(true); // Marca el formulario como enviado
        if (name.current) name.current.value = "";
        if (email.current) email.current.value = "";
        if (msg.current) msg.current.value = "";
      } catch (error) {
        // Manejo de errores en caso de fallo
        console.error("Error al enviar el formulario:", error);
      } finally {
        setIsLoading(false); // Termina el estado de carga
      }
    }
  }

  return (
    <form className="form-container flex flex-wrap p-2 lg:px-4 lg:py-12" onSubmit={submitForm}>
      <div className="input-group flex flex-wrap w-full">
        <label className="w-full maven-pro font-semibold text-xl lg:text-4xl">Name</label>
        <input className="w-full background-blue lg:border-b-2" type="text" ref={name} disabled={isSent} />
      </div>
      <div className="input-group flex flex-wrap w-full lg:mt-12">
        <label className="w-full maven-pro font-semibold text-xl lg:text-4xl">Email</label>
        <input className="w-full background-blue lg:border-b-2" type="email" ref={email} disabled={isSent} />
      </div>
      <div className="input-group flex flex-wrap w-full lg:mt-12">
        <label className="w-full maven-pro font-semibold text-xl lg:text-4xl">Message</label>
        <textarea className="w-full background-blue lg:border-b-2" ref={msg} disabled={isSent} />
      </div>
      <div className="flex items-center gap-2 mt-5">
        <button
          type="submit"
          className="submit-btn text-2xl lg:text-4xl text-white maven-pro font-bold rounded-2xl flex items-center cursor-pointer text-light-blue"
          disabled={isLoading || isSent}
        >
          {isLoading ? (
            <>
              <Spinner aria-label="Cargando..." size="sm" />
              <span className="pl-3">Enviando...</span>
            </>
          ) : isSent ? (
            "Enviado"
          ) : (
            "Let's Talk"
          )}
        </button>
      </div>
    </form>
  );
}
