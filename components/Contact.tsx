import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "@/components/ui/dialog"
  import { Textarea } from "@/components/ui/textarea"

function Contact() {
  return (
    <>
     <Dialog>
  <DialogTrigger >
  <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-300 transition duration-300">
              Contact me
            </Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Lets Connect</DialogTitle>
          <DialogDescription>
           I love to hear any feedback from you guys.You are one form behind for our connection
           Please fill up form .
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name"  className="col-span-5" placeholder='your name'/>
          </div>
          <div className="grid grid-cols-6 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email"  className="col-span-5" placeholder='your email' />
          </div>
          <div className="grid w-full gap-1.5 p-3">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Feedback is all we need to be better
      </p>
    </div>
        </div>
        
        <DialogFooter>
          <Button type="submit">Send</Button>
        </DialogFooter>
      </DialogContent>
</Dialog>
    </>
  )
}

export default Contact