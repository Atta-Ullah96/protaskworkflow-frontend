// src/pages/Manager/TeamManagement.jsx
import{ useEffect, useState } from 'react';
import {
  useCreateTeamMutation,
  useGetAllTeamsQuery,
  useGetTeamByIdQuery,
  useAddDeveloperToTeamMutation,
  useRemoveDeveloperFromTeamMutation,
} from '../../redux/api/teamApi';
import { useGetAllDevelopersQuery } from '../../redux/api/mangerapi';

const CreateTeam = () => {
  const [teamName, setTeamName] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState('');
  const [selectedDeveloper, setSelectedDeveloper] = useState('');

  const [createTeam] = useCreateTeamMutation();
  const [addDeveloperToTeam] = useAddDeveloperToTeamMutation();
  const [removeDeveloperFromTeam] = useRemoveDeveloperFromTeamMutation();
  const { data: teams = [], refetch: refetchTeams } = useGetAllTeamsQuery();
  
  
  const { data: developers = [] } = useGetAllDevelopersQuery();
 
  
  const { data: selectedTeam } = useGetTeamByIdQuery(selectedTeamId, { skip: !selectedTeamId });

  
    
  useEffect(() => {
    refetchTeams();
  }, []);

  const handleCreateTeam = async () => {
    if (!teamName) return;
    await createTeam({ name: teamName });
    setTeamName('');
    refetchTeams();
  };

  const handleAddDeveloper = async () => {
    if (!selectedTeamId || !selectedDeveloper) return;
    await addDeveloperToTeam({ teamId: selectedTeamId, developerId: selectedDeveloper });
    setSelectedDeveloper('');
    refetchTeams();
  };

  const handleRemoveDeveloper = async (devId) => {
    await removeDeveloperFromTeam({ teamId: selectedTeamId, developerId: devId });
    refetchTeams();
  };

  return (
    <div className="p-10 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Team Management</h2>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-1/3"
        />
        <button
          onClick={handleCreateTeam}
          className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Team
        </button>
      </div>

      <div className="mb-8">
        <label className="block mb-2 font-medium">Select a Team:</label>
        <select
          value={selectedTeamId}
          onChange={(e) => setSelectedTeamId(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded w-1/3"
        >
          <option value="">-- Select --</option>
          {teams?.map((team) => (
            <option key={team._id} value={team._id}>{team.name}</option>
          ))}
        </select>
      </div>

      {selectedTeamId && (
        <div className="mb-8">
          <label className="block mb-2 font-medium">Add Developer to Team:</label>
          <select
            value={selectedDeveloper}
            onChange={(e) => setSelectedDeveloper(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-1/3"
          >
            <option value="">-- Select Developer --</option>
            {developers?.map((dev) => (
              <option key={dev._id} value={dev._id}>{dev.name}</option>
            ))}
          </select>
          <button
            onClick={handleAddDeveloper}
            className="ml-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add to Team
          </button>
        </div>
      )}

      {selectedTeam?.developers?.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Team Members</h3>
          <ul className="space-y-2">
            {selectedTeam?.developers?.map((dev) => (
              <li key={dev._id} className="flex items-center justify-between border-b py-2">
                <span>{dev?.name}</span>
                <button
                  onClick={() => handleRemoveDeveloper(dev._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreateTeam;
