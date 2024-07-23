import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ChevronDown, LogOut, Settings } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none items-center gap-2"
        >
          <Avatar>
            <AvatarImage
              src="https://github.com/alexandretonin.png"
              className="h-6 w-6 rounded-full"
            />
            <AvatarFallback className="h-6 w-6 rounded-full bg-muted-foreground p-1">
              AT
            </AvatarFallback>
          </Avatar>
          <span>Alexandre Tonin</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Alexandre Tonin</span>
          <span className="text-xs font-normal text-muted-foreground">
            xandetonin@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
