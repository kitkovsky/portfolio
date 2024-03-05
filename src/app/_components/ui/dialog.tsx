'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '@utils/cn.utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogOverlay = DialogPrimitive.Overlay

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    preventOutsideEvents?: boolean
    fullScreen?: boolean
  }
>(
  (
    { className, preventOutsideEvents, fullScreen, children, ...props },
    ref,
  ) => (
    <DialogPortal>
      <DialogOverlay className="fixed inset-0 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        ref={ref}
        className={cn({ 'fixed h-dvh w-dvw': fullScreen }, className)}
        onInteractOutside={(event) =>
          preventOutsideEvents ? event.preventDefault() : null
        }
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
)
DialogContent.displayName = DialogPrimitive.Content.displayName

export { Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogContent }
