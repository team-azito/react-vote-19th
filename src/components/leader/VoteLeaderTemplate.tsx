import LeaderBtn from "@/components/leader/LeaderBtn";

interface LeaderData {
  id: number;
  team: string;
  name: string;
  username: string;
}

interface VoteLeaderTemplateProps {
  data: LeaderData[];
}

const VoteLeaderTemplate = ({ data }: VoteLeaderTemplateProps) => {
  return (
    <div className="grid grid-cols-8 gap-30pxr py-30pxr">
      {data.map((element, index) => (
        <LeaderBtn key={element.id} index={index} team={element.team} name={element.name} username={element.username} />
      ))}
    </div>
  );
};

export default VoteLeaderTemplate;
