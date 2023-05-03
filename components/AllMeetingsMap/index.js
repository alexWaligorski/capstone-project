import dynamic from "next/dynamic";

const OverviewMap = dynamic(() => import("./AllMeetingsMap"), {
  ssr: false,
});

export default OverviewMap;
