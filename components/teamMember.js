import { teammember as TeamMemberType } from 'client';

interface TeamMemberProps {
  teammember: TeamMemberType;
}

export default function TeamMember({ teammember }: TeamMemberProps) {
  return (
    <div>
      <img
        src={teammember?.profilePic.mediaItemUrl}
        alt={teammember?.profilePic?.altText}
      />
      <h2>{teammember?.full_name}</h2>
      <div
        className="bio"
        dangerouslySetInnerHTML={{ __html: teammember?.bio }}
      />
    </div>
  );
}