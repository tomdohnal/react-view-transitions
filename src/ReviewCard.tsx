import { ViewTransition } from "react";
import type { Review } from "./mockData";

interface ReviewCardProps {
  review: Review;
  onNameClick?: () => void;
  index?: number;
}

// Generate a background color based on index, ensuring adjacent items have different colors
function getAvatarColor(index: number): string {
  const colors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-rose-600",
    "bg-amber-600",
    "bg-indigo-600",
    "bg-pink-600",
    "bg-teal-600",
    "bg-orange-600",
    "bg-cyan-600",
  ];

  // Use index to cycle through colors, ensuring adjacent items are different
  // by using a pattern that guarantees no two consecutive indices get the same color
  return colors[index % colors.length];
}

export default function ReviewCard({
  review,
  onNameClick,
  index = 0,
}: ReviewCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <div>
        <div className="flex items-center mb-2">
          <span
            className={`flex mr-2 h-8 w-8 items-center justify-center rounded-full ${getAvatarColor(
              index
            )} text-sm font-bold text-white`}
          >
            <span>{review.avatarInitials}</span>
          </span>
          <ViewTransition name={`profile-name-${review.avatarInitials}`}>
            <span
              onClick={onNameClick}
              className="font-bold text-blue-400 cursor-pointer hover:text-blue-400"
            >
              {review.name}
            </span>
          </ViewTransition>
          <span className="text-sm text-gray-400 ml-2">• {review.date}</span>
        </div>
        <p className="text-gray-300">{review.text}</p>
      </div>
    </div>
  );
}
