import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocalizedPath } from '@/lib/routes';
import { cn } from '@/lib/utils';

const galleryCategories = {
  exteriors: {
    images: [
      { id: 1, src: '/photos/GREEN WOODY HOME-02.jpg', alt: 'Villa exterior surrounded by trees' },
      { id: 2, src: '/photos/GREEN WOODY HOME-04.jpg', alt: 'Exterior view of the cabin' },
      { id: 3, src: '/photos/DSC_0238 copy.jpg', alt: 'Exterior view of the villa with garden' },
      { id: 4, src: '/photos/GREEN WOODY HOME-03.jpg', alt: 'Exterior relaxing view' },
      { id: 5, src: '/photos/GREEN WOODY HOME-05.jpg', alt: 'Exterior relaxing view 2' },
      { id: 6, src: '/photos/GREEN WOODY HOME-36.jpg', alt: 'Exterior front view' },
      { id: 31, src: '/photos/GREEN WOODY HOME-01.jpg', alt: 'Exterior entrance view' },
    ],
  },
  livingRoom: {
    images: [
      { id: 7, src: '/photos/GREEN WOODY HOME-06.jpg', alt: 'Cozy living room with wooden beams' },
      { id: 8, src: '/photos/GREEN WOODY HOME-07.jpg', alt: 'Another living room angle' },
      { id: 9, src: '/photos/GREEN WOODY HOME-30.jpg', alt: 'Living room interior design detail' },
      { id: 10, src: '/photos/GREEN WOODY HOME-09.jpg', alt: 'Cozy living room with wooden beams' },
      { id: 11, src: '/photos/GREEN WOODY HOME-10.jpg', alt: 'Another living room angle from kitchen' },
      { id: 12, src: '/photos/GREEN WOODY HOME-11.jpg', alt: 'Living room interior design detail' },
    ],
  },
  kitchen: {
    images: [
      { id: 13, src: '/photos/GREEN WOODY HOME-07.jpg', alt: 'Another living room angle' },
      { id: 14, src: '/photos/GREEN WOODY HOME-12.jpg', alt: 'Kitchen with wooden countertop and modern appliances' },
      { id: 15, src: '/photos/GREEN WOODY HOME-13.jpg', alt: 'Kitchen appliances and dining area' },
    ],
  },
  bedrooms: {
    images: [
      { id: 16, src: '/photos/GREEN WOODY HOME-32.jpg', alt: 'Master bedroom with large windows' },
      { id: 17, src: '/photos/GREEN WOODY HOME-22.jpg', alt: 'Master bedroom interior design' },
      { id: 18, src: '/photos/GREEN WOODY HOME-23.jpg', alt: 'Master bedroom with large windows facing nature' },
      { id: 19, src: '/photos/GREEN WOODY HOME-28.jpg', alt: 'Master bedroom with large windows facing nature' },
      { id: 20, src: '/photos/GREEN WOODY HOME-18.jpg', alt: 'Third bedroom bed view' },
      { id: 21, src: '/photos/GREEN WOODY HOME-20.jpg', alt: 'Bedroom detail with comfortable bedding' },
    ],
  },
  bathrooms: {
    images: [
      { id: 22, src: '/photos/GREEN WOODY HOME-21.jpg', alt: 'Bathroom with natural stone elements' },
      { id: 24, src: '/photos/GREEN WOODY HOME-25.jpg', alt: 'Bathroom with natural stone elements' },
      { id: 25, src: '/photos/GREEN WOODY HOME-38.jpg', alt: 'Second bathroom with modern fixtures' },
      { id: 26, src: '/photos/GREEN WOODY HOME-24.jpg', alt: 'Second bathroom with modern fixtures' },
      { id: 27, src: '/photos/GREEN WOODY HOME-17.jpg', alt: 'Bathroom with natural stone elements' },
      { id: 28, src: '/photos/GREEN WOODY HOME-16.jpg', alt: 'Sink with modern fixtures' },
      { id: 29, src: '/photos/GREEN WOODY HOME-35-2.jpg', alt: 'Sink with modern fixtures' },
    ],
  },
  other: {
    images: [
      { id: 35, src: '/photos/GREEN WOODY HOME-29.jpg', alt: 'Outdoor deck with lounge chairs' },
      { id: 36, src: '/photos/GREEN WOODY HOME-14.jpg', alt: 'Vinyl music player in living room' },
      { id: 37, src: '/photos/GREEN WOODY HOME-26.jpg', alt: 'Washing machine in utility area' },
      { id: 38, src: '/photos/GREEN WOODY HOME-15.jpg', alt: 'Corridor to the bedrooms' },
      { id: 39, src: '/photos/Il-Castello-di-Decima-hero.jpg', alt: 'Castle view in Decima' },
    ],
  },
};

