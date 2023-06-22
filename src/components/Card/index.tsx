import clsx from 'clsx'
import { FC } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string
}

const Card: FC<CardProps> = ({ className, title, children, ...props }) => {
	return (
		<div className={clsx(className, 'flex flex-col rounded-sm border border-theme-primary/15 bg-theme-primary/5 backdrop-blur-lg')} {...props}>
			{title ? <div className='px-4 py-2 text-lg font-semibold border-b border-b-theme-primary/15'>{title}</div> : null}
			<div className='p-4'>{children}</div>
		</div>
	)
}

export default Card
