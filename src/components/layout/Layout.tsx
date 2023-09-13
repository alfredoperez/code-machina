import * as React from 'react'
import { Button, Input, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { SearchIcon } from '@nextui-org/shared-icons'
import Link from 'next/link'
import { GitHubIcon } from '~/components/icons/GitHubIcon'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            {/*<AcmeLogo />*/}
            <p className="hidden font-bold text-inherit sm:block">Code Machina</p>
          </NavbarBrand>
          <NavbarContent className="hidden gap-3 sm:flex">
            <Input
              classNames={{
                base: 'max-w-full sm:max-w-[10rem] h-10',
                input: 'text-small',
                inputWrapper:
                  'font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
              }}
              placeholder="Type to search..."
              size="sm"
              startContent={<SearchIcon width={18} />}
              type="search"
            />
          </NavbarContent>
        </NavbarContent>
        <NavbarContent className="items-center" justify="end">
          <Link href="www.github.com">
            <Button isIconOnly variant="shadow" size={'sm'}>
              <GitHubIcon width={20} height={20} />
            </Button>
          </Link>
        </NavbarContent>
      </Navbar>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <main className="flex flex-1 flex-col items-center justify-center px-20 text-center">
          {props.children}
        </main>
        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center"
            href="https://code-machina.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Made with ❤️ by Code Machina
          </a>
        </footer>
      </div>
    </div>
  )
}
