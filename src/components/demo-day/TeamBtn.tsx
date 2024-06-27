"use client";
import { useAtom } from "jotai";
import { teamAtom } from "@/store/store";
import CandBtnTemplate from "@/components/common/CandBtnTemplate";

interface TeamBtnProps {
  index: number;
  team: string;
  description: string;
}
const TeamBtn = ({ index, team, description }: TeamBtnProps) => {
  const [teamValue, setTeamValue] = useAtom(teamAtom);

  const handleClick = () => {
    setTeamValue(team);
  };

  const isSecondLast = index === 3;
  const lastLineClass = isSecondLast ? "col-start-2 col-end-4" : "";

  return (
    <CandBtnTemplate
      sizeVariant="team"
      clickVariant={teamValue === team}
      onClick={handleClick}
      lastLineClass={lastLineClass}
    >
      <h2 className="text-20pxr font-bold">{team}</h2>
      <h3 className="text-11pxr">{description}</h3>
    </CandBtnTemplate>
  );
};

export default TeamBtn;
