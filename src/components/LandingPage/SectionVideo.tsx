export default function SectionVideo() {
  return (
    <>
      <section id="video" className="aspect-video w-full object-cover">
        <video muted playsInline autoPlay loop className="h-full w-full">
          <source src="/assets/landing/intro.webm" type="video/webm" />
          <source src="/assets/landing/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}
