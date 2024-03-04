import { Link } from '@components/ui/link'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export const GetInTouch = (): React.ReactElement => (
  <div id="contact" className="scroll-mt-28">
    <h2 className="mb-7 text-2xl font-semibold">Get in touch</h2>

    <Link
      variant="default"
      href="mailto:okitkowski114@gmail.com"
      className="flex items-center justify-center font-semibold"
    >
      <EnvelopeIcon className="mr-2 h-6 w-6" />
      Send me an email!
    </Link>
  </div>
)
