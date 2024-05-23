import { useState, Fragment } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { ICharacter, IWorld } from "../../types";

export default function World({
  title,
  history,
  characters,
  ais,
  initialWorldInfoVisible = false,
}: IWorld) {
  const [isWorldInfoVisible, setIsWorldInfoVisible] = useState(
    initialWorldInfoVisible
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter | null>(
    null
  );

  const toggleWorldInfoVisibility = () => {
    setIsWorldInfoVisible(!isWorldInfoVisible);
  };

  const openModal = (character: ICharacter) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatImageUrl = (imageUrl: string) => {
    if (imageUrl.startsWith('data:image')) {
      return imageUrl;
    }
    if (imageUrl.includes('jpeg')) {
      return `data:image/jpeg;base64,${imageUrl}`;
    }
    if (imageUrl.includes('jpg')) {
      return `data:image/jpg;base64,${imageUrl}`;
    }
    if (imageUrl.includes('gif')) {
      return `data:image/gif;base64,${imageUrl}`;
    }
    // Default to jpeg if no format is specified
    return `data:image/jpeg;base64,${imageUrl}`;
  };

  return (
    <div className="py-4 sm:py-8">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
              {characters.map((character) => (
                <div
                  key={character.name}
                  className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() => openModal(character)}
                >
                  <img
                    src={formatImageUrl(character.imageUrl)}
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
            <h2 className="text-xl font-semibold mb-6 text-black">
              AIs used in this world
            </h2>
            <div>
              {ais.map((ai) => (
                <div key={ai.name} className="mb-4">
                  <h3 className="text-lg font-semibold text-black">
                    {ai.name}
                  </h3>
                  <p className="text-gray-600">
                    {"> "}
                    {ai.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {selectedCharacter?.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <img
                      src={formatImageUrl(selectedCharacter?.imageUrl || '')}
                      alt={selectedCharacter?.name || ''}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    {selectedCharacter?.background && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          Background
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.background}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.race && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">Race</h4>
                        <p className="text-gray-600">
                          {selectedCharacter.race}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.char_class && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">Class</h4>
                        <p className="text-gray-600">
                          {selectedCharacter.char_class}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.realm && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">Realm</h4>
                        <p className="text-gray-600">
                          {selectedCharacter.realm}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.appearance && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          Appearance
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.appearance}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.personality && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          Personality
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.personality}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.strengths && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          Strengths
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.strengths}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.weaknesses && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          Weaknesses
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.weaknesses}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
