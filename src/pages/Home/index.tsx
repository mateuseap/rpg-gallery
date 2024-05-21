import DefaultPage from "../../components/DefaultPage";
import World from "../../components/World";
import arionImageUrl from "../../assets/elaria/arion.jpg";
import thaliaImageUrl from "../../assets/elaria/thalia.jpg";
import kaelImageUrl from "../../assets/elaria/kael.jpg";

export default function Home() {
  const worlds = [
    {
      title: "Elaria - The Shattered Realms",
      history:
        "Elaria was once a unified world, a grand empire where magicflowed freely and technological marvels flourished. However, acataclysmic event known as the Shattering splintered the realminto floating islands and divided it into three distinctenvironments: the Arcane Spires, the Verdant Wilds, and theShadowlands. These realms hover in the sky, connected by ancientportals and traversable by airships.",
      characters: [
        {
          name: "Arion Valeran",
          description:
            "A brilliant technomancer hailing from the Arcane Spires, arealm where magic and technology intertwine.",
          imageUrl: arionImageUrl,
        },
        {
          name: "Thalia Greenshadow",
          description:
            "A devoted druid from the Verdant Wilds, a lush jungle teemingwith mystical life, she is a guardian of nature.",
          imageUrl: thaliaImageUrl,
        },
        {
          name: "Kael Blackthorn",
          description:
            "A disciplined shadow monk from the Shadowlands, a realmshrouded in perpetual twilight and haunted by restless spirits",
          imageUrl: kaelImageUrl,
        },
      ],
      initialWorldInfoVisible: true,
    },
  ];

  return (
    <DefaultPage>
      <main className="isolate sm:mb-8 mb-14 flex-grow">
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[48rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6ee7b7] to-[#3b82f6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[96rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-8 sm:py-14">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="lg:text-6xl text-4xl font-bold tracking-tight text-gray-900">
                  Welcome to RPG Gallery
                </h1>
                <p className="mt-8 lg:text-lg text-base text-gray-600">
                  A gallery of RPG worlds and characters made using artificial
                  intelligence!
                </p>
              </div>
            </div>
          </div>
          {worlds.map((world) => (
            <World key={world.title} {...world} />
          ))}
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[48rem] -translate-x-1/2 bg-gradient-to-tr from-[#6ee7b7] to-[#3b82f6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[96rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </main>
    </DefaultPage>
  );
}
