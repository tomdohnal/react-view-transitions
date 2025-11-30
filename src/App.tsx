import {
  addTransitionType,
  startTransition,
  useState,
  ViewTransition,
} from "react";
import ReviewCard from "./ReviewCard";
import ProfileCard from "./ProfileCard";
import TabButton from "./TabButton";
import { reviews, images, profileData } from "./mockData";

function App() {
  const [currentTab, setCurrentTab] = useState<"reviews" | "photos" | null>(
    null
  );
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  // Helper function to map review name to profile key (e.g., "Alice Johnson" -> "alice")
  const getNameToProfileKey = (name: string): string => {
    const firstName = name.split(" ")[0].toLowerCase();
    return firstName;
  };

  const handleNameClick = (name: string) => {
    const profileKey = getNameToProfileKey(name);

    startTransition(() => {
      setSelectedProfile(profileKey);
    });
  };

  const handleShowDetailsClick = () => {
    startTransition(() => {
      setCurrentTab(currentTab ? null : "reviews");
    });
  };

  const createTabClickHandler = (tab: "reviews" | "photos") => () => {
    startTransition(() => {
      addTransitionType(`navigate-to-${tab}`);

      setCurrentTab(tab);
    });
  };

  const handleBackClick = () => {
    startTransition(() => {
      setSelectedProfile(null);
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button
        onClick={handleShowDetailsClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Details
      </button>

      <ViewTransition>
        <div className="mt-4">
          {currentTab && (
            <div className="flex border-b border-gray-700">
              <TabButton
                label="Reviews"
                isActive={currentTab === "reviews"}
                onClick={createTabClickHandler("reviews")}
              />
              <TabButton
                label="Photos"
                isActive={currentTab === "photos"}
                onClick={createTabClickHandler("photos")}
                className="ml-2"
              />
            </div>
          )}

          <div className="mt-4">
            <ViewTransition
              default={{
                "navigate-to-reviews": "slide-right",
                "navigate-to-photos": "slide-left",
              }}
            >
              {currentTab === "reviews" && (
                <div className="space-y-4">
                  {selectedProfile
                    ? profileData[selectedProfile] && (
                        <ProfileCard
                          profile={profileData[selectedProfile]}
                          onBack={handleBackClick}
                        />
                      )
                    : reviews.map((review, index) => (
                        <ReviewCard
                          key={index}
                          review={review}
                          index={index}
                          onNameClick={() => handleNameClick(review.name)}
                        />
                      ))}
                </div>
              )}

              {currentTab === "photos" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      className="w-full h-40 object-cover rounded-lg"
                      src={image.src}
                      alt={image.alt}
                    />
                  ))}
                </div>
              )}
            </ViewTransition>
          </div>
        </div>
      </ViewTransition>
    </div>
  );
}

export default App;
