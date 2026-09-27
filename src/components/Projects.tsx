import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, type Project } from '@/data/portfolio';
import { PROJECT_VISUALS } from './ProjectVisuals';

function Lightbox({
  image,
  title,
  onClose,
}: {
  image: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-ink-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors duration-200"
      >
        <X size={22} />
      </button>
      <img
        src={image}
        alt={title}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain rounded-xl border border-white/10 shadow-2xl animate-scale-in"
      />
    </div>
  );
}

function ImageCarousel({
  images,
  title,
  onImageClick,
}: {
  images: string[];
  title: string;
  onImageClick: (image: string, title: string) => void;
}) {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + images.length) % images.length);
    },
    [images.length],
  );

  const handleError = (index: number) => {
    setImgError((prev) => ({ ...prev, [index]: true }));
  };

  const hasValidImage = (index: number) => !imgError[index];

  return (
    <div className="absolute inset-0">
      {images.map((img, index) =>
        hasValidImage(index) ? (
          <img
            key={img}
            src={img}
            alt={`${title} screenshot ${index + 1}`}
            onError={() => handleError(index)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          />
        ) : null,
      )}

      {/* Click to zoom */}
      <button
        type="button"
        onClick={() => onImageClick(images[current], title)}
        className="absolute inset-0 w-full h-full cursor-zoom-in"
        aria-label={`View ${title} screenshot`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent pointer-events-none" />

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(current - 1);
            }}
            aria-label="Previous screenshot"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white flex items-center justify-center transition-colors duration-200"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(current + 1);
            }}
            aria-label="Next screenshot"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white flex items-center justify-center transition-colors duration-200"
          >
            <ChevronRight size={16} />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(index);
                }}
                aria-label={`Go to screenshot ${index + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-white w-4'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (image: string, title: string) => void;
}) {
  const Visual = PROJECT_VISUALS[project.visual];
  const isFeatured = project.featured;
  const hasImages = project.images && project.images.length > 0;

  return (
    <article
      className={`reveal group relative card-surface glow-border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500/20 ${
        isFeatured
          ? 'lg:grid lg:grid-cols-2 lg:gap-0'
          : ''
      }`}
      data-reveal-delay={index * 100}
    >
      {/* Visual / Image */}
      <div
        className={`relative overflow-hidden ${
          isFeatured ? 'lg:min-h-[420px] h-56 lg:h-auto' : 'h-48'
        }`}
      >
        {hasImages ? (
          <ImageCarousel
            images={project.images!}
            title={project.title}
            onImageClick={onImageClick}
          />
        ) : (
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            {Visual && <Visual />}
          </div>
        )}
        {/* Number badge */}
        <div className="absolute top-4 left-4 font-mono text-xs text-white/40 z-10">
          {project.num}
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 md:p-8 flex flex-col ${isFeatured ? 'lg:justify-center' : ''}`}>
        {project.subtitle && (
          <p className="text-xs font-mono uppercase tracking-wider text-accent-400/80">
            {project.subtitle}
          </p>
        )}
        <h3
          className={`mt-2 font-display font-bold text-white group-hover:text-accent-200 transition-colors duration-300 ${
            isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-gray-400 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag group-hover:border-accent-500/20 transition-colors duration-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent-300 transition-colors duration-300"
            >
              <Github size={16} /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent-300 transition-colors duration-300"
            >
              Live Demo
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

  return (
    <section id="projects" className="section-padding py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <span className="section-label">Projects</span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-white">
            Featured Projects
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-gray-400 leading-relaxed">
            Projects I've built while exploring software development, AI and real-world problem solving.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onImageClick={(image, title) => setLightbox({ image, title })}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          image={lightbox.image}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
