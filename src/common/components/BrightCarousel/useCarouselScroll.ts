import {useCallback, useRef} from 'react'

export const useCarouselScroll = (active = false, direction: 'left' | 'right' = 'right', interval = 1) => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const scrollAnimationFrame = useRef<number | null>(null)

    const scroll = useCallback((scrollDirection: 'left' | 'right') => {
        if (scrollRef.current) {
            const {scrollLeft, clientWidth, scrollWidth} = scrollRef.current
            const scrollStep = clientWidth / 2

            if (scrollDirection === 'right') {
                const isAtEnd = Math.abs(scrollLeft + clientWidth - scrollWidth) < 20
                const scrollTo = isAtEnd ? 0 : scrollLeft + scrollStep
                scrollRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})
            } else {
                const scrollTo = scrollLeft - scrollStep
                scrollRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})
            }
        }
    }, [])

    const smoothScrollStep = useCallback(() => {
        if (scrollRef.current) {
            const {scrollLeft, scrollWidth, offsetWidth} = scrollRef.current
            const maxScrollLeft = scrollWidth - offsetWidth

            if (direction === 'right') {
                scrollRef.current.scrollLeft += interval
                if (scrollLeft >= maxScrollLeft) {
                    scrollRef.current.scrollLeft = 0
                }
            } else if (direction === 'left') {
                scrollRef.current.scrollLeft -= interval
                if (scrollLeft <= 0) {
                    scrollRef.current.scrollLeft = maxScrollLeft
                }
            }

            scrollAnimationFrame.current = requestAnimationFrame(smoothScrollStep)
        }
    }, [direction, interval])

    const stopSmoothScroll = useCallback(() => {
        if (scrollAnimationFrame.current) {
            cancelAnimationFrame(scrollAnimationFrame.current)
            scrollAnimationFrame.current = null
        }
    }, [])

    const startSmoothScroll = useCallback(() => {
        stopSmoothScroll()
        if (active && scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 2
        }
        scrollAnimationFrame.current = requestAnimationFrame(smoothScrollStep)
    }, [active, smoothScrollStep, stopSmoothScroll])

    const scrollToElement = (index: number) => {
        if (scrollRef.current) {
            const {clientWidth} = scrollRef.current
            const elementWidth = clientWidth / 2
            const scrollTo = index * elementWidth
            scrollRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})
        }
    }

    return {scrollRef, scroll, startSmoothScroll, stopSmoothScroll, scrollToElement}
}
