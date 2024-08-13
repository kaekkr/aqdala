import { create } from 'zustand'

interface LocaleState {
	locale: string
	switchRu: () => void
	switchEn: () => void
}

const useLocaleStore = create<LocaleState>(set => ({
	locale: 'ru', // default locale
	switchRu: () => set(() => ({ locale: 'ru' })),
	switchEn: () => set(() => ({ locale: 'en' })),
}))

export default useLocaleStore
