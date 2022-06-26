import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: activeLesson } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  )

  const isActiveLesson = slug === activeLesson

  return isLessonAvailable ? (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300 capitalize">{availableDateFormatted}</span>
      <div
        className={`rounded border border-gray-500 mt-2 p-4 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}
      >
        <header className="flex items-center justify-between">
          <span className={`text-sm  font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : 'text-blue-500'}`}>
            <CheckCircle size={20} /> Conteúdo liberado
          </span>

          <span className={`text-xs text-white px-2 py-[0.125rem] rounded border ${isActiveLesson ? 'border-white' : 'border-green-300'}`}>
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>
        <strong className={`mt-5 block ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>{title}</strong>
      </div>
    </Link>
  ) : (
    <div>
      <span className="text-gray-300 capitalize">{availableDateFormatted}</span>
      <div className="rounded border border-gray-500 mt-2 p-4">
        <header className="flex items-center justify-between">
          <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
            <Lock size={20} /> Em breve
          </span>
          <span className="text-xs text-white px-2 py-[0.125rem] rounded border border-green-300">
            {type === 'live' ? 'Ao vivo' : 'Aula prática'}
          </span>
        </header>
        <strong className="mt-5 block text-gray-200">{title}</strong>
      </div>
    </div>
  )
}
