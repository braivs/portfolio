import React, {useEffect} from 'react'
import {useCarouselScroll} from './useCarouselScroll'
import styles from './BrightCarousel.module.scss'
import clsx from 'clsx'
import {ScrollButton} from '../ScrollButton/ScrollButton'

type Props = {
    elements: React.ReactNode[]
    isControlHidden?: boolean
    interval?: number
    smooth?: {
        active: boolean
        direction: 'left' | 'right'
    }
    className?: string
}

const BrightCarousel: React.FC<Props> = ({elements, isControlHidden = false, interval, smooth, className}) => {
    const {scrollRef, scroll, startSmoothScroll, stopSmoothScroll} = useCarouselScroll(
        smooth?.active,
        smooth?.direction,
        interval
    )

    const elementsToRender = smooth
        ? Array.from({length: 4}, () => elements).flat()
        : elements

    useEffect(() => {
        if (smooth?.active) {
            startSmoothScroll()
            return () => stopSmoothScroll()
        } else if (interval) {
            const autoScroll = setInterval(() => {
                scroll('right')
            }, interval * 1000)
            return () => clearInterval(autoScroll)
        }
    }, [interval, scroll, smooth?.active, smooth?.direction, startSmoothScroll, stopSmoothScroll])

    return (
        <div className={styles.brightCarousel}>
            {!isControlHidden &&
                <ScrollButton onClick={() => scroll('left')} direction={'left'} className={styles.scrollButtonLeft}/>
            }
            <div ref={scrollRef} className={clsx(styles.scrollContainer, className)}>
                {elementsToRender.map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
            {!isControlHidden &&
                <ScrollButton onClick={() => scroll('right')} direction={'right'} className={styles.scrollButtonRight}/>
            }
        </div>
    )
}

export default BrightCarousel
