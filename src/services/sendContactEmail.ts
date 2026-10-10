import type { ContactValues } from '../sections/Contact/validateContact'

// Web3Forms reenvía el formulario por mail a la casilla asociada a la access key.
// La key es pública (está pensada para usarse en el navegador), pero va en el .env
// para no tenerla repetida en el código y poder cambiarla sin tocarlo.
const ENDPOINT = 'https://api.web3forms.com/submit'

export async function sendContactEmail(values: ContactValues) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
  if (!accessKey) {
    throw new Error('Falta configurar VITE_WEB3FORMS_KEY en el archivo .env')
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Nuevo mensaje de ${values.name} desde la web`,
      from_name: 'Web FullSync',
      // Con "email" Web3Forms arma el "responder a", así se contesta directo a la persona
      name: values.name,
      email: values.email,
      phone: values.phone || '-',
      company: values.company || '-',
      message: values.message,
    }),
  })

  const result = (await response.json().catch(() => null)) as { success?: boolean } | null
  if (!response.ok || !result?.success) {
    throw new Error('No se pudo enviar el mensaje')
  }
}
