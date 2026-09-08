import React, {useCallback, useEffect, useState} from 'react'
import {useCarouselScroll} from './useCarouselScroll'
import styles from './BrightCarousel.module.scss'
import clsx from 'clsx'
import {ScrollButton} from '../ScrollButton/ScrollButton'

export type CarouselDirection = 'left' | 'right'

export type BrightCarouselProps = {
    elements: React.ReactNode[]
    isControlHidden?: boolean
    // Overlay arrows on the track at the 80% column edges. Default stays inline like the platform.
    floatingControls?: boolean
    interval?: number
    smooth?: {
        active: boolean
        direction: CarouselDirection
    }
    className?: string
    onControlClick?: (direction: CarouselDirection) => void
    // First manual click pages this way, so a reverse-auto track matches the lead carousel.
    takeoverDirection?: CarouselDirection
}

export default function BrightCarousel({
    elements,
    isControlHidden = false,
    floatingControls = false,
    interval,
    smooth,
    className,
    onControlClick,
    takeoverDirection,
}: BrightCarouselProps) {
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

    const handleControlClick = useCallback((direction: CarouselDirection) => {
        onControlClick?.(direction)
        if (!isManual) {
            setIsManual(true)
            stopSmoothScroll()
            scroll(takeoverDirection ?? direction)
            return
        }
        scroll(direction)
    }, [isManual, onControlClick, scroll, stopSmoothScroll, takeoverDirection])

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
