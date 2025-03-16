"use client"

import React from 'react';

import { Features } from '@/components/features';
import Footer from '@/components/footer';
// import LogoIntro from '@/components/logo-intro';
// import { Revenue } from '@/components/revenue';
// import { PageSEO } from '@/components/seo';
// import { Templates } from '@/components/templates';
// import { Testimonials } from '@/components/testimonials';
// import { siteMetadata } from '@/data/site-metadata';
// import { BackgroundGradientAnimation } from '@packages/ui/components/motions/background-gradient-animation';
// import TextGradientScroll from '@packages/ui/components/motions/scroll-reveal';


import { useState } from "react"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Blend,
  Bug,
  Bell,
  Check,
  BarChartIcon as ChartNoAxesColumn,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Diamond,
  Sparkles,
} from "lucide-react"
import { Button } from "@packages/ui/components/base/button"
import { Card, CardContent } from "@packages/ui/components/base/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@packages/ui/components/base/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@packages/ui/components/base/accordion"
import { Switch } from "@packages/ui/components/base/switch"
import { CategoryDropdown } from "@/components/category-dropdown"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section id="hero" className="bg-sand-100 relative overflow-hidden pt-8 md:pt-16 lg:pt-32">
          <div className="relative container container-flat grid gap-12 lg:grid-cols-[1fr_0.68fr]">
            <div className="absolute inset-x-0 bottom-0 z-10 -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] h-px bg-gradient-to-r from-transparent to-foreground/27"></div>
            <div className="space-y-8 lg:space-y-12">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-6xl">
                  Undangan Digital Elegan
                </h1>
                <p className="text-sand-700 font-inter-tight mt-3 text-xl leading-tight font-medium sm:text-2xl md:text-3xl lg:text-5xl">
                  InviteMe adalah platform undangan digital modern untuk momen spesial dalam hidup Anda.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex max-w-[250px] gap-2.5 lg:gap-5">
                  <CircleDot className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">Desain Menarik</h2>
                    <p className="text-muted-foreground text-sm">
                      Pilihan template premium dengan desain elegan dan modern.
                    </p>
                  </div>
                </div>

                <div className="flex max-w-[250px] gap-2.5 lg:gap-5">
                  <Diamond className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">RSVP Online</h2>
                    <p className="text-muted-foreground text-sm">
                      Kelola konfirmasi kehadiran tamu dengan mudah dan efisien.
                    </p>
                  </div>
                </div>

                <div className="flex max-w-[250px] gap-2.5 lg:gap-5">
                  <Blend className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">Galeri Foto</h2>
                    <p className="text-muted-foreground text-sm">
                      Bagikan momen indah dengan galeri foto dan video interaktif.
                    </p>
                  </div>
                </div>

                <div className="flex max-w-[250px] gap-2.5 lg:gap-5">
                  <ChartNoAxesColumn className="mt-1 size-4 shrink-0 lg:size-5" />
                  <div>
                    <h2 className="font-semibold">Peta Lokasi</h2>
                    <p className="text-muted-foreground text-sm">
                      Petunjuk arah dan lokasi acara yang terintegrasi dengan Google Maps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
                <Button className="w-full sm:w-auto" aria-label="Buat Undangan">
                  Buat Undangan
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" aria-label="Lihat Demo">
                  <span className="flex items-center justify-center gap-2 text-center sm:text-start whitespace-pre-wrap">
                    Lihat Demo <ArrowRight className="size-4 stroke-3" />
                  </span>
                </Button>
              </div>
              <div className="flex flex-col items-center font-medium mb-4 max-lg:hidden">
                <div className="">
                  <span className="text-sand-700">3 of 3 — </span>
                  <span className="text-primary">Galeri Foto</span>
                </div>
                <div className="flex gap-2">
                  <button aria-label="Go to slide 1" className="py-2">
                    <div className="h-0.5 w-6 rounded-full transition-colors bg-primary/20 hover:bg-primary/40"></div>
                  </button>
                  <button aria-label="Go to slide 2" className="py-2">
                    <div className="h-0.5 w-6 rounded-full transition-colors bg-primary/20 hover:bg-primary/40"></div>
                  </button>
                  <button aria-label="Go to slide 3" className="py-2">
                    <div className="h-0.5 w-6 rounded-full transition-colors bg-primary"></div>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative -mr-[max(5rem,calc((100vw-80rem)/2+5rem))] shadow-xl max-lg:translate-x-10 lg:shadow-2xl">
              <div className="relative size-full [&>div]:size-full" role="region" aria-roledescription="carousel">
                <div className="overflow-hidden">
                  <div className="flex -ml-4 size-full">
                    <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 basis-full pl-4">
                      <div className="relative size-full min-h-[20rem] sm:min-h-[25rem] md:min-h-[30rem] overflow-hidden rounded-t-xl">
                        <Image
                          src="/placeholder.svg?height=600&width=800"
                          alt="Contoh undangan digital"
                          fill
                          className="object-cover object-left-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center font-medium mt-6 mb-8 lg:hidden">
            <div className="">
              <span className="text-sand-700">3 of 3 — </span>
              <span className="text-primary">Galeri Foto</span>
            </div>
            <div className="flex gap-2">
              <button aria-label="Go to slide 1" className="py-2">
                <div className="h-0.5 w-6 rounded-full transition-colors bg-primary/20 hover:bg-primary/40"></div>
              </button>
              <button aria-label="Go to slide 2" className="py-2">
                <div className="h-0.5 w-6 rounded-full transition-colors bg-primary/20 hover:bg-primary/40"></div>
              </button>
              <button aria-label="Go to slide 3" className="py-2">
                <div className="h-0.5 w-6 rounded-full transition-colors bg-primary"></div>
              </button>
            </div>
          </div>
        </section>

        <section id="partners" className="bg-sand-100 overflow-hidden py-8 md:py-16 lg:py-24">
          <div className="container container-flat text-center">
            <h2 className="text-xl font-semibold tracking-tight text-balance lg:text-3xl">
              Dipercaya oleh ribuan pasangan bahagia.
              <br />
              <span className="text-muted-foreground">Dari pernikahan hingga acara perusahaan.</span>
            </h2>
          </div>
          <div className="relative mt-10">
            <div className="flex w-full">
              <div className="animate-marquee flex shrink-0 items-center gap-12">
                {[
                  { name: "Mercury", url: "https://mercury.com" },
                  { name: "Watershed", url: "https://watershed.com" },
                  { name: "Retool", url: "https://retool.com" },
                  { name: "Descript", url: "https://descript.com" },
                  { name: "Perplexity", url: "https://perplexity.ai" },
                  { name: "Monzo", url: "https://monzo.com" },
                  { name: "Ramp", url: "https://ramp.com" },
                  { name: "Raycast", url: "https://raycast.com" },
                  { name: "Arc", url: "https://arc.com" },
                ].map((company, index) => (
                  <a key={index} target="_blank" className="p-6" href={company.url} rel="noreferrer">
                    <div className="h-8 w-24 bg-muted rounded-md flex items-center justify-center">{company.name}</div>
                  </a>
                ))}
              </div>
              <div className="animate-marquee flex shrink-0 items-center gap-12">
                {[
                  { name: "Mercury", url: "https://mercury.com" },
                  { name: "Watershed", url: "https://watershed.com" },
                  { name: "Retool", url: "https://retool.com" },
                  { name: "Descript", url: "https://descript.com" },
                  { name: "Perplexity", url: "https://perplexity.ai" },
                  { name: "Monzo", url: "https://monzo.com" },
                  { name: "Ramp", url: "https://ramp.com" },
                  { name: "Raycast", url: "https://raycast.com" },
                  { name: "Arc", url: "https://arc.com" },
                ].map((company, index) => (
                  <a key={`dup-${index}`} target="_blank" className="p-6" href={company.url} rel="noreferrer">
                    <div className="h-8 w-24 bg-muted rounded-md flex items-center justify-center">{company.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-10 md:py-20 lg:py-32">
          <div className="container container-flat">
            <div className="flex flex-col gap-3 md:flex-row">
              <h2 className="flex-1 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                Dibuat khusus untuk momen spesial Anda
              </h2>
              <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
                InviteMe dibangun dengan fokus pada keindahan, kemudahan, dan personalisasi untuk membuat undangan
                digital yang sesuai dengan kepribadian Anda.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-3">
              <div className="relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-b from-muted to-mint md:[aspect-ratio:3.8/4]">
                <div className="p-8 pb-2">
                  <Bell className="fill-primary size-10" />
                </div>
                <div className="p-6">
                  <div className="text-6xl font-semibold tracking-tight">100%</div>
                  <div className="text-xl font-semibold tracking-tight">Lebih hemat</div>
                </div>
              </div>
              <div className="relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-b from-muted to-mint md:[aspect-ratio:3.8/4]">
                <div className="p-8 pb-2">
                  <Sparkles className="fill-primary size-10" />
                </div>
                <div className="p-6">
                  <div className="text-6xl font-semibold tracking-tight">24/7</div>
                  <div className="text-xl font-semibold tracking-tight">Akses online</div>
                </div>
              </div>
              <div className="relative flex [aspect-ratio:3.5/2.6] flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-b from-muted to-mint md:[aspect-ratio:3.8/4]">
                <div className="p-8 pb-2">
                  <Bug className="fill-primary size-10" />
                </div>
                <div className="p-6">
                  <div className="text-6xl font-semibold tracking-tight">0%</div>
                  <div className="text-xl font-semibold tracking-tight">Limbah kertas</div>
                </div>
              </div>
            </div>
            <div className="text-muted-foreground mt-6 text-end text-sm">
              *dibandingkan dengan undangan cetak tradisional
            </div>
          </div>
        </section>

        <section id="templates" className="bg-muted py-16 md:py-28 lg:py-32">
          <div className="container container-flat">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
              Fitur lengkap untuk undangan sempurna
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-6 md:grid-rows-5 lg:mt-20">
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-3 md:row-span-3">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Template premium.{" "}
                    <span className="text-muted-foreground font-medium">
                      Pilihan desain eksklusif yang dapat disesuaikan dengan tema acara Anda.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-background"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Contoh template premium"
                    fill
                    className="object-cover object-left-top lg:translate-x-20 translate-x-6 md:translate-x-10"
                  />
                </div>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-3 md:row-span-3 md:col-start-4">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Manajemen tamu.{" "}
                    <span className="text-muted-foreground font-medium">
                      Kelola daftar tamu dan konfirmasi kehadiran dengan mudah melalui sistem RSVP online.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-background"></div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sistem manajemen tamu"
                    fill
                    className="object-cover object-left-top lg:translate-x-20 translate-x-6 md:translate-x-10"
                  />
                </div>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-2 md:row-span-2 md:row-start-4">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Amplop digital.{" "}
                    <span className="text-muted-foreground font-medium">
                      Terima hadiah dan ucapan melalui fitur amplop digital yang terintegrasi.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-background"></div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent via-transparent to-background"></div>
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Fitur amplop digital"
                    fill
                    className="object-cover translate-x-6 md:translate-x-10 pb-6 object-left-bottom"
                  />
                </div>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-4">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Live chat.{" "}
                    <span className="text-muted-foreground font-medium">
                      Fitur obrolan langsung untuk menjawab pertanyaan tamu tentang acara Anda.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Fitur live chat"
                    fill
                    className="object-left-top px-6 mt-4 object-contain"
                  />
                </div>
              </Card>
              <Card className="relative flex flex-col overflow-hidden border-none px-0 text-lg shadow-none max-md:min-h-[400px] md:col-span-2 md:row-span-2 md:col-start-5 md:row-start-4">
                <CardContent className="flex flex-col space-y-1.5 p-6 mb-2">
                  <h3 className="inline leading-tight font-semibold text-balance">
                    Analisis pengunjung.{" "}
                    <span className="text-muted-foreground font-medium">
                      Pantau jumlah pengunjung dan tingkat respons dari undangan digital Anda.
                    </span>
                  </h3>
                </CardContent>
                <div className="relative min-h-40 flex-1 overflow-hidden p-0 lg:min-h-48">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Analisis pengunjung"
                    fill
                    className="pb-6 object-center object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="event-types" className="bg-mint-50 py-16 md:py-28 lg:py-32">
          <div className="container container-flat">
            <div className="flex flex-col gap-3 md:flex-row">
              <h2 className="flex-1 text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                Solusi undangan digital untuk setiap acara
              </h2>
              <p className="text-muted-foreground flex-1 text-lg font-medium md:max-w-md md:self-end">
                InviteMe menawarkan berbagai fitur yang dapat disesuaikan untuk berbagai jenis acara, dari pernikahan
                hingga ulang tahun dan acara perusahaan.
              </p>
            </div>

            {/* Mobile View with Dropdown */}
            <div className="mt-8 lg:hidden">
              <CategoryDropdownSection />
            </div>

            {/* Desktop View with Tabs */}
            <div className="hidden lg:block mt-20">
              <DesktopCategoryTabs />
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-mint py-16 md:py-28 lg:py-32">
          <div className="container container-flat">
            <div className="flex flex-col gap-3 md:flex-row">
              <h2 className="flex-1 text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                Dipercaya oleh
                <br />
                pasangan bahagia
              </h2>
              <div className="flex flex-1 flex-col items-start gap-3 md:max-w-md md:self-end">
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  InviteMe telah membantu ribuan pasangan dan penyelenggara acara menciptakan undangan digital yang
                  elegan dan berkesan.
                </p>
                <Button variant="outline" className="group" asChild>
                  <Link href="/testimonials">
                    Baca Testimoni Lainnya
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mt-8 md:mt-12 lg:mt-20">
              <div className="relative w-full" role="region" aria-roledescription="carousel">
                <div className="relative -mr-[max(2rem,calc((100vw-80rem)/2+5rem))]">
                  <div className="overflow-hidden">
                    <div className="flex -ml-4">
                      <div
                        role="group"
                        aria-roledescription="slide"
                        className="min-w-0 shrink-0 grow-0 pl-4 basis-4/5 md:basis-1/2 lg:basis-[34%]"
                      >
                        <div className="bg-card text-card-foreground rounded-xl shadow-sm h-full overflow-hidden border-[7px] transition-all border-foreground">
                          <div className="flex flex-col space-y-1.5 p-0">
                            <div className="relative aspect-[4/3.3] w-full bg-emerald-600/20">
                              <div className="absolute inset-0">
                                <Image
                                  src="/placeholder.svg?height=400&width=500"
                                  alt="Foto testimonial pasangan"
                                  fill
                                  className="object-cover transition-all object-top"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="p-6 pt-5 pb-7">
                            <blockquote className="text-base leading-7 font-semibold tracking-tight text-balance sm:text-lg md:text-xl lg:text-2xl">
                              Berkat InviteMe, undangan pernikahan kami terlihat sangat elegan dan modern. Tamu-tamu
                              sangat terkesan!
                            </blockquote>
                          </div>
                          <div className="flex p-6 pt-0 flex-col items-start">
                            <div className="font-semibold max-md:text-sm">Anita & Budi</div>
                            <div className="text-muted-foreground text-xs md:text-sm">Jakarta, Mei 2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container container-flat">
                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="flex gap-2">
                      <button
                        className="size-4 rounded-full transition-colors bg-background"
                        aria-label="Go to testimonial 1"
                      ></button>
                      <button
                        className="size-4 rounded-full transition-colors bg-background/40 hover:bg-background/60"
                        aria-label="Go to testimonial 2"
                      ></button>
                      <button
                        className="size-4 rounded-full transition-colors bg-background/40 hover:bg-background/60"
                        aria-label="Go to testimonial 3"
                      ></button>
                      <button
                        className="size-4 rounded-full transition-colors bg-background/40 hover:bg-background/60"
                        aria-label="Go to testimonial 4"
                      ></button>
                      <button
                        className="size-4 rounded-full transition-colors bg-background/40 hover:bg-background/60"
                        aria-label="Go to testimonial 5"
                      ></button>
                    </div>
                    <div className="flex gap-2">
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-xs hover:text-accent-foreground rounded-full top-1/2 -left-12 bg-background/40 hover:bg-background/60 static size-11 translate-y-0 [&>svg]:size-6">
                        <ChevronLeft className="size-4" />
                        <span className="sr-only">Previous slide</span>
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input shadow-xs hover:text-accent-foreground rounded-full top-1/2 -right-12 bg-background/40 hover:bg-background/60 static size-11 translate-y-0 [&>svg]:size-6">
                        <ChevronRight className="size-4" />
                        <span className="sr-only">Next slide</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16 md:py-28 lg:py-32">
          <div className="container container-flat">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Paket Harga
              </h2>
              <p className="text-muted-foreground text-lg text-balance">
                Pilih paket yang sesuai dengan kebutuhan acara Anda. Upgrade untuk fitur tambahan dan desain premium.
              </p>
              <div className="inline-flex items-center gap-2">
                <Switch id="annual-billing" defaultChecked />
                <span className="text-sm font-medium">Billed annually</span>
              </div>
            </div>
            <div className="mt-8 grid gap-8 grid-cols-1 md:mt-12 lg:mt-20 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <div className="text-card-foreground rounded-xl border shadow-sm h-full border-none bg-zinc-100 dark:bg-zinc-900">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold">Basic</h3>
                    <div className="mt-2">
                      <p className="text-muted-foreground text-lg font-medium">Gratis</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex flex-col space-y-6">
                    <Button variant="outline">Mulai Sekarang</Button>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">1 template dasar</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Maksimal 50 tamu</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Fitur RSVP dasar</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Aktif selama 30 hari</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="from-mint/70 to-sand-100 scale-[1.075] rounded-3xl bg-gradient-to-b p-3">
                <div className="text-card-foreground rounded-xl border shadow-sm h-full border-none dark:bg-zinc-900 bg-background relative ring-2 ring-black">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold">Premium</h3>
                    <div className="mt-2">
                      <p className="text-muted-foreground text-lg font-medium">Rp 299.000</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex flex-col space-y-6">
                    <Button>Pilih Paket</Button>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Semua fitur Basic dan...</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">10+ template premium</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Unlimited tamu</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Galeri foto & video</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Amplop digital</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Aktif selama 1 tahun</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-card-foreground rounded-xl border shadow-sm h-full border-none bg-zinc-100 dark:bg-zinc-900">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold">Exclusive</h3>
                    <div className="mt-2">
                      <p className="text-muted-foreground text-lg font-medium">Rp 599.000</p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex flex-col space-y-6">
                    <Button variant="outline">Pilih Paket</Button>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Semua fitur Premium dan...</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Desain kustom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Live streaming terintegrasi</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Domain kustom</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Dukungan prioritas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="size-4 shrink-0" />
                        <span className="text-muted-foreground text-sm">Aktif selamanya</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="pb-16 md:pb-28 lg:pb-32">
          <div className="container container-flat mx-auto lg:max-w-5xl">
            <h2 className="text-center text-2xl font-semibold tracking-tight lg:text-3xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <div className="mt-6 grid gap-x-12 md:mt-10 md:grid-cols-2 lg:mt-14">
              <Accordion type="single" collapsible className="text-muted-foreground border-t">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger>Apa itu undangan digital?</AccordionTrigger>
                  <AccordionContent className="text-foreground">
                    Undangan digital adalah undangan elektronik yang dapat dibagikan melalui tautan atau QR code.
                    Undangan ini dapat diakses melalui perangkat apa pun yang terhubung ke internet dan menawarkan
                    berbagai fitur interaktif yang tidak tersedia pada undangan cetak tradisional.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger>Bagaimana cara membagikan undangan digital?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b">
                  <AccordionTrigger>Apakah tamu perlu mengunduh aplikasi?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b">
                  <AccordionTrigger>Berapa lama undangan digital aktif?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-b">
                  <AccordionTrigger>Apakah bisa menyesuaikan desain undangan?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible className="text-muted-foreground md:border-t">
                <AccordionItem value="item-1" className="border-b">
                  <AccordionTrigger>Bagaimana sistem RSVP bekerja?</AccordionTrigger>
                  <AccordionContent className="text-foreground">
                    Sistem RSVP kami memungkinkan tamu untuk mengkonfirmasi kehadiran mereka langsung melalui undangan
                    digital. Anda akan menerima notifikasi dan dapat melihat daftar tamu yang hadir, tidak hadir, atau
                    belum merespons melalui dashboard admin.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b">
                  <AccordionTrigger>Apakah bisa mengundang tamu tanpa batas?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-b">
                  <AccordionTrigger>Bagaimana cara kerja amplop digital?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-b">
                  <AccordionTrigger>Apakah ada fitur live streaming?</AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

// Component for Mobile Category Dropdown Section
function CategoryDropdownSection() {
  const [selectedCategory, setSelectedCategory] = useState("wedding")

  const categoryOptions = [
    {
      id: "wedding",
      icon: <CircleDot className="size-5" />,
      title: "Pernikahan",
      description: "Undangan digital elegan untuk hari spesial Anda.",
    },
    {
      id: "birthday",
      icon: <Blend className="size-5" />,
      title: "Ulang Tahun",
      description: "Rayakan momen bahagia dengan undangan yang menarik.",
    },
    {
      id: "corporate",
      icon: <Diamond className="size-5" />,
      title: "Acara Perusahaan",
      description: "Undangan profesional untuk acara bisnis dan korporat.",
    },
    {
      id: "special",
      icon: <ChartNoAxesColumn className="size-5" />,
      title: "Acara Khusus",
      description: "Solusi kustom untuk berbagai jenis acara spesial.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-primary">
            {selectedCategory === "wedding" && "Luxury Wedding - 01"}
            {selectedCategory === "birthday" && "Birthday Party - 01"}
            {selectedCategory === "corporate" && "Corporate Event - 01"}
            {selectedCategory === "special" && "Special Event - 01"}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Rp. 69.000</span>
            <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-md">34%</span>
          </div>
        </div>
        <div className="text-muted-foreground text-xs">
          <span className="line-through">Rp. 149.000</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full">
            Lihat Demo
          </Button>
          <Button className="w-full">Order</Button>
        </div>
      </div>

      <CategoryDropdown options={categoryOptions} selectedId={selectedCategory} onSelect={setSelectedCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {selectedCategory === "wedding" && (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <TemplateCard
                key={`wedding-${index}`}
                title={`Luxury Wedding - ${String(index + 1).padStart(2, "0")}`}
                discount={34}
                price={69000}
                originalPrice={149000}
              />
            ))}
          </>
        )}

        {selectedCategory === "birthday" && (
          <>
            {Array.from({ length: 2 }).map((_, index) => (
              <TemplateCard
                key={`birthday-${index}`}
                title={`Birthday Party - ${String(index + 1).padStart(2, "0")}`}
                discount={40}
                price={59000}
                originalPrice={99000}
              />
            ))}
          </>
        )}

        {selectedCategory === "corporate" && (
          <>
            {Array.from({ length: 3 }).map((_, index) => (
              <TemplateCard
                key={`corporate-${index}`}
                title={`Corporate Event - ${String(index + 1).padStart(2, "0")}`}
                discount={25}
                price={89000}
                originalPrice={119000}
              />
            ))}
          </>
        )}

        {selectedCategory === "special" && (
          <TemplateCard title="Special Event - 01" discount={30} price={79000} originalPrice={109000} />
        )}
      </div>
    </div>
  )
}

// Component for Desktop Category Tabs
function DesktopCategoryTabs() {
  return (
    <Tabs defaultValue="wedding" orientation="vertical" className="flex gap-4">
      <TabsList className="text-muted-foreground items-center flex h-auto justify-start overflow-x-auto rounded-xl bg-black/[0.03] p-1.5 w-full basis-1/4 flex-col">
        <TabsTrigger
          value="wedding"
          className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
        >
          <div>
            <CircleDot className="size-7 md:size-8 lg:size-9" />
            <h3 className="mt-3 font-semibold">Pernikahan</h3>
            <p className="text-muted-foreground mt-1 text-sm">Undangan digital elegan untuk hari spesial Anda.</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="birthday"
          className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
        >
          <div>
            <Blend className="size-7 md:size-8 lg:size-9" />
            <h3 className="mt-3 font-semibold">Ulang Tahun</h3>
            <p className="text-muted-foreground mt-1 text-sm">Rayakan momen bahagia dengan undangan yang menarik.</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="corporate"
          className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
        >
          <div>
            <Diamond className="size-7 md:size-8 lg:size-9" />
            <h3 className="mt-3 font-semibold">Acara Perusahaan</h3>
            <p className="text-muted-foreground mt-1 text-sm">Undangan profesional untuk acara bisnis dan korporat.</p>
          </div>
        </TabsTrigger>
        <TabsTrigger
          value="special"
          className="w-full min-w-[200px] flex-1 justify-start rounded-lg px-4 py-3 text-start whitespace-normal text-gray-700 transition-colors duration-300 data-[state=active]:text-black data-[state=active]:shadow-xl lg:px-6 lg:py-4 dark:text-gray-300 dark:data-[state=active]:text-white"
        >
          <div>
            <ChartNoAxesColumn className="size-7 md:size-8 lg:size-9" />
            <h3 className="mt-3 font-semibold">Acara Khusus</h3>
            <p className="text-muted-foreground mt-1 text-sm">Solusi kustom untuk berbagai jenis acara spesial.</p>
          </div>
        </TabsTrigger>
      </TabsList>

      {/* Wedding Templates */}
      <TabsContent value="wedding" className="m-0 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <TemplateCard
              key={`wedding-${index}`}
              title={`Luxury Wedding - ${String(index + 1).padStart(2, "0")}`}
              discount={34}
              price={69000}
              originalPrice={149000}
            />
          ))}
        </div>
      </TabsContent>

      {/* Birthday Templates */}
      <TabsContent value="birthday" className="m-0 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <TemplateCard
              key={`birthday-${index}`}
              title={`Birthday Party - ${String(index + 1).padStart(2, "0")}`}
              discount={40}
              price={59000}
              originalPrice={99000}
            />
          ))}
        </div>
      </TabsContent>

      {/* Corporate Templates */}
      <TabsContent value="corporate" className="m-0 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <TemplateCard
              key={`corporate-${index}`}
              title={`Corporate Event - ${String(index + 1).padStart(2, "0")}`}
              discount={25}
              price={89000}
              originalPrice={119000}
            />
          ))}
        </div>
      </TabsContent>

      {/* Special Event Templates */}
      <TabsContent value="special" className="m-0 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TemplateCard title="Special Event - 01" discount={30} price={79000} originalPrice={109000} />
        </div>
      </TabsContent>
    </Tabs>
  )
}

// Template Card Component
function TemplateCard({ title, discount, price, originalPrice }) {
  return (
    <div className="group overflow-hidden bg-white/50 dark:bg-black/5 rounded-lg shadow-sm hover:shadow-md transition-all">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src=""
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full">{discount}%</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-primary">{title}</h3>
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-xl font-semibold">Rp. {price.toLocaleString()}</span>
          <span className="text-muted-foreground text-xs line-through">Rp. {originalPrice.toLocaleString()}</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            <span className="flex items-center justify-center gap-1">Lihat Demo</span>
          </Button>
          <Button size="sm" className="text-xs">
            <span className="flex items-center justify-center gap-1">Order</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