interface GalleryProps {
  isHomepage?: boolean;
}

const ImageDialog: React.FC<{
  image: { id: number; src: string; alt: string };
  className?: string;
  priority?: boolean;
}> = ({ image, className, priority = false }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button
        className={cn(
          'group relative block h-full min-h-0 w-full overflow-hidden rounded-sm bg-bnb-dark text-left shadow-sm focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bnb-wood focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          className
        )}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
        />
        <span className="pointer-events-none absolute inset-0 bg-bnb-dark/0 transition-colors duration-500 group-hover:bg-bnb-dark/10" />
      </button>
    </DialogTrigger>
    <DialogContent className="max-h-[94vh] w-[min(96vw,1200px)] max-w-none border-0 bg-black/95 p-0 shadow-2xl">
      <img src={image.src} alt={image.alt} className="max-h-[92vh] w-full object-contain" />
    </DialogContent>
  </Dialog>
);

const homepageTileClasses = [
  'sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2',
  '',
  '',
  '',
  '',
];

const getHomepageTileClass = (index: number) => homepageTileClasses[index % homepageTileClasses.length];

const Gallery: React.FC<GalleryProps> = ({ isHomepage = false }) => {
  const { t } = useLanguage();
  const pathTo = useLocalizedPath();

  if (isHomepage) {
    const previewImages = [
      galleryCategories.exteriors.images[1],
      galleryCategories.livingRoom.images[4],
      galleryCategories.bedrooms.images[0],
      galleryCategories.bathrooms.images[0],
      galleryCategories.exteriors.images[2],
    ];

    return (
      <section id="gallery" className="overflow-hidden bg-bnb-stone">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
          <div className="grid gap-6 md:grid-cols-[0.82fr_1.18fr] md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-bnb-wood">
                Green Woody Home
              </p>
              <h2 className="text-4xl font-semibold leading-tight text-bnb-dark md:text-6xl">{t('gallery.title')}</h2>
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-bnb-dark_gray md:text-xl">{t('gallery.subtitle')}</p>
          </div>

          <div className="mt-10 grid auto-rows-[190px] grid-cols-1 gap-4 sm:auto-rows-[220px] sm:grid-cols-2 md:gap-5 lg:auto-rows-[210px] lg:grid-cols-4 xl:auto-rows-[240px]">
            {previewImages.map((image, index) => (
              <ImageDialog
                key={image.id}
                image={image}
                priority={index === 0}
                className={getHomepageTileClass(index)}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-bnb-sand/40 pt-6 md:flex-row md:items-center">
            <p className="max-w-2xl text-base leading-relaxed text-bnb-dark_gray md:text-lg">{t('gallery.conclusion')}</p>
            <Button asChild className="w-full bg-bnb-green text-bnb-dark hover:bg-bnb-dark_green hover:text-bnb-dark md:w-auto">
              <Link to={pathTo('gallery')} onClick={() => window.scrollTo(0, 0)}>
                {t('gallery.viewFull')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-bnb-wood">Green Woody Home</p>
          <h1 className="text-5xl font-semibold leading-tight text-bnb-dark md:text-7xl">{t('gallery.title')}</h1>
          <p className="mt-5 text-lg leading-relaxed text-bnb-dark_gray md:text-xl">{t('gallery.subtitle')}</p>
        </div>
      </div>

      <div className="space-y-14 pb-16 md:space-y-20 md:pb-24">
        {Object.entries(galleryCategories).map(([key, category]) => (
          <section key={key} className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="mb-6 flex items-end justify-between gap-4 border-t border-bnb-sand/40 pt-8">
              <h2 className="font-display text-3xl font-semibold leading-tight text-bnb-dark md:text-4xl">
                {t(`gallery.${key}`)}
              </h2>
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-bnb-wood">
                {String(category.images.length).padStart(2, '0')} photos
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {category.images.map((image, index) => (
                <ImageDialog
                  key={image.id}
                  image={image}
                  priority={index === 0}
                  className="aspect-[4/3]"
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
