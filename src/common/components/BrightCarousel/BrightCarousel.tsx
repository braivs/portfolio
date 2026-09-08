import React, {useCallback, useEffect, useState} from 'react'
import {useCarouselScroll} from './useCarouselScroll'
import styles from './BrightCarousel.module.scss'
import clsx from 'clsx'
import {ScrollButton} from '../ScrollButton/ScrollButton'

type Props = {
    elements: React.ReactNode[]
    isControlHidden?: boolean
    /**
     * Overlay arrows on the track instead of sitting in the flex row beside it.
     *
     * On the platform the buttons are inline and eat track width.
     * Here the track is full-viewport, but controls should stay on the edges
     * of the old content column (centered 80% container).
     * Leave the flag off to keep the original inline layout.
     */
    floatingControls?: boolean
    interval?: number
    smooth?: {
        active: boolean
        direction: 'left' | 'right'
    }
    className?: string
}

const BrightCarousel: React.FC<Props> = ({
    elements,
    isControlHidden = false,
    floatingControls = false,
    interval,
    smooth,
    className,
}) => {
    const [isManual, setIsManual] = useState(false)
    const {scrollRef, scroll, startSmoothScroll, stopSmoothScroll} = useCarouselScroll(
        smooth?.active,
        smooth?.direction,
        interval
    )

    const elementsToRender = smooth
        ? Array.from({length: 4}, () => elements).flat()
        : elements

    useEffect(() => {
        if (isManual) {
            stopSmoothScroll()
            return
        }

        if (smooth?.active) {
            startSmoothScroll()
            return () => stopSmoothScroll()
        }

        if (interval) {
            const autoScroll = setInterval(() => {
                scroll('right')
            }, interval * 1000)
            return () => clearInterval(autoScroll)
        }
    }, [interval, isManual, scroll, smooth?.active, startSmoothScroll, stopSmoothScroll])

    const handleControlClick = useCallback((direction: 'left' | 'right') => {
        if (!isManual) {
            setIsManual(true)
            stopSmoothScroll()
        }
        scroll(direction)
    }, [isManual, scroll, stopSmoothScroll])

    const showControls = !isControlHidden || floatingControls

    return (
        <div className={clsx(styles.brightCarousel, floatingControls && styles.floating)}>
            {showControls &&
                <ScrollButton
                    onClick={() => handleControlClick('left')}
                    direction={'left'}
                    className={styles.scrollButtonLeft}
                />
            }
            <div ref={scrollRef} className={clsx(styles.scrollContainer, className)}>
                {elementsToRender.map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
            {showControls &&
                <ScrollButton
                    onClick={() => handleControlClick('right')}
                    direction={'right'}
                    className={styles.scrollButtonRight}
                />
            }
        </div>
    )
}

export default BrightCarousel
