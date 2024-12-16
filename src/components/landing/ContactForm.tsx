import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  managerName: z.string().min(2, "Manager's name must be at least 2 characters"),
  managerEmail: z.string().email("Please enter a valid email"),
  managerPhone: z.string().min(10, "Please enter a valid phone number"),
  yourName: z.string().min(2, "Your name must be at least 2 characters"),
  yourEmail: z.string().email("Please enter a valid email"),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      managerName: "",
      managerEmail: "",
      managerPhone: "",
      yourName: "",
      yourEmail: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    toast.success("Thanks! We'll be in touch with your manager soon.");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="managerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manager's Name</FormLabel>
              <FormControl>
                <Input placeholder="John Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="managerEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manager's Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="managerPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manager's Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yourName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yourEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full">
          Reach out to My Manager
        </Button>
      </form>
    </Form>
  );
};