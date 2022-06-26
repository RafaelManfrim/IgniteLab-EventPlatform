import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { Logo } from "../components/Logo";
import CodeMockup from '../assets/code-mockup.png'

export function Subscribe() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    await createSubscriber({ variables: { name, email } })
    navigate('/event')
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-28 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">ReactJs</strong>
          </h1>
          <p className="mt-4 leading-relaxed text-gray-200">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digie seu e-mail"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Carregando...' : 'Garantir minha vaga'}
            </button>
          </form>
        </div>
      </div>
      <img src={CodeMockup} />
    </div>
  )
}