import type { Profile } from "./mockData";

interface ProfileCardProps {
  profile: Profile;
  onBack: () => void;
}

export default function ProfileCard({ profile, onBack }: ProfileCardProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 hover:text-blue-400 flex items-center"
      >
        ← Back to Reviews
      </button>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div>
          <div className="flex flex-col items-center mb-6">
            <div
              className={`flex h-32 w-32 items-center justify-center rounded-full text-5xl leading-tight font-bold text-white mb-4 ${profile.avatarColor}`}
            >
              <span>{profile.initials}</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Email:
              </span>
              <span className="ml-2 text-gray-300">{profile.email}</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Location:
              </span>
              <span className="ml-2 text-gray-300">{profile.location}</span>
            </div>
            <div>
              <span className="text-sm font-semibold text-gray-400">Bio:</span>
              <p className="mt-1 text-gray-300">{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
