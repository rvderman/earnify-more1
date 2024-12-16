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
  storeName: z.string().min(2, "Store name must be at least 2 characters"),
  storeState: z.string().min(2, "Please enter a valid state"),
  managerName: z.string().min(2, "Manager's name must be at least 2 characters"),
  managerEmail: z.string().email("Please enter a valid email"),
  managerPhone: z.string().min(10, "Please enter a valid phone number"),
  yourName: z.string().optional(),
  currentPaymentSolution: z.string().min(2, "Please specify your current payment solution"),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "",
      storeState: "",
      managerName: "",
      managerEmail: "",
      managerPhone: "",
      yourName: "",
      currentPaymentSolution: "",
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
          name="storeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter store name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="storeState"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store State</FormLabel>
              <FormControl>
                <Input placeholder="Enter store state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="managerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manager's Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter manager's name" {...field} />
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
                <Input type="email" placeholder="manager@example.com" {...field} />
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
              <FormLabel>Your Name (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name (optional)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currentPaymentSolution"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Payment Solution</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Square, Stripe, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full text-white">
          Reach out to My Manager
        </Button>
      </form>
    </Form>
  );
};