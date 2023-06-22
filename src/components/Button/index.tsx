import clsx from 'clsx'
import { borderActive, backgroundSecondaryActive, backgroundPrimaryActive } from 'lib'
import { FC } from 'react'
import { ThemeType } from 'types'

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
	type?: ThemeType
	icon?: boolean
}

const styles = {
	DEFAULT: clsx(borderActive, backgroundSecondaryActive),
	primary: clsx('text-theme-secondary', backgroundPrimaryActive),
	secondary: backgroundSecondaryActive,
	icon: 'px-0 py-0 flex justify-center items-center w-8 h-8 rounded-full'
}

const Button: FC<ButtonProps> = ({ className, type, icon, ...props }) => {
	return (
		<button
			className={clsx(
				className,
				icon ? styles.icon : 'px-4 py-1.5 rounded-sm',
				styles[type ?? 'DEFAULT'],
				'text-xs backdrop-blur-lg uppercase transition-colors'
			)}
			{...props}
		/>
	)
}

export default Button
