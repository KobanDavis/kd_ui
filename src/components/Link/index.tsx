import clsx from 'clsx'
import { FC } from 'react'

interface LinkProps extends React.HTMLAttributes<HTMLDivElement> {}

const Link: FC<LinkProps> = ({ children }) => {
	return (
		<div className='relative cursor-pointer font-semibold w-min whitespace-nowrap group'>
			{children}
			<div className={clsx('absolute h-px -bottom-px left-0 bg-current w-0 group-hover:w-full transition-[width] ease-out duration-300')} />
		</div>
	)
}

export default Link
