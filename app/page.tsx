import Image from 'next/image'

import logo from '@/public/next.svg'

export default function TestPage() {
	return (
		<main>
			<Image alt="" src={logo} />
		</main>
	)
}
