import s from './CV.module.scss'
import {Button} from "../../common/components/Button/Button"
import {useNavigate} from "react-router-dom"

type CVProps = {
  pdfFileName?: string
}

export const CV = ({pdfFileName = 'CV_Braivs_Ustiugov_Frontend_React_NextJS_iGaming.pdf'}: CVProps) => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/')
  }

  return (
    <div className={s.cv}>
      <Button title={'See portfolio'} className={s.buttonAdditional} onClick={onClick}/>
      <iframe className={s.iframe} src={`./${pdfFileName}`} title={'CV'} />
    </div>
  )
}