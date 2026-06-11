import { useRef, useState } from "react";
import axios from "axios";
import { Spinner } from "flowbite-react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const msg = useRef<HTMLTextAreaElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

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
      setIsLoading(true);

      try {
        await axios.post("https://formsubmit.co/ajax/felipemiguelsainz@gmail.com", {
          message: `Hola, ${name.current?.value} con el email ${email.current?.value} te envió el siguiente mensaje: ${msg.current?.value}`,
          name: "Be Awake",
        });

        setIsSent(true);
        if (name.current) name.current.value = "";
        if (email.current) email.current.value = "";
        if (msg.current) msg.current.value = "";
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <form className="form-container flex flex-wrap p-2 lg:px-4 lg:py-12" onSubmit={submitForm} noValidate>
      <div className="input-group flex flex-wrap w-full">
        <label htmlFor="contact-name" className="w-full maven-pro font-semibold text-xl lg:text-4xl">
          {t("contact.form.name")}
        </label>
        <input
          id="contact-name"
          name="name"
          autoComplete="name"
          className="w-full background-blue lg:border-b-2"
          type="text"
          ref={name}
          disabled={isSent}
          required
        />
      </div>
      <div className="input-group flex flex-wrap w-full lg:mt-12">
        <label htmlFor="contact-email" className="w-full maven-pro font-semibold text-xl lg:text-4xl">
          {t("contact.form.email")}
        </label>
        <input
          id="contact-email"
          name="email"
          autoComplete="email"
          className="w-full background-blue lg:border-b-2"
          type="email"
          ref={email}
          disabled={isSent}
          required
        />
      </div>
      <div className="input-group flex flex-wrap w-full lg:mt-12">
        <label htmlFor="contact-message" className="w-full maven-pro font-semibold text-xl lg:text-4xl">
          {t("contact.form.message")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="w-full background-blue lg:border-b-2"
          ref={msg}
          disabled={isSent}
          required
        />
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
              <span className="pl-3">{t("contact.form.sending")}</span>
            </>
          ) : isSent ? (
            t("contact.form.sent")
          ) : (
            t("contact.form.submit")
          )}
        </button>
      </div>
    </form>
  );
}
