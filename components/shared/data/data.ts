import { AiOutlineHome } from "react-icons/ai";
import { SiReacthookform } from "react-icons/si";
import { AiFillPieChart } from "react-icons/ai";
import { PiTableDuotone } from "react-icons/pi";
import { RiPagesFill } from "react-icons/ri";
import { GiFruitBowl } from "react-icons/gi";
import { PiShoppingCartSimpleFill, PiUsersThree } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import { DashCardDataType, DashboardSidebarDataType } from "../types";

// export const navListData: NavListDataType[] = [
//   // {
//   //   id: 1,
//   //   title: "Home",
//   //   href: "/",
//   //   child: [],
//   // },
//   // {
//   //   id: 2,
//   //   title: "About",
//   //   href: "/about",
//   //   child: [],
//   // },
//   // {
//   //   id: 3,
//   //   title: "Pages",
//   //   href: "/pages",
//   //   child: [
//   //     { id: 1, title: "pages1", href: "/pages" },
//   //     { id: 2, title: "pages2", href: "/pages" },
//   //     { id: 3, title: "pages3", href: "/pages" },
//   //   ],
//   // },
//   {
//     id: 4,
//     title: "Shop",
//     href: "/shop",
//     child: [],
//   },
//   // {
//   //   id: 5,
//   //   title: "Projects",
//   //   href: "projects",
//   //   child: [],
//   // },
//   // {
//   //   id: 6,
//   //   title: "News",
//   //   href: "/news",
//   //   child: [],
//   // },
// ];

// social data

// export const socialData: SocialDataType[] = [
//   {
//     id: 1,
//     img: "/assets/images/socialIcons/Insta.svg",
//   },
//   {
//     id: 2,
//     img: "/assets/images/socialIcons/Fb.svg",
//   },
//   {
//     id: 3,
//     img: "/assets/images/socialIcons/Pintrest.svg",
//   },
//   {
//     id: 4,
//     img: "/assets/images/socialIcons/Twiter.svg",
//   },
// ];

// social data

// export const footerUtilityData: FooterDataType[] = [
//   {
//     id: 1,
//     title: "Style Guide",
//   },
//   {
//     id: 2,
//     title: "404 Not Found",
//   },
//   {
//     id: 3,
//     title: "Password Protected",
//   },
//   {
//     id: 4,
//     title: "Licences",
//   },
//   {
//     id: 5,
//     title: "Changelog",
//   },
// ];

//product data

// export const productCardData: ProductCardDataType[] = [
//   {
//     id: 1,
//     btn: "Vegetable",
//     img: "/assets/images/Categories/home-category1.png",
//     title: "Calabrese Broccoli",
//     oldRate: "$20.00",
//     newRate: "$13.00",
//   },
//   {
//     id: 2,
//     btn: "Fresh",
//     img: "/assets/images/Categories/home-category2.png",
//     title: "Fresh Banana Fruites",
//     oldRate: "$20.00",
//     newRate: "$14.00",
//   },
//   {
//     id: 3,
//     btn: "Millets",
//     img: "/assets/images/Categories/home-category3.png",
//     title: "White Nuts",
//     oldRate: "$20.00",
//     newRate: "$15.00",
//   },
//   {
//     id: 4,
//     btn: "Vegetable",
//     img: "/assets/images/Categories/home-category4.png",
//     title: "Vegan Red Tomato",
//     oldRate: "$20.00",
//     newRate: "$17.00",
//   },
//   {
//     id: 5,
//     btn: "Health",
//     img: "/assets/images/Categories/home-category5.png",
//     title: "Mung Bean",
//     oldRate: "$20.00",
//     newRate: "$11.00",
//   },
//   {
//     id: 6,
//     btn: "Nuts",
//     img: "/assets/images/Categories/home-category6.png",
//     title: "Brown Hazelnut",
//     oldRate: "$20.00",
//     newRate: "$12.00",
//   },
//   {
//     id: 7,
//     btn: "Fresh",
//     img: "/assets/images/Categories/home-category7.png",
//     title: "Eggs",
//     oldRate: "$20.00",
//     newRate: "$17.00",
//   },
//   {
//     id: 8,
//     btn: "Fresh",
//     img: "/assets/images/Categories/home-category8.png",
//     title: "Zelco Suji Elaichi Rusk",
//     oldRate: "$20.00",
//     newRate: "$15.00",
//   },
//   {
//     id: 5,
//     btn: "Health",
//     img: "/assets/images/Categories/home-category5.png",
//     title: "Mung Bean",
//     oldRate: "$20.00",
//     newRate: "$11.00",
//   },
//   {
//     id: 6,
//     btn: "Nuts",
//     img: "/assets/images/Categories/home-category6.png",
//     title: "Brown Hazelnut",
//     oldRate: "$20.00",
//     newRate: "$12.00",
//   },
//   {
//     id: 7,
//     btn: "Fresh",
//     img: "/assets/images/Categories/home-category7.png",
//     title: "Eggs",
//     oldRate: "$20.00",
//     newRate: "$17.00",
//   },
//   {
//     id: 8,
//     btn: "Fresh",
//     img: "/assets/images/Categories/home-category8.png",
//     title: "Zelco Suji Elaichi Rusk",
//     oldRate: "$20.00",
//     newRate: "$15.00",
//   },
// ];

//Billing Data

