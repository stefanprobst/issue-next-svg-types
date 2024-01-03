import Image from 'next/image'

import logo from '@/public/next.svg'

export default function TestPage() {
	return (
		<main>
			{/* logo has type `any`, not `StaticImageData` */}
			<Image alt="" src={logo} />
		</main>
	)
}
