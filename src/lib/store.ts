import { create } from 'zustand'

interface NavbarState {
	isNavOpen: boolean
	toggleNav: () => void
	closeNav: () => void
}

const useNavbarStore = create<NavbarState>((set) => ({
	isNavOpen: false,
	toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
	closeNav: () => set(() => ({ isNavOpen: false }))
}))

export default useNavbarStore
