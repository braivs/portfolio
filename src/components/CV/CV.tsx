import s from './CV.module.scss'

export const CV = () => {
  return (
    <div className={s.cv}>
      <iframe className={s.iframe} src={'./cv.pdf'} title={'CV'} />
    </div>
  )
}