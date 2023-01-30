import Image from "next/image";
import Container from "../CommonUI/Container";
import H2 from "../CommonUI/H2";

const posts = [
  {
    title: "QuizZone 2.0 | Season 3",
    image: "/assets/landing/blog-quizzone-2.0-season-3.jpg",
    likes: 4,
  },
  {
    title: "The Oocca Club | Squawking Party Month 2023",
    image: "/assets/landing/blog-the-oocca-club-squawking-party-month-2023.jpg",
    likes: 15,
  },
  {
    title: "EVOLVE techno w/ FUNK D'VOID @ SUGARCLUB",
    image: "/assets/landing/blog-evolve-techno-w-funk-d-void-sugarclub.jpg",
    likes: 8,
  },
  {
    title: "SATURDAYS with THE DOC! | The Musical Doc - LIVE @ TRU Band...",
    image: "/assets/landing/blog-saturdays-with-the-doc-the-musical-doc-live-tru-band.jpg",
    likes: 43,
  },
];

export default function SectionBlog() {
  return (
    <section id="blog">
      <Container className="py-[56px] inset-0 px-[40px] lg:px-[122px]">
        <H2>Can&apos;t decide where to start?</H2>
        <div className="flex justify-between py-8">
          <div className="flex gap-3.5">
            <div className="rounded-full text-white py-1 px-3 text-[13px] bg-[#2C79E1] text-center">
              UPCOMING EVENTS
            </div>
            <div className="rounded-full py-1 px-3 text-[13px] bg-[#676370]/10 text-[#676370] text-center">
              POINT OF INTEREST
            </div>
          </div>
          <button className="rounded-full py-1 px-3 text-[13px] text-[#2C79E1] gap-x-2 flex items-center font-medium text-center">
            <span>MORE EVENTS</span>
            <svg
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 8L2.026 15.267C1.563 15.689 0.811 15.689 0.348 15.267C-0.116 14.844 -0.116 14.159 0.348 13.737L6.643 8L0.348 2.263C-0.116 1.841 -0.116 1.156 0.348 0.733004C0.811 0.311004 1.563 0.311004 2.026 0.733004L10 8Z"
                fill="#2C79E1"
              />
            </svg>
          </button>
        </div>
        <div className="relative grid gap-4 lg:px-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute -translate-y-1/2 top-1/2 -left-8">
            <svg
              width="16"
              height="27"
              viewBox="0 0 16 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.72205e-06 13.1562L12.758 25.6133C13.5 26.3372 14.702 26.3372 15.444 25.6133C16.185 24.8893 16.185 23.7153 15.444 22.9902L5.37201 13.1562L15.444 3.32225C16.185 2.59725 16.185 1.42325 15.444 0.69925C14.702 -0.02475 13.5 -0.02475 12.758 0.69925L5.72205e-06 13.1562Z"
                fill="#736E7D"
              />
            </svg>
          </div>
          <div className="absolute -translate-y-1/2 top-1/2 -right-8">
            <svg
              width="16"
              height="27"
              viewBox="0 0 16 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 13.1562L3.24199 25.6133C2.49999 26.3372 1.29799 26.3372 0.555994 25.6133C-0.185006 24.8893 -0.185006 23.7153 0.555994 22.9902L10.628 13.1562L0.555994 3.32225C-0.185006 2.59725 -0.185006 1.42325 0.555994 0.69925C1.29799 -0.02475 2.49999 -0.02475 3.24199 0.69925L16 13.1562Z"
                fill="#736E7D"
              />
            </svg>
          </div>
          {posts.map((post) => (
            <div
              className="relative flex flex-col gap-3 overflow-hidden rounded-lg"
              key={post.title}
            >
              <Image src={post.image} width={400} height={400} alt={post.title} />
              <div className="absolute inset-0 flex flex-col justify-between p-6 bg-black/50">
                <div className="bg-white rounded-xl text-[14px] self-end px-1.5 py-1 font-semibold">
                  +{post.likes}
                </div>
                <div className="text-white text-[18px] font-semibold">{post.title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto h-2.5 w-2.5 rounded-full mt-[26px] bg-[#2C79E1]"></div>
      </Container>
    </section>
  );
}
