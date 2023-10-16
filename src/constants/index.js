import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        bigShoe: bigShoe1,
    },
    {
        bigShoe: bigShoe2,
    },
    {
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "XO Air Jordan-01",
        price: "$200.20",
        rating: '4.5',
    },
    {
        imgURL: shoe5,
        name: "XO Air Jordan-10",
        price: "$210.20",
        rating: '5.0',
    },
    {
        imgURL: shoe6,
        name: "XO Air Jordan-100",
        price: "$220.20",
        rating: '4.0',
    },
    {
        imgURL: shoe7,
        name: "XO Air Jordan-001",
        price: "$230.20",
        rating: '4.5',
    },    
    {
        imgURL: shoe6,
        name: "XO Air Jordan-100",
        price: "$220.20",
        rating: '4.0',
    },
    {
        imgURL: shoe7,
        name: "XO Air Jordan-001",
        price: "$230.20",
        rating: '4.5',
    },
    {
        imgURL: shoe4,
        name: "XO Air Jordan-01",
        price: "$200.20",
        rating: '4.5',
    },
    {
        imgURL: shoe5,
        name: "XO Air Jordan-10",
        price: "$210.20",
        rating: '5.0',
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Anastasia Dan',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Anastasia Dan',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "XO Force 1", link: "/" },
            { name: "XO Max 1", link: "/" },
            { name: "XO Jordan 1", link: "/" },
            { name: "XO Force 2", link: "/" },
            { name: "XO Waffle Racer", link: "/" },
            { name: "XO Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@XO.com", link: "mailto:customer@XO.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
