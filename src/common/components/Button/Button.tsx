import React from 'react'
import s from './Button.module.scss'
import clsx from "clsx"

export const Button = (props: ButtonPropsType) => {
  return (
    <div className={clsx(s.viewBtn, props.className)} onClick={props.onClick}>
      {props.title}
    </div>
  )
}

type ButtonPropsType = {
  onClick?: () => void
  className?: string
  title: string
}