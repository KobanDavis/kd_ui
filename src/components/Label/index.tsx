import clsx from 'clsx'
import { backgroundPrimaryBase, backgroundSecondaryBase, borderBase } from 'lib'
import { FC } from 'react'
import { ThemeType } from 'types'

interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
	type?: ThemeType
}

const styles = {
	DEFAULT: clsx(borderBase, backgroundSecondaryBase),
	primary: clsx('text-theme-secondary', backgroundPrimaryBase),
	secondary: backgroundSecondaryBase
}

const Label: FC<LabelProps> = ({ className, type, ...props }) => {
	return (
		<div
			className={clsx(className, styles[type ?? 'DEFAULT'], 'text-xs rounded-sm py-0.5 px-1.5 uppercase w-min font-normal backdrop-blur-lg')}
			{...props}
		/>
	)
}

export default Label
