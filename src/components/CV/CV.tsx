import s from './CV.module.scss'
import {Button} from "../../common/components/Button/Button"
import {useNavigate} from "react-router-dom"

export const CV = () => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/')
  }

  return (
    <div className={s.cv}>
      <Button title={'See portfolio'} className={s.buttonAdditional} onClick={onClick}/>
      <iframe className={s.iframe} src={'./BraivsCV.pdf'} title={'CV'} />
    </div>
  )
}