import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface Character {
  name: string;
  description: string;
  imageUrl: string;
}

export interface WorldProps {
  title: string;
  history: string;
  characters: Character[];
  initialWorldInfoVisible?: boolean;
}

export default function World({
  title,
  history,
  characters,
  initialWorldInfoVisible = false,
}: WorldProps) {
  const [isWorldInfoVisible, setIsWorldInfoVisible] = useState(
    initialWorldInfoVisible
  );

  const toggleWorldInfoVisibility = () => {
    setIsWorldInfoVisible(!isWorldInfoVisible);
  };

  return (
    <div className="py-8 sm:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="flex items-center text-2xl font-bold mb-4 text-black cursor-pointer"
          onClick={toggleWorldInfoVisibility}
        >
          <span>{title}</span>
          {isWorldInfoVisible ? (
            <ChevronUpIcon className="w-6 h-6 ml-2" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 ml-2" />
          )}
        </div>
        {isWorldInfoVisible && (
          <div className="bg-white bg-opacity-50 shadow-md rounded-lg p-6">
            <p className="text-gray-600 mb-6">{history}</p>
            <h2 className="text-xl font-semibold mb-6 text-black">
              Character Previews
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {characters.map((character) => (
                <div
                  key={character.name}
                  className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={character.imageUrl}
                    alt={character.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-4 bg-gradient-to-r from-green-200 to-blue-200">
                    <h3 className="text-xl font-bold text-black">
                      {character.name}
                    </h3>
                    <p className="text-gray-600">{character.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
