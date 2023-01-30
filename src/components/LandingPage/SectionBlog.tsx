import Container from "../CommonUI/Container";
import H2 from "../CommonUI/H2";

const posts = [
  {
    title: "QuizZone 2.0 | Season 3",
    image: "quizzone-2.0-season-3.jpg",
    likes: 4,
  },
  {
    title: "The Oocca Club | Squawking Party Month 2023",
    image: "the-oocca-club-squawking-party-month-2023.jpg",
    likes: 15,
  },
  {
    title: "EVOLVE techno w/ FUNK D'VOID @ SUGARCLUB",
    image: "evolve-techno-w-funk-d-void-sugarclub.jpg",
    likes: 8,
  },
  {
    title: "SATURDAYS with THE DOC! | The Musical Doc - LIVE @ TRU Band...",
    image: "saturdays-with-the-doc-the-musical-doc-live-tru-band.jpg",
    likes: 43,
  },
];

export default function SectionBlog() {
  return (
    <Container className="py-[56px] inset-0 px-[40px] lg:px-[122px]">
      <H2>Can&apos;t decide where to start?</H2>
      <div className="py-8 flex justify-between">
        <div className="flex gap-3.5">
          <div className="rounded-full text-white py-1 px-3 text-[13px] bg-[#2C79E1]">
            UPCOMING EVENTS
          </div>
          <div className="rounded-full py-1 px-3 text-[13px] bg-[#676370]/80 text-[#676370]">
            POINT OF INTEREST
          </div>
        </div>
        <button className="rounded-full py-1 px-3 text-[13px] text-[#2C79E1] gap-x-2 flex items-center font-medium">
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
    </Container>
  );
}
