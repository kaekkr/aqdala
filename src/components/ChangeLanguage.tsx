import useLocaleStore from '@/lib/useLocaleStore'
import { CssTransition, PopupContext } from '@mui/base'
import { Dropdown } from '@mui/base/Dropdown'
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu'
import { MenuButton } from '@mui/base/MenuButton'
import { MenuItem } from '@mui/base/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { styled } from '@mui/system'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { forwardRef, useContext } from 'react'

const ChangeLanguage = () => {
	const { locale, switchEn, switchRu } = useLocaleStore()
	const router = useRouter()
	const pathname = usePathname()

	const changeLanguage = (newLocale: string) => {
		const currentPath = pathname
		const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`)
		router.push(newPath)
	}

	const handleSwitchEn = () => {
		switchEn()
		changeLanguage('en')
	}

	const handleSwitchRu = () => {
		switchRu()
		changeLanguage('ru')
	}

	return (
		<Dropdown>
			<MenuButton className='flex space-x-1'>
				<Image
					src={`/icons/${locale}.svg`}
					alt={locale}
					width={15}
					height={15}
				/>
				<KeyboardArrowDownIcon />
			</MenuButton>
			<Menu slots={{ listbox: AnimatedListbox }}>
				<MenuItem onClick={handleSwitchEn} className='flex space-x-1'>
					<Image src='/icons/en.svg' alt='en' width={15} height={15} />
					<p>EN</p>
				</MenuItem>
				<MenuItem onClick={handleSwitchRu} className='flex space-x-1'>
					<Image src='/icons/ru.svg' alt='ru' width={15} height={15} />
					<p>RU</p>
				</MenuItem>
			</Menu>
		</Dropdown>
	)
}

export default ChangeLanguage

const blue = {
	50: '#F0F7FF',
	100: '#C2E0FF',
	200: '#99CCF3',
	300: '#66B2FF',
	400: '#3399FF',
	500: '#007FFF',
	600: '#0072E6',
	700: '#0059B3',
	800: '#004C99',
	900: '#003A75',
}

const grey = {
	50: '#F3F6F9',
	100: '#E5EAF2',
	200: '#DAE2ED',
	300: '#C7D0DD',
	400: '#B0B8C4',
	500: '#9DA8B7',
	600: '#6B7A90',
	700: '#434D5B',
	800: '#303740',
	900: '#1C2025',
}

const Listbox = styled('ul')(
	({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
		theme.palette.mode === 'dark' ? grey[900] : grey[200]
	};
  z-index: 1;

  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `
)

const AnimatedListbox = forwardRef(function AnimatedListbox(
	props: MenuListboxSlotProps,
	ref: React.ForwardedRef<HTMLUListElement>
) {
	const { ownerState, ...other } = props
	const popupContext = useContext(PopupContext)

	if (popupContext == null) {
		throw new Error(
			'The `AnimatedListbox` component cannot be rendered outside a `Popup` component'
		)
	}

	const verticalPlacement = popupContext.placement.split('-')[0]

	return (
		<CssTransition
			className={`placement-${verticalPlacement}`}
			enterClassName='open'
			exitClassName='closed'
		>
			<Listbox {...other} ref={ref} />
		</CssTransition>
	)
})
