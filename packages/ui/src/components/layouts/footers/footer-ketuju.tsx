
import Link from "next/link";
import { HeaderDefaultLogo } from "../headers/header-ketuju-default-logo";

interface NavigationItem {
  name: string; // Nama item
  href: string; // URL tujuan
  external?: boolean; // Apakah link external?
}

interface FooterProps {
  logo?: React.ReactNode; // Props untuk logo
  description?: string; // Deskripsi footer
  navigation?: {
    product: NavigationItem[];
    resources: NavigationItem[];
    company: NavigationItem[];
    legal: NavigationItem[];
  }; // Props untuk navigation items
  copyrightText?: string; // Teks copyright
  systemStatus?: {
    label: string; // Label status sistem
    color: string; // Warna status sistem
  }; // Props untuk status sistem
}

export function Footer({
  logo = <HeaderDefaultLogo className="w-32 sm:w-40" />, // Default logo
  description = "Redefining the way databases are built and managed. Built in Switzerland, made for the world.", // Default deskripsi
  navigation = {
    product: [
      { name: "Enterprise", href: "#", external: false },
      { name: "Pricing", href: "/pricing", external: false },
      { name: "Docs", href: "#", external: false },
      { name: "Changelog", href: "/changelog", external: false },
    ],
    resources: [
      { name: "FAQs", href: "/pricing#faq-title", external: false },
      { name: "GitHub", href: "#", external: true },
      { name: "Discord", href: "#", external: true },
      { name: "YouTube", href: "#", external: true },
    ],
    company: [
      { name: "About", href: "/about", external: false },
      { name: "Careers", href: "#", external: true },
      { name: "Contact", href: "#", external: false },
      { name: "Status", href: "#", external: false },
    ],
    legal: [
      { name: "Imprint", href: "#", external: false },
      { name: "Privacy", href: "#", external: false },
      { name: "Terms", href: "#", external: false },
      { name: "DPA", href: "#", external: false },
    ],
  }, // Default navigation items
  copyrightText = `© ${new Date().getFullYear()} Dihadiri by Ketuju. All rights reserved.`, // Default teks copyright
  systemStatus = {
    label: "All systems operational",
    color: "emerald", // Warna status sistem
  }, // Default status sistem
}: FooterProps) {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            {logo} {/* Render logo dari props */}
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              {description} {/* Render deskripsi dari props */}
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-14 sm:gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {/* {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )} */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {/* {item.external && (
                          <div className="ml-0.5 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )} */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {/* {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )} */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {/* {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px dark:bg-gray-500/20">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900 dark:text-gray-300"
                            />
                          </div>
                        )} */}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            {copyrightText} {/* Render teks copyright dari props */}
          </p>
          <div className="rounded-full border border-gray-200 py-1 pl-1 pr-2 dark:border-gray-800">
            <div className="flex items-center gap-1.5">
              <div className="relative size-4 shrink-0">
                <div
                  className={`absolute inset-[1px] rounded-full bg-${systemStatus.color}-500/20 dark:bg-${systemStatus.color}-600/20`}
                />
                <div
                  className={`absolute inset-1 rounded-full bg-${systemStatus.color}-600 dark:bg-${systemStatus.color}-500`}
                />
              </div>
              <span className="text-xs text-gray-700 dark:text-gray-50">
                {systemStatus.label} {/* Render label status sistem dari props */}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}