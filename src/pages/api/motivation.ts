import { NextApiRequest, NextApiResponse } from 'next'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { text } = req.body
  if (req.method !== 'POST') return res.status(405).end()

  const prompt = `Genera una frase de máximo 20 palabras con motivo de "${text}" para alcanzar los logros personales y profesionales. Por favor, se creativo, no me muestres las mismas frases`

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: `Responde como si fueras la inteligencia artificial conversacional ChatGPT. El usuario te escribe un prompt y tú debes contestar de forma natural. El prompt es: ${prompt}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      }),
    })

    if (!response.ok) {
      console.error(response.statusText)
      return res.status(500).json({ error: 'OpenAI API error' })
    }

    const json = await response.json()
    console.log(json.choices[0].text)

    return res.status(200).json({ response: json.choices[0].text })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })
  }
}