// export const billingData: BillingDataType[] = [
//   {
//     id: 1,
//     title: "Full name",
//     name: "full_name",
//     control: "input",
//     required: true,
//   },
//   {
//     id: 2,
//     title: "District",
//     name: "district",
//     control: "input",
//     required: true,
//   },
//   {
//     id: 3,
//     title: "Town/City",
//     name: "city",
//     control: "input",
//     required: true,
//   },
//   {
//     id: 4,
//     title: "Postal code",
//     name: "postal_code",
//     control: "input",
//     required: true,
//   },
//   {
//     id: 5,
//     title: "Area",
//     name: "area",
//     control: "input",
//     required: true,
//   },
//   {
//     id: 6,
//     title: "Phone number",
//     name: "phone",
//     control: "input",
//     required: true,
//   },
//   {
//     id: 7,
//     title: "E-mail address",
//     name: "email",
//     control: "input",
//     required: true,
//   },
//   {
//     id: 8,
//     title: "Alternative phone number",
//     name: "alt_phone",
//     control: "input",
//     required: false,
//   },
// ];

// export const signupData: SignupData[] = [
//   {
//     name: "name",
//     type: "text",
//     placeholder: "Name",
//     control: "input",
//   },
//   {
//     name: "email",
//     type: "text",
//     placeholder: "Email",
//     control: "input",
//   },
//   {
//     name: "password",
//     type: "password",
//     placeholder: "Password",
//     control: "input",
//   },
// ];

// export const signinData: SigninData[] = [
//   {
//     name: "email",
//     type: "text",
//     placeholder: "Email",
//     control: "input",
//   },
//   {
//     name: "password",
//     type: "password",
//     placeholder: "Password",
//     control: "input",
//   },
// ];
// // order table data

// export const defaultData: Order[] = [
//   {
//     full_Name: "tanner",
//     phone: " 01864009917",
//     district: "Munshiganj",
//     postal_code: 1557,
//     orderNumber: "#001",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Paid",
//     progress: "50%",
//   },
//   {
//     full_Name: "tandy",
//     phone: "123450",
//     district: "Dhaka",
//     postal_code: 1204,
//     orderNumber: "#002",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Due",
//     progress: "80%",
//   },
//   {
//     full_Name: "joe",
//     phone: "12345670",
//     district: "Bilbao",
//     postal_code: 1180,
//     orderNumber: "#003",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "paid",
//     progress: "10%",
//   },
//   {
//     full_Name: "tanner",
//     phone: " 01864009917",
//     district: "Munshiganj",
//     postal_code: 1557,
//     orderNumber: "#001",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Paid",
//     progress: "50%",
//   },
//   {
//     full_Name: "tandy",
//     phone: "123450",
//     district: "Dhaka",
//     postal_code: 1204,
//     orderNumber: "#002",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Due",
//     progress: "80%",
//   },
//   {
//     full_Name: "joe",
//     phone: "12345670",
//     district: "Bilbao",
//     postal_code: 1180,
//     orderNumber: "#003",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "paid",
//     progress: "10%",
//   },
//   {
//     full_Name: "tanner",
//     phone: " 01864009917",
//     district: "Munshiganj",
//     postal_code: 1557,
//     orderNumber: "#001",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Paid",
//     progress: "50%",
//   },
//   {
//     full_Name: "tanner",
//     phone: " 01864009917",
//     district: "Munshiganj",
//     postal_code: 1557,
//     orderNumber: "#001",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Paid",
//     progress: "50%",
//   },
//   {
//     full_Name: "tanner",
//     phone: " 01864009917",
//     district: "Munshiganj",
//     postal_code: 1557,
//     orderNumber: "#001",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Paid",
//     progress: "50%",
//   },
//   {
//     full_Name: "tanner",
//     phone: " 01864009917",
//     district: "Munshiganj",
//     postal_code: 1557,
//     orderNumber: "#001",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Paid",
//     progress: "50%",
//   },
//   {
//     full_Name: "tandy",
//     phone: "123450",
//     district: "Dhaka",
//     postal_code: 1204,
//     orderNumber: "#002",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "Due",
//     progress: "80%",
//   },
//   {
//     full_Name: "joe",
//     phone: "12345670",
//     district: "Bilbao",
//     postal_code: 1180,
//     orderNumber: "#003",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "paid",
//     progress: "10%",
//   },
//   {
//     full_Name: "joe",
//     phone: "12345670",
//     district: "Bilbao",
//     postal_code: 1180,
//     orderNumber: "#003",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "paid",
//     progress: "10%",
//   },
//   {
//     full_Name: "joe",
//     phone: "12345670",
//     district: "Bilbao",
//     postal_code: 1180,
//     orderNumber: "#003",
//     price: "$10",
//     quantity: 15,
//     amount: "$150",
//     status: "paid",
//     progress: "10%",
//   },
// ];

// // dashboard sidebar data

export const dashboardSidebarData: DashboardSidebarDataType[] = [
  {
    id: 1,
    title: "Dashboard",
    icon: AiOutlineHome,
    href: "/dashboard",
  },
  {
    id: 2,
    title: "Products",
    icon: SiReacthookform,
    href: "/dashboard/products",
  },
  // {
  //   id: 3,
  //   title: "Chart",
  //   icon: AiFillPieChart,
  //   href: "/dashboard",
  // },
  // {
  //   id: 4,
  //   title: "Table",
  //   icon: PiTableDuotone,
  //   href: "/dashboard",
  // },
  // {
  //   id: 5,
  //   title: "Pages",
  //   icon: RiPagesFill,
  //   href: "/dashboard",
  // },
];
// dashboard card data

export const dashCardData: DashCardDataType[] = [
  {
    id: 1,
    label: "Total clients",
    value: "6386",
    icon: PiUsersThree,
  },
  {
    id: 2,
    label: "Total products",
    value: "6320",
    icon: GiFruitBowl,
  },
  {
    id: 3,
    label: "Balance",
    value: "64,760",
    icon: TbCurrencyTaka,
  },
  {
    id: 4,
    label: "New sales",
    value: "386",
    icon: PiShoppingCartSimpleFill,
  },
];
