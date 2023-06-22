import { Button, Card, Label, Link } from 'components'
import { FC } from 'react'
import { CogIcon, CubeTransparentIcon, EyeDropperIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'providers/theme'
import { borderBase } from 'lib'
import clsx from 'clsx'
const App: FC = () => {
	const { setThemeColor, theme } = useTheme()
	return (
		<div className='text-sm bg-theme-secondary text-theme-primary flex flex-col w-screen min-h-screen'>
			<Card className='m-4 max-w-lg w-full self-center flex'>
				<div className='flex justify-between items-center'>
					<span className='flex items-center text-2xl'>
						KD_UI <CubeTransparentIcon className='h-6 w-6 ml-1' />
					</span>
					<div className='flex space-x-2'>
						<Label type='primary' className='flex items-center'>
							<span>Primary</span>
							<EyeDropperIcon className='w-3 h-3 ml-1' />
							<input
								className={clsx(borderBase, 'absolute w-full h-full cursor-pointer left-0 opacity-0')}
								type='color'
								value={theme.primary}
								onChange={(e) => setThemeColor('primary', e.target.value)}
							/>
						</Label>
						<Label type='secondary' className='flex items-center'>
							<span>Secondary</span>
							<EyeDropperIcon className='w-3 h-3 ml-1' />
							<input
								className={clsx(borderBase, 'absolute w-full h-full cursor-pointer left-0 opacity-0')}
								type='color'
								value={theme.secondary}
								onChange={(e) => setThemeColor('secondary', e.target.value)}
							/>
						</Label>
					</div>
				</div>
			</Card>
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
