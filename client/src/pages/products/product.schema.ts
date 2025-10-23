import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  description: z.string().min(1, { message: "Description is required" }).max(1000, { message: "Description must be less than 1000 characters" }),
  price: z.number().min(0, { message: "Price is required" }).max(1000000, { message: "Price must be less than 1000000" }),
  image: z.string().min(1, { message: "Image is required" }).url({ message: "Image must be a valid URL" }),
});

export type ProductFormSchema = z.infer<typeof productFormSchema>;