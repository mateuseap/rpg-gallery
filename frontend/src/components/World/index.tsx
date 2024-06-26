import { useState, Fragment } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { ICharacter, IWorld } from "../../types";
import AtticusSoundTrack from "../../assets/soundtrack/valoria/atticus.mp3";
import CedricSoundTrack from "../../assets/soundtrack/valoria/cedric.mp3";
import ElaraSoundTrack from "../../assets/soundtrack/valoria/elara.mp3";
import SeraphinaSoundTrack from "../../assets/soundtrack/valoria/seraphina.mp3";
import DarianBackgroundNarrative from "../../assets/narratives/aetheris/darian.ogg";
import ElysiaBackgroundNarrative from "../../assets/narratives/aetheris/elysia.ogg";
import KaelenBackgroundNarrative from "../../assets/narratives/aetheris/kaelen.ogg";
import KorrakBackgroundNarrative from "../../assets/narratives/aetheris/korrak.ogg";
import LioraBackgroundNarrative from "../../assets/narratives/aetheris/liora.ogg";
import LysaraBackgroundNarrative from "../../assets/narratives/aetheris/lysara.ogg";
import RivenBackgroundNarrative from "../../assets/narratives/aetheris/riven.ogg";
import ThaliaBackgroundNarrative from "../../assets/narratives/aetheris/thalia.ogg";
import ThalorinBackgroundNarrative from "../../assets/narratives/aetheris/thalorin.ogg";

export default function World({
  language,
  title,
  history,
  characters,
  ais,
  initialWorldInfoVisible = false,
  externalLink,
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
    if (imageUrl.startsWith("data:image")) {
      return imageUrl;
    }
    if (imageUrl.includes("jpeg")) {
      return `data:image/jpeg;base64,${imageUrl}`;
    }
    if (imageUrl.includes("jpg")) {
      return `data:image/jpg;base64,${imageUrl}`;
    }
    if (imageUrl.includes("gif")) {
      return `data:image/gif;base64,${imageUrl}`;
    }

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
              {language == "en"
                ? "Character Previews"
                : "Prévias de Personagens"}
            </h2>
            <div className="flex flex-wrap -mx-4 mb-6">
              {characters.map((character) => (
                <div
                  key={character.name}
                  className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex"
                >
                  <div
                    className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col flex-grow"
                    onClick={() => openModal(character)}
                  >
                    <img
                      src={formatImageUrl(character.imageUrl)}
                      alt={character.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4 bg-gradient-to-r from-green-200 to-blue-200 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-black">
                        {character.name}
                      </h3>
                      <p className="text-gray-600 flex-grow">
                        {character.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {title == "Valoria" && (
              <>
                <h2 className="text-xl font-semibold mb-6 text-black">
                  {language == "en" ? "Soundtrack" : "Trilha Sonora"}
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Professor Atticus Gearheart - The Clockwork Inventor
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source src={AtticusSoundTrack} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Lord Cedric Thorne - The Aristocratic Alchemist
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source src={CedricSoundTrack} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Elara Voss - The Aeronaut Adventurer
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source src={ElaraSoundTrack} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Seraphina Blackwood - The Rogue Mechanic
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source src={SeraphinaSoundTrack} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </>
            )}
            {title == "Aetheris" && (
              <>
                <h2 className="text-xl font-semibold mb-6 text-black">
                  {language === "en"
                    ? "Background Narratives"
                    : "Narrativas de Fundo"}
                </h2>
                <div className="space-y-6">
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Darian Blackthorn's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source
                        src={DarianBackgroundNarrative}
                        type="audio/ogg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Elysia Stormrider's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source
                        src={ElysiaBackgroundNarrative}
                        type="audio/ogg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Kaelen Ironfist's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source
                        src={KaelenBackgroundNarrative}
                        type="audio/ogg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Korrak Stonebreaker's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source
                        src={KorrakBackgroundNarrative}
                        type="audio/ogg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Liora Starflare's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source src={LioraBackgroundNarrative} type="audio/ogg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Lysara Starweaver's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source
                        src={LysaraBackgroundNarrative}
                        type="audio/ogg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Riven Emberforge's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source src={RivenBackgroundNarrative} type="audio/ogg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Thalia Windwhisper's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source
                        src={ThaliaBackgroundNarrative}
                        type="audio/ogg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden p-4">
                    <h3 className="text-lg font-semibold text-white">
                      Thalorin Windrider's Narrative
                    </h3>
                    <audio controls className="w-full mt-2">
                      <source
                        src={ThalorinBackgroundNarrative}
                        type="audio/ogg"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </>
            )}
            <h2 className="mt-4 text-xl font-semibold mb-6 text-black">
              {language == "en"
                ? "AIs used in this world"
                : "IAs utilizadas neste mundo"}
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
            {externalLink && (
              <a
                href={externalLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-xl font-semibold mb-6 text-black"
              >
                {language == "en"
                  ? "See more about this world ↗"
                  : "Veja mais sobre este mundo ↗"}
              </a>
            )}
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
                      src={formatImageUrl(selectedCharacter?.imageUrl || "")}
                      alt={selectedCharacter?.name || ""}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    {selectedCharacter?.background && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Background" : "História"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.background}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.race && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Race" : "Raça"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.race}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.char_class && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Class" : "Classe"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.char_class}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.age && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Age" : "Idade"}
                        </h4>
                        <p className="text-gray-600">{selectedCharacter.age}</p>
                      </>
                    )}
                    {selectedCharacter?.height && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Height" : "Altura"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.height}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.weight && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Weight" : "Peso"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.weight}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.realm && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Realm" : "Reino"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.realm}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.domain && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Domain" : "Domínio"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.domain}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.appearance && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Appearance" : "Aparência"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.appearance}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.motivations && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Motivations" : "Motivações"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.motivations}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.objectives && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Objectives" : "Objetivos"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.objectives}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.habilities && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Habilities" : "Habilidades"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.habilities}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.personality && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Personality" : "Personalidade"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.personality}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.strengths && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Strengths" : "Forças"}
                        </h4>
                        <p className="text-gray-600">
                          {selectedCharacter.strengths}
                        </p>
                      </>
                    )}
                    {selectedCharacter?.weaknesses && (
                      <>
                        <h4 className="mt-4 text-lg font-semibold">
                          {language == "en" ? "Weaknesses" : "Fraquezas"}
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
                      {language == "en" ? "Close" : "Fechar"}
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
