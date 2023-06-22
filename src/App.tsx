import { Button, Card, Label, Link } from 'components'
import { FC } from 'react'
import { CogIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'providers/theme'
import { borderBase } from 'lib'
import clsx from 'clsx'
const App: FC = () => {
	const { setThemeColor, theme } = useTheme()
	return (
		<div className='text-sm bg-theme-secondary text-theme-primary flex flex-col justify-center items-center w-screen min-h-screen'>
			<span className='items-center text-2xl mb-2'>KD UI</span>
			<div className='flex items-center space-x-2 mb-2'>
				<input
					className={clsx(borderBase, 'bg-theme-secondary rounded-full w-6 h-6 overflow-hidden')}
					type='color'
					value={theme.primary}
					onChange={(e) => setThemeColor('primary', e.target.value)}
				/>
				<Label type='primary'>Primary</Label>
			</div>
			<div className='flex items-center space-x-2'>
				<input
					className={clsx(borderBase, 'bg-theme-secondary rounded-full w-6 h-6 overflow-hidden')}
					type='color'
					value={theme.secondary}
					onChange={(e) => setThemeColor('secondary', e.target.value)}
				/>
				<Label type='secondary'>Secondary</Label>
			</div>
			<div className='grid grid-cols-[repeat(auto-fill,_minmax(20rem,1fr))] gap-4 w-full p-4'>
				<Card title='Button'>
					<div className='flex space-x-2 mb-2'>
						<Button>Default</Button>
						<Button type='primary'>Primary</Button>
						<Button type='secondary'>Secondary</Button>
					</div>
					<div className='flex space-x-2'>
						<Button icon>
							<CogIcon className='h-5 w-5' />
						</Button>
						<Button icon type='primary'>
							<CogIcon className='h-5 w-5' />
						</Button>
						<Button icon type='secondary'>
							<CogIcon className='h-5 w-5' />
						</Button>
					</div>
				</Card>
				<Card title='Link'>
					<Link>Link</Link>
				</Card>
				<Card title='Label'>
					<div className='flex space-x-2 mb-2'>
						<Label>Default</Label>
						<Label type='primary'>Primary</Label>
						<Label type='secondary'>Secondary</Label>
					</div>
				</Card>
			</div>
		</div>
	)
}

export default App
