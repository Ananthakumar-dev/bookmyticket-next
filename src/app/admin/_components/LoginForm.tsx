"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {User, Lock} from "lucide-react";

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters"
    })
})

export function LoginForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast("You submitted the following values", {
            description: (
                <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex items-center gap-1 border rounded-md px-2">
                                    <User />
                                    <Input
                                        type="text"
                                        placeholder="Username"
                                        className="border-0"
                                        {...field}
                                    />
                                </div>
                            </FormControl>

                            <FormControl>
                                <div className="flex items-center gap-1 border rounded-md px-2">
                                    <Lock />
                                    <Input
                                        type="password"
                                        placeholder="Password"
                                        className="border-0"
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Signin</Button>
            </form>
        </Form>
    )
}
