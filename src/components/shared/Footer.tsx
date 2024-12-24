import { Link } from "react-router-dom";
import { FC, memo, useCallback } from "react";
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { FaLinkedin, FaFacebook, FaGithub, FaTwitter, FaArrowUp, FaMobileAlt } from "react-icons/fa";
import { Routes } from "core/routes";

const footerLinks: string[] = ["About us", "Events", "News", "Services"]

const quickLinks: string[] = ["Residents", "Business", "Online Service", "Visiting", "Employment"]

const serviceLinks: string[] = ["Why Choose Us", "Our Solutions", "Partners", "Core Values", "Our Projects"]

type SocialMedia = { label: string, href: string, icon: JSX.Element }
const socialLinks: SocialMedia[] = [
    { label: "Facebook", href: "https://www.facebook.com", icon: <FaFacebook /> },
    { label: "LinkedIn", href: "https://www.linkedin.com", icon: <FaLinkedin /> },
    { label: "GitHub", href: "https://www.github.com", icon: <FaGithub /> },
    { label: "Twitter", href: "https://x.com", icon: <FaTwitter /> },
];

type Post = { date: string, title: string, }
const Posts: Post[] = [
    { date: "23 Jun 2024", title: "We Round Solution - York Blog" },
    { date: "20 Jun 2024", title: "The Medical Of This - Working Health" },
]

const Footer: FC = () => {
    const onScrollTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth', }), [])

    return (
        <footer className="w-full flex flex-col">
            <section className="w-full flex justify-center relative bg-[#273764]">
                <div className="w-full h-full hidden md:block absolute inset-0">
                    <img loading="lazy" src={require('../../assets/images/footer.jpg')} alt="Banner" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-full md:hidden absolute bg-[#273764]"></div>
                <div
                    className="container mx-auto flex flex-col lg:flex-row justify-around items-start lg:items-center gap-8 px-5 py-4 lg:py-0 relative z-10 text-white">

                    <section className="w-full lg:w-[30%] h-full flex flex-col gap-8 p-4 lg:bg-accent">
                        <Link to={Routes.Home} onClick={onScrollTop} className="w-auto flex justify-start items-center gap-2 border-0 outline-0">
                            <img loading="lazy" className="w-16" src={require('../../assets/images/logo.png')} alt="Medilo Logo" />
                            <h4 className="text-3xl md:text-2xl font-[900]">Medilo</h4>
                        </Link>
                        <hr className="hidden lg:block border-white" />
                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <FaClock />
                                <div>
                                    <p className="font-semibold">Open Hours:</p>
                                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaLocationDot />
                                <p>13/A, Miranda Halim City.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <FaMobileAlt />
                                <p>099 695 695 3</p>
                            </div>

                            <div className="flex justify-end md:justify-start gap-3">
                                {
                                    socialLinks.map(({ href, label, icon }) => (
                                        <a key={label} href={href} target="_blank" aria-label={label} rel="noreferrer"
                                            className="w-8 h-8 flex items-center justify-center bg-[#54b3f4] rounded-full">
                                            {icon}
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                    <section
                        className="w-full lg:w-[70%] flex flex-wrap lg:flex-nowrap justify-between lg:justify-around gap-8 ">
                        <div>
                            <h2 className="text-xl font-bold pb-4">Service</h2>
                            <ul className="space-y-2">
                                {serviceLinks.map((link) => (<li key={link}>{link}</li>))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold pb-4">Quick Links</h2>
                            <ul className="space-y-2">
                                {quickLinks.map((link) => (<li key={link}>{link}</li>))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold pb-4">Recent Posts</h2>
                            <div className="space-y-4">
                                {
                                    Posts.map(({ date, title }, index) => (
                                        <article key={title} className="flex items-start gap-3">
                                            <img loading="lazy" src={require(`../../assets/images/posts/post-${index}.png`)}
                                                alt="Post"
                                                className="w-24 h-20 object-cover rounded-lg" />
                                            <div>
                                                <p className="text-sm">{date}</p>
                                                <h3 className="font-semibold">{title}</h3>
                                            </div>
                                        </article>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <section className="w-full relative py-4 text-white bg-[#1d2c4d]">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm">Copyright &copy; 2024 Medilo, All Rights Reserved</p>
                    <ul className="flex justify-center items-center gap-4 text-sm">
                        {footerLinks.map((link) => (<li key={link}>{link}</li>))}
                    </ul>
                </div>
                <button type="button" onClick={onScrollTop}
                    className="w-10 aspect-square flex items-center justify-center rounded-full absolute bottom-16 end-4 md:bottom-8 md:end-2 cursor-pointer text-accent bg-white">
                    <FaArrowUp />
                </button>
            </section>
        </footer>
    );
}

export default memo(Footer);
