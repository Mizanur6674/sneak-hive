import { IconType } from "react-icons/lib";
import * as z from "zod";

export const ProductSchema = z.object({
  name: z.string().nonempty("Required Field"),
  sizes: z.array(
    z.object({
      size: z.string().nonempty("Required Field"),
      quantity: z
        .number({
          required_error: "Required Field",
          invalid_type_error: "Quantity must be a number",
        })
        .min(1, "Quantity must be greater than 0"),
    })
  ),

  categoryId: z.number({
    required_error: "Required Field",
    invalid_type_error: "Categories must be a number",
  }),

  discount: z.number({
    required_error: "Required Field",
    invalid_type_error: "discount must be a number",
  }),

  description: z.string().nonempty("Required Field"),

  price: z.number({
    required_error: "Required Field",
    invalid_type_error: "Price must be a number",
  }),
  images: z.string().array().nonempty("Required Field"),
});
export type ProductType = z.infer<typeof ProductSchema> & {
  priceId: string;
  id: number;
  category?: any[];
};

export const BillingSchema = z.object({
  full_name: z.string().nonempty("Required Field"),
  district: z.string().nonempty("Required Field"),
  city: z.string().nonempty("Required Field"),
  postal_code: z.string().nonempty("Required Field"),
  area: z.string().nonempty("Required Field"),
  phone: z.string().nonempty("Required Field"),
  email: z.string().nonempty("Required Field"),
});
export type BillingType = z.infer<typeof BillingSchema>;

export const SignupSchema = z
  .object({
    name: z.string().nonempty("Required Field"),
    email: z.string().email().nonempty("Required Field"),
    password: z.string().nonempty("Required Field"),
    cpassword: z.string().nonempty("Required Field"),
  })
  .refine((data) => data.password === data.cpassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  });

export type SignupType = z.infer<typeof SignupSchema>;

export const SigninSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("this is not a valid email")
    .refine((e) => e === "abcd@fg.com", "This email is not in our database"),
  password: z.string().nonempty("Required Field"),
});
export type SigninType = z.infer<typeof SigninSchema>;
export interface NavListDataType {
  id: number;
  title: string;
  href: string;
  child: any[];
}

export interface SocialDataType {
  id: number;
  img: string;
}

export interface FooterDataType {
  id: number;
  title: string;
}
export interface ProductCardDataType {
  id: number;
  btn: string;
  img: string;
  title: string;
  oldRate: string;
  newRate: string;
}
export interface BillingDataType {
  id: number;
  title: string;
  name: string;
  control: string;
  required?: boolean;
}
export interface SignupData {
  type: string;
  name: string;
  placeholder: string;
  control: string;
}
export interface SigninData {
  type: string;
  name: string;
  placeholder: string;
  control: string;
}

export type ProductPropsType = {
  id: number;
  name: string;
  slug: string;
  description: string;
  active: boolean;
  price: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  sectionId: number;
  categoryId: number;
  variants: string;
  like: number;
  sub_brandId: number;
};

export type CartItem = {
  id: number;
  quantity: number;
  price: number;
};

export interface DashboardSidebarDataType {
  id: number;
  title: string;
  icon: IconType;
  href: string;
}
export interface Order {
  full_Name: string;
  phone: string;
  district: string;
  postal_code: number;
  orderNumber: string;
  price: string;
  amount: string;
  quantity: number;
  status: string;
  progress: string;
}

export interface DashCardDataType {
  id: number;
  label: string;
  value: number | string;
  icon: IconType;
}

export interface AboutAuthorTopDataType {
  id: number;
  icon: IconType;
  link: string;
}
