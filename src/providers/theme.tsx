import color from 'color'
import { useState, useContext, createContext } from 'react'
import type { FC, ReactNode } from 'react'
import { ThemeType } from 'types'

interface ThemeContext {
	setThemeColor(color: ThemeType, value: string): void
	theme: Record<ThemeType, string>
}

type VariableKey = '--theme-primary' | '--theme-primary-light' | '--theme-primary-lighter' | '--theme-secondary'

type VariableMap = Record<VariableKey, string>

const ThemeProvider: FC<{ children: ReactNode }> = ({ children, ...props }) => {
	const [theme, setTheme] = useState<ThemeContext['theme']>({
		primary: '#dac5a7',
		// secondary: '#0e0e0e',
		secondary: '#021227'
	})

	const variables: VariableMap = {
		'--theme-primary': color(theme.primary).rgb().array().join(' '),
		'--theme-primary-light': color(theme.primary).lighten(0.05).string(),
		'--theme-primary-lighter': color(theme.primary).lighten(0.1).string(),
		'--theme-secondary': color(theme.secondary).rgb().array().join(' ')
	}

	const setThemeColor = (color: ThemeType, value: string) => {
		setTheme((old) => {
			const theme = structuredClone(old)
			theme[color] = value
			return theme
		})
	}
	return (
		<Context.Provider value={{ theme, setThemeColor }} {...props}>
			<div style={variables as any} className='selection:bg-theme-primary selection:text-theme-secondary'>
				{children}
			</div>
		</Context.Provider>
	)
}

const Context = createContext<ThemeContext>(null as any)

const useTheme = () => useContext(Context)

export { ThemeProvider, useTheme }
