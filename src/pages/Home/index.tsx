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
    </DefaultPage>
  );
}
