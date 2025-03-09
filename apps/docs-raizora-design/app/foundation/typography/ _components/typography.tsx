
"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@packages/ui/components/base/tabs"

export default function TypographyStyleGuide() {
  const [headlineDevice, setHeadlineDevice] = useState("desktop")
  const [subheadlineDevice, setSubheadlineDevice] = useState("desktop")
  const [bodyTextDevice, setBodyTextDevice] = useState("desktop")

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-green-800 text-white p-4 flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Typography</h1>
        <div className="w-10 h-10 flex items-center justify-center">
          <div className="w-8 h-5 bg-yellow-400 relative">
            <div className="absolute w-8 h-2.5 bg-orange-500 bottom-0"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6">
        {/* Introduction */}
        <section className="mb-10">
          <p className="text-gray-800 mb-4 text-sm leading-relaxed">
            Proxima Nova serves as our primary typeface at Brainly, offering a versatile geometric sans-serif that
            excels in both large display contexts and detailed body copy. Consistent typography forms the backbone of
            our design framework.
          </p>
          <p className="text-gray-800 mb-4 text-sm leading-relaxed">
            We selected Proxima Nova for its widespread adoption and recognition across digital platforms, making it a
            reliable choice that appears on countless websites globally while maintaining excellent readability.
          </p>
          <p className="text-gray-800 mb-4 text-sm leading-relaxed">
            Our typographic system creates a clear visual hierarchy that guides users through content efficiently. By
            establishing distinct relationships between elements, we enhance information comprehension while adhering to
            an 8-point grid system. The hierarchy consists of:{" "}
            <span className="font-medium">Text Bits + Headlines + Subheadlines + Body Text</span>.
          </p>
        </section>

        {/* Text Bit Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold uppercase mb-4">TEXT BIT</h2>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            Text Bits function as attention-grabbing elements that highlight key sections, communicate brand messages,
            or create visual emphasis where standard typography might not suffice.
          </p>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            The defining characteristic of Text Bits is their 1:1 ratio between line height and font size. These
            elements appear exclusively in Black weight and can be formatted in either uppercase or lowercase depending
            on design requirements.
          </p>

          <div className="bg-gray-100 p-3 mb-4">
            <p className="text-xs text-gray-600">LINE HEIGHT / FONT SIZE = 1</p>
            <p className="text-xs text-gray-600">
              Font: <span className="font-medium">Proxima Nova</span>, Weight: <span className="font-medium">900</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-4xl font-black tracking-tight">TEXT BIT</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-3xl font-black tracking-tight">TEXT BIT</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-2xl font-black tracking-tight">TEXT BIT</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-xl font-black tracking-tight">TEXT BIT</span>
            </div>
          </div>
        </section>

        {/* Headlines Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold uppercase mb-4">HEADLINES</h2>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            Our headline system comprises six distinct levels available in two weights: Bold and Black. Headlines serve
            as primary content anchors and section dividers, creating clear content organization throughout the
            interface.
          </p>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            For optimal legibility, we suggest implementing Bold weight for headlines sized 24px or smaller. All
            headlines maintain a consistent bold appearance (weight value of 700 where possible) to ensure visual
            harmony across different size scales.
          </p>

          <div className="bg-gray-100 p-3 mb-4">
            <p className="text-xs text-gray-600">LINE HEIGHT / FONT SIZE = 1.25</p>
          </div>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            To maintain alignment with our 8-point grid system, we've carefully selected line height values that are
            multiples of 8. Font sizes are then calculated backward from these values to preserve the intended
            proportional relationships.
          </p>

          <Tabs value={headlineDevice} onValueChange={setHeadlineDevice} className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="tablet">Tablet</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">700</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for desktop screens (1024px and above)</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-5xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-4xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-3xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-2xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-bold">Headline</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tablet">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">700</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for tablet screens (768px to 1023px)</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-4xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-3xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-2xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-bold">Headline</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mobile">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">700</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for mobile screens (up to 767px)</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-3xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-2xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-bold">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-sm font-bold">Headline</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-gray-100 p-3 mb-4">
            <p className="text-xs text-gray-600">
              Font: <span className="font-medium">Proxima Nova</span>, Weight: <span className="font-medium">900</span>
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-5xl font-black">Headline</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-4xl font-black">Headline</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-3xl font-black">Headline</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-2xl font-black">Headline</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-xl font-black">Headline</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
              <span className="text-lg font-black">Headline</span>
            </div>
          </div>
        </section>

        {/* Subheadlines Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold uppercase mb-4">SUBHEADLINES</h2>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            Subheadlines are specifically designated for marketing materials and should not be implemented within
            product interfaces or mobile applications where different typographic standards apply.
          </p>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            To maintain visual consistency, we've established a fixed ratio of approximately 1.25 between line height
            and font size for all subheadlines. This standardization ensures proportional harmony regardless of the
            specific size implementation.
          </p>

          <div className="bg-gray-100 p-3 mb-4">
            <p className="text-xs text-gray-600">LINE HEIGHT / FONT SIZE = 1.25</p>
          </div>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            Adhering to our 8-point grid system, we first determine appropriate line heights as multiples of 8, then
            derive the corresponding font sizes to maintain our established proportional relationships.
          </p>

          <Tabs value={subheadlineDevice} onValueChange={setSubheadlineDevice} className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="tablet">Tablet</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">400</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for desktop screens (1024px and above)</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-4xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-3xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-2xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-normal italic">Headline</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tablet">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">400</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for tablet screens (768px to 1023px)</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-3xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-2xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-normal italic">Headline</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mobile">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">400</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for mobile screens (up to 767px)</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-2xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-normal italic">Headline</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-sm font-normal italic">Headline</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Body Text Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold uppercase mb-4">BODY TEXT</h2>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            Body text encompasses our standard content typography, designed for optimal readability in paragraphs,
            sentences, and list elements throughout the interface.
          </p>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            Similar to our headline approach, body text maintains a consistent ratio between line height and font size,
            specifically 1.533. This higher ratio accommodates extended reading comfort, as longer text passages benefit
            from increased spacing compared to headline elements.
          </p>

          <div className="bg-gray-100 p-3 mb-4">
            <p className="text-xs text-gray-600">LINE HEIGHT / FONT SIZE = 1.533</p>
          </div>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            Body text may also function as interactive elements. When implemented as links, body text provides clear
            navigational cues, directing users to new pages, different sections within the current page, or triggering
            view changes.
          </p>

          <Tabs value={bodyTextDevice} onValueChange={setBodyTextDevice} className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="desktop">Desktop</TabsTrigger>
              <TabsTrigger value="tablet">Tablet</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">700</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for desktop screens (1024px and above)</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-2xl font-bold">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-bold">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-bold">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-bold">Body text</span>
                </div>
              </div>

              <div className="bg-gray-100 p-3 mb-4">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">400</span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-2xl font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-normal">Body text</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tablet">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">700</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for tablet screens (768px to 1023px)</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-bold">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-bold">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-bold">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-sm font-bold">Body text</span>
                </div>
              </div>

              <div className="bg-gray-100 p-3 mb-4">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">400</span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xl font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-sm font-normal">Body text</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mobile">
              <div className="bg-gray-100 p-3 mb-4 mt-2">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">700</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">Recommended for mobile screens (up to 767px)</p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-bold">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-bold">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-sm font-bold">Body text</span>
                </div>
              </div>

              <div className="bg-gray-100 p-3 mb-4">
                <p className="text-xs text-gray-600">
                  Font: <span className="font-medium">Proxima Nova</span>, Weight:{" "}
                  <span className="font-medium">400</span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-lg font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-base font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-sm font-normal">Body text</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-4"></div>
                  <span className="text-xs font-normal">Body text</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Accessibility Section */}
        <section className="mb-12">
          <h2 className="text-xl font-bold uppercase mb-4">ACCESSIBILITY</h2>

          <p className="text-gray-800 mb-3 text-sm leading-relaxed">
            Every typographic element includes dedicated accessibility guidelines with specific implementation rules and
            practical examples to ensure inclusive design. We strongly encourage reviewing these standards during
            development:
          </p>

          <ul className="list-disc pl-6 text-gray-800 space-y-1 text-sm">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                https://www.w3.org/WAI/WCAG21/quickref/
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                https://www.a11yproject.com/checklist/
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                https://accessibility.com/checklist/
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}

