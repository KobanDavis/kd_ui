import clsx from 'clsx'

const borderBase = 'border border-theme-primary/15'
const borderHover = clsx(borderBase, 'hover:border-theme-primary/30')
const borderActive = clsx(borderHover, 'active:border-theme-primary/50')

const backgroundSecondaryBase = 'bg-theme-primary/5'
const backgroundSecondaryHover = clsx(backgroundSecondaryBase, 'hover:bg-theme-primary/10')
const backgroundSecondaryActive = clsx(backgroundSecondaryHover, 'active:bg-theme-primary/15')

const backgroundPrimaryBase = 'bg-theme-primary'
const backgroundPrimaryHover = clsx(backgroundPrimaryBase, 'hover:bg-theme-primary-light')
const backgroundPrimaryActive = clsx(backgroundPrimaryHover, 'active:bg-theme-primary-lighter')

export {
	borderActive,
	borderBase,
	borderHover,
	backgroundSecondaryActive,
	backgroundSecondaryBase,
	backgroundSecondaryHover,
	backgroundPrimaryActive,
	backgroundPrimaryBase,
	backgroundPrimaryHover
}
