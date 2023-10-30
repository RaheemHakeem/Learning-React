import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ selectedTeam, employees, handleEmployeeCardClick }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      selectedTeam={selectedTeam}
      employee={employee}
      handleEmployeeCardClick={handleEmployeeCardClick}
    />
  ));
};
export default TeamMembers;
