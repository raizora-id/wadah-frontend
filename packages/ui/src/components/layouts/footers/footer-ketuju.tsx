
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
    products: NavigationItem[];
    solutions: NavigationItem[];
    company: NavigationItem[];
    socials: NavigationItem[];
  }; // Props untuk navigation items
  productName?: string;
  systemStatus?: {
    label: string; // Label status sistem
    color: string; // Warna status sistem
  }; // Props untuk status sistem
}

export function Footer({
  logo = <HeaderDefaultLogo className="w-32 sm:w-40" />, // Default logo
  description = "Redefining the way databases are built and managed. Built in Switzerland, made for the world.", // Default deskripsi
  navigation = {
    products: [
      { name: "Dihadiri", href: "https://dihadiri.com", external: false },
      { name: "Assetiva", href: "https://klolakos.ketuju.com", external: false },
      { name: "Dokukita", href: "https://dokukita.ketuju.com", external: false },
    ],
    solutions: [
      { name: "Klolaform", href: "https://klolaform.ketuju.com", external: false },
      { name: "Klolakos", href: "https://klolakos.ketuju.com", external: false },
      { name: "Klolatoko", href: "https://klolatoko.ketuju.com", external: false },
      { name: "Klolarental", href: "https://klolarental.ketuju.com", external: false },
    ],
    company: [
      { name: "About", href: "https://ketuju.com", external: false },
      { name: "Services", href: "https://ketuju.com/services", external: true },
      { name: "Contact", href: "https://ketuju.com/contact", external: false },
      { name: "Help Center", href: "https://help.ketuju.com", external: false },
    ],
    socials: [
      { name: "Instagram", href: "#", external: false },
      { name: "Tiktok", href: "#", external: false },
      { name: "Linkedin", href: "#", external: false },
      { name: "Facebook", href: "#", external: false },
    ],
  }, // Default navigation items
  productName = "",
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
                  Products
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.products.map((item) => (
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
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
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
                  Socials
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.socials.map((item) => (
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
          © {new Date().getFullYear()} {productName} by Ketuju. All rights reserved.
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