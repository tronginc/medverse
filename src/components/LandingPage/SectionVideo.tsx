export default function SectionVideo() {
  return (
    <>
      <section id="video" className="aspect-video w-full object-cover min-h-[620px]">
        <video muted playsInline autoPlay loop className="object-cover w-full h-full">
          <source src="/assets/landing/intro.webm" type="video/webm" />
          <source src="/assets/landing/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
}
