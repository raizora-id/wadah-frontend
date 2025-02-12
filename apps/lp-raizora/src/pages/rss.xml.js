import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export async function GET(context) {
  return rss({
     title: 'Raizora Indonesia',
    description: 'Business group committed to empowering creativity and creating positive impact for Indonesian society through innovative, synergistic solutions that drive economic growth and shared prosperity, rooted in the philosophy of "growing strong" - building deep foundations while continuously evolving and nurturing collective potential.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}