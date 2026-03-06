import { Dialog, Disclosure } from '@headlessui/react'
import { useId, useState } from 'react'

export default function Example() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const usernameId = useId()
  const passwordId = useId()

  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-md bg-white/10 px-3 py-2 text-sm font-normal text-white transition-all duration-150 hover:bg-white/15 hover:font-bold focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              onClick={() => setIsLoginOpen(true)}
            >
              <span className="absolute -inset-1.5" />
              สำหรับร้านค้า
            </button>

          </div>
        </div>
      </div>

      <Dialog
        open={isLoginOpen}
        onClose={setIsLoginOpen}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-sm rounded-xl bg-white p-5 text-gray-900 shadow-xl ring-1 ring-black/10">
            <Dialog.Title className="text-base font-semibold">
              เข้าสู่ระบบสำหรับร้านค้า
            </Dialog.Title>

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault()
                setIsLoginOpen(false)
              }}
            >
              <div>
                <label
                  htmlFor={usernameId}
                  className="block text-sm font-medium text-gray-700"
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  id={usernameId}
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-indigo-500 placeholder:text-gray-400 focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor={passwordId}
                  className="block text-sm font-medium text-gray-700"
                >
                  รหัสผ่าน
                </label>
                <input
                  id={passwordId}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none ring-indigo-500 placeholder:text-gray-400 focus:ring-2"
                />
              </div>

              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-white hover:bg-gray-200 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                  onClick={() => setIsLoginOpen(false)}
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Disclosure>
  )
}
