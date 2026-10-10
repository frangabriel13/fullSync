interface ImportMetaEnv {
  /** Access key de Web3Forms (servicio que envía los mensajes del formulario por mail). */
  readonly VITE_WEB3FORMS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
