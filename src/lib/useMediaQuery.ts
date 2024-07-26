import { useState, useEffect } from 'react'

const useMediaQuery = (width: number) => {
	const [targetReached, setTargetReached] = useState(false)
	
	const updateTarget = (e: MediaQueryListEvent) => {
		setTargetReached(e.matches)
	}
	
	useEffect(() => {
		const media = window.matchMedia(`(min-width: ${width}px)`)
		media.addEventListener('change', updateTarget)
		
		if (media.matches) {
			setTargetReached(true)
		}
		
		return () => media.removeEventListener('change', updateTarget)
	}, [width])
	
	return targetReached
}

export default useMediaQuery